# Roofing Recyclers Handoff

## What is built

- Multi-page investor-grade public website
- Reusable content architecture in `content/site-content.ts`
- Shared design system and premium dark industrial visual language
- Supabase-backed lead capture route at `app/api/leads/route.ts`
- Placeholder routes ready for later expansion
- SEO foundation with metadata, sitemap, robots, and JSON-LD

## Environment variables

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Required SQL

Use `supabase/lead_capture_schema.sql`.

## Local run

1. `npm install`
2. Create `.env.local`
3. Run `npm run dev`

## Vercel deploy

1. Create a new Vercel project for this app directory.
2. Set the root directory to `roofingrecyclers-site`.
3. Add the environment variables from `.env.example`.
4. Deploy.

## Replace later

- Replace `app/icon.svg` with final brand icon
- Add custom OG image and favicon set
- Connect future analytics and event tracking
- Add CMS or admin editing for page content if needed

## Recommended next features

1. Investor request gating and data-room access workflow
2. Contractor participation / certification intake
3. Facility and location network map
4. State-by-state policy resource center
5. Impact calculator and live metrics dashboard
