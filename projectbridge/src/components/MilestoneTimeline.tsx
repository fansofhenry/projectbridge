"use client";

import { CheckCircle2, Circle, Clock, AlertCircle } from "lucide-react";
import { Milestone } from "@/lib/types";

const iconMap = {
  completed: <CheckCircle2 size={20} className="text-green-600" />,
  in_progress: <Clock size={20} className="text-amber-500" />,
  upcoming: <Circle size={20} className="text-gray-300" />,
  overdue: <AlertCircle size={20} className="text-red-500" />,
};

export default function MilestoneTimeline({ milestones }: { milestones: Milestone[] }) {
  if (!milestones.length) {
    return (
      <p className="text-sm text-slate italic">No milestones set yet.</p>
    );
  }

  return (
    <div className="space-y-0">
      {milestones
        .sort((a, b) => a.order - b.order)
        .map((ms, i) => (
          <div key={ms.id} className="flex gap-3">
            {/* Vertical line + icon */}
            <div className="flex flex-col items-center">
              <div className="mt-0.5">{iconMap[ms.status]}</div>
              {i < milestones.length - 1 && (
                <div className="w-px flex-1 bg-cloud my-1" />
              )}
            </div>

            {/* Content */}
            <div className="pb-5">
              <h4 className="font-semibold text-sm text-ink leading-snug">
                {ms.title}
              </h4>
              <p className="text-xs text-slate mt-0.5">{ms.description}</p>
              <span className="text-xs text-slate/60 mt-1 block">
                Target: {new Date(ms.target_date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                {ms.completed_at && (
                  <span className="text-green-600 ml-2">
                    ✓ Completed {new Date(ms.completed_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </span>
                )}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}
