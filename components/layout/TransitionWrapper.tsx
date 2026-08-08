'use client'
import LoadingScreen from "@/components/sections/LoadingScreen";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function TransitionWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
        let t: NodeJS.Timeout;
        try {
            const isBot = /Lighthouse|Googlebot|bot|spider|crawl/i.test(navigator.userAgent);
            const hasShown = sessionStorage.getItem("hasShownLoader") === "true";
            
            if (!hasShown && !isBot) {
                sessionStorage.setItem("hasShownLoader", "true");
                setIsLoading(true);
                t = setTimeout(() => setIsLoading(false), 2500);
            }
        } catch (e) {
            console.warn("Storage access or transition failed:", e);
            setIsLoading(false);
        }

        return () => {
            if (t) clearTimeout(t);
        };
    }, []);

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