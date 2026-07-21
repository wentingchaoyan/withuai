-- faq 多言語対応 Step 2: 分類を二言語マスタ faq_category に正規化（非破壊・自動生成）
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
FROM jsonb_to_recordset($canon$[{"label":"監修データ","ja":"監修データ","en":"Reviewed Content"},{"label":"発達・学び","ja":"発達・学び","en":"Development & Learning"},{"label":"こころ・関わり","ja":"こころ・関わり","en":"Mind & Relationships"},{"label":"制度・進路","ja":"制度・進路","en":"Services & Pathways"},{"label":"健康・医療","ja":"健康・医療","en":"Health & Medical"},{"label":"生活場面FAQ","ja":"生活場面FAQ","en":"Scene-based FAQ"},{"label":"Scene-based FAQ","ja":"生活場面FAQ","en":"Scene-based FAQ"},{"label":"認知・遊び","ja":"認知・遊び","en":"Cognition & Play"},{"label":"社会性","ja":"社会性","en":"Social Skills"},{"label":"コミュニケーション","ja":"コミュニケーション","en":"Communication"},{"label":"Communication","ja":"コミュニケーション","en":"Communication"},{"label":"手先の発達","ja":"手先の発達","en":"Fine Motor Development"},{"label":"運動発達","ja":"運動発達","en":"Motor Development"},{"label":"ことば・コミュニケーション","ja":"ことば・コミュニケーション","en":"Speech & Communication"},{"label":"口腔・食べる・発音","ja":"口腔・食べる・発音","en":"Oral, Eating & Pronunciation"},{"label":"生活・自立","ja":"生活・自立","en":"Daily Life & Independence"},{"label":"発達マイルストーン","ja":"発達マイルストーン","en":"Developmental Milestones"},{"label":"読み書き","ja":"読み書き","en":"Reading & Writing"},{"label":"障害受容","ja":"障害受容","en":"Accepting the Diagnosis"},{"label":"身辺自立","ja":"身辺自立","en":"Self-Care Independence"},{"label":"感覚処理","ja":"感覚処理","en":"Sensory Processing"},{"label":"数・かず","ja":"数・かず","en":"Numbers & Counting"},{"label":"運動・からだ","ja":"運動・からだ","en":"Movement & Body"},{"label":"就学・進路","ja":"就学・進路","en":"Schooling & Pathways"},{"label":"インクルーシブ・環境設定","ja":"インクルーシブ・環境設定","en":"Inclusion & Environment"},{"label":"制度・手当","ja":"制度・手当","en":"Systems & Benefits"},{"label":"関わりの心構え","ja":"関わりの心構え","en":"Mindset for Engaging"},{"label":"発達の基礎","ja":"発達の基礎","en":"Development Basics"},{"label":"合併症・部位別の心配","ja":"合併症・部位別の心配","en":"Complications & Body-specific Concerns"},{"label":"周囲の理解・巻き込み","ja":"周囲の理解・巻き込み","en":"Understanding & Involving Others"},{"label":"普通の行動への疑問","ja":"普通の行動への疑問","en":"Questions About Everyday Behaviors"},{"label":"問題行動の解消法","ja":"問題行動の解消法","en":"Managing Challenging Behavior"},{"label":"療育・教育アプローチ","ja":"療育・教育アプローチ","en":"Therapy & Educational Approaches"},{"label":"家族の巻き込み","ja":"家族の巻き込み","en":"Involving Family"},{"label":"定期検査・スクリーニングの時期","ja":"定期検査・スクリーニングの時期","en":"Routine Check-ups & Screening Timing"},{"label":"受診の目安・全体像","ja":"受診の目安・全体像","en":"When to Seek Care & Overview"},{"label":"成長・思春期・成人・メンタル","ja":"成長・思春期・成人・メンタル","en":"Growth, Puberty, Adulthood & Mental Health"},{"label":"社会性・対人","ja":"社会性・対人","en":"Social & Emotional Development"},{"label":"Social and emotional development","ja":"社会性・対人","en":"Social & Emotional Development"},{"label":"支援者の巻き込み","ja":"支援者の巻き込み","en":"Involving Supporters"},{"label":"安全・防犯","ja":"安全・防犯","en":"Safety & Security"},{"label":"園・学校","ja":"園・学校","en":"Preschool & School"},{"label":"Preschool and school","ja":"園・学校","en":"Preschool & School"},{"label":"Daily living","ja":"日常生活","en":"Daily Living"},{"label":"Play and learning","ja":"遊び・学び","en":"Play & Learning"},{"label":"あそび方・興味","ja":"あそび方・興味","en":"How to Play & Interests"},{"label":"にぎる・つかむ・はなす","ja":"にぎる・つかむ・はなす","en":"Grasping, Holding & Releasing"},{"label":"食べる・飲む（摂食）","ja":"食べる・飲む（摂食）","en":"Eating & Drinking (Feeding)"},{"label":"気持ち・行動のコントロール","ja":"気持ち・行動のコントロール","en":"Managing Emotions & Behavior"},{"label":"形・色・パズル","ja":"形・色・パズル","en":"Shapes, Colors & Puzzles"},{"label":"発語を促す・前言語","ja":"発語を促す・前言語","en":"Encouraging Speech & Pre-verbal Skills"},{"label":"発音・滑舌・声","ja":"発音・滑舌・声","en":"Pronunciation, Articulation & Voice"},{"label":"ねんね・うつぶせ・ハイハイ","ja":"ねんね・うつぶせ・ハイハイ","en":"Lying, Tummy Time & Crawling"},{"label":"かず・もじの芽ばえ","ja":"かず・もじの芽ばえ","en":"Emerging Numbers & Letters"},{"label":"ことばの理解（指示・質問）","ja":"ことばの理解（指示・質問）","en":"Understanding Language (Instructions & Questions)"},{"label":"たっち・あんよ（立つ・歩く）","ja":"たっち・あんよ（立つ・歩く）","en":"Standing & Walking"},{"label":"覚える・見つける（記憶）","ja":"覚える・見つける（記憶）","en":"Remembering & Finding (Memory)"},{"label":"話す（ことば・文づくり）","ja":"話す（ことば・文づくり）","en":"Speaking (Words & Sentences)"},{"label":"道具を使う（クレヨン・ハサミ）","ja":"道具を使う（クレヨン・ハサミ）","en":"Using Tools (Crayons & Scissors)"},{"label":"笑顔・あやし・愛着","ja":"笑顔・あやし・愛着","en":"Smiling, Soothing & Attachment"},{"label":"指さし・ジェスチャー・真似","ja":"指さし・ジェスチャー・真似","en":"Pointing, Gestures & Imitation"},{"label":"身辺自立（トイレ・着替え・清潔）","ja":"身辺自立（トイレ・着替え・清潔）","en":"Self-Care (Toilet, Dressing & Hygiene)"},{"label":"入れる・積む・型はめ","ja":"入れる・積む・型はめ","en":"Putting In, Stacking & Shape Sorting"},{"label":"ことばの前（喃語・反応）","ja":"ことばの前（喃語・反応）","en":"Before Words (Babbling & Responses)"},{"label":"真似・指さし・共同注意","ja":"真似・指さし・共同注意","en":"Imitation, Pointing & Joint Attention"},{"label":"走る・ジャンプ・階段","ja":"走る・ジャンプ・階段","en":"Running, Jumping & Stairs"},{"label":"園・学校への相談・工夫","ja":"園・学校への相談・工夫","en":"Working with Daycare & School"},{"label":"目が合う・視線を追う","ja":"目が合う・視線を追う","en":"Eye Contact & Following Gaze"},{"label":"おすわり・姿勢","ja":"おすわり・姿勢","en":"Sitting & Posture"},{"label":"読み（文字習得）","ja":"読み（文字習得）","en":"Reading (Learning Letters)"},{"label":"育ちの土台・愛着・目標","ja":"育ちの土台・愛着・目標","en":"Foundations of Growth, Attachment & Goals"},{"label":"手帳・手当・サービスの使い方","ja":"手帳・手当・サービスの使い方","en":"Using Disability Certificates, Benefits & Services"},{"label":"理解・語彙・概念","ja":"理解・語彙・概念","en":"Comprehension, Vocabulary & Concepts"},{"label":"AAC・サイン・絵カード","ja":"AAC・サイン・絵カード","en":"AAC, Signs & Picture Cards"},{"label":"からだの土台（低緊張・足・くつ）","ja":"からだの土台（低緊張・足・くつ）","en":"Body Foundations (Low Tone, Feet & Shoes)"},{"label":"告知・気持ちの整理","ja":"告知・気持ちの整理","en":"Diagnosis & Processing Feelings"},{"label":"口の機能・よだれ・トレーニング","ja":"口の機能・よだれ・トレーニング","en":"Oral Function, Drooling & Training"},{"label":"幸せ・価値観","ja":"幸せ・価値観","en":"Happiness & Values"},{"label":"ねむり（寝つき・夜泣き・昼寝）","ja":"ねむり（寝つき・夜泣き・昼寝）","en":"Sleep (Settling, Night Waking, Naps)"},{"label":"学校の選び方（通常・支援級・支援学校）","ja":"学校の選び方（通常・支援級・支援学校）","en":"Choosing a School (Mainstream, Support Class, Special School)"},{"label":"文法・作文・語彙","ja":"文法・作文・語彙","en":"Grammar, Writing & Vocabulary"},{"label":"手先・道具の使い方","ja":"手先・道具の使い方","en":"Fine Motor & Using Tools"},{"label":"ルールのある遊び・勝ち負け","ja":"ルールのある遊び・勝ち負け","en":"Games with Rules & Winning/Losing"},{"label":"地域・自立生活（通学・お金・就労）","ja":"地域・自立生活（通学・お金・就労）","en":"Community & Independent Living (Commuting, Money, Work)"},{"label":"発達のペース・比べ方","ja":"発達のペース・比べ方","en":"Pace of Development & Comparing"},{"label":"着替え（ボタン・ファスナー）","ja":"着替え（ボタン・ファスナー）","en":"Dressing (Buttons & Zippers)"},{"label":"検査・相談・療育の始めどき","ja":"検査・相談・療育の始めどき","en":"Assessment, Support & When to Start Therapy"},{"label":"食事（スプーン・こぼす）","ja":"食事（スプーン・こぼす）","en":"Eating (Spoon & Spills)"},{"label":"敏感さ（音・さわる・偏食）","ja":"敏感さ（音・さわる・偏食）","en":"Sensitivity (Sound, Touch, Picky Eating)"},{"label":"音・声への反応","ja":"音・声への反応","en":"Responding to Sound & Voice"},{"label":"園・学校との連携・準備","ja":"園・学校との連携・準備","en":"Coordinating & Preparing with Daycare/School"},{"label":"鈍感さ・刺激あそび（回る・ぶつかる）","ja":"鈍感さ・刺激あそび（回る・ぶつかる）","en":"Under-responsiveness & Sensory Play (Spinning, Bumping)"},{"label":"数の土台・数量感覚","ja":"数の土台・数量感覚","en":"Number Foundations & Quantity Sense"},{"label":"生活の算数（お金・時計）","ja":"生活の算数（お金・時計）","en":"Everyday Math (Money & Clocks)"},{"label":"計算（＋−×÷）","ja":"計算（＋−×÷）","en":"Arithmetic (+ − × ÷)"},{"label":"書き（運筆・書字）","ja":"書き（運筆・書字）","en":"Writing (Pen Control & Handwriting)"},{"label":"感覚の基礎・遊び・相談","ja":"感覚の基礎・遊び・相談","en":"Sensory Basics, Play & Support"},{"label":"文法・文づくり","ja":"文法・文づくり","en":"Grammar & Sentence Building"},{"label":"考え方（合理的配慮・UDL）","ja":"考え方（合理的配慮・UDL）","en":"Mindset (Reasonable Accommodation & UDL)"},{"label":"トイレ","ja":"トイレ","en":"Toilet"},{"label":"親の生活・心の余裕","ja":"親の生活・心の余裕","en":"Parents' Life & Emotional Space"},{"label":"将来・親なきあと・住まい","ja":"将来・親なきあと・住まい","en":"The Future, Life After Parents & Housing"},{"label":"学びの土台・方針","ja":"学びの土台・方針","en":"Learning Foundations & Approach"},{"label":"姿勢・からだの土台","ja":"姿勢・からだの土台","en":"Posture & Body Foundations"},{"label":"ことば・聞こえ・発話の基礎","ja":"ことば・聞こえ・発話の基礎","en":"Language, Hearing & Speech Basics"},{"label":"自信・楽しむ","ja":"自信・楽しむ","en":"Confidence & Enjoyment"},{"label":"呼吸・発声","ja":"呼吸・発声","en":"Breathing & Voicing"},{"label":"習い事えらび","ja":"習い事えらび","en":"Choosing Activities & Lessons"},{"label":"要求を伝える","ja":"要求を伝える","en":"Expressing Wants and Needs"},{"label":"Expressing wants and needs","ja":"要求を伝える","en":"Expressing Wants and Needs"},{"label":"呼びかけ・話を聞く","ja":"呼びかけ・話を聞く","en":"Responding to Name and Listening"},{"label":"Responding to name and listening","ja":"呼びかけ・話を聞く","en":"Responding to Name and Listening"},{"label":"園でのコミュニケーション","ja":"園でのコミュニケーション","en":"Talking About Preschool"},{"label":"Talking about preschool","ja":"園でのコミュニケーション","en":"Talking About Preschool"},{"label":"食事・食卓","ja":"食事・食卓","en":"Meals and Sitting at the Table"},{"label":"Meals and sitting at the table","ja":"食事・食卓","en":"Meals and Sitting at the Table"},{"label":"朝の支度・生活習慣","ja":"朝の支度・生活習慣","en":"Morning Routines"},{"label":"Morning routines","ja":"朝の支度・生活習慣","en":"Morning Routines"},{"label":"園との連携","ja":"園との連携","en":"Working with Preschool"},{"label":"Working with preschool","ja":"園との連携","en":"Working with Preschool"},{"label":"気持ち・かんしゃく","ja":"気持ち・かんしゃく","en":"Big Feelings and Meltdowns"},{"label":"Big feelings and meltdowns","ja":"気持ち・かんしゃく","en":"Big Feelings and Meltdowns"},{"label":"見通し・切り替え","ja":"見通し・切り替え","en":"Predictability and Transitions"},{"label":"Predictability and transitions","ja":"見通し・切り替え","en":"Predictability and Transitions"},{"label":"きょうだい・順番","ja":"きょうだい・順番","en":"Siblings and Taking Turns"},{"label":"Siblings and taking turns","ja":"きょうだい・順番","en":"Siblings and Taking Turns"},{"label":"話の理解・行動への移行","ja":"話の理解・行動への移行","en":"Understanding and Starting an Action"},{"label":"Understanding and starting an action","ja":"話の理解・行動への移行","en":"Understanding and Starting an Action"},{"label":"Toileting","ja":"トイレ","en":"Toileting"},{"label":"Building vocabulary","ja":"語彙を増やす","en":"Building Vocabulary"},{"label":"Waiting, turns, and transitions","ja":"待つ・順番・切り替え","en":"Waiting, Turns, and Transitions"},{"label":"Shared attention and interaction","ja":"共同注意・やりとり","en":"Shared Attention and Interaction"},{"label":"Attention during play","ja":"遊びのなかの注目","en":"Attention During Play"},{"label":"Sensory play and interests","ja":"感覚あそび・興味","en":"Sensory Play and Interests"},{"label":"Before first words","ja":"はじめてのことばの前","en":"Before First Words"},{"label":"Pointing, gestures, and imitation","ja":"指さし・ジェスチャー・真似（生活場面）","en":"Pointing, Gestures, and Imitation"},{"label":"Expanding play","ja":"遊びを広げる","en":"Expanding Play"},{"label":"Conversation and answering questions","ja":"会話・質問に答える","en":"Conversation and Answering Questions"}]$canon$::jsonb)
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
