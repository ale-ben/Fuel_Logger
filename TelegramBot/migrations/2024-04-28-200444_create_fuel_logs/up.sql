-- Your SQL goes here
create table public.FuelLogs (
		id       integer not null
		constraint FuelLogs_pk
		primary key,
	odometer float4   not null,
	flagged  BOOLEAN not null
);