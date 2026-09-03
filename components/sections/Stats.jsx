import BlurFade from "@/components/primitives/BlurFade";
import CountUp from "@/components/primitives/CountUp";
import { stats } from "@/lib/content";

const Stats = () => (
  <section id="stats" aria-label="By the numbers">
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.items.map((item, index) => (
        <BlurFade key={item.label} delay={index * 0.06} className="h-full">
          <div className="group flex h-full flex-col gap-1 rounded-xl border bg-card p-4 transition-colors duration-300 hover:bg-accent">
            <span className="text-3xl font-bold tracking-tighter transition-transform duration-300 group-hover:-translate-y-0.5">
              <CountUp value={item.value} suffix={item.suffix} />
            </span>
            <span className="text-xs text-muted-foreground">{item.label}</span>
          </div>
        </BlurFade>
      ))}
    </div>
  </section>
);

export default Stats;
