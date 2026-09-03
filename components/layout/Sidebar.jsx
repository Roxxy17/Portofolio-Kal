import Image from "next/image";
import BlurFade from "@/components/primitives/BlurFade";
import WordReveal from "@/components/primitives/WordReveal";
import OrbitIcons from "@/components/primitives/OrbitIcons";
import SideNav from "./SideNav";
import { hero, site, DELAY } from "@/lib/content";

// Di layar lebar rail ini menempel setinggi layar, jadi identitas dan
// navigasi selalu terlihat sementara isi halaman mengalir di sebelahnya.
const Sidebar = () => (
  <header
    id="hero"
    className="flex flex-col gap-8 py-16 xl:sticky xl:top-0 xl:h-dvh xl:justify-center xl:py-0"
  >
    <BlurFade delay={DELAY} inView={false} className="flex-none">
      {/* Kotak 256px ini memesan ruang untuk cincin orbit. Tanpa itu,
          ikon yang diposisikan absolut akan meluber ke judul di bawahnya. */}
      <div className="group relative mx-auto grid size-64 place-items-center xl:mx-0">
        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          <OrbitIcons />
        </div>

        <div className="relative size-28 overflow-hidden rounded-full border ring-4 ring-muted transition-transform duration-500 group-hover:scale-105 md:size-32">
          <Image
            src={site.portrait}
            alt={site.name}
            fill
            priority
            sizes="128px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </BlurFade>

    <div className="flex flex-col gap-3">
      <WordReveal
        text={hero.headline}
        delay={0.1}
        className="text-3xl font-semibold tracking-tighter sm:text-4xl"
      />
      <BlurFade delay={DELAY * 6} inView={false}>
        <p className="max-w-[46ch] text-muted-foreground">{hero.subtext}</p>
      </BlurFade>
    </div>

    <BlurFade delay={DELAY * 8} inView={false}>
      <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs text-muted-foreground">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
        Available for work
      </span>
    </BlurFade>

    <BlurFade delay={DELAY * 10} inView={false}>
      <SideNav />
    </BlurFade>
  </header>
);

export default Sidebar;
