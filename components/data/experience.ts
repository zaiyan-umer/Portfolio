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

// PLACEHOLDER — replace with your real work history, most recent first.
export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "PLACEHOLDER Company",
    role: "PLACEHOLDER Role",
    startDate: "PLACEHOLDER",
    endDate: "Present",
    location: "PLACEHOLDER",
    summary:
      "PLACEHOLDER — describe your responsibilities, key projects, and impact in this role.",
    bullets: [
      "PLACEHOLDER — a key achievement or responsibility",
      "PLACEHOLDER — another key achievement or responsibility",
    ],
    tags: ["Next.js", "TypeScript"],
  },
    {
    company: "PLACEHOLDER Company",
    role: "PLACEHOLDER Role",
    startDate: "PLACEHOLDER",
    endDate: "Present",
    location: "PLACEHOLDER",
    summary:
      "PLACEHOLDER — describe your responsibilities, key projects, and impact in this role.",
    bullets: [
      "PLACEHOLDER — a key achievement or responsibility",
      "PLACEHOLDER — another key achievement or responsibility",
    ],
    tags: ["Next.js", "TypeScript"],
  },
]
