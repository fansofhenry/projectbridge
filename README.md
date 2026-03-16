# ProjectBridge 🌉

**A student-built collaboration platform for Foothill College — connecting students across disciplines to build real projects together.**

Live: [projectbridge-nine.vercel.app](https://projectbridge-nine.vercel.app)

---

## What is ProjectBridge?

ProjectBridge solves a structural problem at community colleges: students want to build real things but can't find collaborators, and student-led projects disappear when leaders graduate. We bridge that gap.

**Who it's for:** First-generation, international, and underrepresented students — especially those in MESA, Puente, Umoja, SLI, and ETI.

**What it does:**
- 📋 **Browse projects** across all disciplines (CS, biology, art, business, social justice)
- 🤖 **Match quiz** — 3 questions, personalized project recommendations
- 📢 **Wanted ads** — post specific skill requests
- ✍️ **Post your own idea** and recruit collaborators in under 2 minutes
- 🏛️ **Institutional memory** — project history survives when students graduate
- ❤️ **Support page** — sponsor tiers, mentoring, and partnership info

---

## Student Research Findings

Four barriers were identified through interviews across MESA, Puente, and Umoja:

| # | Barrier | Description |
|---|---------|-------------|
| 01 | High Demand, Low Access | SLI internship spots are limited; students are rejected by capacity, not effort |
| 02 | The Time Tax | 3 heavy classes leave no time to discover opportunities that aren't surfaced |
| 03 | The Chaos Factor | Club projects lack briefs; students show up once, get lost, and disappear |
| 04 | The Graveyard Effect | When a student leader graduates, all momentum and context disappears |

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | Supabase (PostgreSQL + RLS) |
| Deployment | Vercel |
| Icons | Lucide React |

**Design system:** Amber `#E8850C` · Teal `#0D7377` · Ink `#1A1A2E` · Fraunces (display) + DM Sans (body)

---

## Getting Started

```bash
git clone https://github.com/fansofhenry/projectbridge.git
cd projectbridge
npm install
```

Copy the environment template:

```bash
cp .env.example .env.local
```

Add your Supabase keys to `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> **No database yet?** The app runs on seed data by default — no Supabase setup required for local dev.

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## Database Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor**
3. Paste and run the contents of `supabase/schema.sql`
4. Copy your project URL and anon key into `.env.local`

Row Level Security is configured to allow public reads and inserts while restricting updates/deletes to the service role.

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── projects/             # Project listing + detail pages
│   ├── match/                # Match quiz
│   ├── create/               # Post a project
│   ├── wanted/               # Wanted ads
│   ├── support/              # Support & sponsorship
│   └── api/projects/         # REST API routes
├── components/
│   ├── TopNav.tsx            # Desktop nav + mobile hamburger
│   ├── BottomNav.tsx         # Mobile tab bar
│   ├── ProjectCard.tsx       # Project card component
│   ├── WantedCard.tsx        # Wanted ad card
│   ├── JoinRequestModal.tsx  # Join request flow
│   ├── MilestoneTimeline.tsx # Project milestone display
│   └── Reveal.tsx            # Scroll animation wrapper
└── lib/
    ├── types.ts              # TypeScript interfaces
    ├── supabase.ts           # DB client singleton
    └── sample-data.ts        # Seed data + helper functions
```

---

## Contributing

This is an open-source student project. Contributions welcome — especially:

- 🤖 **ML matching engine** (Cris is leading this — see issues)
- 🔔 **Notifications** when new projects are posted
- 📱 **PWA support** for mobile home screen install
- 🔐 **Auth flow** (Supabase Auth integration)

**To contribute:**
1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Push and open a PR

---

## Team & Acknowledgments

Built by students in **Foothill MESA** as part of the ProjectBridge initiative.

- **Henry** — Product & design lead
- **Cris** — ML/matching engine
- Faculty advisors: Karl, Ron, Sophia

Funded by **SLI** and **MESA** at Foothill College.

---

## Support This Project

ProjectBridge is free for all students. If you're a company, faculty member, or community partner who wants to help sustain it:

👉 [See support options](https://projectbridge-nine.vercel.app/support)

---

*Built by students, for students. © 2026 Foothill College MESA.*
