import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import TopNav from "@/components/TopNav";
import BottomNav from "@/components/BottomNav";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ProjectBridge — Where Foothill Students Build Together",
  description:
    "Discover, join, and lead meaningful projects at Foothill College. Build your portfolio, find collaborators, and turn ideas into real work.",
  openGraph: {
    title: "ProjectBridge",
    description: "Where Foothill Students Build Together",
    siteName: "ProjectBridge",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="font-body">
        <TopNav />
        <main className="pt-[60px] pb-20 md:pb-8">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
