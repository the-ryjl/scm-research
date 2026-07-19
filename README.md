# Stern Capital Research

An editorial research publication for Stern Capital Management, built with Astro and Astro Content Collections. The site is fully static, requires no database or CMS, and is designed for zero-configuration deployment to Vercel. Node.js 22.12 or newer is required.

## Local development

```bash
npm install
npm run dev
```

Open the local URL shown by Astro. Before committing, run:

```bash
npm run build
```

## Add a publication

1. Duplicate any file in `src/content/publications/`.
2. Rename it with a lowercase, hyphenated slug such as `new-company-thesis.md`. The file name becomes the article URL.
3. Complete every frontmatter field. `author` must match an author file name in `src/content/authors/`.
4. Write the article in Markdown beneath the frontmatter.
5. Keep `draft: true` while editing, then change it to `false` to publish.

Required publication fields are validated in `src/content.config.ts`: title, description, author, dates, category, sector, pod, document type, tags, featured/draft status, optional cover image, reading time, and ticker symbols.

All new content should preserve the educational disclaimer and distinguish sourced facts from estimates, scenarios, and author judgments.

## Add an author

Create a Markdown file in `src/content/authors/`. The file name is the author ID used by publications. Include name, role, biography, pod, and graduation year. Headshot, LinkedIn, and email are optional. Until a headshot is supplied, the design displays the author's initials.

## Edit the theme

Global design tokens and responsive styling live in `src/styles/global.css`. The main brand colors are defined at the top as CSS custom properties. Shared page metadata and layout live in `src/layouts/BaseLayout.astro`; navigation and footer links live in their corresponding components.

Brand assets copied from the existing SCM website are stored in `public/brand/`.

## Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the repository as a new Vercel project.
3. Vercel will detect Astro automatically. Keep the default build command (`npm run build`) and output directory (`dist`).
4. Add `research.sterncapitalmanagement.org` in the Vercel project's Domains settings and apply the DNS record Vercel provides.

The site is statically generated, so no Astro adapter is required. `vercel.json` adds basic security headers.

## Key structure

```text
src/
  components/        Reusable editorial UI
  content/           Authors and Markdown publications
  content.config.ts  Collection schemas
  layouts/           Shared document and SEO layout
  pages/             Static and dynamic routes, RSS, robots
  styles/            Theme and responsive styles
public/               Brand assets, favicon, social card
```
