import { useCallback, useEffect, useState } from "react";
import { Toaster } from "sonner";
import { portfolioData, type ProjectCaseStudy } from "@/src/data/portfolio";
import { Navbar } from "@/src/components/Navbar";
import { HeroSection } from "@/src/components/HeroSection";
import { AboutSection } from "@/src/components/AboutSection";
import { SkillsSection } from "@/src/components/SkillsSection";
import { ProjectsSection } from "@/src/components/ProjectsSection";
import { ExperienceSection } from "@/src/components/ExperienceSection";
import { EducationSection } from "@/src/components/EducationSection";
import { InterestsSection } from "@/src/components/InterestsSection";
import { ContactSection } from "@/src/components/ContactSection";
import { NotFoundView } from "@/src/components/NotFoundView";
import { Footer } from "@/src/components/Footer";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const saved = window.localStorage.getItem("ms-portfolio-theme");
    return saved === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function getInitialRouteState(): {
  isNotFound: boolean;
  initialProject: ProjectCaseStudy | null;
} {
  if (typeof window === "undefined") {
    return { isNotFound: false, initialProject: null };
  }
  const path = window.location.pathname;
  const searchParams = new URLSearchParams(window.location.search);
  const querySlug = searchParams.get("project");

  if (querySlug) {
    const found = portfolioData.projects.find((p) => p.slug === querySlug);
    if (found) return { isNotFound: false, initialProject: found };
  }

  if (path === "/" || path === "/index.html") {
    return { isNotFound: false, initialProject: null };
  }

  if (path.startsWith("/projects/")) {
    const slug = path.replace("/projects/", "").replace(/\/$/, "");
    const found = portfolioData.projects.find((p) => p.slug === slug);
    if (found) return { isNotFound: false, initialProject: found };
    return { isNotFound: true, initialProject: null };
  }

  return { isNotFound: true, initialProject: null };
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [{ isNotFound, initialProject }, setRouteState] = useState(getInitialRouteState);
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(
    initialProject
  );

  // Sync theme class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      window.localStorage.setItem("ms-portfolio-theme", theme);
    } catch {
      // Ignore storage failures
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  // Scroll-spy using IntersectionObserver
  useEffect(() => {
    if (isNotFound) return;
    const sectionIds = ["top", ...portfolioData.navigation.map((n) => n.id)];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: 0.01,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isNotFound]);

  // Sync browser popstate for shareable project URLs & 404 navigation
  useEffect(() => {
    const handlePopState = () => {
      const next = getInitialRouteState();
      setRouteState(next);
      setSelectedProject(next.initialProject);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleSelectProject = useCallback((project: ProjectCaseStudy | null) => {
    setSelectedProject(project);
    const url = new URL(window.location.href);
    if (project) {
      url.searchParams.set("project", project.slug);
    } else {
      url.searchParams.delete("project");
      if (url.pathname.startsWith("/projects/")) {
        url.pathname = "/";
      }
    }
    window.history.pushState({}, "", url.toString());
  }, []);

  const handleNavigate = useCallback(
    (sectionId: string) => {
      if (isNotFound) {
        window.history.pushState({}, "", `/#${sectionId}`);
        setRouteState({ isNotFound: false, initialProject: null });
        window.setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }, 60);
        return;
      }

      if (sectionId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    },
    [isNotFound]
  );

  const handleReturnHome = useCallback(() => {
    window.history.pushState({}, "", "/");
    setRouteState({ isNotFound: false, initialProject: null });
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFB] text-[#111114] dark:bg-[#0A0A0B] dark:text-[#F4F4F6] transition-colors duration-200">
      <Toaster theme={theme} position="bottom-right" richColors />

      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {isNotFound ? (
        <NotFoundView onReturnHome={handleReturnHome} />
      ) : (
        <main id="main-content">
          <HeroSection
            theme={theme}
            onToggleTheme={toggleTheme}
            onNavigate={handleNavigate}
          />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection
            selectedProject={selectedProject}
            onSelectProject={handleSelectProject}
          />
          <ExperienceSection />
          <EducationSection />
          <InterestsSection />
          <ContactSection />
        </main>
      )}

      <Footer
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
