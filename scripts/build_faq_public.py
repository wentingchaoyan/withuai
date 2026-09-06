#!/usr/bin/env python3
"""HugMap 公開FAQページ（監修レビュー用・限定公開）の静的生成スクリプト（日英共通）。

使い方:
    SUPABASE_ANON_KEY=eyJ... FAQ_LANG=ja python3 scripts/build_faq_public.py   # 日本語版
    SUPABASE_ANON_KEY=eyJ... FAQ_LANG=en python3 scripts/build_faq_public.py   # 英語版

- Supabase の faq から指定言語のQ&A（language_code=FAQ_LANG、削除済み除外、origin != 'blog'）を取得。
- Q&A本文（question/answer）はDBの実データをそのまま使う（機械翻訳しない）。
- 分類は faq.faq_category_id -> faq_category(name_*_<lang>) を参照（二言語マスタが正）。
- デザイン/UI文言は scripts/faq_<lang>_template.html（新デザイン: グラデーションhero + kicker）に焼き込む。
- FAQ本文の正は Supabase。内容更新時はこのスクリプトを再実行して出力をコミットする。

環境変数:
  FAQ_LANG          : 'ja'（既定）| 'en'
  FAQ_OUTPUT        : 出力ファイル名（既定 hugmap_faq_public_v1[_en].html）
  FAQ_INCLUDE_PEER  : '1' で先輩保護者（peer_parent）を含める（jaのみ該当・既定は ja=1 / en=0）
  SUPABASE_URL      : 既定 dev
  FAQ_REUSE_EXISTING: '1' で既存出力の埋め込みデータを再利用（ローカルUI確認専用）
"""
import json, os, re, sys, urllib.request

SB = os.environ.get("SUPABASE_URL", "https://dltohjfxawjonomvxfsd.supabase.co")
KEY = os.environ.get("SUPABASE_ANON_KEY")

LANG = os.environ.get("FAQ_LANG", "ja")
if LANG not in ("ja", "en"):
    sys.exit("FAQ_LANG は ja / en のいずれか")

DEFAULT_OUT = "hugmap_faq_public_v1.html" if LANG == "ja" else "hugmap_faq_public_v1_en.html"
OUTFILE = os.environ.get("FAQ_OUTPUT", DEFAULT_OUT)
TEMPLATE = os.path.join(os.path.dirname(__file__), f"faq_{LANG}_template.html")
# DB認証情報なしでテンプレートだけを確認するためのプレビュー用。通常ビルドは必ずDBから取得する。
REUSE_EXISTING = os.environ.get("FAQ_REUSE_EXISTING", "0") == "1"
# 先輩保護者（体験談）は既定で ja のみ含める
INCLUDE_PEER = os.environ.get("FAQ_INCLUDE_PEER", "1" if LANG == "ja" else "0") == "1"

SELECT = ("faq_code,persona,question,answer,is_supervised,origin,source_urls,media_path,"
          f"faq_category(name_l1_{LANG},name_l2_{LANG},name_l3_{LANG})")
# INCLUDE_PEER のときは blog由来も一旦取得し、Python側で先輩保護者だけ残す
origin_clause = "" if INCLUDE_PEER else "&origin=neq.blog"
URL = (f"{SB}/rest/v1/faq?select={SELECT}"
       f"&is_deleted_flag=eq.false{origin_clause}&language_code=eq.{LANG}&limit=2000")

if REUSE_EXISTING:
    existing_path = os.path.join(os.path.dirname(__file__), "..", OUTFILE)
    try:
        with open(existing_path, encoding="utf-8") as f:
            existing_html = f.read()
        match = re.search(r"const DATA = (\[.*?\]);\s*const META", existing_html, re.S)
        if not match:
            sys.exit(f"既存の {OUTFILE} からFAQデータを読み取れませんでした")
        rows = json.loads(match.group(1))
        print(f"reused {len(rows)} {LANG} rows from existing {OUTFILE} (preview only)")
    except FileNotFoundError:
        sys.exit(f"既存の {OUTFILE} がありません")
else:
    if not KEY:
        sys.exit("SUPABASE_ANON_KEY を環境変数で指定してください")
    req = urllib.request.Request(URL, headers={"apikey": KEY, "Authorization": f"Bearer {KEY}"})
    rows = json.loads(urllib.request.urlopen(req).read().decode())
    print(f"fetched {len(rows)} {LANG} rows from {SB} (include_peer={INCLUDE_PEER})")

# blog由来（二次利用許諾が必要）は除外。ただし INCLUDE_PEER の場合のみ先輩保護者は残す。
if INCLUDE_PEER:
    rows = [r for r in rows if r.get("origin") != "blog" or r.get("persona") == "peer_parent"]
else:
    rows = [r for r in rows if r.get("origin") != "blog"]

for r in rows:
    if r.get("media_path"):
        r["media_url"] = f"{SB}/storage/v1/object/public/public-assets/faq_media/{r['media_path']}"
    r.pop("media_path", None)
    fc = r.pop("faq_category", None)
    if fc is not None:
        r["category_l1"] = fc.get(f"name_l1_{LANG}")
        r["category_l2"] = fc.get(f"name_l2_{LANG}")
        r["category_l3"] = fc.get(f"name_l3_{LANG}")

rows.sort(key=lambda r: (r.get("category_l1") or "", r.get("category_l2") or "",
                         r.get("category_l3") or "", r.get("faq_code") or ""))

DATA_JS = "const DATA = " + json.dumps(rows, ensure_ascii=False, separators=(",", ":")) + ";"

with open(TEMPLATE, encoding="utf-8") as f:
    tpl = f.read()
if "/*DATA_PLACEHOLDER*/" not in tpl:
    sys.exit(f"template placeholder /*DATA_PLACEHOLDER*/ not found in {TEMPLATE}")
html = tpl.replace("/*DATA_PLACEHOLDER*/", DATA_JS)

out = os.path.join(os.path.dirname(__file__), "..", OUTFILE)
with open(out, "w", encoding="utf-8") as f:
    f.write(html)
print(f"wrote {OUTFILE} ({len(rows)} Q&As, {len(html)//1024} KB)")
