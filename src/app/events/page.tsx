import Link from "next/link";
import { ArrowRight, Calendar, Users, Plus, Zap } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import WantedCard from "@/components/WantedCard";
import { campusEvents } from "@/lib/events-data";
import { sampleProjects, sampleWantedAds } from "@/lib/sample-data";

// Only solo_seeker and event_continuation ads
const eventWantedAds = sampleWantedAds.filter(
  (ad) => ad.ad_type === "solo_seeker" || ad.ad_type === "event_continuation"
);

export default function EventsPage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="px-5 md:px-10 pt-14 pb-10 md:pt-22 md:pb-16 bg-gradient-to-br from-white via-purple-50/40 to-amber-50 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border border-cloud rounded-full px-3.5 py-1.5 text-sm font-medium text-slate mb-6">
            <Zap size={13} className="text-amber-500" />
            Competitions · Hackathons · Pitch Nights
          </div>
          <h1 className="font-display text-4xl md:text-[50px] font-extrabold leading-[1.07] tracking-tight mb-4">
            Campus events are just the{" "}
            <em className="text-amber-500 not-italic">starting line.</em>
          </h1>
          <p className="text-lg text-slate leading-relaxed max-w-xl mb-7">
            Most great ideas from the Google Case Competition, Innovation
            Challenge, and Shark Tank never make it past the event. ProjectBridge
            is the soft landing — where your team keeps going, and solo
            participants find their people.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#solo" className="btn-primary">
              <Users size={16} />
              Find Event Teammates
            </a>
            <Link href="/create" className="btn-secondary">
              <Plus size={16} />
              Post Your Event Project
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ THE PROBLEM ═══════ */}
      <section className="px-5 md:px-10 py-10 bg-white border-y border-cloud">
        <div className="max-w-5xl mx-auto grid gap-5 sm:grid-cols-3">
          {[
            {
              emoji: "💨",
              stat: "~80%",
              label: "of event teams dissolve within 2 weeks of the competition ending",
            },
            {
              emoji: "🙋",
              stat: "1 in 3",
              label: "hackathon attendees show up solo and struggle to form a team",
            },
            {
              emoji: "🪦",
              stat: "Graveyard",
              label: "of great ideas — no place to continue, no way to find collaborators",
            },
          ].map((s) => (
            <div key={s.label} className="text-center px-4">
              <div className="text-3xl mb-1">{s.emoji}</div>
              <div className="font-display text-2xl font-extrabold text-amber-500 mb-1">{s.stat}</div>
              <p className="text-sm text-slate leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ SOLO SEEKERS ═══════ */}
      <section id="solo" className="px-5 md:px-10 py-14 md:py-18">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">Going solo?</p>
          <h2 className="section-title">Find your team before the event.</h2>
          <p className="section-desc">
            These students signed up solo and are actively looking for teammates.
            Reach out before the event starts — the best teams form early.
          </p>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 mb-8">
            {eventWantedAds
              .filter((ad) => ad.ad_type === "solo_seeker")
              .map((ad) => (
                <WantedCard key={ad.id} ad={ad} />
              ))}
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-display font-bold text-base mb-1">Going to an event solo?</p>
              <p className="text-sm text-slate">Post a "Looking for Team" ad. Takes 30 seconds.</p>
            </div>
            <Link href="/create" className="btn-primary shrink-0">
              <Plus size={16} />
              Post Solo Ad
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ EVENT CONTINUATION ═══════ */}
      <section className="px-5 md:px-10 py-14 md:py-18 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">Event → ongoing</p>
          <h2 className="section-title">Teams that didn&rsquo;t stop.</h2>
          <p className="section-desc">
            These teams started at a campus competition and kept building.
            They&rsquo;re still recruiting — join them.
          </p>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 mb-8">
            {eventWantedAds
              .filter((ad) => ad.ad_type === "event_continuation")
              .map((ad) => (
                <WantedCard key={ad.id} ad={ad} />
              ))}
          </div>

          {/* Event-origin project cards */}
          <h3 className="font-display font-bold text-xl tracking-tight mb-4 mt-10">
            Event projects on the platform
          </h3>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {sampleProjects
              .filter((p) => p.event_origin)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>

          <div className="mt-6 text-center">
            <Link href="/create" className="btn-secondary inline-flex">
              <Plus size={16} />
              Add your event project
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ CAMPUS EVENTS DIRECTORY ═══════ */}
      <section className="px-5 md:px-10 py-14 md:py-18">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">Campus programs</p>
          <h2 className="section-title">Every event. One directory.</h2>
          <p className="section-desc">
            A complete map of innovation programs at Foothill College — so you
            know what&rsquo;s coming up and can plan your team early.
          </p>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {campusEvents.map((event) => {
              const eventProjects = sampleProjects.filter(
                (p) => p.event_origin === event.name
              );
              return (
                <div
                  key={event.id}
                  className={`${event.color} border border-cloud rounded-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-2xl">{event.emoji}</span>
                      <h3 className="font-display font-bold text-base tracking-tight mt-1">
                        {event.name}
                      </h3>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      {event.upcoming_date && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate bg-white border border-cloud px-2 py-0.5 rounded-full">
                          <Calendar size={9} />
                          {event.upcoming_date}
                        </span>
                      )}
                      <span className="text-[10px] text-slate/60">{event.frequency}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate leading-relaxed mb-3">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {event.disciplines.map((d) => (
                      <span key={d} className="text-[10px] font-medium bg-white/70 text-slate px-2 py-0.5 rounded-full">
                        {d}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-black/5 pt-3">
                    <span className="text-[11px] text-slate">
                      {eventProjects.length > 0
                        ? `${eventProjects.length} project${eventProjects.length !== 1 ? "s" : ""} continuing`
                        : "No projects yet — be the first"}
                    </span>
                    <div className="flex gap-2">
                      {event.url && (
                        <a
                          href={event.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-xs font-semibold ${event.accent} flex items-center gap-0.5 no-underline`}
                        >
                          Info <ArrowRight size={11} />
                        </a>
                      )}
                      {eventProjects.length > 0 && (
                        <Link
                          href={`/projects?event=${event.id}`}
                          className={`text-xs font-semibold ${event.accent} flex items-center gap-0.5 no-underline`}
                        >
                          See teams <ArrowRight size={11} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="px-5 md:px-10 py-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-ink to-[#2A2A4A] rounded-card p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,133,12,0.08)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
              Your event team doesn&rsquo;t have to end when the clock does.
            </h2>
            <p className="text-white/60 text-base mb-7 max-w-md mx-auto">
              Post your project, find the people you need, and keep building
              what you started.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/create" className="btn-primary">
                <Plus size={16} />
                Post Event Project
              </Link>
              <Link href="/wanted" className="btn-secondary !bg-transparent !text-white !border-white/20 hover:!border-white/60">
                <Users size={16} />
                Browse Solo Seekers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
