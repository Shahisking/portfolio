import { portfolioData } from "@/src/data/portfolio";
import { ThemeToggle } from "@/src/components/ThemeToggle";

interface FooterProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
  onNavigate: (sectionId: string) => void;
}

export function Footer({ theme, onToggleTheme, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/80 bg-[#FAFAFB] py-10 dark:border-[#1E1E24] dark:bg-[#0A0A0B]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {portfolioData.profile.name}
          </p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            © {currentYear} · {portfolioData.profile.subline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-5 text-xs text-zinc-600 dark:text-zinc-400">
            {portfolioData.navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </footer>
  );
}
