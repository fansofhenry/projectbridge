"use client";

import { Clock, Users, ArrowRight, Calendar } from "lucide-react";
import { WantedAd } from "@/lib/types";
import { timeLabel } from "@/lib/sample-data";

const adTypeConfig = {
  solo_seeker: {
    label: "🙋 Looking for a Team",
    border: "border-purple-300",
    bg: "hover:bg-purple-50",
    badge: "bg-purple-50 text-purple-700",
    icon: "🙋",
  },
  event_continuation: {
    label: "🔥 Event → Continuing",
    border: "border-teal-300",
    bg: "hover:bg-teal-50",
    badge: "bg-teal-50 text-teal-700",
    icon: "🔥",
  },
  skill_request: {
    label: "📣 Wanted Ad",
    border: "border-amber-400",
    bg: "hover:bg-amber-50",
    badge: "bg-amber-50 text-amber-700",
    icon: "📣",
  },
};

export default function WantedCard({ ad }: { ad: WantedAd }) {
  const type = ad.ad_type ?? "skill_request";
  const config = adTypeConfig[type] ?? adTypeConfig.skill_request;

  return (
    <div
      className={`bg-white border-[1.5px] border-dashed ${config.border} rounded-card p-5 transition-all duration-200 ${config.bg} hover:-translate-y-0.5 cursor-pointer`}
    >
      {/* Label row */}
      <div className="flex items-center justify-between mb-2.5">
        <div className={`inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide ${config.badge} px-2.5 py-0.5 rounded-full`}>
          {config.label}
        </div>
        {ad.event_name && (
          <span className="text-[10px] font-semibold text-slate bg-mist px-2 py-0.5 rounded-full truncate max-w-[120px]">
            {ad.event_name}
          </span>
        )}
      </div>

      {/* Title & description */}
      <h3 className="font-display font-bold text-base leading-snug tracking-tight mb-1.5 text-ink">
        {ad.title}
      </h3>
      <p className="text-sm text-slate leading-relaxed mb-3 line-clamp-2">
        {ad.description}
      </p>

      {/* Event date for solo seekers */}
      {type === "solo_seeker" && ad.event_date && (
        <div className="flex items-center gap-1.5 text-xs font-medium text-purple-600 mb-3">
          <Calendar size={13} />
          Event: {ad.event_date}
        </div>
      )}

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {ad.skills_requested.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium bg-mist text-slate px-2.5 py-0.5 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Meta & CTA */}
      <div className="flex items-center justify-between text-xs text-slate border-t border-cloud/60 pt-3">
        <span className="flex items-center gap-1">
          <Clock size={13} />
          {timeLabel(ad.time_commitment)}
        </span>
        {type === "solo_seeker" ? (
          <span className="flex items-center gap-1 font-semibold text-purple-600">
            <Users size={13} />
            Join this person <ArrowRight size={11} />
          </span>
        ) : type === "event_continuation" ? (
          <span className="flex items-center gap-1 font-semibold text-teal-600">
            Keep it going <ArrowRight size={11} />
          </span>
        ) : (
          <span className="flex items-center gap-1 font-semibold text-amber-600">
            {ad.compensation && ad.compensation !== "volunteer" ? ad.compensation : "Volunteer"}
          </span>
        )}
      </div>
    </div>
  );
}
