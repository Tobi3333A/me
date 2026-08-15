import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Philosophies } from "@/components/philosophies";
import { getPosts } from "@/lib/getPosts";
export const metadata: Metadata = {
  title: "Philosophies",
};

export default async function PhilosophiesPage() {
  const posts = await getPosts();
  return (
    <>
      <PageHeader
        title="Philosophies"
        description="My thoughts on life & tech."
      />
      {posts ? (
          <div className="mt-10 sm:mt-12">
            <Philosophies showHeading={false} posts={posts} />
          </div>
        ) : (
          <p className="mx-auto max-w-3xl px-6 sm:px-8 mt-3">Coming soon...</p>
        )
      }
    </>
  );
}
