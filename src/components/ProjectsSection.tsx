import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  portfolioData,
  type ProjectCaseStudy,
  type ProjectCategory,
} from "@/src/data/portfolio";
import { SectionReveal } from "@/src/components/SectionReveal";
import { ArchitectureDiagram } from "@/src/components/ArchitectureDiagram";
import { ProjectDetailModal } from "@/src/components/ProjectDetailModal";

const filterOptions: Array<"All" | ProjectCategory> = [
  "All",
  "GenAI & RAG",
  "CV & Agents",
  "Full-Stack",
];

interface ProjectsSectionProps {
  selectedProject: ProjectCaseStudy | null;
  onSelectProject: (project: ProjectCaseStudy | null) => void;
}

export function ProjectsSection({
  selectedProject,
  onSelectProject,
}: ProjectsSectionProps) {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");

  const filteredProjects =
    filter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-zinc-200/80 py-20 sm:py-24 dark:border-[#1E1E24]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
                03. Featured Projects
              </p>
              <h2
                id="projects-heading"
                className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50"
              >
                Systems &amp; engineering case studies
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Select any project to inspect the problem framing, technical approach, system architecture, and outcome.
              </p>
            </div>

            {/* Interactive Segmented Filter Control */}
            <div
              role="group"
              aria-label="Filter projects by domain"
              className="inline-flex w-fit flex-wrap items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-100/80 p-1 dark:border-[#23232A] dark:bg-[#111114]"
            >
              {filterOptions.map((option) => {
                const active = filter === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFilter(option)}
                    aria-pressed={active}
                    className={`rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                      active
                        ? "bg-white text-zinc-950 shadow-sm dark:bg-[#1E1E26] dark:text-white"
                        : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bento Case-Study Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {filteredProjects.map((project) => {
              const isWide = filter === "All" && project.featuredSpan === "wide";
              return (
                <article
                  key={project.slug}
                  className={`group flex flex-col justify-between rounded-2xl border border-zinc-200/90 bg-white p-6 transition-all duration-150 hover:border-indigo-500/50 dark:border-[#23232A] dark:bg-[#111114] dark:hover:border-indigo-500/50 ${
                    isWide ? "lg:col-span-2" : ""
                  }`}
                >
                  <div>
                    {/* Quiet single-line metadata kicker (Zero-pill discipline) */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                      <div className="flex items-center gap-2">
                        <span className="font-mono tabular-nums">{project.index}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.category}</span>
                      </div>
                      <span
                        className={
                          project.status === "Completed"
                            ? "font-medium text-indigo-600 dark:text-indigo-400"
                            : "font-medium text-amber-700 dark:text-amber-400"
                        }
                      >
                        {project.status}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="text-left hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm"
                      >
                        {project.title}
                      </button>
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {project.shortDescription}
                    </p>

                    {/* Compact Architecture Flow Preview */}
                    <div className="mt-5">
                      <ArchitectureDiagram nodes={project.architecture.nodes} compact />
                    </div>
                  </div>

                  {/* Stack & Case Study Action */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200/80 pt-4 dark:border-[#202027]">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                      {project.stack.slice(0, 5).map((item, i) => (
                        <span key={item} className="inline-flex items-center gap-2">
                          {i > 0 && (
                            <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">
                              ·
                            </span>
                          )}
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm"
                    >
                      <span>Read case study</span>
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </SectionReveal>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => onSelectProject(null)}
      />
    </section>
  );
}
