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
