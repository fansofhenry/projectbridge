"use client";

import { useState } from "react";
import { X, Send, Check } from "lucide-react";

interface Props {
  projectTitle: string;
  projectSlug: string;
  ownerEmail?: string;
  onClose: () => void;
}

export default function JoinRequestModal({ projectTitle, projectSlug, ownerEmail, onClose }: Props) {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSend() {
    if (!name.trim() || !message.trim()) return;

    const subject = encodeURIComponent(`Join Request: ${projectTitle}`);
    const body = encodeURIComponent(
      `Hi!\n\nI'd like to join the "${projectTitle}" project on ProjectBridge.\n\nName: ${name}\nSkills I'm bringing: ${skills || "Will discuss"}\n\nWhy I want to join:\n${message}\n\nProjectBridge link: https://projectbridge-nine.vercel.app/projects/${projectSlug}`
    );

    const to = ownerEmail || "mesa@foothill.edu";
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-card shadow-xl w-full max-w-md relative animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-cloud">
          <h2 className="font-display font-bold text-lg tracking-tight">Request to Join</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-mist transition-colors">
            <X size={18} />
          </button>
        </div>

        {sent ? (
          <div className="px-6 py-10 text-center">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={24} className="text-green-600" />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">Request sent!</h3>
            <p className="text-sm text-slate mb-6">
              Your email app should have opened with your intro pre-filled. 
              The project lead will be in touch soon.
            </p>
            <button onClick={onClose} className="btn-secondary w-full justify-center">Done</button>
          </div>
        ) : (
          <div className="px-6 py-5 space-y-4">
            <p className="text-sm text-slate">
              Introduce yourself to the <span className="font-semibold text-ink">"{projectTitle}"</span> team. No formal application — just a quick hello.
            </p>

            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">
                Your name *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Chen"
                className="w-full border border-cloud rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">
                Skills you're bringing
              </label>
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="e.g. Python, UI design, video editing"
                className="w-full border border-cloud rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">
                Why do you want to join? *
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                placeholder="What excites you about this project? What can you contribute?"
                className="w-full border border-cloud rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
              />
            </div>

            <div className="flex gap-2 pt-1">
              <button onClick={onClose} className="btn-secondary flex-1 justify-center !py-2.5">
                Cancel
              </button>
              <button
                onClick={handleSend}
                disabled={!name.trim() || !message.trim()}
                className="btn-primary flex-1 justify-center !py-2.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                <Send size={15} />
                Send Intro
              </button>
            </div>
            <p className="text-[11px] text-slate/60 text-center">
              This opens your email app with your intro pre-written.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
