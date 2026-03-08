-- ═══════════════════════════════════════════════════════════════
-- ProjectBridge Database Schema
-- PostgreSQL (Supabase)
-- Run this in Supabase SQL Editor to set up all tables
-- ═══════════════════════════════════════════════════════════════

-- Enable UUID generation
create extension if not exists "uuid-ossp";

-- ─── ENUMS ───────────────────────────────────────────────────

create type user_role as enum ('student', 'faculty', 'mentor', 'admin');
create type project_status as enum ('idea', 'recruiting', 'in_progress', 'paused', 'completed', 'archived');
create type time_commitment as enum ('light', 'steady', 'deep');
create type collab_request_status as enum ('pending', 'accepted', 'declined', 'withdrawn');
create type update_type as enum ('progress', 'reflection', 'milestone_hit', 'question', 'showcase');
create type milestone_status as enum ('upcoming', 'in_progress', 'completed', 'overdue');
create type wanted_ad_status as enum ('open', 'filled', 'closed');
create type member_role as enum ('lead', 'contributor', 'advisor');

-- ─── USERS ───────────────────────────────────────────────────

create table public.users (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  display_name text not null,
  avatar_url text,
  bio text default '',
  skills text[] default '{}',
  disciplines text[] default '{}',
  program_affiliation text[] default '{}',
  availability_hrs_week integer default 0,
  role user_role default 'student',
  profile_visibility boolean default true,
  created_at timestamptz default now(),
  last_active_at timestamptz default now()
);

-- ─── PROJECTS ────────────────────────────────────────────────

create table public.projects (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text unique not null,
  description text default '',
  problem_statement text default '',
  status project_status default 'idea',
  disciplines text[] default '{}',
  skills_needed text[] default '{}',
  time_commitment time_commitment default 'steady',
  max_collaborators integer default 5,
  owner_id uuid references public.users(id) on delete set null,
  program_id uuid,
  course_id text,
  quarter text,
  featured boolean default false,
  last_activity_at timestamptz default now(),
  created_at timestamptz default now()
);

create index idx_projects_status on public.projects(status);
create index idx_projects_owner on public.projects(owner_id);
create index idx_projects_slug on public.projects(slug);
create index idx_projects_featured on public.projects(featured) where featured = true;

-- ─── PROJECT MEMBERS ─────────────────────────────────────────

create table public.project_members (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references public.projects(id) on delete cascade not null,
  user_id uuid references public.users(id) on delete cascade not null,
  role member_role default 'contributor',
  joined_at timestamptz default now(),
  unique(project_id, user_id)
);

create index idx_members_project on public.project_members(project_id);
create index idx_members_user on public.project_members(user_id);

-- ─── COLLABORATOR REQUESTS ───────────────────────────────────

create table public.collaborator_requests (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references public.projects(id) on delete cascade not null,
  requester_id uuid references public.users(id) on delete cascade not null,
  message text default '',
  skills_offered text[] default '{}',
  hours_available integer default 0,
  status collab_request_status default 'pending',
  responded_at timestamptz,
  created_at timestamptz default now()
);

create index idx_requests_project on public.collaborator_requests(project_id);
create index idx_requests_requester on public.collaborator_requests(requester_id);

-- ─── PROJECT UPDATES (BUILD JOURNAL) ─────────────────────────

create table public.project_updates (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references public.projects(id) on delete cascade not null,
  author_id uuid references public.users(id) on delete set null,
  title text,
  body text not null,
  media_urls text[] default '{}',
  update_type update_type default 'progress',
  is_weekly_checkin boolean default false,
  created_at timestamptz default now()
);

create index idx_updates_project on public.project_updates(project_id);
create index idx_updates_author on public.project_updates(author_id);

-- ─── MILESTONES ──────────────────────────────────────────────

create table public.milestones (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references public.projects(id) on delete cascade not null,
  title text not null,
  description text default '',
  target_date date not null,
  completed_at timestamptz,
  status milestone_status default 'upcoming',
  "order" integer default 0
);

create index idx_milestones_project on public.milestones(project_id);

-- ─── WANTED ADS ──────────────────────────────────────────────

create table public.wanted_ads (
  id uuid primary key default uuid_generate_v4(),
  poster_id uuid references public.users(id) on delete cascade not null,
  project_id uuid references public.projects(id) on delete set null,
  title text not null,
  description text default '',
  skills_requested text[] default '{}',
  time_commitment time_commitment default 'steady',
  compensation text,
  status wanted_ad_status default 'open',
  expires_at date,
  created_at timestamptz default now()
);

create index idx_wanted_poster on public.wanted_ads(poster_id);
create index idx_wanted_status on public.wanted_ads(status);

-- ─── TAGS (NORMALIZED) ──────────────────────────────────────

create table public.tags (
  id uuid primary key default uuid_generate_v4(),
  name text unique not null,
  category text default 'skill' -- skill, discipline, interest
);

-- ─── NOTIFICATIONS ──────────────────────────────────────────

create table public.notifications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id) on delete cascade not null,
  type text not null, -- 'join_request', 'request_accepted', 'new_update', 'milestone_hit', 'pulse_check'
  title text not null,
  body text,
  link text,
  read boolean default false,
  created_at timestamptz default now()
);

create index idx_notifications_user on public.notifications(user_id);
create index idx_notifications_unread on public.notifications(user_id) where read = false;

-- ─── BADGES ─────────────────────────────────────────────────

create table public.badges (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id) on delete cascade not null,
  badge_type text not null, -- 'first_project', 'first_milestone', 'streak_7', 'streak_30', 'mentor'
  earned_at timestamptz default now()
);

create index idx_badges_user on public.badges(user_id);

-- ─── ROW LEVEL SECURITY ─────────────────────────────────────

alter table public.users enable row level security;
alter table public.projects enable row level security;
alter table public.project_members enable row level security;
alter table public.collaborator_requests enable row level security;
alter table public.project_updates enable row level security;
alter table public.milestones enable row level security;
alter table public.wanted_ads enable row level security;
alter table public.notifications enable row level security;
alter table public.badges enable row level security;

-- Public read for projects, users (where visible), updates, milestones, wanted ads
create policy "Public projects are viewable" on public.projects for select using (true);
create policy "Public profiles are viewable" on public.users for select using (profile_visibility = true);
create policy "Updates are viewable" on public.project_updates for select using (true);
create policy "Milestones are viewable" on public.milestones for select using (true);
create policy "Open wanted ads are viewable" on public.wanted_ads for select using (status = 'open');
create policy "Members are viewable" on public.project_members for select using (true);

-- Users can update their own profile
create policy "Users can update own profile" on public.users for update using (auth.uid() = id);

-- Project owners can manage their projects
create policy "Owners can update projects" on public.projects for update using (auth.uid() = owner_id);
create policy "Authenticated users can create projects" on public.projects for insert with check (auth.uid() = owner_id);

-- Members can create updates for their projects
create policy "Members can create updates" on public.project_updates for insert
  with check (
    auth.uid() = author_id
    and exists (
      select 1 from public.project_members
      where project_id = project_updates.project_id
      and user_id = auth.uid()
    )
  );

-- Users see their own notifications
create policy "Users see own notifications" on public.notifications for select using (auth.uid() = user_id);

-- ═══════════════════════════════════════════════════════════════
-- Done! Your ProjectBridge database is ready.
-- ═══════════════════════════════════════════════════════════════
