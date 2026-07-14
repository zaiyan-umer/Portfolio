'use client'

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronLeft, Copy, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const CopyButton = ({ text, className }: { text: string; className?: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1600);
        } catch {
            setCopied(false);
        }
    };

    return (
        <button
            type="button"
            onClick={handleCopy}
            className={cn(
                "inline-flex cursor-pointer items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors",
                className
            )}
            aria-label="Copy code to clipboard"
        >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copied" : "Copy"}
        </button>
    );
};

const CodeBlock = ({ code, label }: { code: string; label?: string }) => {
    return (
        <div className="border border-black/10 dark:border-gray-200/20 rounded-md overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-(--gh-hover)/80 border-b border-black/10 dark:border-gray-200/20">
                <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                    {label ?? "Code"}
                </div>
                <CopyButton text={code} />
            </div>
            <pre className="bg-black/5 dark:bg-gray-950/40 px-4 py-4 text-xs md:text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto whitespace-pre">
                <code>{code}</code>
            </pre>
        </div>
    );
};

type ComponentDocsProps = {
    title: string;
    description?: string;
    preview: React.ReactNode;
    demoCode?: string;
    sourceCode?: string;
    sourceUrl?: string;
    tags?: string[];
};

const ComponentDocs = ({
    title,
    description,
    preview,
    demoCode,
    sourceCode,
    sourceUrl,
    tags = [],
}: ComponentDocsProps) => {
    return (
        <main className="max-w-[80vw] mx-auto pt-24 pb-20">
            <div className="mb-8">
                <Link
                    href="/docs"
                    className="flex items-center gap-px w-fit text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                    <ChevronLeft size={18}/> Back to docs
                </Link>
                <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                    {title}
                </h1>
                {description ? (
                    <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl">
                        {description}
                    </p>
                ) : null}
                {tags.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-semibold tracking-wide border border-black/10 dark:border-gray-200/20 rounded-full px-3 py-1 text-gray-600 dark:text-gray-400"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                ) : null}
            </div>

            <div className="space-y-8">
                <section className="border border-black/10 dark:border-gray-200/20 rounded-md overflow-hidden">
                    <div className="px-4 py-3 bg-(--gh-hover)/80 border-b border-black/10 dark:border-gray-200/20 text-sm font-semibold">
                        Preview
                    </div>
                    <div className="p-6 bg-black/5 dark:bg-gray-950/40">
                        {preview}
                    </div>
                </section>

                {demoCode ? <CodeBlock code={demoCode} label="Demo" /> : null}

                {sourceUrl || sourceCode ? (
                    <section className="space-y-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">Source</h2>
                            {sourceUrl ? (
                                <Link
                                    href={sourceUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                >
                                    View on GitHub
                                    <ExternalLink size={14} />
                                </Link>
                            ) : null}
                        </div>
                        {sourceCode ? <CodeBlock code={sourceCode} label="Source Code" /> : null}
                    </section>
                ) : null}
            </div>
        </main>
    );
};

export default ComponentDocs;
