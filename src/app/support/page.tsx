import Link from "next/link";
import { Heart, Mail, Building2, Users, BookOpen, Cpu, ArrowRight, Check, Star } from "lucide-react";

const impactStats = [
  { value: "200+", label: "Students reached", sub: "across MESA, Puente & Umoja" },
  { value: "30+", label: "Campus projects", sub: "posted & archived" },
  { value: "4", label: "Barriers addressed", sub: "identified through student research" },
  { value: "0", label: "Cost to students", sub: "always free to use" },
];

const sponsorTiers = [
  {
    id: "friend",
    name: "Friend",
    amount: "$250",
    period: "/ year",
    color: "border-cloud",
    badge: "bg-slate/10 text-slate",
    highlight: false,
    perks: [
      "Name in the platform footer",
      "Thank-you post on social media",
      "Access to anonymized impact report",
    ],
  },
  {
    id: "champion",
    name: "Champion",
    amount: "$1,000",
    period: "/ year",
    color: "border-amber-400",
    badge: "bg-amber-100 text-amber-700",
    highlight: true,
    perks: [
      "Everything in Friend",
      "Logo on the homepage & support page",
      "Featured in student newsletter (2×/semester)",
      "Invite to end-of-year demo day",
      "Named scholarship opportunity (optional)",
    ],
  },
  {
    id: "builder",
    name: "Builder",
    amount: "$5,000+",
    period: "/ year",
    color: "border-teal-400",
    badge: "bg-teal-50 text-teal-700",
    highlight: false,
    perks: [
      "Everything in Champion",
      "Co-branded project category on platform",
      "Direct access to student project pipeline",
      "Dedicated liaison from student team",
      "Custom impact report for your org",
      "Speaking slot at demo day",
    ],
  },
];

const ways = [
  {
    icon: Building2,
    title: "Corporate / Department Sponsorship",
    desc: "Align your brand with equity-focused STEM education. Support underrepresented students building real portfolios.",
    cta: "See sponsor tiers below",
    anchor: "#tiers",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Users,
    title: "Mentor a Project Team",
    desc: "Volunteer 1–2 hours/month to guide a student team. Industry mentors are one of our most requested resources.",
    cta: "Sign up to mentor",
    anchor: "mailto:mesa@foothill.edu?subject=ProjectBridge Mentor Interest",
    color: "bg-teal-50 text-teal-600",
    external: true,
  },
  {
    icon: BookOpen,
    title: "Faculty / Staff Partnership",
    desc: "Integrate ProjectBridge into your course, club, or department. We'll build the connection together.",
    cta: "Start a conversation",
    anchor: "mailto:mesa@foothill.edu?subject=ProjectBridge Faculty Partnership",
    color: "bg-purple-50 text-purple-600",
    external: true,
  },
  {
    icon: Cpu,
    title: "Tech Contribution",
    desc: "We're open-source. Engineers and designers can contribute directly to the GitHub repo or help build the ML matching engine.",
    cta: "View the repo",
    anchor: "https://github.com/fansofhenry/projectbridge",
    color: "bg-blue-50 text-blue-600",
    external: true,
  },
];

export default function SupportPage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="px-5 md:px-10 pt-14 pb-12 md:pt-24 md:pb-20 bg-gradient-to-br from-amber-50 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-white border border-cloud rounded-full px-4 py-1.5 text-sm font-medium text-slate mb-6">
            <Heart size={13} className="text-amber-500 fill-amber-500" />
            Built by students · Sustained by community
          </div>

          <h1 className="font-display text-4xl md:text-[54px] font-extrabold leading-[1.06] tracking-tight mb-5">
            Help us keep the{" "}
            <em className="text-amber-500 not-italic">bridge open.</em>
          </h1>

          <p className="text-lg text-slate leading-relaxed max-w-xl mx-auto mb-8">
            ProjectBridge is free for every Foothill student — forever. Your
            support funds platform development, student stipends, and the
            infrastructure that keeps institutional knowledge alive.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#tiers" className="btn-primary">
              <Star size={16} />
              Become a Sponsor
            </a>
            <a
              href="mailto:mesa@foothill.edu?subject=ProjectBridge Support"
              className="btn-secondary"
            >
              <Mail size={16} />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ IMPACT STATS ═══════ */}
      <section className="px-5 md:px-10 py-10 bg-white border-y border-cloud">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-extrabold text-amber-500 mb-1">
                {s.value}
              </div>
              <div className="text-sm font-semibold text-ink mb-0.5">{s.label}</div>
              <div className="text-xs text-slate">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ WAYS TO SUPPORT ═══════ */}
      <section className="px-5 md:px-10 py-14 md:py-20">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">Ways to help</p>
          <h2 className="section-title">Every form of support matters.</h2>
          <p className="section-desc">
            Whether you can give money, time, expertise, or code — there&apos;s
            a meaningful role for you.
          </p>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {ways.map((w) => {
              const Icon = w.icon;
              const isExternal = w.external;
              const Tag = isExternal ? "a" : Link;
              const props = isExternal
                ? { href: w.anchor, target: "_blank", rel: "noopener noreferrer" }
                : { href: w.anchor };

              return (
                <div
                  key={w.title}
                  className="bg-white border border-cloud rounded-card p-6 flex gap-4 items-start hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${w.color}`}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-base tracking-tight mb-1.5">
                      {w.title}
                    </h3>
                    <p className="text-sm text-slate leading-relaxed mb-3">
                      {w.desc}
                    </p>
                    {/* @ts-ignore */}
                    <Tag
                      {...props}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 no-underline"
                    >
                      {w.cta} <ArrowRight size={14} />
                    </Tag>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ SPONSOR TIERS ═══════ */}
      <section id="tiers" className="px-5 md:px-10 py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">Sponsorship tiers</p>
          <h2 className="section-title">Invest in the next generation.</h2>
          <p className="section-desc">
            All sponsorships go directly toward platform hosting, student
            developer stipends, and outreach at Foothill College.
          </p>

          <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
            {sponsorTiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-card border-2 p-7 relative flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-card ${tier.color} ${
                  tier.highlight ? "bg-amber-50" : "bg-white"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-5">
                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 ${tier.badge}`}
                  >
                    {tier.name}
                  </span>
                  <div className="flex items-end gap-1">
                    <span className="font-display text-3xl font-extrabold text-ink">
                      {tier.amount}
                    </span>
                    <span className="text-sm text-slate pb-1">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-slate">
                      <Check size={15} className="text-teal-500 mt-0.5 shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:mesa@foothill.edu?subject=ProjectBridge ${tier.name} Sponsorship`}
                  className={
                    tier.highlight
                      ? "btn-primary w-full justify-center"
                      : "btn-secondary w-full justify-center"
                  }
                >
                  Get started <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate mt-6">
            Not the right fit?{" "}
            <a
              href="mailto:mesa@foothill.edu?subject=ProjectBridge Custom Support"
              className="text-teal-600 underline"
            >
              Let&apos;s build something custom.
            </a>
          </p>
        </div>
      </section>

      {/* ═══════ PITCH TO YOUR DEPT ═══════ */}
      <section className="px-5 md:px-10 py-14 md:py-20">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-ink to-[#2A2A4A] rounded-card p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-1/2 right-0 w-[60%] h-[200%] bg-[radial-gradient(circle_at_70%_50%,rgba(13,115,119,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative max-w-xl">
            <p className="section-label !text-amber-400">For administrators</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-4 leading-tight">
              Pitch ProjectBridge to your department or foundation.
            </h2>
            <p className="text-white/60 text-base mb-7 leading-relaxed">
              We&apos;ve prepared a one-page overview of our impact, student
              research findings, and funding goals — ready to share with a dean,
              grant committee, or department chair.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:mesa@foothill.edu?subject=ProjectBridge One-Pager Request"
                className="btn-primary"
              >
                <Mail size={16} />
                Request the one-pager
              </a>
              <a
                href="https://github.com/fansofhenry/projectbridge"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !bg-transparent !text-white !border-white/20 hover:!border-white/60"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
