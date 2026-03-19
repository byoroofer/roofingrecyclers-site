# Roofing Recyclers Discovery Plan

## Recommended folder structure

```text
roofingrecyclers-site/
  app/
    api/leads/
    about/
    how-it-works/
    solutions/
    impact/
    partners/
    investors/
    contact/
    contractors/
    manufacturers/
    municipalities/
    certification/
    policy/
    locations/
    news/
  components/site/
  content/
  lib/site/
  lib/supabase/
  lib/validation/
  types/
  public/
  supabase/
```

## Brand and design direction

- Palette: deep forest, graphite, limestone white, muted steel, restrained amber highlight
- Mood: industrial climate-tech, premium infrastructure, disciplined and investor-literate
- Typography: confident serif display for major headlines, clean neo-grotesk sans for interface and body
- Spacing: generous section rhythm, wide gutters, bold cards, calm density
- Motion: restrained reveal transitions, soft parallax feel, no gimmicky counters or excessive animation
- Motifs: aggregate textures, material flow lines, logistics-grid overlays, regional network framing

## Brand tokens

- Base background: `#08110d`
- Surface: `#101915`
- Surface raised: `#16231d`
- Primary text: `#f4f4ee`
- Muted text: `#97a59d`
- Brand green: `#1f6b46`
- Brand green bright: `#3ea568`
- Steel: `#6f7f78`
- Accent amber: `#c98a2d`
- Border: `rgba(255,255,255,0.1)`
- Radius: 24px primary, 18px secondary

## Required dependencies

- `next`
- `react`
- `react-dom`
- `typescript`
- `tailwindcss`
- `@tailwindcss/postcss`
- `framer-motion`
- `lucide-react`
- `@supabase/supabase-js`
- `@supabase/ssr`
- `zod`
- `clsx`
- `tailwind-merge`

## Homepage outline

1. Hero with investor-grade positioning, dual CTAs, industrial visual field
2. Why it matters problem framing
3. Roofing Recyclers model diagram
4. Stakeholder solutions grid
5. Impact metrics strip and dynamic-ready cards
6. Why now / market timing section
7. Founder credibility block
8. Segmented CTA band
9. FAQ and inquiry prompt

## Supabase schema proposal

Table: `inbound_leads`

- `id uuid primary key default gen_random_uuid()`
- `created_at timestamptz default now()`
- `updated_at timestamptz default now()`
- `inquiry_type text`
- `full_name text`
- `company_name text`
- `email text`
- `phone text`
- `state text`
- `message text`
- `organization_type text`
- `interest_area text`
- `status text default 'new'`
- `notes text`
- `source_page text`

Indexes:

- `created_at desc`
- `inquiry_type`
- `status`
- `email`
