#!/usr/bin/env node
/**
 * faq 多言語対応 Step 2 のマイグレーションSQLを生成する。
 *
 * 目的:
 *   faq に日本語直書きしていた分類 (category_l1/l2/l3) を、
 *   他マスタ (category/domain 等) と同じ二言語ペア列 (name_*_ja / name_*_en) を持つ
 *   専用マスタ faq_category に正規化し、faq からは faq_category_id (FK) で参照する。
 *
 * 方針（決定的・監査可能）:
 *   - CANON: 「保存されている分類ラベル文字列」→ [ja, en] の正準ペア。
 *   - 確信できる ja↔en の対（例: 生活場面FAQ↔Scene-based FAQ、10対10の生活場面FAQ l3）は
 *     両方を同じ正準ペアに割り当てて「1ノードに統合」する。
 *   - 対応が曖昧なものは統合せず、各ラベルに個別の正準ペアを与える（誤マージ回避）。
 *   - 生成SQLは非破壊: category_l1/l2/l3 は残したまま faq_category_id を追加してバックフィルする。
 */
const fs = require("fs");

// stored label -> [ja, en]。twin は同一ペアを割り当てて統合。
const CANON = {
  // ---- L1 ----
  "監修データ": ["監修データ", "Reviewed Content"],
  "発達・学び": ["発達・学び", "Development & Learning"],
  "こころ・関わり": ["こころ・関わり", "Mind & Relationships"],
  "制度・進路": ["制度・進路", "Services & Pathways"],
  "健康・医療": ["健康・医療", "Health & Medical"],
  "生活場面FAQ": ["生活場面FAQ", "Scene-based FAQ"],
  "Scene-based FAQ": ["生活場面FAQ", "Scene-based FAQ"],

  // ---- L2 ----
  "認知・遊び": ["認知・遊び", "Cognition & Play"],
  "社会性": ["社会性", "Social Skills"],
  "コミュニケーション": ["コミュニケーション", "Communication"],
  "Communication": ["コミュニケーション", "Communication"],
  "手先の発達": ["手先の発達", "Fine Motor Development"],
  "運動発達": ["運動発達", "Motor Development"],
  "ことば・コミュニケーション": ["ことば・コミュニケーション", "Speech & Communication"],
  "口腔・食べる・発音": ["口腔・食べる・発音", "Oral, Eating & Pronunciation"],
  "生活・自立": ["生活・自立", "Daily Life & Independence"],
  "発達マイルストーン": ["発達マイルストーン", "Developmental Milestones"],
  "読み書き": ["読み書き", "Reading & Writing"],
  "障害受容": ["障害受容", "Accepting the Diagnosis"],
  "身辺自立": ["身辺自立", "Self-Care Independence"],
  "感覚処理": ["感覚処理", "Sensory Processing"],
  "数・かず": ["数・かず", "Numbers & Counting"],
  "運動・からだ": ["運動・からだ", "Movement & Body"],
  "就学・進路": ["就学・進路", "Schooling & Pathways"],
  "インクルーシブ・環境設定": ["インクルーシブ・環境設定", "Inclusion & Environment"],
  "制度・手当": ["制度・手当", "Systems & Benefits"],
  "関わりの心構え": ["関わりの心構え", "Mindset for Engaging"],
  "発達の基礎": ["発達の基礎", "Development Basics"],
  "合併症・部位別の心配": ["合併症・部位別の心配", "Complications & Body-specific Concerns"],
  "周囲の理解・巻き込み": ["周囲の理解・巻き込み", "Understanding & Involving Others"],
  "普通の行動への疑問": ["普通の行動への疑問", "Questions About Everyday Behaviors"],
  "問題行動の解消法": ["問題行動の解消法", "Managing Challenging Behavior"],
  "療育・教育アプローチ": ["療育・教育アプローチ", "Therapy & Educational Approaches"],
  "家族の巻き込み": ["家族の巻き込み", "Involving Family"],
  "定期検査・スクリーニングの時期": ["定期検査・スクリーニングの時期", "Routine Check-ups & Screening Timing"],
  "受診の目安・全体像": ["受診の目安・全体像", "When to Seek Care & Overview"],
  "成長・思春期・成人・メンタル": ["成長・思春期・成人・メンタル", "Growth, Puberty, Adulthood & Mental Health"],
  "社会性・対人": ["社会性・対人", "Social & Emotional Development"],
  "Social and emotional development": ["社会性・対人", "Social & Emotional Development"],
  "支援者の巻き込み": ["支援者の巻き込み", "Involving Supporters"],
  "安全・防犯": ["安全・防犯", "Safety & Security"],
  "園・学校": ["園・学校", "Preschool & School"],
  "Preschool and school": ["園・学校", "Preschool & School"],
  "Daily living": ["日常生活", "Daily Living"],
  "Play and learning": ["遊び・学び", "Play & Learning"],

  // ---- L3 ----
  "あそび方・興味": ["あそび方・興味", "How to Play & Interests"],
  "にぎる・つかむ・はなす": ["にぎる・つかむ・はなす", "Grasping, Holding & Releasing"],
  "食べる・飲む（摂食）": ["食べる・飲む（摂食）", "Eating & Drinking (Feeding)"],
  "気持ち・行動のコントロール": ["気持ち・行動のコントロール", "Managing Emotions & Behavior"],
  "形・色・パズル": ["形・色・パズル", "Shapes, Colors & Puzzles"],
  "発語を促す・前言語": ["発語を促す・前言語", "Encouraging Speech & Pre-verbal Skills"],
  "発音・滑舌・声": ["発音・滑舌・声", "Pronunciation, Articulation & Voice"],
  "ねんね・うつぶせ・ハイハイ": ["ねんね・うつぶせ・ハイハイ", "Lying, Tummy Time & Crawling"],
  "かず・もじの芽ばえ": ["かず・もじの芽ばえ", "Emerging Numbers & Letters"],
  "ことばの理解（指示・質問）": ["ことばの理解（指示・質問）", "Understanding Language (Instructions & Questions)"],
  "たっち・あんよ（立つ・歩く）": ["たっち・あんよ（立つ・歩く）", "Standing & Walking"],
  "覚える・見つける（記憶）": ["覚える・見つける（記憶）", "Remembering & Finding (Memory)"],
  "話す（ことば・文づくり）": ["話す（ことば・文づくり）", "Speaking (Words & Sentences)"],
  "道具を使う（クレヨン・ハサミ）": ["道具を使う（クレヨン・ハサミ）", "Using Tools (Crayons & Scissors)"],
  "笑顔・あやし・愛着": ["笑顔・あやし・愛着", "Smiling, Soothing & Attachment"],
  "指さし・ジェスチャー・真似": ["指さし・ジェスチャー・真似", "Pointing, Gestures & Imitation"],
  "身辺自立（トイレ・着替え・清潔）": ["身辺自立（トイレ・着替え・清潔）", "Self-Care (Toilet, Dressing & Hygiene)"],
  "入れる・積む・型はめ": ["入れる・積む・型はめ", "Putting In, Stacking & Shape Sorting"],
  "ことばの前（喃語・反応）": ["ことばの前（喃語・反応）", "Before Words (Babbling & Responses)"],
  "真似・指さし・共同注意": ["真似・指さし・共同注意", "Imitation, Pointing & Joint Attention"],
  "走る・ジャンプ・階段": ["走る・ジャンプ・階段", "Running, Jumping & Stairs"],
  "園・学校への相談・工夫": ["園・学校への相談・工夫", "Working with Daycare & School"],
  "目が合う・視線を追う": ["目が合う・視線を追う", "Eye Contact & Following Gaze"],
  "おすわり・姿勢": ["おすわり・姿勢", "Sitting & Posture"],
  "読み（文字習得）": ["読み（文字習得）", "Reading (Learning Letters)"],
  "育ちの土台・愛着・目標": ["育ちの土台・愛着・目標", "Foundations of Growth, Attachment & Goals"],
  "手帳・手当・サービスの使い方": ["手帳・手当・サービスの使い方", "Using Disability Certificates, Benefits & Services"],
  "理解・語彙・概念": ["理解・語彙・概念", "Comprehension, Vocabulary & Concepts"],
  "AAC・サイン・絵カード": ["AAC・サイン・絵カード", "AAC, Signs & Picture Cards"],
  "からだの土台（低緊張・足・くつ）": ["からだの土台（低緊張・足・くつ）", "Body Foundations (Low Tone, Feet & Shoes)"],
  "告知・気持ちの整理": ["告知・気持ちの整理", "Diagnosis & Processing Feelings"],
  "口の機能・よだれ・トレーニング": ["口の機能・よだれ・トレーニング", "Oral Function, Drooling & Training"],
  "幸せ・価値観": ["幸せ・価値観", "Happiness & Values"],
  "ねむり（寝つき・夜泣き・昼寝）": ["ねむり（寝つき・夜泣き・昼寝）", "Sleep (Settling, Night Waking, Naps)"],
  "学校の選び方（通常・支援級・支援学校）": ["学校の選び方（通常・支援級・支援学校）", "Choosing a School (Mainstream, Support Class, Special School)"],
  "文法・作文・語彙": ["文法・作文・語彙", "Grammar, Writing & Vocabulary"],
  "手先・道具の使い方": ["手先・道具の使い方", "Fine Motor & Using Tools"],
  "ルールのある遊び・勝ち負け": ["ルールのある遊び・勝ち負け", "Games with Rules & Winning/Losing"],
  "地域・自立生活（通学・お金・就労）": ["地域・自立生活（通学・お金・就労）", "Community & Independent Living (Commuting, Money, Work)"],
  "発達のペース・比べ方": ["発達のペース・比べ方", "Pace of Development & Comparing"],
  "着替え（ボタン・ファスナー）": ["着替え（ボタン・ファスナー）", "Dressing (Buttons & Zippers)"],
  "検査・相談・療育の始めどき": ["検査・相談・療育の始めどき", "Assessment, Support & When to Start Therapy"],
  "食事（スプーン・こぼす）": ["食事（スプーン・こぼす）", "Eating (Spoon & Spills)"],
  "敏感さ（音・さわる・偏食）": ["敏感さ（音・さわる・偏食）", "Sensitivity (Sound, Touch, Picky Eating)"],
  "音・声への反応": ["音・声への反応", "Responding to Sound & Voice"],
  "園・学校との連携・準備": ["園・学校との連携・準備", "Coordinating & Preparing with Daycare/School"],
  "鈍感さ・刺激あそび（回る・ぶつかる）": ["鈍感さ・刺激あそび（回る・ぶつかる）", "Under-responsiveness & Sensory Play (Spinning, Bumping)"],
  "数の土台・数量感覚": ["数の土台・数量感覚", "Number Foundations & Quantity Sense"],
  "生活の算数（お金・時計）": ["生活の算数（お金・時計）", "Everyday Math (Money & Clocks)"],
  "計算（＋−×÷）": ["計算（＋−×÷）", "Arithmetic (+ − × ÷)"],
  "書き（運筆・書字）": ["書き（運筆・書字）", "Writing (Pen Control & Handwriting)"],
  "感覚の基礎・遊び・相談": ["感覚の基礎・遊び・相談", "Sensory Basics, Play & Support"],
  "文法・文づくり": ["文法・文づくり", "Grammar & Sentence Building"],
  "考え方（合理的配慮・UDL）": ["考え方（合理的配慮・UDL）", "Mindset (Reasonable Accommodation & UDL)"],
  "トイレ": ["トイレ", "Toilet"],
  "親の生活・心の余裕": ["親の生活・心の余裕", "Parents' Life & Emotional Space"],
  "将来・親なきあと・住まい": ["将来・親なきあと・住まい", "The Future, Life After Parents & Housing"],
  "学びの土台・方針": ["学びの土台・方針", "Learning Foundations & Approach"],
  "姿勢・からだの土台": ["姿勢・からだの土台", "Posture & Body Foundations"],
  "ことば・聞こえ・発話の基礎": ["ことば・聞こえ・発話の基礎", "Language, Hearing & Speech Basics"],
  "自信・楽しむ": ["自信・楽しむ", "Confidence & Enjoyment"],
  "呼吸・発声": ["呼吸・発声", "Breathing & Voicing"],
  "習い事えらび": ["習い事えらび", "Choosing Activities & Lessons"],
  // 生活場面FAQ の l3（10対10で ja↔en を統合）
  "要求を伝える": ["要求を伝える", "Expressing Wants and Needs"],
  "Expressing wants and needs": ["要求を伝える", "Expressing Wants and Needs"],
  "呼びかけ・話を聞く": ["呼びかけ・話を聞く", "Responding to Name and Listening"],
  "Responding to name and listening": ["呼びかけ・話を聞く", "Responding to Name and Listening"],
  "園でのコミュニケーション": ["園でのコミュニケーション", "Talking About Preschool"],
  "Talking about preschool": ["園でのコミュニケーション", "Talking About Preschool"],
  "食事・食卓": ["食事・食卓", "Meals and Sitting at the Table"],
  "Meals and sitting at the table": ["食事・食卓", "Meals and Sitting at the Table"],
  "朝の支度・生活習慣": ["朝の支度・生活習慣", "Morning Routines"],
  "Morning routines": ["朝の支度・生活習慣", "Morning Routines"],
  "園との連携": ["園との連携", "Working with Preschool"],
  "Working with preschool": ["園との連携", "Working with Preschool"],
  "気持ち・かんしゃく": ["気持ち・かんしゃく", "Big Feelings and Meltdowns"],
  "Big feelings and meltdowns": ["気持ち・かんしゃく", "Big Feelings and Meltdowns"],
  "見通し・切り替え": ["見通し・切り替え", "Predictability and Transitions"],
  "Predictability and transitions": ["見通し・切り替え", "Predictability and Transitions"],
  "きょうだい・順番": ["きょうだい・順番", "Siblings and Taking Turns"],
  "Siblings and taking turns": ["きょうだい・順番", "Siblings and Taking Turns"],
  "話の理解・行動への移行": ["話の理解・行動への移行", "Understanding and Starting an Action"],
  "Understanding and starting an action": ["話の理解・行動への移行", "Understanding and Starting an Action"],
  // 監修データ の英語 l3（ja対応が曖昧なため統合せず個別付与）
  "Toileting": ["トイレ", "Toileting"],
  "Building vocabulary": ["語彙を増やす", "Building Vocabulary"],
  "Waiting, turns, and transitions": ["待つ・順番・切り替え", "Waiting, Turns, and Transitions"],
  "Shared attention and interaction": ["共同注意・やりとり", "Shared Attention and Interaction"],
  "Attention during play": ["遊びのなかの注目", "Attention During Play"],
  "Sensory play and interests": ["感覚あそび・興味", "Sensory Play and Interests"],
  "Before first words": ["はじめてのことばの前", "Before First Words"],
  "Pointing, gestures, and imitation": ["指さし・ジェスチャー・真似（生活場面）", "Pointing, Gestures, and Imitation"],
  "Expanding play": ["遊びを広げる", "Expanding Play"],
  "Conversation and answering questions": ["会話・質問に答える", "Conversation and Answering Questions"],
};

const canonJson = JSON.stringify(
  Object.entries(CANON).map(([label, [ja, en]]) => ({ label, ja, en }))
);

const sql = `-- faq 多言語対応 Step 2: 分類を二言語マスタ faq_category に正規化（非破壊・自動生成）
-- 生成元: scripts/gen_faq_category_migration.js（CANON 辞書）

BEGIN;

-- 1) 二言語マスタ（他マスタと同じ _ja/_en ペア列方式）
CREATE TABLE IF NOT EXISTS faq_category (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_l1_ja    text,
  name_l1_en    text,
  name_l2_ja    text,
  name_l2_en    text,
  name_l3_ja    text,
  name_l3_en    text,
  order_id      bigint,
  is_deleted_flag boolean DEFAULT false,
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz DEFAULT now()
);

-- 2) ラベル→[ja,en] 正準ペア（監査可能な辞書。CANON を JSON で搬送）
CREATE TEMP TABLE _canon (label text PRIMARY KEY, ja text, en text) ON COMMIT DROP;
INSERT INTO _canon (label, ja, en)
SELECT label, ja, en
FROM jsonb_to_recordset($canon$${canonJson}$canon$::jsonb)
  AS t(label text, ja text, en text);

-- 3) faq 各行の保存パスを正準ペアに写像
CREATE TEMP TABLE _faq_path ON COMMIT DROP AS
SELECT f.id AS faq_id,
       m1.ja AS l1_ja, m1.en AS l1_en,
       m2.ja AS l2_ja, m2.en AS l2_en,
       m3.ja AS l3_ja, m3.en AS l3_en,
       f.order_id
FROM faq f
LEFT JOIN _canon m1 ON m1.label = f.category_l1
LEFT JOIN _canon m2 ON m2.label = f.category_l2
LEFT JOIN _canon m3 ON m3.label = f.category_l3
WHERE f.is_deleted_flag = false;

-- 未対応ラベルがあれば停止（翻訳漏れ検出）
DO $$
DECLARE bad int;
BEGIN
  SELECT count(*) INTO bad FROM faq f
   WHERE f.is_deleted_flag = false
     AND ( (f.category_l1 IS NOT NULL AND NOT EXISTS (SELECT 1 FROM _canon c WHERE c.label=f.category_l1))
        OR (f.category_l2 IS NOT NULL AND NOT EXISTS (SELECT 1 FROM _canon c WHERE c.label=f.category_l2))
        OR (f.category_l3 IS NOT NULL AND NOT EXISTS (SELECT 1 FROM _canon c WHERE c.label=f.category_l3)) );
  IF bad > 0 THEN
    RAISE EXCEPTION 'CANON 辞書に未対応の分類ラベルが % 件あります', bad;
  END IF;
END $$;

-- 4) 二言語マスタを distinct パスから構築
INSERT INTO faq_category (name_l1_ja,name_l1_en,name_l2_ja,name_l2_en,name_l3_ja,name_l3_en,order_id)
SELECT DISTINCT l1_ja,l1_en,l2_ja,l2_en,l3_ja,l3_en,
       min(order_id) OVER (PARTITION BY l1_ja,l1_en,l2_ja,l2_en,l3_ja,l3_en)
FROM _faq_path;

-- 5) faq に FK 列を追加
ALTER TABLE faq ADD COLUMN IF NOT EXISTS faq_category_id uuid REFERENCES faq_category(id);

-- 6) バックフィル（写像後パスで一致）
UPDATE faq f
SET faq_category_id = fc.id
FROM _faq_path p
JOIN faq_category fc
  ON fc.name_l1_ja IS NOT DISTINCT FROM p.l1_ja
 AND fc.name_l1_en IS NOT DISTINCT FROM p.l1_en
 AND fc.name_l2_ja IS NOT DISTINCT FROM p.l2_ja
 AND fc.name_l2_en IS NOT DISTINCT FROM p.l2_en
 AND fc.name_l3_ja IS NOT DISTINCT FROM p.l3_ja
 AND fc.name_l3_en IS NOT DISTINCT FROM p.l3_en
WHERE f.id = p.faq_id;

-- 7) 検証: 分類のある非削除行はすべて FK が付くこと
DO $$
DECLARE miss int; jp_en int;
BEGIN
  SELECT count(*) INTO miss FROM faq
   WHERE is_deleted_flag=false AND category_l1 IS NOT NULL AND faq_category_id IS NULL;
  IF miss > 0 THEN RAISE EXCEPTION 'faq_category_id 未設定の行が % 件', miss; END IF;

  SELECT count(*) INTO jp_en FROM faq_category
   WHERE (coalesce(name_l1_en,'')||coalesce(name_l2_en,'')||coalesce(name_l3_en,'')) ~ '[぀-ヿ一-鿿]';
  IF jp_en > 0 THEN RAISE EXCEPTION 'name_*_en に日本語が残る faq_category が % 件', jp_en; END IF;
END $$;

COMMIT;
`;

const out = "supabase/migrations/20260721000002_faq_category.sql";
fs.writeFileSync(out, sql);
console.log("labels in CANON:", Object.keys(CANON).length);
console.log("wrote", out, "(" + Math.round(sql.length / 1024) + " KB)");
