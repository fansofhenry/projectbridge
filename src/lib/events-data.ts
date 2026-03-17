import { CampusEvent } from "./types";

export const campusEvents: CampusEvent[] = [
  {
    id: "google-case",
    name: "Google Case Competition",
    short_name: "Google Case",
    description:
      "Teams tackle real-world business and tech challenges presented by Google engineers. Fast-paced, 24-hour format. Many strong teams don't place but have ideas worth continuing.",
    organizer: "BEC / Foothill College",
    upcoming_date: "Fall 2026",
    frequency: "Annual",
    disciplines: ["Business", "Computer Science", "Data Science"],
    emoji: "🔵",
    color: "bg-blue-50",
    accent: "text-blue-600",
  },
  {
    id: "innovation-challenge",
    name: "KCI Innovation Challenge",
    short_name: "Innovation Challenge",
    description:
      "Campus-wide innovation competition for teams with structured problem statements and product pitches. Structured mentorship and judging.",
    organizer: "Krause Center for Innovation",
    url: "https://foothill.edu/kci/",
    upcoming_date: "Spring 2026",
    frequency: "Annual",
    disciplines: ["Business", "Computer Science", "Art & Design", "Engineering"],
    emoji: "💡",
    color: "bg-amber-50",
    accent: "text-amber-600",
  },
  {
    id: "startup-club",
    name: "Startup Club Pitch Night",
    short_name: "Startup Club",
    description:
      "Monthly pitch events where student entrepreneurs present ideas. Great for solo founders looking for co-founders and feedback.",
    organizer: "Foothill Startup Club",
    upcoming_date: "Monthly",
    frequency: "Monthly",
    disciplines: ["Business", "Computer Science", "Social Justice"],
    emoji: "🚀",
    color: "bg-purple-50",
    accent: "text-purple-600",
  },
  {
    id: "enactus",
    name: "Enactus Social Innovation",
    short_name: "Enactus",
    description:
      "Student-run projects using entrepreneurial action for social impact. Teams compete regionally. Projects span education, environment, and economic development.",
    organizer: "Enactus Foothill",
    url: "https://www.enactus.org/",
    upcoming_date: "Spring 2026 Regionals",
    frequency: "Annual",
    disciplines: ["Social Justice", "Business", "Environmental Science"],
    emoji: "🌱",
    color: "bg-green-50",
    accent: "text-green-600",
  },
  {
    id: "bec",
    name: "BEC Club Events",
    short_name: "BEC",
    description:
      "Business and Entrepreneurship Club events including case competitions, guest speakers, and networking sessions. Regular pipeline for new project teams.",
    organizer: "BEC Foothill",
    upcoming_date: "Ongoing",
    frequency: "Ongoing",
    disciplines: ["Business", "Computer Science"],
    emoji: "💼",
    color: "bg-slate-50",
    accent: "text-slate-600",
  },
  {
    id: "rsls",
    name: "RSLS Research Program",
    short_name: "RSLS",
    description:
      "Research Skills and Lab Science program. Students complete structured research projects. Many finish the program without a clear path to continue or share their work.",
    organizer: "Foothill SLI / Science Division",
    upcoming_date: "Spring 2026",
    frequency: "Semester",
    disciplines: ["Biology", "Environmental Science", "Data Science", "Chemistry"],
    emoji: "🔬",
    color: "bg-teal-50",
    accent: "text-teal-600",
  },
  {
    id: "shark-tank",
    name: "Shark Tank Style Pitch",
    short_name: "Shark Tank",
    description:
      "Investor-style pitch event where student teams present business ideas to a panel. High-pressure, high-reward. Most teams have ideas worth developing even without winning.",
    organizer: "ETI / BEC Foothill",
    upcoming_date: "Fall 2026",
    frequency: "Annual",
    disciplines: ["Business", "Computer Science", "Social Justice"],
    emoji: "🦈",
    color: "bg-red-50",
    accent: "text-red-600",
  },
];

export function getEventById(id: string): CampusEvent | undefined {
  return campusEvents.find((e) => e.id === id);
}
