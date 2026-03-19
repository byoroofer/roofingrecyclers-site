create extension if not exists pgcrypto;

create table if not exists public.inbound_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  inquiry_type text not null,
  full_name text not null,
  company_name text,
  email text not null,
  phone text,
  state text,
  message text not null,
  organization_type text,
  interest_area text,
  status text not null default 'new',
  notes text,
  source_page text,
  constraint inbound_leads_inquiry_type_check check (
    inquiry_type in (
      'investor',
      'contractor',
      'manufacturer',
      'municipality',
      'landfill',
      'strategic-partner',
      'media',
      'other'
    )
  ),
  constraint inbound_leads_status_check check (
    status in ('new', 'reviewing', 'qualified', 'closed')
  )
);

create index if not exists inbound_leads_created_at_idx
on public.inbound_leads (created_at desc);

create index if not exists inbound_leads_inquiry_type_idx
on public.inbound_leads (inquiry_type);

create index if not exists inbound_leads_status_idx
on public.inbound_leads (status);

create index if not exists inbound_leads_email_idx
on public.inbound_leads (email);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists inbound_leads_set_updated_at on public.inbound_leads;

create trigger inbound_leads_set_updated_at
before update on public.inbound_leads
for each row
execute function public.set_updated_at();

alter table public.inbound_leads enable row level security;
