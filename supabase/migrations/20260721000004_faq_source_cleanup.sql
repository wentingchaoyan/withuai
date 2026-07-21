-- faq 出典クリーンアップ: 保護者向けFAQに不適切なソースを、検証済みの適切なソースへ置換
--
-- 監査で判明した3クラスタ（ja+en 両方を faq_code 単位で修正）:
--   1. AOTA トップページ https://www.aota.org/ … 具体文書を指さない空引用（48ja/47en）
--      → 感覚処理 = STAR Institute、その他 = AAP healthychildren（発達障害）
--   2. DSM入口 https://www.psychiatry.org/psychiatrists/practice/dsm … 臨床診断マニュアル（39ja/30en）
--      主に学習系に誤用 → DSE International（ダウン症児の読み/言語/数の指導）
--      問題行動の解消法のみ = AAP healthychildren
--   3. ASHA 成人dysarthria … 対象違い（2ja/2en）→ ASHA 小児 public/speech/development
--
-- 置換時、新URLが既に存在する行では重複を作らず旧URLを除去（array_remove）、
-- そうでなければ置換（array_replace）。順序は保持。

-- 1) ASHA 成人 dysarthria -> 小児 speech development
update faq t
set source_urls = case
    when 'https://www.asha.org/public/speech/development/' = any(t.source_urls)
      then array_remove(t.source_urls, 'https://www.asha.org/practice-portal/clinical-topics/dysarthria-in-adults/')
    else array_replace(t.source_urls, 'https://www.asha.org/practice-portal/clinical-topics/dysarthria-in-adults/', 'https://www.asha.org/public/speech/development/')
  end
where coalesce(t.is_deleted_flag,false)=false
  and 'https://www.asha.org/practice-portal/clinical-topics/dysarthria-in-adults/' = any(t.source_urls);

-- 2) DSM入口 -> DSE International（既定） / 問題行動は healthychildren
with m as (
  select f.faq_code,
    case when fc.name_l2_ja = '問題行動の解消法'
         then 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/default.aspx'
         else 'https://www.down-syndrome.org/' end as new_url
  from faq f join faq_category fc on fc.id = f.faq_category_id
  where coalesce(f.is_deleted_flag,false)=false
  group by f.faq_code, fc.name_l2_ja
)
update faq t
set source_urls = case
    when m.new_url = any(t.source_urls)
      then array_remove(t.source_urls, 'https://www.psychiatry.org/psychiatrists/practice/dsm')
    else array_replace(t.source_urls, 'https://www.psychiatry.org/psychiatrists/practice/dsm', m.new_url)
  end
from m
where t.faq_code = m.faq_code
  and coalesce(t.is_deleted_flag,false)=false
  and 'https://www.psychiatry.org/psychiatrists/practice/dsm' = any(t.source_urls);

-- 3) AOTA 空トップ -> 感覚処理=STAR / その他=healthychildren
with m as (
  select f.faq_code,
    case when fc.name_l2_ja = '感覚処理'
         then 'https://sensoryhealth.org/'
         else 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/default.aspx' end as new_url
  from faq f join faq_category fc on fc.id = f.faq_category_id
  where coalesce(f.is_deleted_flag,false)=false
  group by f.faq_code, fc.name_l2_ja
)
update faq t
set source_urls = case
    when m.new_url = any(t.source_urls)
      then array_remove(t.source_urls, 'https://www.aota.org/')
    else array_replace(t.source_urls, 'https://www.aota.org/', m.new_url)
  end
from m
where t.faq_code = m.faq_code
  and coalesce(t.is_deleted_flag,false)=false
  and 'https://www.aota.org/' = any(t.source_urls);
