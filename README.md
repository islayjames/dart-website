# HeyDart website

Next.js marketing site with an English-first Sanity editorial foundation.

## Development

```bash
npm ci
npm test
npm run dev
```

The site and `/guides` build successfully without Sanity variables; the guides index is then an intentional empty state and `/studio` shows setup guidance.

## Connect a real Sanity project

A Sanity project **has not been created or connected yet**. A project administrator must:

1. Sign in at [sanity.io/manage](https://www.sanity.io/manage), create a project, and create or select a `production` dataset.
2. Copy `.env.example` to `.env.local`, then set the exact project ID and dataset.
3. In Sanity Manage → API → CORS origins, add `http://localhost:3000` (credentials allowed) and the production `https://heydart.com` origin.
4. Start `npm run dev` and open `http://localhost:3000/studio`. Sign in with a Sanity account that is a member of the project. Production Studio access is authenticated and governed by Sanity project roles; it is not a public editor.
5. Deploy with `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`. Add a read token only if authenticated draft preview is enabled.

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=optional-viewer-token-for-draft-preview
```

Never expose `SANITY_API_READ_TOKEN` to the browser or commit it. Published pages use CDN-backed GROQ with five-minute revalidation and static params. `previewClient` is isolated, disables CDN caching, and requires the server-only token. The schema includes locale and translation-group/reference fields for future `pt-BR`, but authors should create English documents only today.

### Protected draft preview

Set `SANITY_API_READ_TOKEN` to a Sanity Viewer token and generate a separate `SANITY_PREVIEW_SECRET` in the Vercel Preview environment only. A non-production Vercel Preview deployment can enable a guide preview with `/api/draft/enable?secret=...&slug=...`; the server sets an HTTP-only Draft Mode cookie and redirects to the rendered guide. Draft previews are visibly labeled, carry `noindex`, emit no public Article/Breadcrumb JSON-LD, and never enter the public guide index, static params, or sitemap. Use `/api/draft/disable` to leave preview mode.

Sanity CORS origins are required only for origins that host the browser-based Studio, such as `https://heydart.com` for `/studio`. The rendered draft-preview deployment reads Sanity through its server-only Viewer token and does not require the Vercel Preview hostname to be added to Sanity CORS.

## Editorial workflow

Guides support title/slug, summary, Portable Text, approved category taxonomy, publish/update dates, author/reviewer, hero image alt text, direct answers, sources, related guides, optional CTA, SEO controls, and minimal review governance. Only English guides with a publish date at or before the current time are queried and included in the sitemap.
