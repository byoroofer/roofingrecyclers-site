# Roofing Recyclers Site

Investor-grade public website for `RoofingRecyclers.com`, built with Next.js App Router,
TypeScript, Tailwind CSS, Framer Motion, and Supabase-backed lead capture.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Supabase
- Vercel

## Run locally

1. Install dependencies

```bash
npm install
```

2. Copy `.env.example` to `.env.local`

3. Fill in the required environment variables

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

If Supabase labels your public browser key as a "publishable key", put that value in
`NEXT_PUBLIC_SUPABASE_ANON_KEY` for this app.

4. Paste the SQL from `supabase/lead_capture_schema.sql` into the Supabase SQL editor

5. Start the dev server

```bash
npm run dev
```

## Verification

```bash
npm run typecheck
npm run build
```

## Routes

- `/`
- `/about`
- `/how-it-works`
- `/solutions`
- `/impact`
- `/partners`
- `/investors`
- `/contact`
- `/contractors`
- `/manufacturers`
- `/municipalities`
- `/certification`
- `/policy`
- `/locations`
- `/news`

## Lead capture

Lead submissions are stored in `public.inbound_leads` with fields for:

- inquiry type
- contact details
- company and organization data
- interest area
- message
- internal status and notes
- source page

The public form posts to `/api/leads`, and the route inserts into Supabase using the service-role
key on the server.

## Deploy to Vercel

1. Push the project to your GitHub repo
2. Import the repo into Vercel
3. Add the four required environment variables
4. Point your custom domain to the Vercel project after the first successful deployment
