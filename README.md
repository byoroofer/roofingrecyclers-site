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
LEAD_NOTIFICATION_EMAIL=warephoto@yahoo.com
EMAIL_FROM=
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASSWORD=
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

If SMTP is configured, the same route also sends a notification email to
`LEAD_NOTIFICATION_EMAIL`. The default notification target in this repo is
`warephoto@yahoo.com`.

For Yahoo SMTP, use:

- `SMTP_HOST=smtp.mail.yahoo.com`
- `SMTP_PORT=465`
- `SMTP_SECURE=true`
- `SMTP_USER=<your Yahoo address>`
- `SMTP_PASSWORD=<your Yahoo app password>`
- `EMAIL_FROM=<your Yahoo address or approved sender>`

## Deploy to Vercel

1. Push the project to your GitHub repo
2. Import the repo into Vercel
3. Add the required environment variables for Supabase and, if desired, SMTP notifications
4. Point your custom domain to the Vercel project after the first successful deployment
