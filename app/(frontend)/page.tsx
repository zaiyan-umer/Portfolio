'use client'
import { useEffect } from "react";
import ContributionCalendar from "@/components/ContributionCalendar";
import MainBody from "@/components/MainBody";
import { useSetTheme } from "@/store/theme.store";
import { Separator } from "@/components/ui/separator";
import About from "@/components/About-Readme";
import { ContactForm } from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  const setTheme = useSetTheme();

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const theme = saved ?? "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    setTheme(theme);
  }, [setTheme]);

  return (
    <>
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
    </>
  );
}
