export type AboutMeContent = {
  /** Bio paragraphs rendered in order. */
  paragraphs: string[]
  /** Quick-fact label/value pairs shown alongside the bio. */
  highlights?: { label: string; value: string }[]
}

export const ABOUT_ME: AboutMeContent = {
  paragraphs: [
    "A CS student with a genuine interest in problem solving, most of which involves a CPU, motherboard, RAM, SSD, and a screen and keyboard (a computer).",
    "I build websites and web apps for fun. On the backend I care about things actually being scalable and secure, not just working on my machine. On the frontend I care about speed you can feel, not just a clean look in a screenshot.",
  ],
  highlights: [
    { label: "Based in", value: "Karachi, Pakistan" },
    { label: "Focus", value: "Full-Stack Web Dev" },
    { label: "Open to", value: "Projects" },
  ],
}
