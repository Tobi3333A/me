import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  const inner = (
    <>
      <div className="mb-5 flex items-start justify-between gap-3">
        <span className="text-xs font-medium tracking-[0.14em] text-ink-faint">
          {number}
        </span>
        {project.href ? (
          <span
            className="text-sm text-ink-faint transition-colors group-hover:text-accent-bright"
            aria-hidden
          >
            ↗
          </span>
        ) : null}
      </div>
      <h3 className="font-display text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent-bright">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-ink-muted">
        {project.description}
      </p>
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
      <a
        href={project.href}
        className="card card-interactive group block p-5 sm:p-6"
      >
        {inner}
      </a>
    );
  }

  return <div className="card group p-5 sm:p-6">{inner}</div>;
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
          ? "mx-auto mt-20 w-full max-w-3xl px-6 sm:mt-28 sm:px-8"
          : "mx-auto w-full max-w-3xl px-6 sm:px-8"
      }
    >
      {showHeading ? (
        <SectionHeading
          title="Projects"
          href={showAllLink ? "/projects" : undefined}
        />
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
