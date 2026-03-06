create or replace function public.rpc_commission_events_columns()
returns table(column_name text, data_type text, is_nullable text)
language sql
stable
as $func$
  select column_name::text, data_type::text, is_nullable::text
  from information_schema.columns
  where table_schema='public' and table_name='commission_events'
  order by ordinal_position;
$func$;