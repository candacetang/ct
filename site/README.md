# Candace Tang portfolio

## Local development

From `site/` run `pnpm install`, then `pnpm run dev`. Create a production build with `pnpm run build`; preview it with `pnpm run preview`.

## Routine content updates

Edit `src/data/siteData.js`. It contains navigation, homepage covers, project titles, dates, descriptions, gallery image filenames, hover labels, biography, and contact links. Replace an image by putting the new file in `public/assets/` and changing only the related `src` value. GIFs are the three entries in `animationData.images`; homepage covers are in `homeCovers`.

## Deployment

Pushing `main` runs `.github/workflows/deploy.yml`, which builds `site/` and publishes it to GitHub Pages. The Vite base is `/` because the live site uses the custom root domain. In GitHub: Settings → Pages → Source, select **GitHub Actions**. Add `candacetang.com` as the custom domain; the deployed `CNAME` file already contains it. At the domain registrar, point the apex domain to GitHub Pages using GitHub’s current A/AAAA records and add `www` as a CNAME to the GitHub Pages hostname, following GitHub’s custom-domain guide. Enable HTTPS after DNS resolves.

## Routing

The site uses BrowserRouter with a lightweight `404.html` fallback that passes a requested GitHub Pages path through the root app, which restores it before React renders. This preserves clean URLs while remaining compatible with a custom-domain GitHub Pages deployment.
