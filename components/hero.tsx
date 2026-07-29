import { site } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[54vh] w-full max-w-3xl flex-col justify-center px-6 pb-8 pt-16 sm:min-h-[60vh] sm:px-8 sm:pt-20">
      <h1 className="reveal reveal-delay-1 font-display mt-8 text-[clamp(3rem,11vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-ink">
        {site.name}
      </h1>

      <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg leading-8 text-ink-muted sm:text-xl sm:leading-9">
        {site.role}. {site.bio}
      </p>

      <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
        <a
          href={site.socials[1].href}
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub
        </a>
        <a href={`mailto:${site.email}`} className="btn btn-ghost">
          Get in touch
        </a>
      </div>
    </section>
  );
}
