"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import WantedCard from "@/components/WantedCard";
import { sampleProjects, sampleWantedAds } from "@/lib/sample-data";

const disciplines = [
  "All",
  "Computer Science",
  "Biology",
  "Environmental Science",
  "Social Justice",
  "Art & Design",
  "Business",
  "Communication",
  "Data Science",
];

const statuses = ["All", "idea", "recruiting", "in_progress", "completed"];
const statusLabels: Record<string, string> = {
  All: "All Status",
  idea: "💡 Ideas",
  recruiting: "🤝 Recruiting",
  in_progress: "⚡ In Progress",
  completed: "✅ Completed",
};

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [discipline, setDiscipline] = useState("All");
  const [status, setStatus] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return sampleProjects.filter((p) => {
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.skills_needed.some((s) => s.toLowerCase().includes(query.toLowerCase()));

      const matchesDiscipline =
        discipline === "All" ||
        p.disciplines.includes(discipline);

      const matchesStatus = status === "All" || p.status === status;

      return matchesQuery && matchesDiscipline && matchesStatus;
    });
  }, [query, discipline, status]);

  return (
    <div className="px-5 md:px-10 py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Explore</p>
        <h1 className="section-title">Project Directory</h1>
        <p className="section-desc">
          Search across all campus projects. Filter by discipline, skills, or
          status.
        </p>

        {/* Search bar */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate/40"
            />
            <input
              type="text"
              placeholder="Search projects, skills, or keywords..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-card border border-cloud bg-white text-sm font-body text-ink placeholder:text-slate/40 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-3 rounded-card border border-cloud bg-white text-sm font-medium text-slate hover:border-amber-500 hover:text-amber-600 transition-all"
          >
            <SlidersHorizontal size={16} />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mb-6 p-4 bg-white border border-cloud rounded-card space-y-4 animate-fade-in-up">
            <div>
              <label className="text-xs font-semibold text-slate uppercase tracking-wide mb-2 block">
                Discipline
              </label>
              <div className="flex flex-wrap gap-2">
                {disciplines.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDiscipline(d)}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
                      discipline === d
                        ? "bg-amber-500 text-white border-amber-500"
                        : "bg-white text-slate border-cloud hover:border-amber-400"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate uppercase tracking-wide mb-2 block">
                Status
              </label>
              <div className="flex flex-wrap gap-2">
                {statuses.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatus(s)}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
                      status === s
                        ? "bg-amber-500 text-white border-amber-500"
                        : "bg-white text-slate border-cloud hover:border-amber-400"
                    }`}
                  >
                    {statusLabels[s]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results count */}
        <p className="text-sm text-slate mb-4">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""} found
          {discipline !== "All" && ` in ${discipline}`}
          {status !== "All" && ` · ${statusLabels[status]}`}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-cloud rounded-card">
            <p className="text-4xl mb-3">🔍</p>
            <h3 className="font-display font-bold text-lg mb-2">
              No projects found
            </h3>
            <p className="text-sm text-slate">
              Try different filters, or{" "}
              <a href="/create" className="text-amber-500 underline">
                post your own project
              </a>
              .
            </p>
          </div>
        )}

        {/* Wanted ads section */}
        <div className="mt-12">
          <h2 className="section-title text-xl">Wanted Ads</h2>
          <p className="text-sm text-slate mb-4">
            Students looking for specific skills and collaborators.
          </p>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {sampleWantedAds.map((ad) => (
              <WantedCard key={ad.id} ad={ad} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
