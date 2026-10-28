# HugMap homepages

## Routes and maintenance

- `/` (`index.html`) is the Japanese service-led homepage.
- `/en/` (`en/index.html`) is the equivalent English homepage.
- `/services.html` and `/en/services.html` redirect to the corresponding homepages. JavaScript preserves query parameters and fragments; a meta refresh and a visible link provide a fallback.
- Story, News and Contact remain separate pages. Their logo and Services links return to the homepage in the same language.
- Edit both HTML files when changing homepage copy or links. News remains on the separate News pages, linked from the header and footer. Update their canonical/hreflang metadata and `sitemap.xml` if routes change.
- Shared homepage presentation and progressive enhancement are in `assets/css/home.css` and `assets/js/home.js`. No build step is required; existing GitHub Pages deployment remains unchanged.

## Content and images

- `assets/images/home/team.webp`, `kotori.webp`, `risu.webp`, `pocket.webp`: optimized copies of the existing With U application character assets under `withu/src/images/persona/`.
- `discovery-ja.webp`, `development-ja.webp`, `discovery-en.webp`, `development-en.webp`: Japanese and English application screenshots supplied by the user. The development section switches between the two screens in the current page language; without JavaScript both remain visible. Only format/size optimization is applied.
- `record-photo.webp`: therapy-photo portion of the already published `assets/images/app/home-screen.png`. It is presented as an illustrative record, not a current application screenshot.
- Original user testimonials from the Japanese and English Services pages remain in the visible user-voices card grid.
- Video analysis, schedules, voice records and per-person sharing permissions are summarized in the visible additional-feature cards. No expert-authored individual report service is promised.
- The existing App Store URL is retained. Android directs to Contact because the previous Google Play URL was an internal-test invitation, not a public listing.
- FAQ, legal pages and existing app authentication routes remain in place.

- `play-gesture-ja.webp` and `play-gesture-en.webp`: illustration crops from the user-supplied play screenshots. The matching activity title and description are rendered as accessible HTML; phone navigation, floating controls and pagination are excluded.

## Local verification

Run `python3 -m http.server 8765 --bind 127.0.0.1` from the repository, then open `/` and `/en/`.

Check at desktop, tablet and mobile widths, including 320px:
- navigation and Japanese/English switching;
- native menu and disclosure controls, including keyboard operation;
- old Services redirects with a query and `#more-features`;
- all images and local links;
- no horizontal overflow, including English copy;
- white background with OS dark mode enabled.

## Picture books

- The homepages introduce Mimo, Luke and Gen after the sharing section. “Story” remains the company story; “絵本” / “Picture books” leads to `/stories/` / `/en/stories/`.
- The Japanese shelf links to `/stories/hello-{mimo,luke,gen}/`; the English shelf and homepage link to `/en/stories/hello-{mimo,luke,gen}/`. English editions translate narration, bubbles, afterwords, alt text and controls, and provide a Japanese reading link.
- Book sources remain in the sibling `hugmap-stories` repository. `stories/source-manifest.json` records the imported revision. Only rendered HTML, CSS, JS and referenced illustrations are published here; production prompts and discarded artwork are excluded.
- Published illustrations are WebP conversions at quality 90, with original dimensions and composition. After importing future source updates, preserve the local shelf/home links and canonical URLs; Mimo’s original link to `mouikkai` is replaced with Luke because that book is not hosted here.
- Entry styling lives in `assets/css/storybooks.css`. English editions reuse the Japanese artwork and book CSS; `en/stories/intro-english.css` adjusts English typography and `intro-story.js` localizes controls. Mimo’s small base stylesheet lives in `stories/base.css`.
- Homepage buddy cards stay brief: a portrait, personality and distinct role, then a link to the introduction book. The shared introduction explains app consultation and play ideas; individual consultation examples are omitted to avoid repeating the feature sections. Character roles follow `hugmap-stories/planning/world-and-character-guide.md`: Mimo listens, Luke observes and adapts tools/environments, and Gen joins in at the child’s pace. A shared CTA scrolls to the existing app download/contact section (`#wv-start`). The duplicate three-card feature overview and standalone AI conversation section are removed. The hero retains the group illustration; its feature CTA leads directly to the development section (`#wv-discover`).
- `assets/images/home/gen.webp` is a quality-90 WebP copy of the existing approved `assets/images/persona/usagi.png`.

- Keep the three self-introduction books as evergreen destination pages. Everyday episodes and play ideas can be adapted for social posts; the homepage does not need a continuously growing episode feed. Update the books when character settings or content change, rather than duplicating each social post on the site.

- Buddy cards use approved brand accents (Mimo `#FF511B`, Luke `#D7C862`, Gen `#7D2741`) for the image divider and book link, with pale matching portrait backgrounds. Character raster artwork is unchanged. Orange/yellow buttons use dark text; wine buttons use white text.

- Homepage `team.webp` now uses the Mimo reference update (built-in imagegen): retain the seated group composition, match the approved seated Mimo (`exec-4bc04379-c849-4c90-bb41-ba4f1777bcb9.png`) with a smooth broad head, no cheek protrusion, and brown feet, with body `#FED304`, shirt `#F4F1F0`, collar/mark `#FF511B`. The generated group is exported on white as 700×466 WebP; image generation can introduce small line changes in the other characters.

- Group line-weight refinement (built-in imagegen): use seated Mimo’s thin warm-brown contour as the reference for all characters, including the pocket mascot. Preserve head shapes, poses and composition; reduce heavy outer borders and inner strokes, retaining solid pupils.

- Pocket outline refinement (built-in imagegen): change only the pocket mascot’s outer and handle strokes toward warm reddish brown `#B64D25`, retaining fine lines, orange fill and white facial features.


## English-language family pilot landing page

- `/en/try-hugmap/` is a focused English-language page for parents of preschool children, with no Germany residency requirement. German translation is deferred.
- Uses existing canonical artwork and screenshots; no copied assets or invented testimonials.
- English buddy story afterwords link to the pilot page.
- `family-pilot.css` and `family-pilot.js` are isolated from the main homepage.
- The form now collects email, device, child age and optional interests (multiple selections), with required consent for trial follow-up (no marketing opt-in).
- Uses a direct link to the official Google Form; the embedded form has been removed to keep the LP focused. No custom POST endpoint, local storage, or simulated success message. Google handles validation and the received confirmation; the LP does not infer submission from iframe load.
- Owner: `admin@withuai.com`. Form editor: https://docs.google.com/forms/d/1zBb2S4CmdaHZsQSaKoZFuA7F9x9NQoGTp1CUo4Tz1-w/edit
- Respondent form: https://docs.google.com/forms/d/e/1FAIpQLSfZWrNlx3L-2yHphMtoVzj9O7GYlbsu5bLE8ygA-bFizg3-FQ/viewform?hl=en
- Private linked response spreadsheet: https://docs.google.com/spreadsheets/d/1qCYQzQYn16eS-z0hKdkWo1xPnd3Xo-jiS2K0hvXvNSI/edit
- Email uses a required short-answer field with email validation. Device, child age and trial-contact consent are required; interests are optional. Google login is not required, response summaries are not shared, and marketing consent is not bundled with trial follow-up.
- Form is published and the sheet is linked, but this LP is still local until deployed. No real or synthetic requests were submitted during setup. Verify a controlled test response in the sheet before external recruitment.
- Follow-up remains manual: review responses, confirm trial language/device/conditions, then arrange app access separately. No automatic invitation emails or app entitlements are created. Track invited/started separately; count actual non-test unique requests, not clicks.
- No analytics are connected yet. A button click must not be counted as a completed registration.
- `noindex,follow` is intentional during review. No sitemap entry during review. The Japanese homepage links to the Japanese form; the English homepage links to the pilot LP, which links to the English form.
- Before distribution: verify app availability in participants’ countries, devices/languages, pricing/timing, enquiry handling and privacy information; translate the approved copy into German.

- Chat demo uses the two supplied Consult/Luke screenshots in `assets/images/pilot/`. Review status is explicitly scoped to the shown answer. Screens are unmodified; the Consult example contains the supplied profile name/avatar. Review those before public distribution.

- Pilot examples: the hero uses the park group artwork. How it works shows one illustrated example per buddy (Mimo: a choice of book/ball; Luke: thicker spoon handle; Gen: rolling a ball). Existing story assets are referenced directly, without duplicate image files. Actual consultation screenshots remain below.

- LP visual cleanup: unboxed illustrated examples and buddy profiles; no decorative arrows or repeated mid-page trial links. Trial entry points are the hero and the closing section. Screenshot enlargement and book links remain functional. Removed the unused screenshot-switcher script include.


## Park group artwork — 2026-10-27

- Japanese and English homepage heroes and Open Graph images use `assets/images/home/team-park.webp`. The English trial LP hero uses the same asset.
- Source: approved chat artwork `exec-02d1c480-f1bf-481e-a618-568daf3f7d3a.png`: Mimo on a park bench, Luke blowing bubbles, LUMI watching, and Gen holding a yellow ball, with sparse grass. Exported as 1536×1024 WebP.
- The previous `team.webp` remains available. LP artwork uses responsive width and intrinsic height to preserve the full composition on mobile.


## Japanese early-access form — 2026-10-28

- Editor: https://docs.google.com/forms/d/1jmquuM19WS68cNR_Nte_a7jwysvyNNNMOu0Tat7I6UA/edit
- Respondent: https://docs.google.com/forms/d/e/1FAIpQLSdENyPs5MUOpU_b3fl_a73ss76PDeeH_n2lgcozPALKYtyI9Q/viewform?hl=ja
- Copied from the English form; Japanese questions/options/consent and confirmation message. Published for anyone with the link; respondent sign-in is not required. Response summaries remain private.
- Required: email, device, child age, contact consent. Interests are optional checkboxes. No diagnosis or preferred-language question.
- Japanese homepage uses the Japanese form; English LP retains its original English form.
- Country analytics are not enabled on these landing pages. Existing FAQ GA4 configuration can be considered separately, with the appropriate privacy notice/consent setup. Aggregate estimated country, page views and application-link clicks separately from actual form responses; never send email or form answers to analytics. IP-derived country is not verified residence.

## Homepage hierarchy and early access — 2026-10-28

- Japanese and English homepages prioritize early access, with the released App Store app retained as a secondary option. Header and footer navigation omit the picture-book index; buddy cards retain individual story links.
- Six secondary functions appear as short list items (two columns on desktop, one on mobile). Repeated founder and feature explanations are consolidated.
- The trial LP combines buddy introductions with play examples. The answer screenshot is prominent; the buddy chooser is expandable. The final Google Form action includes email/install guidance without a redundant “Before you join” block.
- English Mimo, Luke and Gen afterwords link directly to the English Google Form and describe invite-only iOS/Android access without restricting applicants to Germany.
- Shared favicon uses the supplied orange pocket mark, white facial features and opening, and a transparent exterior. The original PNG is embedded in the SVG to preserve the artwork.
