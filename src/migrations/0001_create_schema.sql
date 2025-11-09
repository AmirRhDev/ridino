-- Enable required extensions
create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

------------------------------------------------------------
-- PROFILES TABLE
------------------------------------------------------------

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  first_name text not null,
  last_name text not null,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc', now()) not null,
  updated_at timestamp with time zone default timezone('utc', now()) not null
);

------------------------------------------------------------
-- CARS TABLE
------------------------------------------------------------

create table if not exists public.cars (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id),
  title text not null,
  year text not null,
  price bigint,
  location text not null,
  kilometers integer,
  gas_type text not null,
  gearbox text not null,
  body_status text,
  color text not null,
  inside_color text not null,
  description text not null,
  technical_detail jsonb,
  phone text not null,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now()
);

------------------------------------------------------------
-- CAR IMAGES TABLE
------------------------------------------------------------

create table if not exists public.car_images (
  id uuid primary key default gen_random_uuid(),
  car_id uuid references public.cars (id) on delete cascade,
  url text not null,
  created_at timestamp with time zone default timezone('utc', now())
);

------------------------------------------------------------
-- SAVED CARS TABLE
------------------------------------------------------------

create table if not exists public.saved_cars (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete cascade,
  car_id uuid references public.cars (id) on delete cascade,
  created_at timestamp with time zone default now(),
  constraint saved_cars_user_id_car_id_key unique (user_id, car_id)
);
