"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Rocket, Check } from "lucide-react";
import Link from "next/link";

const skillOptions = [
  "Python", "JavaScript", "React", "Node.js", "Data Visualization",
  "UI Design", "UX Research", "Video Editing", "Animation", "Writing",
  "Biology", "Chemistry", "Statistics", "Machine Learning", "Mobile Dev",
  "Figma", "Illustration", "Public Speaking", "Project Management",
];

const disciplineOptions = [
  "Computer Science", "Biology", "Environmental Science",
  "Social Justice", "Art & Design", "Business", "Communication",
  "Data Science", "Engineering", "Health Sciences",
];

export default function CreatePage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    title: "",
    problem: "",
    description: "",
    skills: [] as string[],
    disciplines: [] as string[],
    time_commitment: "",
    max_collaborators: 4,
  });
  const [submitted, setSubmitted] = useState(false);
  const [posting, setPosting] = useState(false);
  const [postError, setPostError] = useState("");

  const toggleSkill = (skill: string) => {
    setForm((f) => ({
      ...f,
      skills: f.skills.includes(skill)
        ? f.skills.filter((s) => s !== skill)
        : [...f.skills, skill],
    }));
  };

  const toggleDiscipline = (d: string) => {
    setForm((f) => ({
      ...f,
      disciplines: f.disciplines.includes(d)
        ? f.disciplines.filter((x) => x !== d)
        : [...f.disciplines, d],
    }));
  };

  const canAdvance =
    step === 1
      ? form.title.trim().length > 0 && form.problem.trim().length > 0
      : step === 2
      ? form.skills.length > 0 && form.time_commitment !== ""
      : true;

  if (submitted) {
    return (
      <div className="px-5 md:px-10 py-16 text-center max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-5">
          <Check size={32} strokeWidth={3} />
        </div>
        <h1 className="font-display font-bold text-2xl mb-3">
          Project posted! 🎉
        </h1>
        <p className="text-slate mb-6 leading-relaxed">
          <strong>{form.title}</strong> is now live on ProjectBridge.
          Students can discover it and request to join. You&rsquo;ll get notified
          when someone reaches out.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/projects" className="btn-primary">
            View in directory
          </Link>
          <Link href="/" className="btn-secondary">
            Back to feed
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-5 md:px-10 py-8 md:py-12">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="section-label">Create</p>
          <h1 className="section-title">Post a new project</h1>
          <p className="text-sm text-slate">
            Share your idea in under 2 minutes. You can always edit later.
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 flex items-center gap-2">
              <div
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  s <= step ? "bg-amber-500" : "bg-cloud"
                }`}
              />
            </div>
          ))}
          <span className="text-xs font-medium text-slate ml-2">
            Step {step} of 3
          </span>
        </div>

        {/* Step 1: Title & Problem */}
        {step === 1 && (
          <div className="space-y-5 animate-fade-in-up">
            <div>
              <label className="block text-sm font-semibold text-ink mb-1.5">
                Project title
              </label>
              <input
                type="text"
                placeholder="e.g., Campus Sustainability Tracker"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-4 py-3 rounded-card border border-cloud bg-white text-sm font-body text-ink placeholder:text-slate/40 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink mb-1.5">
                What problem does this project solve?
              </label>
              <textarea
                rows={3}
                placeholder="Describe the problem in 1-2 sentences..."
                value={form.problem}
                onChange={(e) => setForm({ ...form, problem: e.target.value })}
                className="w-full px-4 py-3 rounded-card border border-cloud bg-white text-sm font-body text-ink placeholder:text-slate/40 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink mb-1.5">
                Description <span className="text-slate font-normal">(optional)</span>
              </label>
              <textarea
                rows={4}
                placeholder="Tell potential collaborators more about the project..."
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full px-4 py-3 rounded-card border border-cloud bg-white text-sm font-body text-ink placeholder:text-slate/40 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all resize-none"
              />
            </div>
          </div>
        )}

        {/* Step 2: Skills & Time */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <label className="block text-sm font-semibold text-ink mb-2">
                What skills does this project need?
              </label>
              <div className="flex flex-wrap gap-2">
                {skillOptions.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
                      form.skills.includes(skill)
                        ? "bg-amber-500 text-white border-amber-500"
                        : "bg-white text-slate border-cloud hover:border-amber-400"
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink mb-2">
                Disciplines involved
              </label>
              <div className="flex flex-wrap gap-2">
                {disciplineOptions.map((d) => (
                  <button
                    key={d}
                    onClick={() => toggleDiscipline(d)}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
                      form.disciplines.includes(d)
                        ? "bg-teal-500 text-white border-teal-500"
                        : "bg-white text-slate border-cloud hover:border-teal-400"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink mb-2">
                Time commitment per week
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "light", label: "Light", sub: "1-2 hrs/wk" },
                  { value: "steady", label: "Steady", sub: "3-5 hrs/wk" },
                  { value: "deep", label: "Deep", sub: "6+ hrs/wk" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setForm({ ...form, time_commitment: opt.value })}
                    className={`p-4 rounded-card border text-center transition-all ${
                      form.time_commitment === opt.value
                        ? "border-amber-500 bg-amber-50"
                        : "border-cloud bg-white hover:border-amber-400"
                    }`}
                  >
                    <p className="text-sm font-semibold">{opt.label}</p>
                    <p className="text-xs text-slate mt-0.5">{opt.sub}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Confirm */}
        {step === 3 && (
          <div className="animate-fade-in-up">
            <div className="bg-white border border-cloud rounded-card p-6 space-y-4">
              <h2 className="font-display font-bold text-xl">
                {form.title}
              </h2>
              <p className="text-sm text-slate leading-relaxed">
                {form.problem}
              </p>
              {form.description && (
                <p className="text-sm text-slate leading-relaxed">
                  {form.description}
                </p>
              )}

              <div className="flex flex-wrap gap-1.5">
                {form.disciplines.map((d) => (
                  <span key={d} className="text-xs font-medium bg-teal-50 text-teal-600 px-2.5 py-0.5 rounded-full">
                    {d}
                  </span>
                ))}
                {form.skills.map((s) => (
                  <span key={s} className="text-xs font-medium bg-mist text-slate px-2.5 py-0.5 rounded-full">
                    {s}
                  </span>
                ))}
              </div>

              <p className="text-xs text-slate">
                ⏱️ Time commitment:{" "}
                <strong>
                  {form.time_commitment === "light"
                    ? "1-2 hrs/wk"
                    : form.time_commitment === "steady"
                    ? "3-5 hrs/wk"
                    : "6+ hrs/wk"}
                </strong>
              </p>
            </div>

            <p className="text-xs text-slate mt-4 text-center">
              You can edit everything after posting. Projects go live
              immediately.
            </p>
          </div>
        )}

        {/* Error message */}
        {postError && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-card text-sm text-red-700">
            {postError}
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex items-center justify-between mt-8">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="btn-secondary"
            >
              <ArrowLeft size={16} />
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              onClick={() => canAdvance && setStep(step + 1)}
              disabled={!canAdvance}
              className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              Next
              <ArrowRight size={16} />
            </button>
          ) : (
            <button
              onClick={async () => {
                setPosting(true);
                setPostError("");
                try {
                  const res = await fetch("/api/projects", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      title: form.title,
                      problem: form.problem,
                      description: form.description,
                      skills: form.skills,
                      disciplines: form.disciplines,
                      time_commitment: form.time_commitment,
                    }),
                  });
                  if (!res.ok) {
                    const err = await res.json();
                    throw new Error(err.error || "Something went wrong");
                  }
                  setSubmitted(true);
                } catch (err: any) {
                  setPostError(err.message);
                } finally {
                  setPosting(false);
                }
              }}
              disabled={posting}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Rocket size={16} />
              {posting ? "Posting…" : "Post Project"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
