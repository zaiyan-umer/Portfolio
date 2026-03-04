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
    key: "php",
    title: "PHP",
    href: "https://www.php.net/",
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
    key: "shadcn-ui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Library", "Component Library"],
    theme: true,
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
  // Validation & ORM
  {
    key: "zod",
    title: "Zod",
    href: "https://zod.dev/",
    categories: ["Library", "Validation"],
  },
  // {
  //   key: "drizzle",
  //   title: "Drizzle ORM",
  //   href: "https://orm.drizzle.team/",
  //   categories: ["Library", "ORM"],
  //   theme: true
  // },
  // Databases
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
  },
  {
    key: "neon",
    title: "Neon",
    href: "https://neon.tech/",
    categories: ["Database", "Serverless"],
  },
  // {
  //   key: "redis",
  //   title: "Redis",
  //   href: "https://redis.io/",
  //   categories: ["Database", "Cache"],
  // },
  // Tools
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
  },
  {
    key: "postman",
    title: "Postman",
    href: "https://www.postman.com/",
    categories: ["Tools", "API Testing"],
  },
  {
    key: "vercel",
    title: "Vercel",
    href: "https://vercel.com/",
    categories: ["Deployment", "Hosting"],
    theme: true,
  },
  {
    key: "figma",
    title: "Figma",
    href: "https://www.figma.com/",
    categories: ["Tools", "Design"],
  },
]