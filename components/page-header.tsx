export function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 pt-14 sm:px-8 sm:pt-16">
      <h1 className="reveal font-display text-[clamp(2.4rem,7vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
        {title}
      </h1>
      <p className="reveal reveal-delay-1 mt-4 max-w-lg text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
        {description}
      </p>
    </section>
  );
}
