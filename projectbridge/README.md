# ProjectBridge

**Where Foothill Students Build Together**

*connect · build · launch · grow*

A next-generation project-based learning platform for community colleges. Students discover, join, lead, and document meaningful projects — turning their college experience into a portfolio of real work.

## Quick Start

### 1. Clone & install

```bash
git clone https://github.com/fansofhenry/projectbridge.git
cd projectbridge
npm install
```

### 2. Set up Supabase

1. Create a free project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run `supabase/schema.sql` to create all tables
3. Copy `.env.local.example` to `.env.local` and fill in your Supabase URL and anon key:

```bash
cp .env.local.example .env.local
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Deploy to Vercel

```bash
npx vercel
```

Or connect the repo at [vercel.com](https://vercel.com) for automatic deploys.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL + Auth + Storage)
- **Hosting:** Vercel
- **Language:** TypeScript

## Project Structure

```
projectbridge/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with nav
│   │   ├── page.tsx            # Homepage / live feed
│   │   ├── globals.css         # Tailwind imports + custom styles
│   │   ├── projects/
│   │   │   ├── page.tsx        # Project directory with search & filters
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Project detail page
│   │   ├── create/
│   │   │   └── page.tsx        # 3-step project creation wizard
│   │   ├── wanted/
│   │   │   └── page.tsx        # Wanted ads marketplace
│   │   └── profile/
│   │       └── page.tsx        # Student profile
│   ├── components/
│   │   ├── TopNav.tsx          # Desktop navigation
│   │   ├── BottomNav.tsx       # Mobile tab bar
│   │   ├── ProjectCard.tsx     # Project card component
│   │   ├── WantedCard.tsx      # Wanted ad card
│   │   └── MilestoneTimeline.tsx
│   └── lib/
│       ├── supabase.ts         # Supabase client
│       ├── types.ts            # TypeScript type definitions
│       └── sample-data.ts      # Demo data (before Supabase connected)
├── supabase/
│   └── schema.sql              # Full database schema
├── public/                     # Static assets
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Data Models

The schema includes 9 tables:

| Table | Purpose |
|-------|---------|
| `users` | Student/faculty profiles with skills, disciplines, availability |
| `projects` | Projects with status, disciplines, time commitment |
| `project_members` | Links users to projects with roles (lead/contributor/advisor) |
| `collaborator_requests` | Join requests from students |
| `project_updates` | Build journal entries (weekly updates, reflections) |
| `milestones` | Project milestones with status tracking |
| `wanted_ads` | Skill-specific collaboration requests |
| `notifications` | System notifications |
| `badges` | Achievement badges |

## Roadmap

- [x] Phase 0: Project setup, data models, mobile-first layout
- [ ] Phase 1: Core loop — create, discover, join projects
- [ ] Phase 2: Engagement — weekly check-ins, build journals, milestones
- [ ] Phase 3: Community — learning community pages, archive, mentorship
- [ ] Phase 4: AI — project matching, documentation copilot, portfolio generator
- [ ] Phase 5: Scale — multi-college, institutional admin, LMS integration

## Built for

Foothill College students, faculty, and learning communities — including SLI, MESA, Puente, Umoja, and ETI.

## License

MIT

---

*Built by students, for students.*
