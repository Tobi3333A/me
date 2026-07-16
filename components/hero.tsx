import { site } from "@/lib/data";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 pt-14 sm:px-8 sm:pt-20">
      <div className="reveal">
        <span className="status-pill">{site.status}</span>
      </div>

      <h1 className="reveal reveal-delay-1 mt-8 text-[clamp(2.8rem,9vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.04em] text-ink">
        {site.name}
      </h1>

      <p className="reveal reveal-delay-2 mt-4 text-lg font-medium text-accent-bright sm:text-xl">
        {site.role}
      </p>

      <div className="reveal reveal-delay-3 mt-8 max-w-2xl space-y-4">
        <p className="text-[1.05rem] leading-8 text-ink-muted sm:text-lg sm:leading-8">
          {site.bio}
        </p>
        <p className="text-base leading-7 text-ink-faint">{site.focus}</p>
      </div>

      <div className="reveal reveal-delay-4 mt-10 flex flex-wrap gap-3">
        <a href={site.socials[1].href} className="btn" target="_blank" rel="noopener noreferrer">
          View GitHub
        </a>
        <a href={`mailto:${site.email}`} className="btn btn-ghost">
          Get in touch
        </a>
      </div>
    </section>
  );
}
