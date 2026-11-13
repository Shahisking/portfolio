import { portfolioData } from "@/src/data/portfolio";
import { SectionReveal } from "@/src/components/SectionReveal";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-zinc-200/80 py-20 sm:py-24 dark:border-[#1E1E24]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Section Title */}
            <div className="lg:col-span-4">
              <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
                04. Experience
              </p>
              <h2
                id="experience-heading"
                className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50"
              >
                Applied ML &amp; data engineering experience
              </h2>
            </div>

            {/* Timeline Column */}
            <div className="lg:col-span-8">
              <div className="relative space-y-10 pl-6 before:absolute before:bottom-2 before:left-0 before:top-2 before:w-px before:bg-zinc-200 dark:before:bg-[#23232A]">
                {portfolioData.experience.map((item) => (
                  <article
                    key={`${item.organization}-${item.role}`}
                    className="relative rounded-2xl border border-zinc-200/90 bg-white p-6 dark:border-[#23232A] dark:bg-[#111114]"
                  >
                    {/* Hairline node marker on timeline */}
                    <span
                      aria-hidden="true"
                      className="absolute -left-[29px] top-7 h-2.5 w-2.5 rounded-full border-2 border-indigo-600 bg-white dark:border-indigo-400 dark:bg-[#0A0A0B]"
                    />

                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                          {item.role}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                          {item.organization}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                        {item.period}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-3 border-t border-zinc-200/80 pt-5 text-sm leading-relaxed text-zinc-600 dark:border-[#202027] dark:text-zinc-400">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-zinc-200/80 pt-4 font-mono text-xs text-zinc-500 dark:border-[#202027] dark:text-zinc-400">
                      {item.focusAreas.map((area, i) => (
                        <span key={area} className="inline-flex items-center gap-2">
                          {i > 0 && (
                            <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">
                              ·
                            </span>
                          )}
                          <span>{area}</span>
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
