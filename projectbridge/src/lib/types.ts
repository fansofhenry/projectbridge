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
  poster?: User;
}
