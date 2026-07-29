import { involvements } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function Involvements() {
  return (
    <section className="mx-auto mt-20 w-full max-w-3xl px-6 sm:mt-28 sm:px-8">
      <SectionHeading title="Involvements" />
      <ul className="space-y-0">
        {involvements.map((item) => (
          <li
            key={item.org}
            className="flex flex-col gap-1 border-b border-line py-4 first:border-t sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <div>
              <a href={item.href} target="_blank" rel='noopener noreferrer'>
                <p className="text-sm font-semibold tracking-tight text-ink hover:text-accent-bright">
                  {item.org}
                </p>
              </a>
              <p className="mt-0.5 text-sm text-ink-muted">{item.role}</p>
            </div>
            <span className="shrink-0 text-xs font-medium tracking-wide text-ink-faint">
              {item.period}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
