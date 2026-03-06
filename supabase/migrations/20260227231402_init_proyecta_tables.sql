-- CLIENTS
create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  created_at timestamptz default now()
);

-- CAMPAIGNS
create table if not exists public.campaigns (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  commission_per_lead numeric default 0,
  created_at timestamptz default now()
);

-- LEADS
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  telefono text,
  email text,
  tipo_proyecto text,
  mensaje text,
  source text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  created_at timestamptz default now()
);

-- COMMISSION EVENTS
create table if not exists public.commission_events (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.leads(id) on delete cascade,
  campaign_id uuid references public.campaigns(id) on delete set null,
  amount numeric not null,
  created_at timestamptz default now()
);

-- Unique campaign identity (utm_source + utm_campaign)
create unique index if not exists campaigns_utm_unique
on public.campaigns (utm_source, utm_campaign);