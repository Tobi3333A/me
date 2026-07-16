import { experiences, type Experience } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

function ExperienceCard({ item }: { item: Experience }) {
  const inner = (
    <div className="flex gap-4 sm:gap-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-accent-soft text-sm font-bold text-accent-bright">
        {item.company.slice(0, 2).toUpperCase()}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-base font-semibold tracking-tight text-ink">
              {item.company}
            </h3>
            <p className="mt-0.5 text-sm font-medium text-accent-bright">
              {item.role}
            </p>
          </div>
          <span className="shrink-0 text-xs font-medium tracking-wide text-ink-faint uppercase">
            {item.period}
          </span>
        </div>
        <p className="mt-3 text-sm leading-7 text-ink-muted">
          {item.description}
        </p>
      </div>
    </div>
  );

  if (item.href) {
    return (
      <a href={item.href} className="card card-interactive block p-5 sm:p-6">
        {inner}
      </a>
    );
  }

  return <div className="card p-5 sm:p-6">{inner}</div>;
}

export function Experience() {
  return (
    <section className="mx-auto mt-24 w-full max-w-4xl px-6 sm:mt-32 sm:px-8">
      <SectionHeading title="Experience" />
      <div className="grid gap-4">
        {experiences.map((item) => (
          <ExperienceCard key={`${item.company}-${item.period}`} item={item} />
        ))}
      </div>
    </section>
  );
}
