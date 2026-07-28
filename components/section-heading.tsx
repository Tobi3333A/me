import Link from "next/link";

export function SectionHeading({
  title,
  href,
  linkLabel = "View all",
}: {
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-8 flex items-baseline justify-between gap-4">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-[1.65rem]">
        {title}
      </h2>
      {href ? (
        <Link href={href} className="link-quiet text-sm">
          {linkLabel} →
        </Link>
      ) : null}
    </div>
  );
}
