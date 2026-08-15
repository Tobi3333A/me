import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Involvements } from "@/components/involvements";
import { Projects } from "@/components/projects";
import { Philosophies } from "@/components/philosophies";
import { getPosts } from "@/lib/getPosts";

export default async function Home() {
  const posts = await getPosts();
  return (
    <>
      <Hero />
      <Experience />
      <Involvements />
      <Projects limit={4} showAllLink />
      {posts ? <Philosophies limit={3} showAllLink posts={posts} /> : null}
    </>
  );
}
