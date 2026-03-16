import Link from "next/link";
import { Search, Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5">
      <div className="max-w-md w-full text-center">
        {/* Big graphic number */}
        <div className="font-display text-[120px] font-extrabold leading-none text-amber-500/10 select-none mb-[-20px]">
          404
        </div>
        <div className="text-5xl mb-4">🔍</div>
        <h1 className="font-display font-bold text-2xl tracking-tight mb-3">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="text-slate text-base leading-relaxed mb-8 max-w-sm mx-auto">
          It may have been moved, archived, or you might have followed a broken
          link. Let&rsquo;s get you back on track.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={16} />
            Back to Home
          </Link>
          <Link href="/projects" className="btn-secondary">
            <Search size={16} />
            Browse Projects
          </Link>
        </div>
        <p className="mt-8 text-sm text-slate/60">
          Looking for something specific?{" "}
          <a
            href="mailto:mesa@foothill.edu"
            className="text-amber-600 underline"
          >
            Contact the team <ArrowRight size={12} className="inline" />
          </a>
        </p>
      </div>
    </div>
  );
}
