import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, Download, Mail } from "lucide-react";
import { toast } from "sonner";
import heroAiBg from "@/src/assets/images/hero_ai_architecture_1794575211171.jpg";
import { portfolioData } from "@/src/data/portfolio";
import { Button } from "@/src/components/ui/button";
import { MagneticButton } from "@/src/components/MagneticButton";
import { PipelineVisual } from "@/src/components/PipelineVisual";
import { ThemeToggle } from "@/src/components/ThemeToggle";

interface HeroSectionProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
  onNavigate: (sectionId: string) => void;
}

export function HeroSection({ theme, onToggleTheme, onNavigate }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [bgLoadError, setBgLoadError] = useState(false);
  const { profile } = portfolioData;

  const handleDownloadResume = () => {
    toast.success("Downloading resume PDF", {
      description:
        "Placeholder PDF served from /resume/Mohamed_Shahiskan_Resume.pdf — replace with your final resume.",
    });
  };

  return (
    <section
      id="top"
      aria-labelledby="hero-headline"
      className="relative overflow-hidden border-b border-zinc-200/80 bg-editorial-grid dark:border-[#1E1E24]"
    >
      {/* AI Vector & Tensor Architecture Background Image */}
      {!bgLoadError && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={heroAiBg}
            alt=""
            referrerPolicy="no-referrer"
            onError={() => setBgLoadError(true)}
            className="h-full w-full object-cover object-center opacity-15 invert transition-opacity duration-300 dark:opacity-50 dark:invert-0"
          />
          {/* Directional & vertical contrast scrims to preserve WCAG AA text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFB]/95 via-[#FAFAFB]/84 to-[#FAFAFB]/68 dark:from-[#0A0A0B]/92 dark:via-[#0A0A0B]/74 dark:to-[#0A0A0B]/48" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFB]/50 via-transparent to-[#FAFAFB]/92 dark:from-[#0A0A0B]/55 dark:via-transparent dark:to-[#0A0A0B]/92" />
        </div>
      )}

      {/* Subtle animated ambient indigo glow */}
      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [0.35, 0.55, 0.35],
                scale: [1, 1.06, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 9, repeat: Infinity, ease: "easeInOut" }
        }
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-indigo-500/12 blur-[120px] dark:bg-indigo-500/18"
      />

      {/* Grain overlay */}
      <div aria-hidden="true" className="bg-grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8 lg:pb-28">
        {/* Hero Utility Row: Subline + Theme Switcher */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200/80 pb-5 dark:border-[#1E1E24]">
          <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
            {profile.subline}
          </p>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        {/* Balanced Split Hero */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Typographic Column */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-xs tracking-wide text-indigo-600 dark:text-indigo-400"
              >
                {profile.name} · {profile.availabilityBadge}
              </motion.p>

              <motion.h1
                id="hero-headline"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 text-[clamp(2.15rem,4vw,3.4rem)] font-semibold leading-[1.1] tracking-tight text-zinc-950 dark:text-zinc-50"
              >
                AI / Machine Learning Engineer, building{" "}
                <span className="font-serif font-normal italic text-indigo-600 dark:text-indigo-400">
                  production-oriented
                </span>{" "}
                GenAI, RAG and CV systems.
              </motion.h1>

              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400"
              >
                {profile.valueStatement}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <MagneticButton>
                  <Button size="lg" onClick={() => onNavigate("projects")}>
                    <span>View Projects</span>
                    <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </MagneticButton>

                <MagneticButton strength={0.16}>
                  <Button variant="secondary" size="lg" asChild>
                    <a
                      href={profile.resumePath}
                      download="Mohamed_Shahiskan_Resume.pdf"
                      onClick={handleDownloadResume}
                    >
                      <Download className="h-4 w-4" aria-hidden="true" />
                      <span>Download Resume</span>
                    </a>
                  </Button>
                </MagneticButton>

                <Button variant="outline" size="lg" onClick={() => onNavigate("contact")}>
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Contact</span>
                </Button>
              </motion.div>
            </div>

            {/* Direct Identity Links Footer Strip */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-zinc-200/80 pt-5 text-xs text-zinc-600 dark:border-[#1E1E24] dark:text-zinc-400"
            >
              <a
                href={`mailto:${profile.email}`}
                className="font-mono hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {profile.email}
              </a>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">
                /
              </span>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {profile.githubHandle}
              </a>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">
                /
              </span>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {profile.linkedinHandle}
              </a>
            </motion.div>
          </div>

          {/* Right Animated AI Pipeline Visual */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <PipelineVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
