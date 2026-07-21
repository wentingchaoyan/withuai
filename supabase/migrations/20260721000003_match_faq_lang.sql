-- faq 多言語対応 Step 3: 意味検索 match_faq に言語パラメータを追加
--
-- 従来 match_faq(vector, int) は language_code='ja' 固定で、英語対象者に英語結果を返せなかった。
-- lang パラメータ（既定 'ja'）を追加して言語別に絞り込めるようにする。
-- 既存の2引数呼び出しは lang='ja' 既定で従来と同一挙動（後方互換）。

drop function if exists public.match_faq(vector, integer);

create or replace function public.match_faq(
  query_embedding vector,
  match_count integer default 5,
  lang text default 'ja'
)
returns table(faq_code text, question text, domain text, similarity double precision)
language sql
stable
as $$
  select f.faq_code, f.question, f.domain, 1 - (f.embedding <=> query_embedding) as similarity
  from faq f
  where f.embedding is not null
    and f.language_code = lang
    and coalesce(f.is_deleted_flag, false) = false
  order by f.embedding <=> query_embedding
  limit match_count;
$$;
