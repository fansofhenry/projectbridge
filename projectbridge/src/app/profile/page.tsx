"use client";

import Link from "next/link";
import { MapPin, Clock, ExternalLink, Calendar } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { sampleProjects } from "@/lib/sample-data";

// Demo profile — will be replaced with auth user data
const profile = {
  display_name: "Henry F.",
  email: "henry@student.fhda.edu",
  bio: "CS student at Foothill. Passionate about using tech to improve student experiences. Building ProjectBridge to help every student find their project.",
  skills: ["Python", "React", "AI/ML", "Product Design"],
  disciplines: ["Computer Science", "Data Science"],
  program_affiliation: ["ETI"],
  availability_hrs_week: 8,
  projects_count: 3,
  contributions_count: 12,
  member_since: "January 2026",
};

export default function ProfilePage() {
  const myProjects = sampleProjects.filter(
    (p) => p.owner_id === "u7" || p.members?.some((m) => m.user_id === "u7")
  );

  return (
    <div className="px-5 md:px-10 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        {/* Profile header */}
        <div className="bg-white border border-cloud rounded-card p-6 md:p-8 mb-6">
          <div className="flex items-start gap-5">
            {/* Avatar */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber-500 text-white flex items-center justify-center text-2xl md:text-3xl font-display font-bold shrink-0">
              {profile.display_name[0]}
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="font-display font-bold text-2xl tracking-tight">
                {profile.display_name}
              </h1>
              <p className="text-sm text-slate mt-1 leading-relaxed">
                {profile.bio}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-3 mt-3 text-xs text-slate">
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-amber-500" />
                  Foothill College
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} className="text-amber-500" />
                  {profile.availability_hrs_week} hrs/wk available
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} className="text-amber-500" />
                  Since {profile.member_since}
                </span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {profile.skills.map((s) => (
              <span
                key={s}
                className="text-xs font-medium bg-mist text-slate px-3 py-1 rounded-full"
              >
                {s}
              </span>
            ))}
            {profile.disciplines.map((d) => (
              <span
                key={d}
                className="text-xs font-medium bg-teal-50 text-teal-600 px-3 py-1 rounded-full"
              >
                {d}
              </span>
            ))}
            {profile.program_affiliation.map((p) => (
              <span
                key={p}
                className="text-xs font-medium bg-amber-100 text-amber-700 px-3 py-1 rounded-full"
              >
                {p}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-cloud pt-5">
            <div className="text-center">
              <p className="font-display font-bold text-xl text-amber-500">
                {profile.projects_count}
              </p>
              <p className="text-xs text-slate">Projects</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-xl text-amber-500">
                {profile.contributions_count}
              </p>
              <p className="text-xs text-slate">Updates</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-xl text-amber-500">
                2
              </p>
              <p className="text-xs text-slate">Milestones hit</p>
            </div>
          </div>
        </div>

        {/* Projects section */}
        <h2 className="font-display font-bold text-lg mb-4">My Projects</h2>

        {myProjects.length > 0 ? (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {myProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-dashed border-cloud rounded-card p-10 text-center">
            <p className="text-3xl mb-3">🚀</p>
            <h3 className="font-display font-bold text-lg mb-2">
              Your journey starts here
            </h3>
            <p className="text-sm text-slate mb-5 max-w-sm mx-auto">
              Join an existing project or post your own idea. Every contribution
              shows up on your profile.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/projects" className="btn-primary">
                Browse projects
              </Link>
              <Link href="/create" className="btn-secondary">
                Post your idea
              </Link>
            </div>
          </div>
        )}

        {/* Portfolio export hint */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-card p-5 flex gap-3 items-start">
          <span className="text-xl">💼</span>
          <div>
            <h3 className="text-sm font-semibold mb-1">
              Coming soon: Portfolio Export
            </h3>
            <p className="text-xs text-slate leading-relaxed">
              Your build journal entries will compile into a polished case study
              you can share with employers and transfer applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
