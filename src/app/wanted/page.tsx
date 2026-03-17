"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Users, Zap, Megaphone } from "lucide-react";
import WantedCard from "@/components/WantedCard";
import { sampleWantedAds } from "@/lib/sample-data";

type Filter = "all" | "solo_seeker" | "event_continuation" | "skill_request";

const filters: { id: Filter; label: string; icon: React.ReactNode; desc: string }[] = [
  { id: "all", label: "All", icon: <Megaphone size={14} />, desc: "all ads" },
  { id: "solo_seeker", label: "Solo Seekers", icon: <Users size={14} />, desc: "going to an event alone" },
  { id: "event_continuation", label: "Event → Ongoing", icon: <Zap size={14} />, desc: "event teams continuing" },
  { id: "skill_request", label: "Skill Requests", icon: <Megaphone size={14} />, desc: "need a specific skill" },
];

export default function WantedPage() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = active === "all"
    ? sampleWantedAds
    : sampleWantedAds.filter((ad) => (ad.ad_type ?? "skill_request") === active);

  const soloCount = sampleWantedAds.filter((a) => a.ad_type === "solo_seeker").length;
  const continuationCount = sampleWantedAds.filter((a) => a.ad_type === "event_continuation").length;

  return (
    <div className="px-5 md:px-10 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <p className="section-label">Collaborator Marketplace</p>
            <h1 className="section-title">Wanted Ads</h1>
            <p className="text-sm text-slate max-w-md">
              Students looking for teammates, skills, and collaborators. Skill requests,
              solo event seekers, and teams continuing after competitions.
            </p>
          </div>
          <Link href="/create" className="btn-primary shrink-0 !py-2.5">
            <Plus size={16} />
            Post Ad
          </Link>
        </div>

        {/* Callout: solo seekers */}
        {soloCount > 0 && active === "all" && (
          <div className="bg-purple-50 border border-purple-200 rounded-card px-4 py-3 flex items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2">
              <Users size={15} className="text-purple-600 shrink-0" />
              <p className="text-sm font-medium text-purple-800">
                <span className="font-bold">{soloCount}</span> student{soloCount !== 1 ? "s are" : " is"} going to campus events solo and looking for a team.
              </p>
            </div>
            <button
              onClick={() => setActive("solo_seeker")}
              className="text-xs font-semibold text-purple-600 hover:text-purple-800 whitespace-nowrap"
            >
              See them →
            </button>
          </div>
        )}

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mb-6">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
                active === f.id
                  ? "bg-ink text-white"
                  : "bg-white border border-cloud text-slate hover:border-amber-400 hover:text-amber-600"
              }`}
            >
              {f.icon}
              {f.label}
              {f.id !== "all" && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  active === f.id ? "bg-white/20" : "bg-mist"
                }`}>
                  {sampleWantedAds.filter((a) => (a.ad_type ?? "skill_request") === f.id).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {filtered.map((ad) => (
            <WantedCard key={ad.id} ad={ad} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate">
            <p className="text-2xl mb-2">🔍</p>
            <p className="font-semibold">No ads in this category yet.</p>
            <p className="text-sm mt-1">Be the first to post one.</p>
          </div>
        )}

        {/* Event continuation CTA */}
        {active === "event_continuation" && continuationCount === 0 && (
          <div className="mt-8 bg-teal-50 border border-teal-200 rounded-card p-6 text-center">
            <p className="font-display font-bold text-base mb-1">
              Did your competition team keep going?
            </p>
            <p className="text-sm text-slate mb-4">
              Post a continuation ad so other students can find and join you.
            </p>
            <Link href="/create" className="btn-secondary inline-flex">
              <Plus size={16} />
              Post Continuation Ad
            </Link>
          </div>
        )}

        {/* Bottom empty state hint */}
        {active === "all" && (
          <div className="mt-10 bg-white border border-dashed border-cloud rounded-card p-8 text-center">
            <p className="text-2xl mb-2">📣</p>
            <h3 className="font-display font-bold text-base mb-1">
              Need a specific skill — or a whole team?
            </h3>
            <p className="text-sm text-slate mb-4">
              Post a wanted ad and let the right person find you. It takes 30 seconds.
            </p>
            <Link href="/create" className="btn-secondary inline-flex">
              <Plus size={16} />
              Post a Wanted Ad
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
