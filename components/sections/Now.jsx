import BlurFade from "@/components/primitives/BlurFade";
import { now } from "@/lib/content";

const Now = () => (
  <section id="now">
    <div className="flex flex-col gap-6">
      <BlurFade>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="section-heading">{now.heading}</h2>
          {/* Titik berdenyut menandakan bagian ini memang diperbarui berkala */}
          <span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {now.updated}
          </span>
        </div>
      </BlurFade>

      <div className="flex flex-col gap-3">
        {now.items.map((item, index) => (
          <BlurFade key={item.label} delay={0.04 + index * 0.05}>
            <div className="group flex flex-col gap-1 rounded-xl border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-baseline sm:gap-4">
              <span className="w-24 flex-none text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-foreground">
                {item.label}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  </section>
);

export default Now;
