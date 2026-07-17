export type TechStack = {
  /** Unique identifier used to resolve icon files. */
  key: string
  /** Display name of the technology. */
  title: string
  /** Official website URL. */
  href: string
  /** Category tags used for grouping/filtering. */
  categories: string[]
  /** If true, use theme-specific icons for dark/light mode. */
  theme?: boolean
}


export const TECH_STACK: TechStack[] = [
  // Languages
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
  },
  {
    key: "c",
    title: "C",
    href: "https://en.cppreference.com/w/c",
    categories: ["Language"],
  },
  {
    key: "c++",
    title: "C++",
    href: "https://isocpp.org/",
    categories: ["Language"],
  },
  // Runtime Environment
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
  },
  // Frontend Frameworks & Libraries
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
  },
  {
    key: "motion",
    title: "Motion",
    href: "https://motion.dev/",
    categories: ["Library", "Animation"],
  },
  // Backend Frameworks
  {
    key: "express",
    title: "Express",
    href: "https://expressjs.com/",
    categories: ["Framework", "Backend"],
    theme: true
  },
  {
    key: "django",
    title: "Django",
    href: "https://www.djangoproject.com/",
    categories: ["Framework", "Backend"],
  },
  {
    key: "socket",
    title: "Socket.io",
    href: "https://socket.io/",
    categories: ["Library", "Realtime"],
    theme: true
  },
  // Databases
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Database", "Cache"],
  },
  // Tools
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Tools", "Containerization"],
  },
  {
    key: "vercel",
    title: "Vercel",
    href: "https://vercel.com/",
    categories: ["Deployment", "Hosting"],
    theme: true,
  },
]