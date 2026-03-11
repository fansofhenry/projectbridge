"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export default function TopNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-mist/92 backdrop-blur-xl border-b border-cloud h-[60px] flex items-center justify-between px-5 md:px-10">
      {/* Brand */}
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-white font-display font-bold text-lg">
          P
        </div>
        <span className="font-display font-bold text-xl tracking-tight">
          Project<span className="text-amber-500">Bridge</span>
        </span>
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-7">
        <Link href="/projects" className="text-sm font-medium text-slate hover:text-amber-500 transition-colors no-underline">
          Explore
        </Link>
        <Link href="/match" className="text-sm font-medium text-slate hover:text-amber-500 transition-colors no-underline">
          Match Quiz
        </Link>
        <Link href="/wanted" className="text-sm font-medium text-slate hover:text-amber-500 transition-colors no-underline">
          Wanted Ads
        </Link>
        <Link href="/create" className="text-sm font-medium text-slate hover:text-amber-500 transition-colors no-underline">
          Post a Project
        </Link>
      </div>

      {/* Desktop CTA */}
      <Link href="/projects" className="hidden md:inline-flex btn-primary !py-2 !px-5 !text-sm">
        <Search size={16} />
        Browse Projects
      </Link>
    </nav>
  );
}
