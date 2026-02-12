'use client'
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ContributionCalendar from "@/components/ContributionCalendar";
import MainBody from "@/components/MainBody";
import { Separator } from "@/components/ui/separator";
import About from "@/components/About-Readme";
import { ContactForm } from "@/components/ContactForm";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }
    return sessionStorage.getItem("hasShownLoader") !== "true";
  });

  useEffect(() => {
    const hasShown = sessionStorage.getItem("hasShownLoader") === "true";
    if (!hasShown) {
      sessionStorage.setItem("hasShownLoader", "true");
      const timeout = setTimeout(() => setIsLoading(false), 4000);
      return () => clearTimeout(timeout);
    }
    setIsLoading(false);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loader" />
      ) : (
        <motion.main
          key="content"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
        >
          <MainBody />
          <div className="mt-8 max-w-[80vw] mx-auto">
            <Separator className='dark:bg-gray-300/20' />

            <ContributionCalendar className='mt-8 mb-16' />


            <div className="relative">
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-px blur-sm bg-linear-to-r from-transparent via-blue-300 dark:via-blue-600 to-transparent opacity-50" />
            </div>

            <About className='pt-24 mb-12' />

            <Separator className='dark:bg-gray-300/20' />

            <ContactForm className="pt-12" />
            <Footer />
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
