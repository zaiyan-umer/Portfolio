'use client'
import MainBody from "@/components/MainBody";
import { useSetTheme } from "@/store/theme.store";
import { useEffect } from "react";

export default function Home() {
  const setTheme = useSetTheme()

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const theme = saved ?? "light";

    document.documentElement.classList.toggle("dark", theme === "dark");
    setTheme(theme);
  }, [setTheme]);

  return (
    <>
      <MainBody />
    </>
  );
}
