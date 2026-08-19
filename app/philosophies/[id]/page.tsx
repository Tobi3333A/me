import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPosts } from "@/lib/getPosts";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const posts = await getPosts();
  const post = posts?.find((p) => p.id === id);
  if (!post) return { title: "Philosophy" };
  return { title: post.title };
}

export default async function PhilosophyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const posts = await getPosts();
  const post = posts?.find((p) => p.id === id);

  if (!post) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl px-6 pt-14 sm:px-8 sm:pt-16">
      <Link href="/philosophies" className="link-quiet reveal mb-6 inline-block text-sm">
        ← Philosophies
      </Link>
      <h1 className="reveal font-display text-[clamp(2.4rem,7vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
        {post.title}
      </h1>
      {post.description ? (
        <p className="reveal reveal-delay-1 mt-4 max-w-lg text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
          {post.description}
        </p>
      ) : null}
      <time className="reveal reveal-delay-2 mt-3 block text-sm font-medium tracking-wide text-ink-faint">
        {post.date}
      </time>
      <div
        className="philosophy-body mt-10"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
