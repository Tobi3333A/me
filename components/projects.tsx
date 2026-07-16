import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <>
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold tracking-tight text-ink">
          {project.title}
        </h3>
        <span className="text-accent-bright" aria-hidden>
          ↗
        </span>
      </div>
      <p className="text-sm leading-7 text-ink-muted">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  if (project.href) {
    return (
      <a href={project.href} className="card card-interactive block p-5 sm:p-6">
        {inner}
      </a>
    );
  }

  return <div className="card p-5 sm:p-6">{inner}</div>;
}

export function Projects({
  limit,
  showAllLink = false,
  showHeading = true,
}: {
  limit?: number;
  showAllLink?: boolean;
  showHeading?: boolean;
}) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section
      className={
        showHeading
          ? "mx-auto mt-24 w-full max-w-4xl px-6 sm:mt-32 sm:px-8"
          : "mx-auto w-full max-w-4xl px-6 sm:px-8"
      }
    >
      {showHeading ? (
        <SectionHeading
          title="Projects"
          href={showAllLink ? "/projects" : undefined}
        />
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
