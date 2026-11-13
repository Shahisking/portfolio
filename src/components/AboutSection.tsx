import { portfolioData } from "@/src/data/portfolio";
import { SectionReveal } from "@/src/components/SectionReveal";

export function AboutSection() {
  const { about } = portfolioData;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-zinc-200/80 py-20 sm:py-24 dark:border-[#1E1E24]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7">
              <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
                01. Engineering Profile
              </p>
              <h2
                id="about-heading"
                className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50"
              >
                {about.lead}
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Right Pillars Column — separated by clean hairline dividers */}
            <div className="flex flex-col justify-center lg:col-span-5">
              <div className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-[#23232A] dark:border-[#23232A]">
                {about.pillars.map((pillar, idx) => (
                  <div key={pillar.title} className="py-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                        {pillar.title}
                      </h3>
                      <span className="font-mono text-xs tabular-nums text-zinc-400 dark:text-zinc-500">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {pillar.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
