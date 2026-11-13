import { portfolioData } from "@/src/data/portfolio";
import { SectionReveal } from "@/src/components/SectionReveal";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/card";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-zinc-200/80 py-20 sm:py-24 dark:border-[#1E1E24]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
              02. Technical Stack
            </p>
            <h2
              id="skills-heading"
              className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50"
            >
              Capabilities across models, retrieval, and full-stack delivery
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioData.skills.map((group, idx) => (
              <Card
                key={group.category}
                className={`flex flex-col justify-between hover:border-zinc-300 dark:hover:border-[#32323D] ${
                  idx === portfolioData.skills.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-baseline justify-between gap-2">
                    <CardTitle className="text-base">{group.category}</CardTitle>
                    <span className="font-mono text-xs tabular-nums text-zinc-400 dark:text-zinc-500">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <CardDescription className="text-xs">{group.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="divide-y divide-zinc-200/70 border-t border-zinc-200/70 dark:divide-[#202027] dark:border-[#202027]">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="py-2 text-sm text-zinc-700 dark:text-zinc-300"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
