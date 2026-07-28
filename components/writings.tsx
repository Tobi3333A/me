import { writings, type Writing } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

function WritingRow({ item }: { item: Writing }) {
  const inner = (
    <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:gap-8">
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
      {item.href ? (
        <span
          className="hidden shrink-0 text-sm text-ink-faint transition-colors group-hover:text-accent-bright sm:block"
          aria-hidden
        >
          →
        </span>
      ) : null}
    </div>
  );

  if (item.href) {
    return (
      <a href={item.href} className="list-row group">
        {inner}
      </a>
    );
  }

  return <div className="list-row">{inner}</div>;
}

export function Writings({
  limit,
  showAllLink = false,
  showHeading = true,
}: {
  limit?: number;
  showAllLink?: boolean;
  showHeading?: boolean;
}) {
  const items = limit ? writings.slice(0, limit) : writings;

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
          title="Writings"
          href={showAllLink ? "/writings" : undefined}
        />
      ) : null}
      <div>
        {items.map((item) => (
          <WritingRow key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
