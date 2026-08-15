import { philosophies, type Philosophy } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

import Link from "next/link";

function PhilosophyRow({ item }: { item: Philosophy }) {
  return (
    <Link href={`/philosophies/${item.id}`}>
      <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:gap-8 group list-row">
        <time className="w-28 shrink-0 text-xs font-medium tracking-wide text-ink-faint">
          {item.date}
        </time>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold tracking-tight text-ink transition-colors group-hover:text-accent-bright">
            {item.title}
          </h3>
          <p className="mt-1.5 max-w-xl text-sm leading-7 text-ink-muted">
            {item.excerpt}
          </p>
        </div>
      </div>
    </Link>
  )
}

export function Philosophies({
  limit,
  showAllLink = false,
  showHeading = true,
}: {
  limit?: number;
  showAllLink?: boolean;
  showHeading?: boolean;
}) {
  const items = limit ? philosophies.slice(0, limit) : philosophies;

  return (
    <section
      className={
        showHeading
          ? "mx-auto mt-20 w-full max-w-3xl px-6 sm:mt-28 sm:px-8"
          : "mx-auto w-full max-w-3xl px-6 sm:px-8"
      }
    >
      {showHeading ? (
        <SectionHeading
          title="Philosophies"
          href={showAllLink ? "/philosophies" : undefined}
        />
      ) : null}
      <div>
        {items.map((item) => (
          <PhilosophyRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
