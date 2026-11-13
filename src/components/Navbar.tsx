import { useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolioData } from "@/src/data/portfolio";
import { Button } from "@/src/components/ui/button";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-[#FAFAFB]/88 backdrop-blur-md dark:border-[#1E1E24] dark:bg-[#0A0A0B]/88">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("top");
          }}
          className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm"
        >
          {portfolioData.profile.name}
        </a>

        {/* Zone 2: 5 concise single-line text links with scroll-spy */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium"
        >
          {portfolioData.navigation.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm ${
                  isActive
                    ? "text-zinc-950 dark:text-white"
                    : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-indigo-600 dark:bg-indigo-400"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <Button
            size="sm"
            onClick={() => handleNavClick("projects")}
            className="hidden sm:inline-flex"
          >
            View Projects
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 md:hidden dark:border-[#23232A] dark:bg-[#111114] dark:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile navigation"
          className="border-t border-zinc-200 bg-[#FAFAFB] px-4 py-4 md:hidden dark:border-[#1E1E24] dark:bg-[#0A0A0B]"
        >
          <div className="flex flex-col gap-1">
            {portfolioData.navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`flex min-h-[44px] items-center justify-between rounded-lg px-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300"
                      : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-[#17171C]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
                      Active
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
