import Link from "next/link";

const componentGroups = [
  {
    id: "cards",
    title: "Cards",
    description: "Interactive and layout-driven cards for projects and showcases.",
    items: [
      {
        name: "Interactive Project Cards",
        href: "/docs/interactive-projects-card",
        description: "Animated cards with hover depth and focus states.",
      },
      {
        name: "Project Cards",
        href: "/docs/project-cards",
        description: "Clean, grid-ready cards for project overviews.",
      },
    ],
  },
];

const page = () => {
  return (
    <main className="max-w-[80vw] mx-auto pt-28 pb-20">
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 border border-black/10 dark:border-gray-200/20 rounded-full px-3 py-1">
          Docs
        </div>
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
          Components Documentation
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl">
          Browse components by category. Each entry links to a dedicated page with demos and usage.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
        <aside className="lg:sticky lg:top-24 h-fit">
          <div className="border border-black/10 dark:border-gray-200/20 rounded-md overflow-hidden">
            <div className="px-4 py-3 bg-(--gh-hover)/80 border-b border-black/10 dark:border-gray-200/20">
              <div className="text-sm font-semibold">Contents</div>
            </div>
            <nav className="px-2 py-2">
              {componentGroups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="flex items-center justify-between px-3 py-2 rounded-sm text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-(--gh-hover)/50 transition-colors"
                >
                  <span>{group.title}</span>
                  <span className="text-xs text-gray-400">{group.items.length}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <section className="space-y-10">
          {componentGroups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-24">
              <div className="mb-4">
                <h2 className="text-xl font-semibold">{group.title}</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {group.description}
                </p>
              </div>

              <div className="border border-black/10 dark:border-gray-200/20 rounded-md divide-y divide-black/5 dark:divide-gray-200/10">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-6 px-4 py-4 transition-colors hover:bg-(--gh-hover)/50"
                  >
                    <div className="md:w-64">
                      <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-(--gh-blue)">
                        {item.name}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 flex-1">
                      {item.description}
                    </div>
                    <div className="text-xs text-gray-400 md:ml-auto">
                      View docs
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default page;