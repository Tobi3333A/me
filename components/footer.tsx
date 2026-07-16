import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mx-auto mt-28 w-full max-w-4xl px-6 pb-16 sm:mt-36 sm:px-8 sm:pb-20">
      <div className="card flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="text-sm font-semibold text-ink">{site.name}</p>
          <p className="mt-1 text-sm text-ink-faint">{site.location}</p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm">
          {site.socials.map((social, index) => (
            <span key={social.label} className="inline-flex items-center gap-2">
              {index > 0 ? (
                <span className="text-ink-faint/50" aria-hidden>
                  ·
                </span>
              ) : null}
              <a
                href={social.href}
                className="link-quiet"
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  social.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
              >
                {social.label}
              </a>
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
