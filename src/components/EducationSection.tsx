import { portfolioData } from "@/src/data/portfolio";
import { SectionReveal } from "@/src/components/SectionReveal";

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-b border-zinc-200/80 py-20 sm:py-24 dark:border-[#1E1E24]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
              05. Education &amp; Hackathons
            </p>
            <h2
              id="education-heading"
              className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50"
            >
              Academic foundation, hackathons &amp; technical communities
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Degree & Coursework Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-zinc-200/90 bg-white p-6 lg:col-span-5 dark:border-[#23232A] dark:bg-[#111114]">
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="font-mono">Undergraduate Degree</span>
                  <span className="font-mono tabular-nums">Class of {education.graduationYear}</span>
                </div>

                <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  {education.degree}
                </h3>
                <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                  {education.institution}, {education.location}
                </p>

                <div className="mt-6 border-t border-zinc-200/80 pt-5 dark:border-[#202027]">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Relevant Coursework
                  </h4>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {education.coursework.map((course) => (
                      <li
                        key={course}
                        className="rounded-lg border border-zinc-200/80 bg-zinc-50/70 px-3 py-2 text-xs font-medium text-zinc-700 dark:border-[#23232A] dark:bg-[#16161B] dark:text-zinc-300"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Hackathons & Campus Organizations */}
            <div className="rounded-2xl border border-zinc-200/90 bg-white p-6 lg:col-span-7 dark:border-[#23232A] dark:bg-[#111114]">
              <div className="flex items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <span className="font-mono">Competitive Builds &amp; Leadership</span>
                <span className="font-mono tabular-nums">
                  {String(education.activities.length).padStart(2, "0")} Entries
                </span>
              </div>

              <div className="mt-4 divide-y divide-zinc-200/80 border-t border-zinc-200/80 dark:divide-[#202027] dark:border-[#202027]">
                {education.activities.map((activity) => (
                  <div key={activity.title} className="py-4 first:pt-4 last:pb-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-100">
                        {activity.title}
                      </h3>
                      <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
                        {activity.category}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {activity.detail}
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
