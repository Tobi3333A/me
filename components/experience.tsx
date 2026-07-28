import { experiences, type Experience } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

function ExperienceItem({ item }: { item: Experience }) {
  const inner = (
    <>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <div>
          <h3 className="text-base font-semibold tracking-tight text-ink">
            {item.company}
          </h3>
          <p className="mt-0.5 text-sm text-accent-bright">{item.role}</p>
        </div>
        <span className="shrink-0 text-xs font-medium tracking-wide text-ink-faint">
          {item.period}
        </span>
      </div>
      <p className="mt-3 max-w-xl text-sm leading-7 text-ink-muted">
        {item.description}
      </p>
    </>
  );

  if (item.href) {
    return (
      <a href={item.href} className="timeline-item group block py-5">
        <div className="transition-colors group-hover:[&_h3]:text-accent-bright">
          {inner}
        </div>
      </a>
    );
  }

  return <div className="timeline-item py-5">{inner}</div>;
}

export function Experience() {
  return (
    <section className="mx-auto mt-20 w-full max-w-3xl px-6 sm:mt-28 sm:px-8">
      <SectionHeading title="Experience" />
      <div className="timeline-rail">
        {experiences.map((item) => (
          <ExperienceItem key={`${item.company}-${item.period}`} item={item} />
        ))}
      </div>
    </section>
  );
}
