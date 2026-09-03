import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";
import BlurFade from "@/components/primitives/BlurFade";
import { work, DELAY } from "@/lib/content";

// Mengambil dua huruf dari nama proyek. Batas kata dan batas huruf besar
// keduanya dihitung, jadi "HealthPassport" jadi HP, bukan H saja.
const initialsOf = (title) => {
  const parts = title.split(/[\s-]+/).flatMap((word) =>
    word.split(/(?=[A-Z])/).filter(Boolean)
  );
  const letters =
    parts.length > 1
      ? parts.map((part) => part[0]).join("")
      : title.slice(0, 2);
  return letters.slice(0, 2).toUpperCase();
};

const Card = ({ project }) => {
  const href = project.live || project.github || null;

  const body = (
    <>
      {/* Proyek tanpa screenshot tetap mendapat blok bertekstur, supaya
          semua kartu punya struktur sama dan kisinya tidak meregang. */}
      {!project.image ? (
        <div className="dotted relative flex aspect-video w-full items-center justify-center border-b bg-muted">
          <span className="text-2xl font-bold tracking-tighter text-muted-foreground/60">
            {initialsOf(project.title)}
          </span>
        </div>
      ) : (
        <div className="relative aspect-video w-full overflow-hidden border-b bg-muted">
          <Image
            src={project.image}
            alt={`${project.title} interface`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {project.live || project.github ? (
            <div className="absolute right-2 top-2 flex gap-1.5">
              {project.live ? (
                <span className="flex items-center gap-1 rounded-md border bg-background px-2 py-1 text-[11px] font-medium backdrop-blur-sm">
                  <FiExternalLink aria-hidden="true" className="size-3" />
                  Live
                </span>
              ) : null}
              {project.github ? (
                <span className="flex items-center gap-1 rounded-md border bg-background px-2 py-1 text-[11px] font-medium backdrop-blur-sm">
                  <FiGithub aria-hidden="true" className="size-3" />
                  Source
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-tight">{project.title}</h3>
          {href ? (
            <FiArrowUpRight
              aria-hidden="true"
              className="mt-0.5 size-4 flex-none text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          ) : null}
        </div>

        <span className="text-xs tabular-nums text-muted-foreground">
          {project.year}
        </span>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1 pt-2">
          {project.stack.map((tech) => (
            <li key={tech} className="tech-chip">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  const shell =
    "shine group flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg";

  return href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={shell}>
      {body}
    </Link>
  ) : (
    <div className={shell}>{body}</div>
  );
};

const Projects = () => (
  <section id="projects">
    <div className="flex flex-col gap-6">
      <BlurFade delay={DELAY * 11}>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="w-fit rounded-lg bg-foreground px-3 py-1 text-sm text-background">
            {work.badge}
          </span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {work.heading}
          </h2>
          <p className="max-w-[600px] text-muted-foreground">{work.intro}</p>
        </div>
      </BlurFade>

      <div className="grid gap-3 sm:grid-cols-2">
        {work.projects.map((project, index) => (
          <BlurFade
            key={project.title}
            delay={DELAY * 12 + index * 0.05}
            className="h-full"
          >
            <Card project={project} />
          </BlurFade>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
