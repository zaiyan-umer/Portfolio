'use client'
import LoadingScreen from "@/components/sections/LoadingScreen";
import { AnimatePresence } from "motion/react";
import { useEffect, useState, useRef } from "react";

export default function TransitionWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [mounted, setMounted] = useState<boolean>(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const maxTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isLoadingRef = useRef(isLoading);

    // Keep ref in sync with state
    useEffect(() => {
        isLoadingRef.current = isLoading;
    }, [isLoading]);

    useEffect(() => {
        setMounted(true);

        const cleanup = () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (maxTimeoutRef.current) clearTimeout(maxTimeoutRef.current);
        };

        try {
            const isBot = /Lighthouse|Googlebot|bot|spider|crawl/i.test(navigator.userAgent);
            const hasShown = sessionStorage.getItem("hasShownLoader") === "true";

            if (!hasShown && !isBot) {
                sessionStorage.setItem("hasShownLoader", "true");
                setIsLoading(true);

                timeoutRef.current = setTimeout(() => {
                    setIsLoading(false);
                }, 4000);

                // Fallback: force hide loader after 10s max (handles tab throttling)
                maxTimeoutRef.current = setTimeout(() => {
                    setIsLoading(false);
                }, 10000);

                // Handle tab visibility - if tab was backgrounded, ensure loader hides
                const handleVisibilityChange = () => {
                    if (!document.hidden && isLoadingRef.current) {
                        // Tab became visible, give it a moment then hide
                        setTimeout(() => setIsLoading(false), 100);
                    }
                };
                document.addEventListener('visibilitychange', handleVisibilityChange);

                return () => {
                    cleanup();
                    document.removeEventListener('visibilitychange', handleVisibilityChange);
                };
            }
        } catch (e) {
            console.warn("Storage access or transition failed:", e);
            setIsLoading(false);
        }

        return cleanup;
    }, []); // Only run once on mount

    return (
        <>
            <AnimatePresence>
                {mounted && isLoading && <LoadingScreen key="loader" />}
            </AnimatePresence>
            <div className={isLoading ? "opacity-0 h-screen overflow-hidden" : "opacity-100 transition-opacity duration-700"}>
                {children}
            </div>
        </>
    );
}