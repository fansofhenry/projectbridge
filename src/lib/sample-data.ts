import { Project, WantedAd } from "./types";

export const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Food Insecurity Dashboard",
    slug: "food-insecurity-dashboard",
    description:
      "Mapping access to Panther Pantry and CalFresh resources with interactive data visualization. We're building a tool that helps students find food assistance quickly and helps administrators understand where gaps exist on campus.",
    problem_statement:
      "Many students don't know about available food resources on campus. We need a visual, accessible way to surface this information.",
    status: "in_progress",
    disciplines: ["Computer Science", "Social Justice"],
    skills_needed: ["Python", "Data Visualization", "UI Design"],
    time_commitment: "steady",
    max_collaborators: 5,
    owner_id: "u1",
    program_id: null,
    course_id: "CS 3A",
    quarter: "Spring 2026",
    featured: true,
    last_activity_at: "2026-03-06T18:30:00Z",
    created_at: "2026-01-15T10:00:00Z",
    event_origin: "KCI Innovation Challenge",
    event_placed: false,
    members: [
      { id: "m1", project_id: "1", user_id: "u1", role: "lead", joined_at: "2026-01-15T10:00:00Z", user: { id: "u1", email: "maria@student.fhda.edu", display_name: "Maria R.", avatar_url: null, bio: "", skills: ["Python", "Pandas"], disciplines: ["CS"], program_affiliation: ["MESA"], availability_hrs_week: 5, role: "student", profile_visibility: true, created_at: "", last_active_at: "" } },
      { id: "m2", project_id: "1", user_id: "u2", role: "contributor", joined_at: "2026-01-20T10:00:00Z", user: { id: "u2", email: "jose@student.fhda.edu", display_name: "José L.", avatar_url: null, bio: "", skills: ["JavaScript", "React"], disciplines: ["CS"], program_affiliation: [], availability_hrs_week: 3, role: "student", profile_visibility: true, created_at: "", last_active_at: "" } },
      { id: "m3", project_id: "1", user_id: "u3", role: "contributor", joined_at: "2026-02-01T10:00:00Z", user: { id: "u3", email: "aisha@student.fhda.edu", display_name: "Aisha K.", avatar_url: null, bio: "", skills: ["Design", "Figma"], disciplines: ["Art & Design"], program_affiliation: ["Umoja"], availability_hrs_week: 2, role: "student", profile_visibility: true, created_at: "", last_active_at: "" } },
    ],
    milestones: [
      { id: "ms1", project_id: "1", title: "Data collection complete", description: "Gather all CalFresh and Pantry location data", target_date: "2026-02-01", completed_at: "2026-01-28T00:00:00Z", status: "completed", order: 1 },
      { id: "ms2", project_id: "1", title: "Interactive map prototype", description: "Build first interactive map with filters", target_date: "2026-03-01", completed_at: "2026-03-02T00:00:00Z", status: "completed", order: 2 },
      { id: "ms3", project_id: "1", title: "User testing with students", description: "Test with 10 students for usability feedback", target_date: "2026-03-15", completed_at: null, status: "in_progress", order: 3 },
      { id: "ms4", project_id: "1", title: "Launch on campus", description: "Deploy and share with student services", target_date: "2026-04-01", completed_at: null, status: "upcoming", order: 4 },
    ],
  },
  {
    id: "2",
    title: "CRISPR Explainer Series",
    slug: "crispr-explainer-series",
    description:
      "Creating accessible animated explainers to make gene-editing science approachable for everyone. Short-form videos that break down CRISPR technology for non-science students.",
    problem_statement:
      "Gene editing is transforming medicine but most students have no idea how it works. We want to demystify CRISPR through engaging visual storytelling.",
    status: "recruiting",
    disciplines: ["Biology", "Art & Design", "Communication"],
    skills_needed: ["Animation", "Science Writing", "Video Editing"],
    time_commitment: "light",
    max_collaborators: 4,
    owner_id: "u4",
    program_id: null,
    course_id: null,
    quarter: "Spring 2026",
    featured: false,
    last_activity_at: "2026-03-04T14:00:00Z",
    created_at: "2026-02-10T09:00:00Z",
    event_origin: "RSLS Research Program",
    event_placed: false,
    members: [
      { id: "m4", project_id: "2", user_id: "u4", role: "lead", joined_at: "2026-02-10T09:00:00Z", user: { id: "u4", email: "sam@student.fhda.edu", display_name: "Sam T.", avatar_url: null, bio: "", skills: ["Biology", "Writing"], disciplines: ["Science"], program_affiliation: ["SLI"], availability_hrs_week: 3, role: "student", profile_visibility: true, created_at: "", last_active_at: "" } },
      { id: "m5", project_id: "2", user_id: "u5", role: "contributor", joined_at: "2026-02-15T09:00:00Z", user: { id: "u5", email: "alex@student.fhda.edu", display_name: "Alex P.", avatar_url: null, bio: "", skills: ["After Effects", "Illustration"], disciplines: ["Art & Design"], program_affiliation: [], availability_hrs_week: 2, role: "student", profile_visibility: true, created_at: "", last_active_at: "" } },
    ],
    milestones: [
      { id: "ms5", project_id: "2", title: "Script for Episode 1", description: "Write and review script for 'What is CRISPR?'", target_date: "2026-03-10", completed_at: null, status: "in_progress", order: 1 },
      { id: "ms6", project_id: "2", title: "Storyboard complete", description: "Create storyboard and visual style guide", target_date: "2026-03-25", completed_at: null, status: "upcoming", order: 2 },
    ],
  },
  {
    id: "3",
    title: "Campus Sustainability Tracker",
    slug: "campus-sustainability-tracker",
    description:
      "A mobile app tracking waste, energy, and water use across campus with real-time student reporting. Think citizen science meets campus sustainability.",
    problem_statement:
      "Foothill has sustainability goals but no student-facing way to track or contribute to progress.",
    status: "recruiting",
    disciplines: ["Computer Science", "Environmental Science"],
    skills_needed: ["React Native", "Node.js", "Data Analysis"],
    time_commitment: "steady",
    max_collaborators: 6,
    owner_id: "u6",
    program_id: null,
    course_id: null,
    quarter: "Spring 2026",
    featured: false,
    last_activity_at: "2026-03-07T11:00:00Z",
    created_at: "2026-02-20T08:00:00Z",
    members: [
      { id: "m6", project_id: "3", user_id: "u6", role: "lead", joined_at: "2026-02-20T08:00:00Z", user: { id: "u6", email: "kai@student.fhda.edu", display_name: "Kai N.", avatar_url: null, bio: "", skills: ["React", "Node.js"], disciplines: ["CS"], program_affiliation: ["ETI"], availability_hrs_week: 6, role: "student", profile_visibility: true, created_at: "", last_active_at: "" } },
    ],
    milestones: [
      { id: "ms7", project_id: "3", title: "Research & wireframes", description: "Research campus sustainability data and create app wireframes", target_date: "2026-03-15", completed_at: null, status: "in_progress", order: 1 },
    ],
  },
  {
    id: "4",
    title: "Student-Project Matching Engine",
    slug: "student-project-matching-engine",
    description:
      "AI-powered tool that matches students to projects based on skills, interests, and availability. Building the recommendation engine that powers ProjectBridge itself.",
    problem_statement:
      "Students don't know which projects fit them. We need smart matching to reduce friction.",
    status: "idea",
    disciplines: ["Computer Science", "Data Science"],
    skills_needed: ["Python", "Machine Learning", "API Design"],
    time_commitment: "deep",
    max_collaborators: 3,
    owner_id: "u7",
    program_id: null,
    course_id: null,
    quarter: "Spring 2026",
    featured: false,
    last_activity_at: "2026-03-01T16:00:00Z",
    created_at: "2026-03-01T16:00:00Z",
    members: [
      { id: "m7", project_id: "4", user_id: "u7", role: "lead", joined_at: "2026-03-01T16:00:00Z", user: { id: "u7", email: "henry@student.fhda.edu", display_name: "Henry F.", avatar_url: null, bio: "", skills: ["Python", "AI/ML"], disciplines: ["CS"], program_affiliation: [], availability_hrs_week: 8, role: "student", profile_visibility: true, created_at: "", last_active_at: "" } },
    ],
    milestones: [],
  },
  {
    id: "5",
    title: "First-Gen Resume Builder",
    slug: "first-gen-resume-builder",
    description:
      "A tool that helps first-generation college students translate campus experience — clubs, projects, volunteering — into professional resume language.",
    problem_statement:
      "First-gen students often undersell their experience because they don't know how to frame it professionally.",
    status: "in_progress",
    disciplines: ["Computer Science", "Business", "Communication"],
    skills_needed: ["React", "UX Design", "Career Coaching"],
    time_commitment: "steady",
    max_collaborators: 4,
    owner_id: "u8",
    program_id: null,
    course_id: null,
    quarter: "Spring 2026",
    featured: true,
    last_activity_at: "2026-03-07T09:00:00Z",
    created_at: "2026-01-20T14:00:00Z",
    event_origin: "Startup Club Pitch Night",
    event_placed: false,
    members: [
      { id: "m8", project_id: "5", user_id: "u8", role: "lead", joined_at: "2026-01-20T14:00:00Z", user: { id: "u8", email: "priya@student.fhda.edu", display_name: "Priya M.", avatar_url: null, bio: "", skills: ["React", "TypeScript"], disciplines: ["CS", "Business"], program_affiliation: ["Puente"], availability_hrs_week: 4, role: "student", profile_visibility: true, created_at: "", last_active_at: "" } },
      { id: "m9", project_id: "5", user_id: "u9", role: "contributor", joined_at: "2026-02-01T14:00:00Z", user: { id: "u9", email: "cris@student.fhda.edu", display_name: "Cris V.", avatar_url: null, bio: "", skills: ["UX Design", "User Research"], disciplines: ["Art & Design"], program_affiliation: [], availability_hrs_week: 3, role: "student", profile_visibility: true, created_at: "", last_active_at: "" } },
    ],
    milestones: [
      { id: "ms8", project_id: "5", title: "MVP with 3 templates", description: "Build basic resume builder with 3 templates", target_date: "2026-02-15", completed_at: "2026-02-18T00:00:00Z", status: "completed", order: 1 },
      { id: "ms9", project_id: "5", title: "AI phrase suggestions", description: "Integrate AI to suggest professional phrasing", target_date: "2026-03-15", completed_at: null, status: "in_progress", order: 2 },
    ],
  },
  // ── Event-origin projects ──────────────────────────────
  {
    id: "6",
    title: "Peer Mental Health Check-In App",
    slug: "peer-mental-health-checkin",
    description:
      "An anonymous, low-barrier daily check-in app that connects struggling students to peer support volunteers. Started as a case at Google Case Competition — we didn't place but we're not done.",
    problem_statement:
      "Students in crisis don't reach out because formal counseling feels intimidating. Peer support at scale is the gap.",
    status: "recruiting",
    disciplines: ["Computer Science", "Social Justice", "Communication"],
    skills_needed: ["React", "Mobile Development", "UX Research"],
    time_commitment: "steady",
    max_collaborators: 5,
    owner_id: "u10",
    program_id: null,
    course_id: null,
    quarter: "Spring 2026",
    featured: false,
    last_activity_at: "2026-03-10T10:00:00Z",
    created_at: "2026-03-01T10:00:00Z",
    event_origin: "Google Case Competition",
    event_placed: false,
    members: [
      { id: "m10", project_id: "6", user_id: "u10", role: "lead", joined_at: "2026-03-01T10:00:00Z", user: { id: "u10", email: "dana@student.fhda.edu", display_name: "Dana W.", avatar_url: null, bio: "", skills: ["React", "Node.js"], disciplines: ["CS", "Social Justice"], program_affiliation: ["MESA"], availability_hrs_week: 5, role: "student", profile_visibility: true, created_at: "", last_active_at: "" } },
      { id: "m11", project_id: "6", user_id: "u11", role: "contributor", joined_at: "2026-03-02T10:00:00Z", user: { id: "u11", email: "teo@student.fhda.edu", display_name: "Teo A.", avatar_url: null, bio: "", skills: ["UX Research", "Figma"], disciplines: ["Art & Design"], program_affiliation: [], availability_hrs_week: 3, role: "student", profile_visibility: true, created_at: "", last_active_at: "" } },
    ],
    milestones: [
      { id: "ms10", project_id: "6", title: "Problem validation interviews", description: "Interview 15 students about mental health help-seeking barriers", target_date: "2026-03-20", completed_at: null, status: "in_progress", order: 1 },
      { id: "ms11", project_id: "6", title: "Lo-fi prototype", description: "Design core check-in and match flows", target_date: "2026-04-05", completed_at: null, status: "upcoming", order: 2 },
    ],
  },
  {
    id: "7",
    title: "Micro-Scholarship Matching Platform",
    slug: "micro-scholarship-platform",
    description:
      "A platform connecting local businesses with community college students for micro-scholarships tied to specific skills or projects. Came out of an Enactus social impact sprint.",
    problem_statement:
      "Thousands of small scholarships go unclaimed each year because students don't know they exist. We want to fix the discovery problem.",
    status: "idea",
    disciplines: ["Business", "Computer Science", "Social Justice"],
    skills_needed: ["Next.js", "Business Development", "Copywriting"],
    time_commitment: "steady",
    max_collaborators: 4,
    owner_id: "u12",
    program_id: null,
    course_id: null,
    quarter: "Spring 2026",
    featured: false,
    last_activity_at: "2026-03-05T15:00:00Z",
    created_at: "2026-03-05T15:00:00Z",
    event_origin: "Enactus Social Innovation",
    event_placed: false,
    members: [
      { id: "m12", project_id: "7", user_id: "u12", role: "lead", joined_at: "2026-03-05T15:00:00Z", user: { id: "u12", email: "lin@student.fhda.edu", display_name: "Lin C.", avatar_url: null, bio: "", skills: ["Business", "Research"], disciplines: ["Business"], program_affiliation: ["Enactus"], availability_hrs_week: 4, role: "student", profile_visibility: true, created_at: "", last_active_at: "" } },
    ],
    milestones: [],
  },
  {
    id: "8",
    title: "Campus Emergency Preparedness Guide",
    slug: "campus-emergency-prep",
    description:
      "An interactive, multilingual emergency preparedness resource built specifically for Foothill students — covering earthquakes, wildfires, and campus-specific protocols.",
    problem_statement:
      "International and first-gen students are least likely to know emergency procedures. Existing guides are PDFs written for administrators, not students.",
    status: "recruiting",
    disciplines: ["Social Justice", "Communication", "Computer Science"],
    skills_needed: ["Translation", "Web Development", "Graphic Design"],
    time_commitment: "light",
    max_collaborators: 6,
    owner_id: "u13",
    program_id: null,
    course_id: null,
    quarter: "Spring 2026",
    featured: false,
    last_activity_at: "2026-03-08T13:00:00Z",
    created_at: "2026-02-28T13:00:00Z",
    event_origin: "KCI Innovation Challenge",
    event_placed: true,
    members: [
      { id: "m13", project_id: "8", user_id: "u13", role: "lead", joined_at: "2026-02-28T13:00:00Z", user: { id: "u13", email: "yuki@student.fhda.edu", display_name: "Yuki S.", avatar_url: null, bio: "", skills: ["HTML", "CSS", "Japanese"], disciplines: ["CS", "Communication"], program_affiliation: [], availability_hrs_week: 4, role: "student", profile_visibility: true, created_at: "", last_active_at: "" } },
      { id: "m14", project_id: "8", user_id: "u14", role: "contributor", joined_at: "2026-03-01T13:00:00Z", user: { id: "u14", email: "fatima@student.fhda.edu", display_name: "Fatima O.", avatar_url: null, bio: "", skills: ["Arabic", "Graphic Design"], disciplines: ["Art & Design"], program_affiliation: ["MESA"], availability_hrs_week: 3, role: "student", profile_visibility: true, created_at: "", last_active_at: "" } },
    ],
    milestones: [
      { id: "ms12", project_id: "8", title: "English content complete", description: "Write all core emergency protocol content", target_date: "2026-03-25", completed_at: null, status: "in_progress", order: 1 },
      { id: "ms13", project_id: "8", title: "Spanish + Mandarin translation", description: "Translate full guide into Spanish and Mandarin", target_date: "2026-04-10", completed_at: null, status: "upcoming", order: 2 },
    ],
  },
];

export const sampleWantedAds: WantedAd[] = [
  {
    id: "w1",
    poster_id: "u8",
    project_id: "5",
    title: "UX Designer for First-Gen Resume Builder",
    description:
      "Need someone with an eye for design to help polish our resume builder UI. Experience with Figma or similar tools a plus. This is a meaningful project that directly helps students.",
    skills_requested: ["UI Design", "Figma", "User Research"],
    time_commitment: "light",
    compensation: "volunteer",
    status: "open",
    expires_at: "2026-04-15",
    created_at: "2026-03-01T10:00:00Z",
    ad_type: "skill_request",
  },
  {
    id: "w2",
    poster_id: "u6",
    project_id: "3",
    title: "Data Analyst for Campus Sustainability",
    description:
      "Working on analyzing campus energy and waste data. Need help with pandas, matplotlib, and possibly building a simple dashboard.",
    skills_requested: ["Python", "Pandas", "Data Visualization"],
    time_commitment: "light",
    compensation: "volunteer",
    status: "open",
    expires_at: "2026-04-01",
    created_at: "2026-03-03T14:00:00Z",
    ad_type: "skill_request",
  },
  {
    id: "w3",
    poster_id: "u4",
    project_id: "2",
    title: "Animator for CRISPR Explainer Videos",
    description:
      "Looking for someone who can create short animated sequences explaining gene editing. After Effects, Blender, or even good hand-drawn animation welcome.",
    skills_requested: ["Animation", "After Effects", "Illustration"],
    time_commitment: "steady",
    compensation: "course credit",
    status: "open",
    expires_at: "2026-04-20",
    created_at: "2026-03-05T11:00:00Z",
    ad_type: "skill_request",
  },
  {
    id: "w4",
    poster_id: "u7",
    project_id: null,
    title: "Co-founder for Tutoring Marketplace App",
    description:
      "I have the idea and some wireframes for a peer tutoring marketplace for community college students. Looking for a technical co-founder who can build the MVP with me.",
    skills_requested: ["React", "Node.js", "Mobile Development"],
    time_commitment: "deep",
    compensation: "volunteer",
    status: "open",
    expires_at: "2026-05-01",
    created_at: "2026-03-06T16:00:00Z",
    ad_type: "skill_request",
  },
  // ── Solo seekers ─────────────────────────────────────────
  {
    id: "w5",
    poster_id: "u15",
    project_id: null,
    title: "Looking for a team — Innovation Challenge, Spring 2026",
    description:
      "I'm a business student with a solid idea around affordable student housing tools but I'm going in solo. Looking for 1-2 people (ideally a developer and a designer) to form a team before the event.",
    skills_requested: ["Web Development", "UI/UX Design"],
    time_commitment: "light",
    compensation: null,
    status: "open",
    expires_at: "2026-04-10",
    created_at: "2026-03-08T09:00:00Z",
    ad_type: "solo_seeker",
    event_name: "KCI Innovation Challenge",
    event_date: "April 18, 2026",
  },
  {
    id: "w6",
    poster_id: "u16",
    project_id: null,
    title: "Solo at Google Case Comp — want teammates",
    description:
      "CS student, strong with data and Python. Signed up for Google Case Comp but my group fell through. Excited to work on any case — just need people who are equally serious about it.",
    skills_requested: ["Business Strategy", "Presentation", "Marketing"],
    time_commitment: "light",
    compensation: null,
    status: "open",
    expires_at: "2026-04-05",
    created_at: "2026-03-09T12:00:00Z",
    ad_type: "solo_seeker",
    event_name: "Google Case Competition",
    event_date: "April 26, 2026",
  },
  // ── Event continuation ────────────────────────────────────
  {
    id: "w7",
    poster_id: "u10",
    project_id: "6",
    title: "Continuing our Mental Health App after Case Comp",
    description:
      "Our Google Case Comp team didn't place but we believe in the idea. We're rebuilding as a real product and need a mobile dev to join. The core 2 of us are staying committed.",
    skills_requested: ["React Native", "Mobile Development"],
    time_commitment: "steady",
    compensation: "volunteer",
    status: "open",
    expires_at: "2026-05-01",
    created_at: "2026-03-10T10:00:00Z",
    ad_type: "event_continuation",
    event_name: "Google Case Competition",
  },
  {
    id: "w8",
    poster_id: "u12",
    project_id: "7",
    title: "Enactus sprint team keeping the momentum",
    description:
      "We built a micro-scholarship concept at Enactus and want to keep going. Looking for someone who can help us validate the business model and potentially build a simple MVP.",
    skills_requested: ["Business Development", "Next.js"],
    time_commitment: "light",
    compensation: "volunteer",
    status: "open",
    expires_at: "2026-04-30",
    created_at: "2026-03-07T15:00:00Z",
    ad_type: "event_continuation",
    event_name: "Enactus Social Innovation",
  },
];

// Helper to get time commitment label
export function timeLabel(tc: string): string {
  switch (tc) {
    case "light": return "1-2 hrs/wk";
    case "steady": return "3-5 hrs/wk";
    case "deep": return "6+ hrs/wk";
    default: return tc;
  }
}

// Helper to get status display
export function statusConfig(status: string) {
  switch (status) {
    case "idea": return { label: "Idea", bg: "bg-amber-100", text: "text-amber-700" };
    case "recruiting": return { label: "Recruiting", bg: "bg-green-50", text: "text-green-700" };
    case "in_progress": return { label: "In Progress", bg: "bg-teal-50", text: "text-teal-600" };
    case "paused": return { label: "Paused", bg: "bg-yellow-50", text: "text-yellow-700" };
    case "completed": return { label: "Completed", bg: "bg-gray-100", text: "text-gray-600" };
    case "archived": return { label: "Archived", bg: "bg-gray-100", text: "text-gray-500" };
    default: return { label: status, bg: "bg-gray-100", text: "text-gray-600" };
  }
}

export const eventOriginProjects = sampleProjects.filter((p) => p.event_origin);
