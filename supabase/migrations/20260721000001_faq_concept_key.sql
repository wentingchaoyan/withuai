-- faq 多言語対応 Step 1: faq_code を「言語不変の概念ID」に変更する
--
-- 背景:
--   faq は language_code による行分割（row-per-language）方式だが、
--   UNIQUE(faq_code) が全体ユニークだったため ja と en の翻訳が同じ faq_code を共有できず、
--   翻訳のひも付けが origin の自由文にしか残っていなかった。
--
-- 本マイグレーション（非破壊）:
--   1. origin に "FAQ-Xxx" を持つ en 行（=ja原文の翻訳）を、そのソース faq_code に付け替える
--      → 同一概念の ja/en が同じ faq_code を共有する
--   2. UNIQUE(faq_code) を UNIQUE(faq_code, language_code) に張り替える
--   ※ 事前検証済み: 該当28行はソースと1:1、衝突なし、(src_code,'en') 重複なし

BEGIN;

-- 1. 先に旧 UNIQUE(faq_code) を外す（en を ja と同じコードに付け替えるため）
ALTER TABLE faq DROP CONSTRAINT faq_faq_code_key;

-- 2. 翻訳 en 行をソースの faq_code に統合し、翻訳ステータスを明示
UPDATE faq e
SET faq_code = (regexp_match(e.origin, 'FAQ-[A-Z][0-9]+'))[1],
    translation_status = 'translated'
WHERE e.language_code = 'en'
  AND e.is_deleted_flag = false
  AND e.origin ~ 'FAQ-[A-Z][0-9]+';

-- 3. faq_code を概念ID化（言語ごとに1行）
ALTER TABLE faq ADD CONSTRAINT faq_faq_code_lang_key UNIQUE (faq_code, language_code);

COMMIT;
