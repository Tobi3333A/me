import { involvements } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function Involvements() {
  return (
    <section className="mx-auto mt-24 w-full max-w-4xl px-6 sm:mt-32 sm:px-8">
      <SectionHeading title="Involvements" />
      <div className="grid gap-3 sm:grid-cols-3">
        {involvements.map((item) => (
          <div key={item.org} className="card p-5">
            <p className="text-sm font-semibold tracking-tight text-ink">
              {item.org}
            </p>
            <p className="mt-1 text-sm text-accent-bright">{item.role}</p>
            <p className="mt-3 text-xs font-medium tracking-wide text-ink-faint uppercase">
              {item.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
