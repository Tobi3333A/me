import Link from "next/link";
import { site } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/writings", label: "Writings" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/80 backdrop-blur-xl">
      <div className="reveal mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold tracking-tight text-ink transition-colors hover:text-accent-bright"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line-strong bg-accent-soft text-xs font-bold text-accent">
            {site.name
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </span>
          {site.name.split(" ")[0]}
        </Link>
        <nav className="flex items-center gap-1 rounded-full border border-line bg-white p-1 text-sm shadow-sm sm:gap-0">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-ink-muted transition-colors hover:bg-accent-soft hover:text-ink sm:px-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
