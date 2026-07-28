import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mx-auto mt-28 w-full max-w-3xl px-6 pb-16 sm:mt-36 sm:px-8 sm:pb-20">
      <div className="flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-ink">
            {site.name}
          </p>
          <p className="mt-2 max-w-xs text-sm leading-6 text-ink-faint">
            {site.location}
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {site.socials.map((social) => (
            <a
              key={social.label}
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
          ))}
        </nav>
      </div>
    </footer>
  );
}
