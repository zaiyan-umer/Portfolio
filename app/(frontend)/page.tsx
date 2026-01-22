'use client'
import { useEffect, useState } from "react";
import ContributionCalendar from "@/components/ContributionCalendar";
import MainBody from "@/components/MainBody";
import { useSetTheme } from "@/store/theme.store";
import { Separator } from "@/components/ui/separator";

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
        <Separator className='dark:bg-gray-300/20 mb-6' />
        <ContributionCalendar />
      </div>
    </>
  );
}
