# Neha Goyal — HTML, CSS and JavaScript Portfolio

The existing portfolio remains in `JavaScript-Projects/portfolio/` and keeps its navy, white and teal design. It uses HTML, CSS and vanilla JavaScript with no framework or build step.

## Projects shown
- Academy Cinemas: movie listings, showtimes and deals in the existing HTML/CSS repository.
- Explore Canada Lightbox: the actual project in `JavaScript-Projects/One-Page Website/`, with previous/next controls, Escape and arrow-key navigation.
- Simple Recipes: recipe cards and CSS effects in the existing HTML/CSS repository.
- The Pet Shop: animal pages, images and a contact page in the existing HTML/CSS repository.

Project images reuse the repository's theater curtains, tortelloni and dog assets. They illustrate coursework, not a portrait of Neha. No starter files named sample_index.html, sample_portfolio.css or sample_portfolio.js were present in either repository.

## Files and interactions
- `index.html`: owner information, accessible sections, project cards and contact form.
- `portfolio.css`: responsive desktop/mobile layouts and reduced-motion support.
- `portfolio.js`: mobile menu (including Escape and close on navigation), project filtering and contact validation.

Without JavaScript the section links and all project cards remain available. The practice form is disabled until JavaScript loads. With JavaScript, it checks required fields, email format and a message of at least 10 non-whitespace characters. Errors are associated with their fields, and focus moves to the first invalid field. Valid entries show an explicit **not sent or saved** message. No backend, email service or storage is configured.

## Personal details still needed
- Replace the clearly marked LinkedIn placeholder in the footer with Neha's actual profile URL. No LinkedIn URL was found; none was invented.
- Optional: provide an email address and a form service/backend if real message delivery is wanted.
- Optional: supply an owner-approved portrait. Existing coursework images are used instead.

## Preview and publish
Serve the repository root with any static web server and open `/portfolio/`. Test filters, mobile menu, navigation, images and blank/invalid/valid form entries.

Publish only the portfolio folder changes to the existing repository's `main` branch. Preserve the existing GitHub Pages source. For branch-based Pages this is `main` and `/ (root)` under Settings → Pages. Verify the updated title and interactions at https://nehagoyal2296.github.io/JavaScript-Projects/portfolio/ after deployment completes.

