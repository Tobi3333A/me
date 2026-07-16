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
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          {title}
        </p>
        <div className="h-px w-12 bg-accent" />
      </div>
      {href ? (
        <Link href={href} className="link-quiet text-sm">
          {linkLabel}
        </Link>
      ) : null}
    </div>
  );
}
