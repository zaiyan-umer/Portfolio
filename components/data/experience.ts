export type ExperienceItem = {
  /** Company or organization name. */
  company: string
  /** Job title / role. */
  role: string
  /** e.g. "Jan 2025" */
  startDate: string
  /** e.g. "Jun 2025", or "Present" for a current role. */
  endDate: string
  /** e.g. "Austin, USA" or "Remote". */
  location?: string
  /** Short description of responsibilities and impact. */
  summary: string
  /** Expandable list of key achievements/responsibilities. */
  bullets?: string[]
  /** Tech/skills tags shown as pills. */
  tags: string[]
  /** Optional link to the company or role. */
  link?: string
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "KNYSYS",
    role: "Software Engineer Intern",
    startDate: "Jul 2026",
    endDate: "Present",
    location: "On-site",
    summary: "Working on cool stuff.",
    tags: ["Docker", "Agentic AI Development"],
  },
  {
    company: "Developers' Day - ACM NUCES",
    role: "Deputy - Hackathon",
    startDate: "Jan 2026",
    endDate: "Apr 2026",
    location: "Karachi, Sindh, Pakistan",
    summary:
      "Helped organize a 100+ student hackathon with 30+ registered teams, handling logistics and coordination.",
    tags: [],
  },
  {
    company: "National University of Computer and Emerging Sciences",
    role: "Teaching Assistant",
    startDate: "Sep 2025",
    endDate: "Dec 2025",
    summary: "CS 1002: Programming Fundamentals",
    bullets: [
      "Managed a class of 50+ students.",
      "Graded course material.",
      "Conducted quizzes and assignments.",
    ],
    tags: [],
  },
]
