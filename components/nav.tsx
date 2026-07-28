"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/writings", label: "Writings" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-[0.95rem] font-semibold tracking-tight text-ink transition-colors hover:text-accent-bright"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-5 text-sm sm:gap-7">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
