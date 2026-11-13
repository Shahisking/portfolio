import { ExternalLink, Github, AlertCircle } from "lucide-react";
import type { ProjectCaseStudy } from "@/src/data/portfolio";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";
import { ArchitectureDiagram } from "@/src/components/ArchitectureDiagram";

interface ProjectDetailModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  return (
    <Dialog open={Boolean(project)} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        {project && (
          <div className="space-y-7">
            <DialogHeader>
              <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <span className="font-mono tabular-nums">Case Study {project.index}</span>
                <span aria-hidden="true">·</span>
                <span>{project.category}</span>
                <span aria-hidden="true">·</span>
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
              <DialogTitle className="pt-1 text-2xl sm:text-3xl">{project.title}</DialogTitle>
              <DialogDescription className="text-base leading-relaxed">
                {project.shortDescription}
              </DialogDescription>
            </DialogHeader>

            {/* Problem & Approach */}
            <div className="grid grid-cols-1 gap-6 border-t border-zinc-200 pt-6 md:grid-cols-2 dark:border-[#23232A]">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Problem
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {project.problem}
                </p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Engineering Approach
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {project.approach}
                </p>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div className="border-t border-zinc-200 pt-6 dark:border-[#23232A]">
              <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                System Architecture
              </h4>
              <ArchitectureDiagram
                nodes={project.architecture.nodes}
                caption={project.architecture.caption}
              />
            </div>

            {/* Stack & Outcome */}
            <div className="grid grid-cols-1 gap-6 border-t border-zinc-200 pt-6 md:grid-cols-2 dark:border-[#23232A]">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Stack
                </h4>
                <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm text-zinc-800 dark:text-zinc-200">
                  {project.stack.map((tech, i) => (
                    <span key={tech} className="inline-flex items-center gap-2">
                      {i > 0 && (
                        <span aria-hidden="true" className="text-zinc-400 dark:text-zinc-600">
                          ·
                        </span>
                      )}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Outcome
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {project.outcome}
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 pt-6 dark:border-[#23232A]">
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="secondary" size="sm" asChild>
                  <a
                    href={project.links.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    <span>{project.links.githubLabel}</span>
                  </a>
                </Button>

                {project.links.demoUrl ? (
                  <Button size="sm" asChild>
                    <a
                      href={project.links.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      <span>{project.links.demoLabel}</span>
                    </a>
                  </Button>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{project.links.demoLabel}</span>
                  </span>
                )}
              </div>

              <Button variant="ghost" size="sm" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
