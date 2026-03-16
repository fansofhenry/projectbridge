"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Heart, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/projects", label: "Explore" },
  { href: "/match", label: "Match Quiz" },
  { href: "/wanted", label: "Wanted Ads" },
  { href: "/create", label: "Post a Project" },
];

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate hover:text-amber-500 transition-colors no-underline"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/support"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors no-underline px-3 py-2"
          >
            <Heart size={14} className="fill-amber-500 text-amber-500" />
            Support Us
          </Link>
          <Link href="/projects" className="btn-primary !py-2 !px-5 !text-sm">
            <Search size={16} />
            Browse Projects
          </Link>
        </div>

        {/* Mobile: Support + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/support"
            className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 no-underline"
          >
            <Heart size={12} className="fill-amber-500 text-amber-500" />
            Support
          </Link>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg hover:bg-cloud transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/20 md:hidden" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute top-[60px] left-0 right-0 bg-mist border-b border-cloud shadow-lg py-4 px-5"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-2 text-base font-medium text-ink border-b border-cloud/50 last:border-0 no-underline hover:text-amber-500 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/support"
                onClick={() => setMenuOpen(false)}
                className="mt-2 btn-primary justify-center !text-base"
              >
                <Heart size={16} className="fill-white" />
                Support ProjectBridge
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
