export type AboutMeContent = {
  /** Bio paragraphs rendered in order. */
  paragraphs: string[]
  /** Quick-fact label/value pairs shown alongside the bio. */
  highlights?: { label: string; value: string }[]
}

// PLACEHOLDER — replace with your real bio and quick facts.
export const ABOUT_ME: AboutMeContent = {
  paragraphs: [
    "PLACEHOLDER — Write a short introduction here: who you are, what you build, and what you're currently focused on.",
    "PLACEHOLDER — Add a second paragraph with more context: your background, interests, or what drives you as a developer.",
  ],
  highlights: [
    { label: "Based in", value: "PLACEHOLDER" },
    { label: "Focus", value: "PLACEHOLDER" },
    { label: "Open to", value: "PLACEHOLDER" },
  ],
}
