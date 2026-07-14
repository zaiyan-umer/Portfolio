'use client'
import LoadingScreen from "@/components/sections/LoadingScreen";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function TransitionWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState<boolean | null>(null);

    useEffect(() => {
        const hasShown = sessionStorage.getItem("hasShownLoader") === "true";
        if (hasShown) {
            const t = setTimeout(() => setIsLoading(false), 0);
            return () => clearTimeout(t);
        }
        sessionStorage.setItem("hasShownLoader", "true");
        setIsLoading(true);
        const t = setTimeout(() => setIsLoading(false), 4000);
        return () => clearTimeout(t);
    }, []);

    if (isLoading === null) return null;

    return (
        <AnimatePresence mode="wait">
            {isLoading ? (
                <LoadingScreen key="loader" />
            ) : (
                <div key="content">{children}</div>
            )}
        </AnimatePresence>
    );
}