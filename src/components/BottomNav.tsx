"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Plus, LayoutDashboard, Megaphone, User } from "lucide-react";
import { clsx } from "clsx";

const tabs = [
  { href: "/projects", label: "Explore", icon: Compass },
  { href: "/wanted", label: "Wanted", icon: Megaphone },
  { href: "/create", label: "Create", icon: Plus, isCreate: true },
  { href: "/", label: "Feed", icon: LayoutDashboard },
  { href: "/profile", label: "Profile", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-cloud flex justify-around items-end pt-1.5 pb-safe px-1">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = pathname === tab.href;

        if (tab.isCreate) {
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex flex-col items-center no-underline -mt-4"
            >
              <div className="w-11 h-11 bg-amber-500 rounded-full flex items-center justify-center shadow-glow">
                <Icon size={22} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-medium text-amber-500 mt-0.5">
                {tab.label}
              </span>
            </Link>
          );
        }

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={clsx(
              "flex flex-col items-center no-underline py-1 min-w-[56px]",
              isActive ? "text-amber-500" : "text-slate"
            )}
          >
            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium mt-0.5">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
