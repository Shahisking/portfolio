import { ArrowRight, ArrowDown } from "lucide-react";
import type { ArchitectureNode } from "@/src/data/portfolio";

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  caption?: string;
  compact?: boolean;
}

const stageColors: Record<ArchitectureNode["stage"], string> = {
  input:
    "border-zinc-300 bg-zinc-50 text-zinc-900 dark:border-[#2E2E38] dark:bg-[#16161C] dark:text-zinc-100",
  process:
    "border-zinc-300 bg-white text-zinc-900 dark:border-[#2E2E38] dark:bg-[#131318] dark:text-zinc-100",
  model:
    "border-indigo-400/60 bg-indigo-50/70 text-indigo-950 dark:border-indigo-500/50 dark:bg-indigo-500/12 dark:text-indigo-100",
  output:
    "border-zinc-300 bg-zinc-50 text-zinc-900 dark:border-[#2E2E38] dark:bg-[#16161C] dark:text-zinc-100",
};

export function ArchitectureDiagram({
  nodes,
  caption,
  compact = false,
}: ArchitectureDiagramProps) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 dark:border-[#23232A] dark:bg-[#0D0D11]">
      {caption && !compact && (
        <p className="mb-3 font-mono text-xs text-zinc-500 dark:text-zinc-400">{caption}</p>
      )}

      <div
        className={`flex flex-col ${
          compact ? "lg:flex-row lg:items-stretch" : "md:flex-row md:items-stretch"
        } gap-2`}
      >
        {nodes.map((node, index) => (
          <div
            key={node.id}
            className={`flex flex-1 flex-col ${
              compact ? "lg:flex-row lg:items-center" : "md:flex-row md:items-center"
            } gap-2`}
          >
            <div
              className={`flex-1 rounded-lg border px-3 py-2.5 ${stageColors[node.stage]}`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold tracking-tight">{node.label}</span>
                <span className="font-mono text-[10px] tabular-nums text-zinc-400 dark:text-zinc-500">
                  0{index + 1}
                </span>
              </div>
              {!compact && (
                <p className="mt-1 text-[11px] leading-snug text-zinc-600 dark:text-zinc-400">
                  {node.detail}
                </p>
              )}
            </div>

            {index < nodes.length - 1 && (
              <div
                aria-hidden="true"
                className="flex items-center justify-center text-zinc-400 dark:text-zinc-600 shrink-0"
              >
                <ArrowDown className={`h-3.5 w-3.5 ${compact ? "lg:hidden" : "md:hidden"}`} />
                <ArrowRight
                  className={`hidden h-3.5 w-3.5 ${compact ? "lg:block" : "md:block"}`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
