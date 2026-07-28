import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Involvements } from "@/components/involvements";
import { Projects } from "@/components/projects";
import { Writings } from "@/components/writings";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Involvements />
      <Projects limit={4} showAllLink />
      {/* <Writings limit={3} showAllLink /> */}
    </>
  );
}
