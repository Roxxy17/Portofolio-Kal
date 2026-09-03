import BlurFade from "@/components/primitives/BlurFade";

// Satu baris riwayat: bulatan inisial, judul, keterangan, lalu rentang
// tahun rata kanan. Dipakai untuk pengalaman kerja dan pendidikan.
const Row = ({ item }) => (
  <div className="flex items-center justify-between gap-3">
    <div className="flex min-w-0 flex-1 items-center gap-3">
      <span className="grid size-10 flex-none place-items-center rounded-full border bg-muted text-xs font-semibold ring-2 ring-border">
        {item.initials}
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="font-semibold leading-none">{item.org}</span>
        <span className="truncate text-sm text-muted-foreground">{item.role}</span>
      </div>
    </div>
    <span className="flex-none text-xs tabular-nums text-muted-foreground">
      {item.duration}
    </span>
  </div>
);

const Timeline = ({ id, heading, items, startDelay }) => (
  <section id={id}>
    <div className="flex flex-col gap-6">
      <BlurFade delay={startDelay}>
        <h2 className="section-heading">{heading}</h2>
      </BlurFade>
      <div className="flex flex-col gap-6">
        {items.map((item, index) => (
          <BlurFade
            key={`${item.org}-${item.role}-${index}`}
            delay={startDelay + 0.04 + index * 0.05}
          >
            <Row item={item} />
          </BlurFade>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
