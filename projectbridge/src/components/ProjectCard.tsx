"use client";

import Link from "next/link";
import { Clock } from "lucide-react";
import { Project } from "@/lib/types";
import { statusConfig, timeLabel } from "@/lib/sample-data";

const emojiMap: Record<string, string> = {
  "Computer Science": "💻",
  "Biology": "🧬",
  "Environmental Science": "🌱",
  "Social Justice": "🌍",
  "Art & Design": "🎨",
  "Business": "📈",
  "Data Science": "📊",
  "Communication": "✍️",
};

function getEmoji(disciplines: string[]): string {
  for (const d of disciplines) {
    if (emojiMap[d]) return emojiMap[d];
  }
  return "🚀";
}

export default function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig(project.status);
  const emoji = getEmoji(project.disciplines);
  const memberCount = project.members?.length ?? 0;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-white border border-cloud rounded-card p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover hover:border-amber-500 relative overflow-hidden no-underline"
    >
      {/* Top accent bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <span className="text-[28px] leading-none">{emoji}</span>
        <span className={`text-[11px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full ${status.bg} ${status.text}`}>
          {status.label}
        </span>
      </div>

      {/* Title & description */}
      <h3 className="font-display font-bold text-[17px] leading-snug tracking-tight mb-2 text-ink">
        {project.title}
      </h3>
      <p className="text-sm text-slate leading-relaxed mb-3 line-clamp-2">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.skills_needed.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium bg-mist text-slate px-2.5 py-0.5 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-cloud pt-3">
        {/* Avatars */}
        <div className="flex -space-x-1.5">
          {project.members?.slice(0, 3).map((member) => (
            <div
              key={member.id}
              className="w-6 h-6 rounded-full border-2 border-white bg-teal-50 text-teal-600 flex items-center justify-center text-[10px] font-bold"
            >
              {member.user?.display_name?.[0] ?? "?"}
            </div>
          ))}
          {memberCount > 3 && (
            <div className="w-6 h-6 rounded-full border-2 border-white bg-mist text-slate flex items-center justify-center text-[10px] font-bold">
              +{memberCount - 3}
            </div>
          )}
        </div>

        {/* Time commitment */}
        <span className="flex items-center gap-1 text-xs text-slate">
          <Clock size={14} />
          {timeLabel(project.time_commitment)}
        </span>
      </div>
    </Link>
  );
}
