'use client'
import LoadingScreen from "@/components/sections/LoadingScreen";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function TransitionWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState<boolean | null>(null);

    useEffect(() => {
        const isBot = /Lighthouse|Googlebot|bot|spider|crawl/i.test(navigator.userAgent);
        const hasShown = sessionStorage.getItem("hasShownLoader") === "true";
        
        if (hasShown || isBot) {
            setIsLoading(false);
            return;
        }
        
        sessionStorage.setItem("hasShownLoader", "true");
        setIsLoading(true);
        const t = setTimeout(() => setIsLoading(false), 4000);
        return () => clearTimeout(t);
    }, []);

    return (
        <>
            <AnimatePresence>
                {isLoading && <LoadingScreen key="loader" />}
            </AnimatePresence>
            <div className={isLoading !== false ? "opacity-0 h-screen overflow-hidden" : "opacity-100 transition-opacity duration-700"}>
                {children}
            </div>
        </>
    );
}