'use client'
import { useEffect, useState } from "react";
import ContributionCalendar, { type ContributionDay } from "@/components/ContributionCalendar";
import MainBody from "@/components/MainBody";
import { useSetTheme } from "@/store/theme.store";

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
        <div className="text-xl"></div>
        <ContributionCalendar  />
      </div>
    </>
  );
}
