"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles, RotateCcw } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { sampleProjects, timeLabel } from "@/lib/sample-data";
import type { Project } from "@/lib/types";

const questions = [
  {
    question: "What area excites you most?",
    options: [
      { value: "cs", label: "💻 Computer Science & Tech" },
      { value: "science", label: "🔬 Science & Engineering" },
      { value: "social", label: "🌍 Social Justice & Community" },
      { value: "art", label: "🎨 Art, Design & Media" },
      { value: "business", label: "📈 Business & Entrepreneurship" },
      { value: "any", label: "🤷 Open to anything" },
    ],
  },
  {
    question: "What's your experience level?",
    options: [
      { value: "beginner", label: "🌱 Complete beginner — here to learn" },
      { value: "some", label: "📚 Some skills — taken a few classes" },
      { value: "solid", label: "⚙️ Solid — I've built things before" },
      { value: "lead", label: "🚀 Ready to lead a project" },
    ],
  },
  {
    question: "How much time can you realistically commit?",
    options: [
      { value: "light", label: "⏱ 1–2 hours/week — really busy schedule" },
      { value: "steady", label: "🕐 3–5 hours/week — steady commitment" },
      { value: "deep", label: "🔥 6+ hours/week — all in" },
    ],
  },
];

const disciplineMap: Record<string, string[]> = {
  cs: ["Computer Science", "Data Science"],
  science: ["Biology", "Environmental Science"],
  social: ["Social Justice"],
  art: ["Art & Design"],
  business: ["Business"],
  any: [],
};

function scoreProject(project: Project, answers: Record<number, string>): number {
  let score = 0;
  const area = answers[0];
  const level = answers[1];
  const time = answers[2];

  // Area match
  if (area === "any") {
    score += 2;
  } else {
    const targetDisciplines = disciplineMap[area] ?? [];
    if (project.disciplines.some((d) => targetDisciplines.includes(d))) {
      score += 4;
    }
  }

  // Time match
  if (project.time_commitment === time) {
    score += 3;
  } else if (
    (time === "deep") ||
    (time === "steady" && project.time_commitment !== "deep") ||
    (time === "light" && project.time_commitment === "light")
  ) {
    score += 1;
  }

  // Status bonus: recruiting projects score higher
  if (project.status === "recruiting") score += 2;
  if (project.status === "idea" && (level === "lead" || level === "solid")) score += 2;
  if (project.status === "in_progress") score += 1;

  return score;
}

export default function MatchPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const pick = (value: string) => {
    const newAnswers = { ...answers, [step]: value };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        setShowResults(true);
      }
    }, 300);
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const matches = sampleProjects
    .filter((p) => p.status !== "completed" && p.status !== "archived")
    .map((p) => ({ ...p, _score: scoreProject(p, answers) }))
    .sort((a, b) => b._score - a._score)
    .slice(0, 3);

  const progress = showResults ? 100 : Math.round((step / questions.length) * 100);

  return (
    <div className="px-5 md:px-10 py-8 md:py-12">
      <div className="max-w-xl mx-auto">
        <p className="section-label">Smart Matching</p>
        <h1 className="section-title">Find your project in 3 questions.</h1>
        <p className="text-sm text-slate mb-8">
          No endless scrolling. Answer three quick questions and we&rsquo;ll
          surface your top matches.
        </p>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-cloud rounded-full mb-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs font-medium text-slate mb-8">
          {showResults ? "Your matches are ready!" : `Step ${step + 1} of ${questions.length}`}
        </p>

        {!showResults ? (
          /* Quiz question */
          <div className="bg-white border border-cloud rounded-card p-6 md:p-8 animate-fade-in-up">
            <h2 className="font-display font-bold text-lg md:text-xl tracking-tight mb-5">
              {questions[step].question}
            </h2>

            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
              {questions[step].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => pick(opt.value)}
                  className={`text-left p-4 rounded-card border-2 transition-all duration-200 hover:-translate-y-0.5 ${
                    answers[step] === opt.value
                      ? "border-amber-500 bg-amber-50"
                      : "border-cloud bg-mist hover:border-amber-400"
                  }`}
                >
                  <span className="text-sm font-medium text-ink">
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Back button */}
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="mt-4 flex items-center gap-1.5 text-sm text-slate hover:text-amber-500 transition-colors"
              >
                <ArrowLeft size={14} />
                Back
              </button>
            )}
          </div>
        ) : (
          /* Results */
          <div className="animate-fade-in-up">
            <div className="bg-white border border-cloud rounded-card p-6 md:p-8 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={20} className="text-amber-500" />
                <h2 className="font-display font-bold text-lg">
                  Your Top Matches
                </h2>
              </div>

              {matches.length > 0 ? (
                <div className="grid gap-4 grid-cols-1">
                  {matches.map((project, i) => (
                    <div key={project.id} className="relative">
                      {i === 0 && (
                        <span className="absolute -top-2 -left-2 z-10 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          Best match
                        </span>
                      )}
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-slate mb-4">
                    No exact matches yet — but that means there&rsquo;s room for
                    your project!
                  </p>
                  <Link href="/create" className="btn-primary">
                    Post Your Idea
                  </Link>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <button onClick={reset} className="btn-secondary">
                <RotateCcw size={16} />
                Try again
              </button>
              <Link href="/projects" className="btn-secondary">
                Browse all projects
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
