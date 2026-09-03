import BlurFade from "@/components/primitives/BlurFade";
import { skills } from "@/lib/content";

const Card = ({ Icon, name, group }) => (
  <div className="flex items-center gap-3 rounded-xl border bg-card p-3 transition-colors duration-300 hover:bg-accent">
    <span className="grid size-9 flex-none place-items-center rounded-lg border bg-background">
      <Icon aria-hidden="true" className="size-4" />
    </span>
    <span className="flex min-w-0 flex-col">
      <span className="truncate text-sm font-medium">{name}</span>
      <span className="text-xs text-muted-foreground">{group}</span>
    </span>
  </div>
);

// Satu kolom berisi daftarnya dua kali, supaya perulangannya mulus
// tanpa jeda saat animasi kembali ke awal.
const Column = ({ items, reverse = false, duration }) => (
  <div
    className={`vmarquee-track flex flex-col gap-3 ${reverse ? "reverse" : ""}`}
    style={{ animationDuration: duration }}
  >
    {[...items, ...items].map((item, index) => (
      <Card key={index} Icon={item.icon} name={item.name} group={item.group} />
    ))}
  </div>
);

const Showcase = () => {
  const half = Math.ceil(skills.items.length / 2);
  const left = skills.items.slice(0, half);
  const right = skills.items.slice(half);

  return (
    <section id="toolkit" aria-label="Tools I work with">
      <div className="flex flex-col gap-6">
        <BlurFade>
          <h2 className="section-heading">Tools I reach for</h2>
        </BlurFade>

        <BlurFade delay={0.06}>
          <div className="vmarquee grid h-[420px] grid-cols-2 gap-3 overflow-hidden">
            <Column items={left} duration="34s" />
            <Column items={right} reverse duration="42s" />
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Showcase;
