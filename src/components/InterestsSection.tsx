import { portfolioData } from "@/src/data/portfolio";

export function InterestsSection() {
  const { interests } = portfolioData;
  const repeated = [...interests, ...interests];

  return (
    <section
      aria-labelledby="interests-heading"
      className="border-b border-zinc-200/80 py-14 dark:border-[#1E1E24]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
          <h2
            id="interests-heading"
            className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
          >
            06. Areas of Interest
          </h2>
          <span className="text-xs text-zinc-500 dark:text-zinc-500">
            Hover to pause
          </span>
        </div>
      </div>

      {/* Marquee track (automatically wraps into a clean static grid under prefers-reduced-motion) */}
      <div className="marquee-container relative overflow-hidden border-y border-zinc-200/80 bg-white/60 py-5 dark:border-[#1E1E24] dark:bg-[#0E0E11]">
        <div className="animate-marquee flex items-center gap-8 px-4 sm:px-6">
          {repeated.map((interest, idx) => (
            <div
              key={`${interest}-${idx}`}
              aria-hidden={idx >= interests.length ? true : undefined}
              className="inline-flex items-center gap-8 whitespace-nowrap shrink-0"
            >
              <span className="font-serif text-lg tracking-tight text-zinc-800 sm:text-xl dark:text-zinc-200">
                {interest}
              </span>
              <span
                aria-hidden="true"
                className="font-mono text-xs text-indigo-600 dark:text-indigo-400"
              >
                /
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
