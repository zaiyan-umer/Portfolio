'use client'
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ContributionCalendar from "@/components/ContributionCalendar";
import MainBody from "@/components/MainPage/MainBody";
import { Separator } from "@/components/ui/separator";
import SkillsAndCoursework from "@/components/MainPage/SkillsAndCoursework";
import { ContactForm } from "@/components/ContactForm";
import Footer from "@/components/MainPage/Footer";
import LoadingScreen from "@/components/MainPage/LoadingScreen";

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

            <ContributionCalendar className='mt-8 mb-16 lg:mx-20' />

            <Separator className='dark:bg-gray-300/20' />

            <SkillsAndCoursework className='my-20 lg:mx-20' />

            <Separator className='dark:bg-gray-300/20' />

            <ContactForm className="pt-12" />
            <Footer />
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
