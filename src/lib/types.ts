// ─── Enums ───────────────────────────────────────────────

export type ProjectStatus =
  | "idea"
  | "recruiting"
  | "in_progress"
  | "paused"
  | "completed"
  | "archived";

export type TimeCommitment = "light" | "steady" | "deep";

export type UserRole = "student" | "faculty" | "mentor" | "admin";

export type CollabRequestStatus = "pending" | "accepted" | "declined" | "withdrawn";

export type UpdateType = "progress" | "reflection" | "milestone_hit" | "question" | "showcase";

export type MilestoneStatus = "upcoming" | "in_progress" | "completed" | "overdue";

export type WantedAdStatus = "open" | "filled" | "closed";

export type MemberRole = "lead" | "contributor" | "advisor";

/**
 * solo_seeker  — "I'm going to [event] alone, looking for a team before it starts"
 * skill_request — standard "I need someone with X skill for my project"
 * event_continuation — "Our [event] team wants to keep going, need more people"
 */
export type WantedAdType = "skill_request" | "solo_seeker" | "event_continuation";

// ─── Models ──────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  display_name: string;
  avatar_url: string | null;
  bio: string;
  skills: string[];
  disciplines: string[];
  program_affiliation: string[];
  availability_hrs_week: number;
  role: UserRole;
  profile_visibility: boolean;
  created_at: string;
  last_active_at: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  problem_statement: string;
  status: ProjectStatus;
  disciplines: string[];
  skills_needed: string[];
  time_commitment: TimeCommitment;
  max_collaborators: number;
  owner_id: string;
  program_id: string | null;
  course_id: string | null;
  quarter: string;
  featured: boolean;
  last_activity_at: string;
  created_at: string;
  /** Name of the campus event this project originated from, if any */
  event_origin?: string;
  /** Whether the team placed in the competition (top 3) */
  event_placed?: boolean;
  // Joined fields
  owner?: User;
  members?: ProjectMember[];
  milestones?: Milestone[];
  updates?: ProjectUpdate[];
}

export interface ProjectMember {
  id: string;
  project_id: string;
  user_id: string;
  role: MemberRole;
  joined_at: string;
  user?: User;
}

export interface CollaboratorRequest {
  id: string;
  project_id: string;
  requester_id: string;
  message: string;
  skills_offered: string[];
  hours_available: number;
  status: CollabRequestStatus;
  responded_at: string | null;
  created_at: string;
}

export interface ProjectUpdate {
  id: string;
  project_id: string;
  author_id: string;
  title: string | null;
  body: string;
  media_urls: string[];
  update_type: UpdateType;
  is_weekly_checkin: boolean;
  created_at: string;
  author?: User;
}

export interface Milestone {
  id: string;
  project_id: string;
  title: string;
  description: string;
  target_date: string;
  completed_at: string | null;
  status: MilestoneStatus;
  order: number;
}

export interface WantedAd {
  id: string;
  poster_id: string;
  project_id: string | null;
  title: string;
  description: string;
  skills_requested: string[];
  time_commitment: TimeCommitment;
  compensation: string | null;
  status: WantedAdStatus;
  expires_at: string;
  created_at: string;
  /** The type of ad — skill request, solo event seeker, or event continuation */
  ad_type?: WantedAdType;
  /** Event name for solo_seeker and event_continuation ads */
  event_name?: string;
  /** Date of the upcoming event for solo_seeker ads */
  event_date?: string;
  poster?: User;
}

// ─── Campus Events ────────────────────────────────────────

export interface CampusEvent {
  id: string;
  name: string;
  short_name: string;
  description: string;
  organizer: string;
  url?: string;
  upcoming_date?: string;
  frequency: string;
  disciplines: string[];
  emoji: string;
  color: string; // tailwind bg class
  accent: string; // tailwind text class
}
