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
- Both shelves link to the Japanese editions at `/stories/hello-mimo/`, `/stories/hello-luke/`, and `/stories/hello-gen/`. English entry copy explicitly identifies the reading language; English books are not implied.
- Book sources remain in the sibling `hugmap-stories` repository. `stories/source-manifest.json` records the imported revision. Only rendered HTML, CSS, JS and referenced illustrations are published here; production prompts and discarded artwork are excluded.
- Published illustrations are WebP conversions at quality 90, with original dimensions and composition. After importing future source updates, preserve the local shelf/home links and canonical URLs; Mimo’s original link to `mouikkai` is replaced with Luke because that book is not hosted here.
- Entry styling lives in `assets/css/storybooks.css`. Book styling stays local to each edition, with Mimo’s small base stylesheet in `stories/base.css`.
- Homepage buddy cards stay brief: a portrait, personality and distinct role, then a link to the introduction book. The shared introduction explains app consultation and play ideas; individual consultation examples are omitted to avoid repeating the feature sections. Character roles follow `hugmap-stories/planning/world-and-character-guide.md`: Mimo listens, Luke observes and adapts tools/environments, and Gen joins in at the child’s pace. A shared CTA scrolls to the existing app download/contact section (`#wv-start`). The duplicate three-card feature overview and standalone AI conversation section are removed. The hero retains the group illustration; its feature CTA leads directly to the development section (`#wv-discover`).
- `assets/images/home/gen.webp` is a quality-90 WebP copy of the existing approved `assets/images/persona/usagi.png`.

- Keep the three self-introduction books as evergreen destination pages. Everyday episodes and play ideas can be adapted for social posts; the homepage does not need a continuously growing episode feed. Update the books when character settings or content change, rather than duplicating each social post on the site.

- Buddy cards use approved brand accents (Mimo `#FF511B`, Luke `#D7C862`, Gen `#7D2741`) for the image divider and book link, with pale matching portrait backgrounds. Character raster artwork is unchanged. Orange/yellow buttons use dark text; wine buttons use white text.
