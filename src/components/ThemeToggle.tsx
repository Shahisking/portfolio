import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  theme: "dark" | "light";
  onToggle: () => void;
  className?: string;
}

export function ThemeToggle({ theme, onToggle, className = "" }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`inline-flex h-10 items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 text-xs font-medium text-zinc-700 transition-colors duration-150 hover:bg-zinc-100 hover:text-zinc-950 dark:border-[#23232A] dark:bg-[#111114] dark:text-zinc-300 dark:hover:bg-[#1A1A20] dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 whitespace-nowrap shrink-0 cursor-pointer ${className}`}
    >
      {isDark ? (
        <>
          <Sun className="h-3.5 w-3.5 text-indigo-400" aria-hidden="true" />
          <span>Light theme</span>
        </>
      ) : (
        <>
          <Moon className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
          <span>Dark theme</span>
        </>
      )}
    </button>
  );
}
