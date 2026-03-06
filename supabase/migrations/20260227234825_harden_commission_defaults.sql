alter table public.campaigns
alter column commission_per_lead set default 0;

update public.campaigns
set commission_per_lead = 0
where commission_per_lead is null;

alter table public.campaigns
alter column commission_per_lead set not null;