export function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 pt-14 sm:px-8 sm:pt-16">
      <h1 className="reveal text-[clamp(2.2rem,6vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-ink">
        {title}
      </h1>
      <p className="reveal reveal-delay-1 mt-4 max-w-xl text-[1.05rem] leading-8 text-ink-muted">
        {description}
      </p>
    </section>
  );
}
