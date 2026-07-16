import { cn } from "@/lib/utils"
import { ABOUT_ME } from "@/components/data/about-me"
import { UserCircle } from "lucide-react"

const AboutMe = ({ className }: { className?: string }) => {
    return (
        <section id="about" className={cn("py-8", className)}>
            <div className="px-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                    <UserCircle size={24} />
                </div>
                <h2 className="text-3xl font-semibold tracking-tight">About Me</h2>
            </div>

            <div className="px-4 mt-8">
                <div className="flex flex-col gap-5 max-w-3xl">
                    {ABOUT_ME.paragraphs.map((paragraph, idx) => (
                        <p 
                            key={idx}
                            className={cn(
                                "leading-relaxed",
                                idx === 0 
                                    ? "text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100" 
                                    : "text-[15px] text-gray-600 dark:text-gray-400"
                            )}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>

                {ABOUT_ME.highlights?.length ? (
                    <div className="flex flex-wrap gap-3 mt-10">
                        {ABOUT_ME.highlights.map((highlight) => (
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
