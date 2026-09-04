import BlurFade from "@/components/primitives/BlurFade";
import { FiChevronDown } from "react-icons/fi";
import { experience } from "@/lib/content";

// Satu kartu riwayat kerja. Bagian atas selalu terlihat: tempat, posisi,
// jenis keterlibatan, dan rentang tahun. Rincian poin per poin disimpan di
// balik details bawaan browser, supaya daftar sembilan entri ini tetap bisa
// dipindai sekilas tanpa kehilangan kedalaman isinya.
const Card = ({ item, open }) => (
  <article className="shine rounded-xl border bg-card p-4 transition-shadow duration-300 hover:shadow-md sm:p-5">
    <div className="flex items-start gap-3">
      <span className="grid size-10 flex-none place-items-center rounded-full border bg-muted text-xs font-semibold ring-2 ring-border">
        {item.initials}
      </span>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <h3 className="font-semibold leading-tight">{item.org}</h3>
            {item.type ? (
              <span className="flex-none rounded-full border bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                {item.type}
              </span>
            ) : null}
          </div>
          <span className="flex-none text-xs tabular-nums text-muted-foreground">
            {item.duration}
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          {item.role}
          {item.location ? (
            <>
              <span aria-hidden="true"> &middot; </span>
              {item.location}
            </>
          ) : null}
        </p>
      </div>
    </div>

    <div className="mt-3 flex flex-col gap-3 sm:pl-[52px]">
      <p className="text-sm leading-relaxed text-muted-foreground">
        {item.summary}
      </p>

      {item.stack?.length ? (
        <ul className="flex flex-wrap gap-1">
          {item.stack.map((tech) => (
            <li key={tech} className="tech-chip">
              {tech}
            </li>
          ))}
        </ul>
      ) : null}

      {item.highlights?.length ? (
        <details className="group border-t pt-3" open={open}>
          <summary className="flex cursor-pointer list-none items-center gap-1.5 text-sm font-medium marker:hidden [&::-webkit-details-marker]:hidden">
            What I did
            <FiChevronDown
              aria-hidden="true"
              className="size-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm leading-relaxed text-muted-foreground">
            {item.highlights.map((line) => (
              <li
                key={line}
                className="relative pl-4 before:absolute before:left-0 before:top-[0.55rem] before:size-1 before:rounded-full before:bg-muted-foreground"
              >
                {line}
              </li>
            ))}
          </ul>
        </details>
      ) : null}
    </div>
  </article>
);

const Experience = () => (
  <section id="work">
    <div className="flex flex-col gap-6">
      <BlurFade>
        <h2 className="section-heading">{experience.heading}</h2>
      </BlurFade>
      {experience.intro ? (
        <BlurFade delay={0.04}>
          <p className="-mt-3 text-muted-foreground">{experience.intro}</p>
        </BlurFade>
      ) : null}

      <div className="flex flex-col gap-3">
        {experience.items.map((item, index) => (
          <BlurFade
            key={`${item.org}-${item.role}`}
            delay={0.08 + index * 0.05}
          >
            {/* Kartu pertama yang punya rincian dibuka lebih dulu, supaya
                pengunjung langsung melihat bentuk isinya. */}
            <Card
              item={item}
              open={index === experience.items.findIndex((i) => i.highlights?.length)}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
