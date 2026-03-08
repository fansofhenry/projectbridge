"use client";

import { Clock, MapPin } from "lucide-react";
import { WantedAd } from "@/lib/types";
import { timeLabel } from "@/lib/sample-data";

export default function WantedCard({ ad }: { ad: WantedAd }) {
  return (
    <div className="bg-white border-[1.5px] border-dashed border-amber-400 rounded-card p-5 transition-all duration-200 hover:bg-amber-50 hover:-translate-y-0.5 cursor-pointer">
      {/* Label */}
      <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-amber-700 mb-2.5">
        📣 Wanted Ad
      </div>

      {/* Title & description */}
      <h3 className="font-display font-bold text-base leading-snug tracking-tight mb-1.5 text-ink">
        {ad.title}
      </h3>
      <p className="text-sm text-slate leading-relaxed mb-3 line-clamp-2">
        {ad.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {ad.skills_requested.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-slate">
        <span className="flex items-center gap-1">
          <Clock size={14} />
          {timeLabel(ad.time_commitment)}
        </span>
        {ad.compensation && (
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            {ad.compensation}
          </span>
        )}
      </div>
    </div>
  );
}
