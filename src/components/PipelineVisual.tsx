import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Database, Cpu, Search, Sparkles } from "lucide-react";
import { portfolioData } from "@/src/data/portfolio";

const stageIcons = {
  data: Database,
  embeddings: Cpu,
  retrieval: Search,
  llm: Sparkles,
} as const;

export function PipelineVisual() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const stages = portfolioData.pipelineStages;

  useEffect(() => {
    if (shouldReduceMotion || isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stages.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [shouldReduceMotion, isPaused, stages.length]);

  const activeStage = stages[activeIndex];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-[#23232A] dark:bg-[#111114]"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between gap-4 border-b border-zinc-200/80 pb-4 dark:border-[#202027]">
        <div>
          <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
            End-to-End Inference Flow
          </p>
          <h2 className="mt-1 text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Production AI Pipeline Architecture
          </h2>
        </div>
        <span className="font-mono text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
          {activeStage.step} / 0{stages.length}
        </span>
      </div>

      {/* Interactive 4-stage node pipeline */}
      <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {stages.map((stage, idx) => {
          const Icon = stageIcons[stage.id as keyof typeof stageIcons] ?? Database;
          const isActive = idx === activeIndex;

          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-pressed={isActive}
              className={`group relative flex flex-col items-start rounded-xl border p-4 text-left transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                isActive
                  ? "border-indigo-500/70 bg-indigo-50/70 dark:border-indigo-500/60 dark:bg-indigo-500/10"
                  : "border-zinc-200 bg-zinc-50/60 hover:border-zinc-300 dark:border-[#23232A] dark:bg-[#16161B] dark:hover:border-[#32323D]"
              }`}
            >
              <div className="flex w-full items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
                      isActive
                        ? "border-indigo-500/40 bg-indigo-600 text-white dark:bg-indigo-500"
                        : "border-zinc-200 bg-white text-zinc-600 dark:border-[#2A2A33] dark:bg-[#1D1D24] dark:text-zinc-400"
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                      {stage.label}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      {stage.subtitle}
                    </div>
                  </div>
                </div>
                <span className="font-mono text-xs tabular-nums text-zinc-400 dark:text-zinc-500">
                  {stage.step}
                </span>
              </div>

              <div className="mt-3 w-full truncate font-mono text-[11px] text-zinc-600 dark:text-zinc-400">
                {stage.module}
              </div>

              {/* Animated progress accent */}
              {isActive && !shouldReduceMotion && (
                <motion.div
                  layoutId="pipeline-active-indicator"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-indigo-600 dark:bg-indigo-400"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Stage Flow Indicator Strip */}
      <div
        aria-hidden="true"
        className="mb-5 hidden items-center justify-between gap-2 rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-3.5 py-2 font-mono text-xs text-zinc-600 sm:flex dark:border-[#202027] dark:bg-[#0D0D10] dark:text-zinc-400"
      >
        {stages.map((stage, idx) => (
          <div key={stage.id} className="flex items-center gap-2">
            <span
              className={
                idx === activeIndex
                  ? "font-medium text-indigo-600 dark:text-indigo-400"
                  : "text-zinc-500 dark:text-zinc-500"
              }
            >
              {stage.label}
            </span>
            {idx < stages.length - 1 && (
              <ArrowRight className="h-3 w-3 text-zinc-400 dark:text-zinc-600" />
            )}
          </div>
        ))}
      </div>

      {/* Active Stage Inspection Panel */}
      <div className="rounded-xl border border-zinc-200/90 bg-zinc-50/70 p-4 dark:border-[#23232A] dark:bg-[#0D0D10]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
            Stage {activeStage.step}: {activeStage.label} — {activeStage.subtitle}
          </span>
          <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
            Click stage to inspect
          </span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
          {activeStage.description}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-700 dark:text-zinc-300">
          {activeStage.artifacts.map((artifact, idx) => (
            <span key={artifact} className="inline-flex items-center gap-2 font-mono text-[11px]">
              {idx > 0 && (
                <span aria-hidden="true" className="text-zinc-400 dark:text-zinc-600">
                  ·
                </span>
              )}
              <span>{artifact}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
