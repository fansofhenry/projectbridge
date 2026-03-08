"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Users, Calendar, Send } from "lucide-react";
import MilestoneTimeline from "@/components/MilestoneTimeline";
import { sampleProjects, statusConfig, timeLabel } from "@/lib/sample-data";

export default function ProjectDetailPage() {
  const params = useParams();
  const project = sampleProjects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="px-5 md:px-10 py-16 text-center">
        <p className="text-4xl mb-3">🔍</p>
        <h1 className="font-display font-bold text-2xl mb-2">
          Project not found
        </h1>
        <p className="text-slate mb-6">
          This project may have been archived or doesn&rsquo;t exist.
        </p>
        <Link href="/projects" className="btn-primary">
          Browse all projects
        </Link>
      </div>
    );
  }

  const status = statusConfig(project.status);
  const completedMilestones = project.milestones?.filter(
    (m) => m.status === "completed"
  ).length ?? 0;
  const totalMilestones = project.milestones?.length ?? 0;

  return (
    <div className="px-5 md:px-10 py-6 md:py-10">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-slate hover:text-amber-500 transition-colors no-underline mb-6"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        {/* Header */}
        <div className="bg-white border border-cloud rounded-card p-6 md:p-8 mb-6">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <span
              className={`text-[11px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full ${status.bg} ${status.text}`}
            >
              {status.label}
            </span>
            {project.featured && (
              <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-700">
                ⭐ Featured
              </span>
            )}
          </div>

          <h1 className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-tight mb-3">
            {project.title}
          </h1>

          <p className="text-base text-slate leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-4 text-sm text-slate border-t border-cloud pt-4">
            <span className="flex items-center gap-1.5">
              <Clock size={16} className="text-amber-500" />
              {timeLabel(project.time_commitment)}
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={16} className="text-amber-500" />
              {project.members?.length ?? 0}/{project.max_collaborators}{" "}
              members
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={16} className="text-amber-500" />
              {project.quarter}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.disciplines.map((d) => (
              <span
                key={d}
                className="text-xs font-medium bg-teal-50 text-teal-600 px-3 py-1 rounded-full"
              >
                {d}
              </span>
            ))}
            {project.skills_needed.map((s) => (
              <span
                key={s}
                className="text-xs font-medium bg-mist text-slate px-3 py-1 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Two-column layout on desktop */}
        <div className="grid gap-6 md:grid-cols-[1fr,280px]">
          {/* Main content */}
          <div className="space-y-6">
            {/* Problem statement */}
            <div className="bg-white border border-cloud rounded-card p-6">
              <h2 className="font-display font-bold text-lg mb-3">
                The Problem
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                {project.problem_statement}
              </p>
            </div>

            {/* Milestones */}
            <div className="bg-white border border-cloud rounded-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display font-bold text-lg">Milestones</h2>
                {totalMilestones > 0 && (
                  <span className="text-xs font-medium text-slate bg-mist px-2.5 py-1 rounded-full">
                    {completedMilestones}/{totalMilestones} done
                  </span>
                )}
              </div>

              {/* Progress bar */}
              {totalMilestones > 0 && (
                <div className="w-full h-2 bg-mist rounded-full mb-5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-500"
                    style={{
                      width: `${(completedMilestones / totalMilestones) * 100}%`,
                    }}
                  />
                </div>
              )}

              <MilestoneTimeline milestones={project.milestones ?? []} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Join button (sticky on mobile) */}
            {(project.status === "recruiting" ||
              project.status === "in_progress") && (
              <div className="bg-white border border-cloud rounded-card p-5">
                <h3 className="font-display font-bold text-base mb-2">
                  Join this project
                </h3>
                <p className="text-xs text-slate mb-4 leading-relaxed">
                  Send a quick intro to the project lead. No formal
                  application required.
                </p>
                <button className="btn-primary w-full justify-center">
                  <Send size={16} />
                  Request to Join
                </button>
              </div>
            )}

            {/* Team */}
            <div className="bg-white border border-cloud rounded-card p-5">
              <h3 className="font-display font-bold text-base mb-3">Team</h3>
              <div className="space-y-3">
                {project.members?.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-sm font-bold shrink-0">
                      {member.user?.display_name?.[0] ?? "?"}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-ink truncate">
                        {member.user?.display_name}
                      </p>
                      <p className="text-[11px] text-slate capitalize">
                        {member.role}
                        {member.user?.program_affiliation?.[0] &&
                          ` · ${member.user.program_affiliation[0]}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course info */}
            {project.course_id && (
              <div className="bg-white border border-cloud rounded-card p-5">
                <h3 className="font-display font-bold text-base mb-2">
                  Course
                </h3>
                <p className="text-sm text-slate">{project.course_id}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
