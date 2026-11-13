import { ArrowLeft } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { portfolioData } from "@/src/data/portfolio";

interface NotFoundViewProps {
  onReturnHome: () => void;
}

export function NotFoundView({ onReturnHome }: NotFoundViewProps) {
  return (
    <main className="flex min-h-[75vh] items-center justify-center px-4 py-20">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
          Error 404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Page not found
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          The requested route does not exist on {portfolioData.profile.name}&apos;s portfolio. Return to the main index to view projects, skills, and contact details.
        </p>
        <div className="mt-7 flex justify-center">
          <Button onClick={onReturnHome}>
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Portfolio</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
