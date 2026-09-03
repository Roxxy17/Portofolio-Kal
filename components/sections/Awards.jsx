import { FiAward } from "react-icons/fi";
import BlurFade from "@/components/primitives/BlurFade";
import { awards } from "@/lib/content";

// Peringkat juara dipakai sebagai penanda, bukan nomor urut hias.
// Juara pertama dibalik warnanya supaya langsung terbaca lebih dulu.
const Awards = () => (
  <section id="awards">
    <div className="flex flex-col gap-6">
      <BlurFade>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="w-fit rounded-lg bg-foreground px-3 py-1 text-sm text-background">
            {awards.badge}
          </span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {awards.heading}
          </h2>
          <p className="max-w-[600px] text-muted-foreground">{awards.intro}</p>
        </div>
      </BlurFade>

      <ul className="grid gap-3 sm:grid-cols-2">
        {awards.items.map((item, index) => {
          const isFirst = item.place === "1st";
          return (
            <BlurFade
              key={`${item.title}-${index}`}
              delay={0.04 + index * 0.05}
              as="li"
              className="h-full"
            >
              <div className="shine group flex h-full items-start gap-3 rounded-xl border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span
                  className={`grid size-10 flex-none place-items-center rounded-lg text-xs font-bold transition-transform duration-300 group-hover:scale-110 ${
                    isFirst
                      ? "bg-foreground text-background"
                      : "border text-muted-foreground"
                  }`}
                >
                  {isFirst ? (
                    <FiAward aria-hidden="true" className="size-4" />
                  ) : (
                    item.place
                  )}
                </span>

                <div className="flex min-w-0 flex-col gap-0.5">
                  <span className="font-semibold leading-tight">{item.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.detail}
                  </span>
                  <span className="mt-1 text-xs tabular-nums text-muted-foreground">
                    {isFirst ? "1st place" : item.place} &middot; {item.year}
                  </span>
                </div>
              </div>
            </BlurFade>
          );
        })}
      </ul>
    </div>
  </section>
);

export default Awards;
