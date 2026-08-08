'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled Server Component Error caught in (frontend)/error.tsx:', error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="max-w-md rounded-2xl border border-neutral-200 bg-white/80 p-8 shadow-xl backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/80">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 dark:bg-red-500/20 dark:text-red-400">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white">
          Something went wrong
        </h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          A server-side data fetching or rendering error occurred. Please try again or return home.
        </p>

        {process.env.NODE_ENV === 'development' && error.message && (
          <pre className="mt-4 max-h-32 overflow-x-auto rounded-lg bg-neutral-100 p-3 text-left font-mono text-xs text-red-600 dark:bg-neutral-950 dark:text-red-300">
            {error.message}
          </pre>
        )}

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <button
            onClick={() => reset()}
            className="flex-1 rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 active:scale-95 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="flex-1 rounded-xl border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 active:scale-95 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
