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
import datetime, html as html_lib, json, os, re, sys, urllib.parse, urllib.request
from pathlib import Path

SB = os.environ.get("SUPABASE_URL", "https://dltohjfxawjonomvxfsd.supabase.co")
SITE_URL = os.environ.get("SITE_URL", "https://withuai.com").rstrip("/")
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


def plain_text(value):
    """Meta description用にMarkdown記号と改行を落とす。"""
    return re.sub(r"\s+", " ", re.sub(r"\*\*", "", value or "")).strip()


def answer_html(value):
    escaped = html_lib.escape(value or "")
    escaped = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", escaped)
    return "<br>".join(escaped.splitlines())


def faq_path(lang, code):
    filename = f"{code.lower()}.html"
    return f"faq/{filename}" if lang == "ja" else f"en/faq/{filename}"


def existing_translation_codes(lang):
    other_output = "hugmap_faq_public_v1_en.html" if lang == "ja" else "hugmap_faq_public_v1.html"
    other_path = Path(__file__).resolve().parent.parent / other_output
    if not other_path.exists():
        return set()
    match = re.search(r"const DATA = (\[.*?\]);\s*const META", other_path.read_text(encoding="utf-8"), re.S)
    if not match:
        return set()
    return {r.get("faq_code") for r in json.loads(match.group(1)) if r.get("faq_code")}


def build_faq_detail(row, lang, has_translation):
    is_ja = lang == "ja"
    code = row.get("faq_code") or "faq"
    question = plain_text(row.get("question"))
    answer = row.get("answer") or ""
    description = plain_text(answer)[:155]
    canonical_path = faq_path(lang, code)
    canonical = f"{SITE_URL}/{canonical_path}"
    asset_prefix = "../assets" if is_ja else "../../assets"
    index_href = "../hugmap_faq_public_v1.html" if is_ja else "../../hugmap_faq_public_v1_en.html"
    other_lang = "en" if is_ja else "ja"
    alternate = f"{SITE_URL}/{faq_path(other_lang, code)}" if has_translation else ""
    category = row.get("category_l3") or row.get("category_l2") or row.get("category_l1") or ("発達・子育て" if is_ja else "Development & parenting")
    supervised = bool(row.get("is_supervised"))
    status = ("専門職監修" if supervised else "専門機関の公開情報を参照") if is_ja else ("Specialist reviewed" if supervised else "Based on public professional guidance")
    sources = []
    for source in (row.get("source_urls") or [])[:5]:
        try:
            label = re.sub(r"^www\.", "", urllib.parse.urlparse(source).hostname or source)
        except Exception:
            label = source
        sources.append(f'<a href="{html_lib.escape(source, quote=True)}" rel="noopener noreferrer" target="_blank">{html_lib.escape(label)}</a>')
    source_html = " · ".join(sources) if sources else ("ページ内に記載された監修情報に基づきます" if is_ja else "See the review information on this page")
    faq_schema = {
        "@context": "https://schema.org",
        "@graph": [
            {"@type": "FAQPage", "@id": canonical + "#faq", "mainEntity": [{"@type": "Question", "name": question, "acceptedAnswer": {"@type": "Answer", "text": plain_text(answer)}}]},
            {"@type": "WebPage", "@id": canonical, "url": canonical, "name": question, "inLanguage": lang, "isPartOf": {"@id": SITE_URL + "/#website"}, "publisher": {"@id": SITE_URL + "/#organization"}},
            {"@type": "Organization", "@id": SITE_URL + "/#organization", "name": "WITH U INC", "url": SITE_URL},
            {"@type": "BreadcrumbList", "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "With U", "item": SITE_URL + "/"},
                {"@type": "ListItem", "position": 2, "name": "HugMap FAQ", "item": SITE_URL + ("/hugmap_faq_public_v1.html" if is_ja else "/hugmap_faq_public_v1_en.html")},
                {"@type": "ListItem", "position": 3, "name": question, "item": canonical}
            ]}
        ]
    }
    alternate_tags = f'<link rel="alternate" hreflang="{other_lang}" href="{alternate}">' if alternate else ""
    labels = {
        "back": "FAQ一覧へ" if is_ja else "All FAQs",
        "review": "回答の信頼性" if is_ja else "About this answer",
        "sources": "出典" if is_ja else "Sources",
        "disclaimer": "このFAQは一般的な情報の提供であり、診断・治療に代わるものではありません。個別の心配は主治医・専門職・地域の相談窓口へご相談ください。" if is_ja else "This FAQ provides general information and does not replace diagnosis or treatment. For individual concerns, consult an appropriate professional.",
        "cta": "この子の場合を、HugMapで相談する" if is_ja else "Discuss your child's situation in HugMap"
    }
    schema_json = json.dumps(faq_schema, ensure_ascii=False).replace("</", "<\\/")
    service_prefix = "../" if is_ja else "../../"
    return f'''<!doctype html><html lang="{lang}"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">
<title>{html_lib.escape(question)}｜HugMap FAQ</title>
<meta name="description" content="{html_lib.escape(description, quote=True)}">
<link rel="canonical" href="{canonical}">
<link rel="alternate" hreflang="{lang}" href="{canonical}">{alternate_tags}
<meta property="og:type" content="article"><meta property="og:title" content="{html_lib.escape(question, quote=True)}"><meta property="og:description" content="{html_lib.escape(description, quote=True)}"><meta property="og:url" content="{canonical}">
<link rel="icon" href="{asset_prefix}/images/logo/favicon/favicon.svg" type="image/svg+xml">
<script type="application/ld+json">{schema_json}</script>
<style>:root{{--ink:#291712;--muted:#786d68;--line:#e4ddda;--purple:#7d2741;--orange:#ff511b;--off:#f4f1f0}}*{{box-sizing:border-box}}body{{margin:0;background:var(--off);color:var(--ink);font-family:-apple-system,"Hiragino Sans","Noto Sans JP",sans-serif;line-height:1.85}}header{{background:#fff;border-bottom:1px solid var(--line);padding:12px 20px}}header a{{color:var(--ink);font-weight:800;text-decoration:none}}main{{max-width:780px;margin:36px auto;padding:0 18px}}.crumb{{font-size:12px;color:var(--muted);margin-bottom:18px}}.crumb a{{color:var(--purple)}}article{{background:#fff;border-radius:22px;padding:clamp(22px,5vw,42px);box-shadow:0 8px 30px rgba(41,23,18,.06)}}.category{{color:var(--orange);font-size:12px;font-weight:800}}h1{{font-size:clamp(22px,4vw,32px);line-height:1.45;margin:8px 0 24px}}.answer{{font-size:16px}}.trust{{border-top:1px solid var(--line);margin-top:30px;padding-top:20px;font-size:12px;color:var(--muted)}}.trust b{{color:var(--ink)}}.sources{{margin-top:8px}}.sources a{{color:var(--purple)}}.notice{{margin-top:20px;padding:13px;background:var(--off);border-radius:10px;font-size:11px;color:var(--muted)}}.cta{{display:block;margin-top:24px;border-radius:999px;background:var(--orange);color:#fff;text-align:center;padding:12px 18px;font-weight:800;text-decoration:none}}footer{{max-width:780px;margin:24px auto 50px;padding:0 18px;color:var(--muted);font-size:11px}}</style></head><body>
<header><a href="{index_href}">HugMap FAQ</a></header><main><nav class="crumb"><a href="{index_href}">{labels['back']}</a> / {html_lib.escape(category)}</nav><article><div class="category">{html_lib.escape(category)}</div><h1>{html_lib.escape(question)}</h1><div class="answer">{answer_html(answer)}</div><section class="trust"><b>{labels['review']}：</b>{status}<div class="sources"><b>{labels['sources']}：</b>{source_html}</div></section><div class="notice">{labels['disclaimer']}</div><a class="cta" href="{service_prefix}services.html?source=faq_detail&amp;faq={html_lib.escape(code, quote=True)}">{labels['cta']}</a></article></main><footer>© WITH U INC · FAQ ID: {html_lib.escape(code)}</footer></body></html>'''


def write_seo_pages(rows, lang):
    root = Path(__file__).resolve().parent.parent
    out_dir = root / ("faq" if lang == "ja" else "en/faq")
    out_dir.mkdir(parents=True, exist_ok=True)
    translations = existing_translation_codes(lang)
    for row in rows:
        code = row.get("faq_code")
        if not code:
            continue
        (out_dir / f"{code.lower()}.html").write_text(build_faq_detail(row, lang, code in translations), encoding="utf-8")
    print(f"wrote {len(rows)} static {lang} FAQ detail pages to {out_dir.relative_to(root)}")


def write_discovery_files():
    root = Path(__file__).resolve().parent.parent
    urls = [f"{SITE_URL}/", f"{SITE_URL}/services.html", f"{SITE_URL}/hugmap_faq_public_v1.html", f"{SITE_URL}/hugmap_faq_public_v1_en.html"]
    for directory in (root / "faq", root / "en/faq"):
        if directory.exists():
            urls.extend(f"{SITE_URL}/{p.relative_to(root).as_posix()}" for p in sorted(directory.glob("*.html")))
    today = datetime.date.today().isoformat()
    entries = "".join(f"<url><loc>{html_lib.escape(url)}</loc><lastmod>{today}</lastmod></url>" for url in dict.fromkeys(urls))
    (root / "sitemap.xml").write_text(f'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">{entries}</urlset>\n', encoding="utf-8")
    (root / "robots.txt").write_text(f"User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nSitemap: {SITE_URL}/sitemap.xml\n", encoding="utf-8")
    (root / "llms.txt").write_text(
        f"# With U / HugMap\n\nHugMap provides source-grounded, specialist-reviewed information about child development and parenting. Individual FAQ pages state their review status, sources, and medical disclaimer.\n\n## Main resources\n- Japanese FAQ: {SITE_URL}/hugmap_faq_public_v1.html\n- English FAQ: {SITE_URL}/hugmap_faq_public_v1_en.html\n- Sitemap: {SITE_URL}/sitemap.xml\n- Service: {SITE_URL}/services.html\n\nUse individual FAQ canonical URLs when citing an answer.\n",
        encoding="utf-8",
    )
    print(f"wrote sitemap.xml ({len(dict.fromkeys(urls))} URLs), robots.txt, and llms.txt")


write_seo_pages(rows, LANG)
write_discovery_files()
