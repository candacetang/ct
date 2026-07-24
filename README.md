# Candace Tang Portfolio

A React/Vite portfolio website for Candace Tang.

Temporary site URL: `https://candacetang.github.io/ct/`

## The important folders

```text
.github/workflows/
assets-original/
references/
site/
```

- `.github/workflows/deploy.yml` — Automatically builds and publishes the site when changes are pushed to GitHub.
- `assets-original/` — Untouched archive of original artwork files. Do not rename, edit, or delete these.
- `references/` — The old portfolio’s layout workbook, screenshots, and screen recording. Keep these as reference material.
- `site/` — The actual website code and live artwork files.

## Inside the site folder

```text
site/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   └── styles/
├── README.md
├── index.html
├── package.json
├── pnpm-lock.yaml
└── vite.config.js
```

- `site/public/assets/` — The artwork and GIF files used by the live website.
- `site/src/data/siteData.js` — The main content file. Use this for artwork filenames, project text, dates, image order, homepage covers, navigation, contact links, and About-page text.
- `site/src/components/` — Shared site pieces, including the header, footer, galleries, and lightbox.
- `site/src/pages/` — The individual pages: homepage, VIS DEV., Personal, Animations, Photography, and About.
- `site/src/styles/main.css` — The site’s visual styling and responsive layout rules.
- `site/index.html` — Basic page setup, favicon, and link-preview metadata.
- `site/vite.config.js` — Build settings. It currently supports the temporary `/ct/` GitHub Pages path.

## Change fonts and colors

Open `site/src/styles/main.css`.

At the very top is the shared visual palette:

```css
:root {
  --font-main: Arial, Helvetica, sans-serif;
  --color-text: #4b4b4b;
  --color-heading: #494949;
  --color-wordmark: #171717;
  --color-accent: #a8540b;
  --color-interactive: #39a5cf;
  --color-page: #fff;
}
```

- Change `--font-main` to change the primary typeface throughout the site. Use a web-safe font name or add a web font separately before using it here.
- Change `--color-accent` to change the burnt-orange navigation and menu-link color.
- Change `--color-text` for normal body copy, `--color-heading` for headings, and `--color-wordmark` for the Candace Tang wordmark.
- Change `--color-interactive` for the About-page social links.
- Change `--color-page` for the white page background.

For individual sizing and spacing adjustments, use the selector names in the same file. For example: `.wordmark` controls the header name, `.desktop-nav a` controls desktop menu links, `.mobile-menu nav a` controls mobile-menu links, and `.about-copy` controls About-page text.

## Everyday image updates

### Rename or replace an existing image

1. In `site/public/assets/`, add the new image or rename the existing file.
2. Open `site/src/data/siteData.js`.
3. Find the matching image entry.
4. Change its `src` filename to match exactly.
5. Save, commit, and push.

Example:

```js
{ src: 'P1.png', alt: 'Personal artwork 1' },
```

If the file becomes `fashion-figures.png`, change it to:

```js
{ src: 'fashion-figures.png', alt: 'Personal artwork 1' },
```

Do not change `assets-original/`; it is the safe archive.

### Reorder images

In `siteData.js`, move the whole image entry up or down in its `images` list.

```js
images: [
  { src: 'P1.png', alt: 'Personal artwork 1' },
  { src: 'P2.png', alt: 'Personal artwork 2' },
]
```

The first item appears first.

### Replace a GIF

1. Put the replacement GIF in `site/public/assets/`.
2. In `siteData.js`, find `animationData`.
3. Change the relevant `src` value.

```js
{ src: 'animated1.gif', alt: 'Action sequence animation 1', type: 'gif' },
```

## Update text or contact details

Open `site/src/data/siteData.js`.

- Homepage covers: `homeCovers`
- Main navigation: `navigation`
- VIS DEV. project titles, dates, descriptions, and images: `visualProjects`
- Personal gallery: `personalImages`
- Animations page: `animationData`
- Photography page: `photographyData`
- About page, contact links, and circle image: `aboutData`

## Add a new VIS DEV. project

1. Add its artwork files to `site/public/assets/`.
2. In `siteData.js`, add a new project object to `visualProjects`.
3. Give it a title, slug, date, optional description/disclaimer, layout name, and explicit image entries.

Example:

```js
{
  title: 'NEW PROJECT.',
  slug: 'new-project',
  date: '2026-01-01',
  layout: 'grandpa',
  description: 'Project description goes here.',
  images: [
    { src: 'new-project-1.png', alt: 'New Project artwork 1' },
    { src: 'new-project-2.png', alt: 'New Project artwork 2' },
  ],
},
```

A new standalone URL is created automatically:

```text
/vis-dev/new-project
```

For a truly new page type—rather than another VIS DEV. project—it is best to make a small plan first, because it may need a new React page and styling.

## Run the website locally

Open Terminal and run:

```bash
cd "/Users/kyra/Documents/Candace's Website/site"
pnpm install
pnpm run dev
```

Terminal will show a local link, usually `http://localhost:5173`.

Stop the local server with `Control + C`.

## Publish changes with GitHub Desktop

1. Open GitHub Desktop.
2. Review the changed files.
3. Write a clear commit summary, such as `Replace Personal gallery image`.
4. Click **Commit to main**.
5. Click **Push origin**.
6. GitHub Actions builds and publishes the site automatically.
7. In GitHub, open the **Actions** tab and wait for the green checkmark.

## GitHub Pages

The current temporary URL is:

```text
https://candacetang.github.io/ct/
```

All page links must keep the `/ct/` part while the repository is named `ct`.

When the real `candacetang.com` domain is purchased and connected:

1. Update the GitHub Pages build path from `/ct/` to `/`.
2. Restore `site/public/CNAME` with:

   ```text
   candacetang.com
   ```

3. Set `candacetang.com` as the custom domain in GitHub repository Settings → Pages.
4. Add the required DNS records at the domain registrar.
5. Wait for GitHub to verify the domain, then enforce HTTPS.

## Recommendations

- Keep filenames simple: lowercase letters, numbers, hyphens, and `.png` or `.gif`.
- Always update the matching `src` value in `siteData.js` after renaming a live asset.
- Keep `assets-original/` untouched.
- Test a change locally before pushing when possible.
- Use descriptive commit summaries so it is easy to understand the site’s history.
- The site discourages neither saving nor downloading images yet; decide that separately before adding a deterrent.
