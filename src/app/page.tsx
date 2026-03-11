import Link from "next/link";
import { Search, Plus, ArrowRight, Sparkles } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import WantedCard from "@/components/WantedCard";
import Reveal from "@/components/Reveal";
import { sampleProjects, sampleWantedAds } from "@/lib/sample-data";

export default function Home() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="px-5 md:px-10 pt-12 pb-10 md:pt-20 md:pb-16 bg-gradient-to-br from-white via-amber-50 to-mist relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

        <div className="max-w-2xl mx-auto relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-cloud rounded-full px-3.5 py-1.5 text-sm font-medium text-slate mb-6 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Foothill College · Open to all disciplines
          </div>

          <h1 className="font-display text-4xl md:text-[52px] font-extrabold leading-[1.08] tracking-tight mb-4 animate-fade-in-up [animation-delay:100ms]">
            Find your project.
            <br />
            Build something{" "}
            <em className="text-amber-500 font-bold not-italic">real.</em>
          </h1>

          <p className="text-lg text-slate leading-relaxed max-w-lg mb-7 animate-fade-in-up [animation-delay:200ms]">
            Discover campus projects, find collaborators, and turn ideas into
            portfolio-ready work. Whether it&rsquo;s an app, a research study, or a
            community initiative&mdash;start building today.
          </p>

          <div className="flex flex-wrap gap-3 animate-fade-in-up [animation-delay:300ms]">
            <Link href="/projects" className="btn-primary">
              <Search size={18} />
              Browse Projects
            </Link>
            <Link href="/match" className="btn-secondary">
              <Sparkles size={18} />
              Match Quiz
            </Link>
            <Link href="/create" className="btn-secondary">
              <Plus size={18} />
              Post Your Idea
            </Link>
          </div>

          <p className="mt-5 text-sm text-slate/60 animate-fade-in-up [animation-delay:400ms]">
            Funded by{" "}
            <a
              href="https://foothill.edu/sli/"
              target="_blank"
              rel="noopener"
              className="text-teal-600 underline"
            >
              SLI
            </a>{" "}
            &amp; MESA at Foothill College
          </p>
        </div>
      </section>

      {/* ═══════ LIVE FEED ═══════ */}
      <section className="px-5 md:px-10 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="section-label">What&rsquo;s happening now</p>
            <h2 className="section-title">Projects on campus</h2>
            <p className="section-desc">
              Real projects, real students, right now. Jump in or start your own.
            </p>
          </Reveal>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {sampleProjects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {sampleWantedAds.slice(0, 1).map((ad) => (
              <WantedCard key={ad.id} ad={ad} />
            ))}
            {sampleProjects.slice(3, 5).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {sampleWantedAds.slice(1, 2).map((ad) => (
              <WantedCard key={ad.id} ad={ad} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/projects" className="btn-secondary">
              View all projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="px-5 md:px-10 py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="section-label">How it works</p>
            <h2 className="section-title">Three moves. Zero friction.</h2>
            <p className="section-desc">
              Whether you&rsquo;re starting fresh or looking to join something in motion.
            </p>
          </Reveal>

          <div className="grid gap-5 grid-cols-1 sm:grid-cols-3">
            {[
              {
                num: "1",
                title: "Find a Project",
                desc: "Browse by discipline, skill, or time commitment. Take the 3-question quiz for personalized matches.",
              },
              {
                num: "2",
                title: "Jump In",
                desc: "Send a one-line intro to join a team. Or post your own idea and recruit collaborators in under 2 minutes.",
              },
              {
                num: "3",
                title: "Build & Document",
                desc: "Track milestones, post weekly updates, and grow a portfolio of real work that speaks louder than grades.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="bg-mist border border-cloud rounded-card p-7 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="w-10 h-10 rounded-full bg-amber-500 text-white font-display font-bold text-lg inline-flex items-center justify-center mb-4">
                  {step.num}
                </div>
                <h3 className="font-display font-bold text-lg tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DISCIPLINES ═══════ */}
      <section className="px-5 md:px-10 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="section-label">All disciplines welcome</p>
            <h2 className="section-title">The best projects cross boundaries.</h2>
            <p className="section-desc">
              CS meets biology meets design meets social justice. That&rsquo;s where the
              magic happens.
            </p>
          </Reveal>

          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { emoji: "💻", label: "CS & Tech" },
              { emoji: "🔬", label: "Science" },
              { emoji: "🌍", label: "Social Justice" },
              { emoji: "🎨", label: "Art & Design" },
              { emoji: "📈", label: "Business" },
              { emoji: "✍️", label: "Communication" },
            ].map((d) => (
              <div
                key={d.label}
                className="bg-white border border-cloud rounded-card py-5 px-3 text-center transition-all duration-200 hover:border-amber-500 hover:-translate-y-0.5 hover:shadow-card cursor-pointer"
              >
                <span className="text-[28px] block mb-2">{d.emoji}</span>
                <span className="text-[13px] font-semibold text-ink">
                  {d.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BARRIERS (RESEARCH) ═══════ */}
      <section className="px-5 md:px-10 py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="section-label">What the research found</p>
            <h2 className="section-title">Four real barriers. One bridge.</h2>
            <p className="section-desc">
              Student interviews across MESA, Puente, and Umoja revealed a
              consistent pattern.
            </p>
          </Reveal>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {[
              {
                num: "01",
                title: "High Demand, Low Access",
                desc: "Students apply for SLI spring internships but there aren't enough spots. Rejected by capacity, not effort.",
              },
              {
                num: "02",
                title: "The Time Tax",
                desc: "Three heavy classes leave zero time to wander campus. If it isn't surfaced to you, it doesn't exist.",
              },
              {
                num: "03",
                title: "The Chaos Factor",
                desc: "Club projects lack briefs and follow-up. Students show up once, don't know what to do, and disappear.",
              },
              {
                num: "04",
                title: "The Graveyard Effect",
                desc: "When a student leader graduates, all their work and momentum vanish. ProjectBridge is the archive that prevents this.",
              },
            ].map((b) => (
              <div
                key={b.num}
                className="bg-mist border border-cloud rounded-card p-6 flex gap-4 items-start transition-all duration-200 hover:shadow-card"
              >
                <span className="font-display text-3xl font-extrabold text-amber-500/30 leading-none min-w-[36px]">
                  {b.num}
                </span>
                <div>
                  <h3 className="font-display font-bold text-base tracking-tight mb-1.5">
                    {b.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ COMMUNITY RESOURCES ═══════ */}
      <section className="px-5 md:px-10 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="section-label">Campus resources</p>
            <h2 className="section-title">Everything in one place.</h2>
            <p className="section-desc">
              One of the biggest barriers is not knowing what already exists.
            </p>
          </Reveal>

          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { emoji: "🔬", name: "Science Learning Institute (SLI)", desc: "Spring internship program — competitive, limited spots.", url: "https://foothill.edu/sli/" },
              { emoji: "🚀", name: "ETI", desc: "2–3 year hands-on learning program for entrepreneurial students.", url: "https://foothill.edu/eti/" },
              { emoji: "💡", name: "KCI Innovation Challenge", desc: "Campus innovation competition for teams that want structured goals.", url: "https://foothill.edu/kci/" },
              { emoji: "🌱", name: "MESA", desc: "Math, Engineering, Science Achievement — supports first-gen STEM students.", url: "https://foothill.edu/mesa/" },
              { emoji: "🌍", name: "Puente & Umoja", desc: "Learning communities supporting Latinx and African American students.", url: "https://foothill.edu/puente/" },
              { emoji: "🤝", name: "Enactus", desc: "Student org using entrepreneurial action to make social impact.", url: "https://www.enactus.org/" },
            ].map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-cloud rounded-card p-5 flex gap-3.5 items-start transition-all duration-200 hover:border-teal-500 hover:-translate-y-0.5 hover:shadow-card no-underline"
              >
                <div className="w-10 h-10 rounded-[10px] bg-teal-50 flex items-center justify-center text-xl shrink-0">
                  {r.emoji}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold mb-1 text-ink">{r.name}</h3>
                  <p className="text-[13px] text-slate leading-snug">
                    {r.desc}
                  </p>
                  <span className="text-xs font-semibold text-teal-500 mt-1.5 inline-block">
                    Learn more →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="px-5 md:px-10 py-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-ink to-[#2A2A4A] rounded-card p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_30%_50%,rgba(232,133,12,0.1)_0%,transparent_50%)]" />
          <div className="relative">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-white tracking-tight mb-3">
              Don&rsquo;t let your idea go to the graveyard.
            </h2>
            <p className="text-white/60 text-base mb-7 max-w-md mx-auto">
              Every project on ProjectBridge is a blueprint the next generation
              can build on.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/projects" className="btn-primary text-base !px-8 !py-3.5">
                <Search size={18} />
                Find a Project
              </Link>
              <Link href="/create" className="btn-secondary !bg-transparent !text-white !border-white/20 hover:!border-white/60 text-base !px-8 !py-3.5">
                <Plus size={18} />
                Post Your Idea
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="border-t border-cloud bg-white px-5 md:px-10 pt-10 pb-24 md:pb-12">
        <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 bg-amber-500 rounded-lg flex items-center justify-center text-white font-display font-bold text-base">
                P
              </div>
              <span className="font-display font-bold text-lg">
                Project<span className="text-amber-500">Bridge</span>
              </span>
            </div>
            <p className="text-sm text-slate leading-relaxed max-w-xs">
              A student-built project collaboration platform for Foothill
              College — designed for first-gen, international, and
              underrepresented students.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate mb-3">
              Platform
            </h4>
            <div className="space-y-2">
              <Link href="/projects" className="block text-sm text-ink no-underline hover:text-amber-500 transition-colors">Browse Projects</Link>
              <Link href="/match" className="block text-sm text-ink no-underline hover:text-amber-500 transition-colors">Match Quiz</Link>
              <Link href="/wanted" className="block text-sm text-ink no-underline hover:text-amber-500 transition-colors">Wanted Ads</Link>
              <Link href="/create" className="block text-sm text-ink no-underline hover:text-amber-500 transition-colors">Post a Project</Link>
              <Link href="/profile" className="block text-sm text-ink no-underline hover:text-amber-500 transition-colors">Your Profile</Link>
            </div>
          </div>

          {/* Communities */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate mb-3">
              Communities
            </h4>
            <div className="space-y-2">
              <a href="https://foothill.edu/sli/" target="_blank" rel="noopener" className="block text-sm text-ink no-underline hover:text-amber-500 transition-colors">SLI</a>
              <a href="https://foothill.edu/mesa/" target="_blank" rel="noopener" className="block text-sm text-ink no-underline hover:text-amber-500 transition-colors">MESA</a>
              <a href="https://foothill.edu/umoja/" target="_blank" rel="noopener" className="block text-sm text-ink no-underline hover:text-amber-500 transition-colors">Umoja</a>
              <a href="https://foothill.edu/puente/" target="_blank" rel="noopener" className="block text-sm text-ink no-underline hover:text-amber-500 transition-colors">Puente</a>
              <a href="https://foothill.edu/eti/" target="_blank" rel="noopener" className="block text-sm text-ink no-underline hover:text-amber-500 transition-colors">ETI</a>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-8 pt-5 border-t border-cloud text-center text-sm text-slate">
          © 2026 ProjectBridge · Foothill College. Funded by SLI &amp; MESA. Built by students, for students.
        </div>
      </footer>
    </>
  );
}
