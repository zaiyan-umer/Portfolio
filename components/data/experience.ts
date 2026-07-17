export type ExperienceItem = {
  company: string
  role: string
  startDate: string
  endDate: string
  location?: string
  summary: string
  bullets?: string[]
  tags: string[]
  link?: string
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "KNYSYS",
    role: "Software Engineer Intern",
    startDate: "Jul 2026",
    endDate: "Present",
    location: "On-site - Karachi, Pakistan",
    summary: "Working on cool stuff.",
    tags: ["Docker", "Agentic AI Development"],
  },
  {
    company: "Developers' Day - ACM NUCES",
    role: "Deputy - Hackathon",
    startDate: "Jan 2026",
    endDate: "Apr 2026",
    location: "On-site - Karachi, Pakistan",
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
