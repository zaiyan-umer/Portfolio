import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: "light",

  toggleTheme: () => {
    const next = get().theme === "light" ? "dark" : "light";

    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);

    set({ theme: next });
  },

  setTheme: (theme: Theme) => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
    set({ theme });
  },

  
}));

export const useTheme = () => useThemeStore((state) => state.theme);

export const useToggleTheme = () => useThemeStore((state) => state.toggleTheme);

export const useSetTheme = () => useThemeStore((state) => state.setTheme);
