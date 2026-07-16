import { writings, type Writing } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

function WritingCard({ item }: { item: Writing }) {
  const inner = (
    <>
      <time className="text-xs font-medium tracking-wide text-ink-faint uppercase">
        {item.date}
      </time>
      <h3 className="mt-3 text-base font-semibold tracking-tight text-ink">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-7 text-ink-muted">{item.excerpt}</p>
    </>
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
          ? "mx-auto mt-24 w-full max-w-4xl px-6 sm:mt-32 sm:px-8"
          : "mx-auto w-full max-w-4xl px-6 sm:px-8"
      }
    >
      {showHeading ? (
        <SectionHeading
          title="Writings"
          href={showAllLink ? "/writings" : undefined}
        />
      ) : null}
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <WritingCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
