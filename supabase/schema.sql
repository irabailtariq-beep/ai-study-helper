-- AI Study Helper — Supabase schema
-- Run in Supabase SQL editor, or via `supabase db push` if using the CLI.

create extension if not exists "pgcrypto";

--------------------------------------------------------------------------
-- profiles: 1 row per authenticated user
--------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  country text not null,
  age int not null check (age between 4 and 99),
  grade text not null,
  curriculum text not null,
  display_name text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "profiles_self_read"   on public.profiles for select using (auth.uid() = id);
create policy "profiles_self_write"  on public.profiles for insert with check (auth.uid() = id);
create policy "profiles_self_update" on public.profiles for update using (auth.uid() = id);
create policy "profiles_self_delete" on public.profiles for delete using (auth.uid() = id);

--------------------------------------------------------------------------
-- chat_sessions + chat_messages: tutor conversations
--------------------------------------------------------------------------
create table if not exists public.chat_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text,
  summary text,  -- rolling summary written by an async summarizer
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists chat_sessions_user_idx on public.chat_sessions(user_id, updated_at desc);

alter table public.chat_sessions enable row level security;
create policy "chat_sessions_owner" on public.chat_sessions for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create table if not exists public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.chat_sessions(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('user','assistant','system')),
  content text not null,
  created_at timestamptz default now()
);

create index if not exists chat_messages_session_idx on public.chat_messages(session_id, created_at);

alter table public.chat_messages enable row level security;
create policy "chat_messages_owner" on public.chat_messages for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

--------------------------------------------------------------------------
-- quizzes: generated quizzes + user attempts
--------------------------------------------------------------------------
create table if not exists public.quizzes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  content jsonb not null,             -- full Quiz payload
  source_text text,                   -- what the user uploaded/pasted
  created_at timestamptz default now()
);
create index if not exists quizzes_user_idx on public.quizzes(user_id, created_at desc);
alter table public.quizzes enable row level security;
create policy "quizzes_owner" on public.quizzes for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  score int not null,                 -- 0..N
  total int not null,
  answers jsonb not null,
  created_at timestamptz default now()
);
create index if not exists quiz_attempts_user_idx on public.quiz_attempts(user_id, created_at desc);
alter table public.quiz_attempts enable row level security;
create policy "quiz_attempts_owner" on public.quiz_attempts for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

--------------------------------------------------------------------------
-- flashcards: spaced repetition
--------------------------------------------------------------------------
create table if not exists public.flashcards (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  deck text not null default 'default',
  front text not null,
  back text not null,
  -- SM-2-ish fields
  interval_days int not null default 0,
  ease real not null default 2.5,
  reps int not null default 0,
  due_at date not null default current_date,
  created_at timestamptz default now()
);
create index if not exists flashcards_user_due_idx on public.flashcards(user_id, due_at);
alter table public.flashcards enable row level security;
create policy "flashcards_owner" on public.flashcards for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

--------------------------------------------------------------------------
-- streaks + daily activity
--------------------------------------------------------------------------
create table if not exists public.activity (
  user_id uuid not null references auth.users(id) on delete cascade,
  day date not null default current_date,
  minutes int not null default 0,
  explains int not null default 0,
  quizzes int not null default 0,
  chats int not null default 0,
  cards_reviewed int not null default 0,
  primary key (user_id, day)
);
alter table public.activity enable row level security;
create policy "activity_owner" on public.activity for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

--------------------------------------------------------------------------
-- Storage: bucket for uploads (photos/PDFs). Created via Supabase UI or CLI.
--   insert into storage.buckets (id, name, public) values ('uploads','uploads', false);
-- RLS policy: users can only access their own path prefix `user_id/*`.
--------------------------------------------------------------------------

--------------------------------------------------------------------------
-- updated_at trigger helper
--------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

drop trigger if exists trg_profiles_updated on public.profiles;
create trigger trg_profiles_updated before update on public.profiles
  for each row execute function public.set_updated_at();

drop trigger if exists trg_chat_sessions_updated on public.chat_sessions;
create trigger trg_chat_sessions_updated before update on public.chat_sessions
  for each row execute function public.set_updated_at();
