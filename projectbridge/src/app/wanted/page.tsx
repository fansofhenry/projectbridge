"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import WantedCard from "@/components/WantedCard";
import { sampleWantedAds } from "@/lib/sample-data";

export default function WantedPage() {
  return (
    <div className="px-5 md:px-10 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <p className="section-label">Collaborator Marketplace</p>
            <h1 className="section-title">Wanted Ads</h1>
            <p className="text-sm text-slate max-w-md">
              Students looking for specific skills and collaborators. See
              something that fits? Reach out directly.
            </p>
          </div>
          <Link href="/create" className="btn-primary shrink-0 !py-2.5">
            <Plus size={16} />
            Post Ad
          </Link>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {sampleWantedAds.map((ad) => (
            <WantedCard key={ad.id} ad={ad} />
          ))}
        </div>

        {/* Empty state hint */}
        <div className="mt-12 bg-white border border-dashed border-cloud rounded-card p-8 text-center">
          <p className="text-2xl mb-2">📣</p>
          <h3 className="font-display font-bold text-base mb-1">
            Need a specific skill?
          </h3>
          <p className="text-sm text-slate mb-4">
            Post a wanted ad and let the right person find you. It takes 30
            seconds.
          </p>
          <Link href="/create" className="btn-secondary inline-flex">
            <Plus size={16} />
            Post a Wanted Ad
          </Link>
        </div>
      </div>
    </div>
  );
}
