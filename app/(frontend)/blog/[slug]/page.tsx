import Link from 'next/link'

export default function Blog (){
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-[#0d1117] dark:text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-[#0d1117]/50 dark:to-[#0d1117]" />
        </div>

        <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 py-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-1 text-sm text-gray-600 backdrop-blur dark:border-gray-800 dark:bg-white/5 dark:text-gray-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            New posts are on the way
          </div>

          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl">
            Blog Coming Soon
          </h1>

          <p className="mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            I’m crafting thoughtful articles about the projects, tools, and lessons learned
            along the way. Stay tuned for deep dives, tutorials, and behind-the-scenes notes.
          </p>

          <div className="grid w-full gap-4 sm:grid-cols-3">
            {[
              { title: 'Case Studies', desc: 'Breakdowns of real projects and decisions.' },
              { title: 'Guides', desc: 'Practical tips, patterns, and workflows.' },
              { title: 'Notes', desc: 'Short reflections and useful snippets.' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white/80 p-6 text-left shadow-sm backdrop-blur dark:border-gray-800 dark:bg-white/5"
              >
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-white transition hover:bg-blue-700"
            >
              View Projects
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 transition hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-600 dark:hover:text-white"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
