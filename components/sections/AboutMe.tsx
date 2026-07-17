import { cn } from "@/lib/utils"

const highlightText = (text: string) => {
    const highlights = [
        { term: "CS student", className: "text-(--gh-blue) font-semibold" },
        { term: "problem solving", className: "text-(--gh-blue) font-semibold" },
        { term: "CPU, motherboard, RAM, SSD, and a screen and keyboard", className: "font-mono bg-black/5 dark:bg-white/5 text-gray-850 dark:text-gray-200 px-1.5 py-0.5 rounded-md text-xs border border-black/5 dark:border-white/5" },
        { term: "scalable and secure", className: "text-emerald-600 dark:text-emerald-400 font-semibold" },
        { term: "speed you can feel", className: "text-amber-600 dark:text-amber-400 font-semibold" },
        { term: "backend", className: "font-semibold text-gray-900 dark:text-gray-100" },
        { term: "frontend", className: "font-semibold text-gray-900 dark:text-gray-100" },
    ];

    let elements: React.ReactNode[] = [text];

    for (const h of highlights) {
        const nextElements: React.ReactNode[] = [];
        for (const el of elements) {
            if (typeof el !== "string") {
                nextElements.push(el);
                continue;
            }

            const parts = el.split(h.term);
            if (parts.length === 1) {
                nextElements.push(el);
            } else {
                parts.forEach((part, index) => {
                    nextElements.push(part);
                    if (index < parts.length - 1) {
                        nextElements.push(
                            <span key={`${h.term}-${index}`} className={h.className}>
                                {h.term}
                            </span>
                        );
                    }
                });
            }
        }
        elements = nextElements;
    }

    return elements;
};

type AboutMeData = {
    paragraphs: string[];
    highlights?: { label: string; value: string }[];
}

const AboutMe = ({ data, className }: { data: AboutMeData | null, className?: string }) => {
    if (!data) return null;

    return (
        <section id="about" className={cn("py-8", className)}>
            <div className="px-4 flex items-center gap-3">
                <h2 className="text-3xl font-semibold tracking-tight">About Me</h2>
            </div>

            <div className="px-4 mt-8">
                <div className="flex flex-col gap-5 max-w-3xl">
                    {data.paragraphs.map((paragraph, idx) => (
                        <p 
                            key={idx}
                            className={cn(
                                "leading-relaxed",
                                idx === 0 
                                    ? "text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100" 
                                    : "text-[15px] text-gray-600 dark:text-gray-400"
                            )}
                        >
                            {highlightText(paragraph)}
                        </p>
                    ))}
                </div>

                {data.highlights?.length ? (
                    <div className="flex flex-wrap gap-3 mt-10">
                        {data.highlights.map((highlight) => (
                            <div
                                key={highlight.label}
                                className="group flex items-center gap-2 rounded-full border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 py-1.5 pl-1.5 pr-4 transition-all hover:bg-black/10 dark:hover:bg-white/10"
                            >
                                <span className="flex items-center justify-center rounded-full bg-white dark:bg-[#1a1a1a] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 shadow-sm border border-black/5 dark:border-white/10">
                                    {highlight.label}
                                </span>
                                <span className="font-medium text-gray-800 dark:text-gray-200 text-[13px]">
                                    {highlight.value}
                                </span>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </section>
    )
}

export default AboutMe
