import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import BlurFade from "@/components/primitives/BlurFade";
import { services } from "@/lib/content";

// Baris fitur dipisah garis tegak, bukan kotak kartu. Kolom yang sedang
// disentuh kursor menyala, sisanya meredup, jadi fokusnya jelas.
const Services = () => (
  <section id="services">
    <div className="flex flex-col gap-8">
      <BlurFade>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="w-fit rounded-lg bg-foreground px-3 py-1 text-sm text-background">
            {services.badge}
          </span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {services.heading}
          </h2>
          <p className="max-w-[600px] text-muted-foreground">{services.intro}</p>
        </div>
      </BlurFade>

      <div className="group/row grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2">
        {services.items.map((service, index) => {
          const Icon = service.icon;
          return (
            <BlurFade key={service.title} delay={0.04 + index * 0.05}>
              <div className="flex h-full flex-col gap-3 bg-background p-5 transition-opacity duration-300 group-hover/row:opacity-50 hover:!opacity-100">
                <Icon aria-hidden="true" className="size-[18px] text-muted-foreground" />
                <h3 className="font-semibold leading-tight">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href="#contact"
                  className="mt-auto inline-flex w-fit items-center gap-1 pt-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Get in touch
                  <FiChevronRight
                    aria-hidden="true"
                    className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
