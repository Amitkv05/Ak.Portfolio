# CSS structure

The original `app/globals.css` has been split by responsibility while keeping a single global entry point for Next.js.

- `base.css` — design tokens, resets, shared utilities, one-page scroll behavior
- `nav.css` — navigation, mobile menu, theme-toggle/nav CTA styles
- `splash.css` — splash/loading screen
- `home.css` — Home/Hero section
- `about.css` — About section and portrait treatment
- `skills.css` — Skills/certificates and paginated skills slider
- `projects.css` — Selected Work / project folder cards
- `projectCase.css` — project case-study layouts, metrics, device/browser mockups
- `footer.css` — contact/footer section

`app/globals.css` only imports these files in the required order, so `app/layout.jsx` does not need to change.
