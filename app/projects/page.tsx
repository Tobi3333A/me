import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Projects } from "@/components/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="Selected work — products, experiments, and things I wanted to exist."
      />
      <div className="mt-10 sm:mt-12">
        <Projects showHeading={false} />
      </div>
    </>
  );
}
