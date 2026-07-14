'use client'

import { useEffect } from "react";
import { useSetTheme } from "@/store/theme.store";

const ThemeInitializer = () => {
  const setTheme = useSetTheme();

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const theme = saved ?? "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    setTheme(theme);
  }, [setTheme]);

  return null;
};

export default ThemeInitializer;
