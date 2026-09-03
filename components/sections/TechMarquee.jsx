import BlurFade from "@/components/primitives/BlurFade";
import { skills } from "@/lib/content";

const Row = ({ ariaHidden = false }) => (
  <ul
    aria-hidden={ariaHidden ? "true" : undefined}
    className="flex shrink-0 items-center"
  >
    {skills.items.map(({ icon: Icon, name }) => (
      <li key={name} className="group flex shrink-0 items-center gap-2 px-5">
        <Icon
          aria-hidden="true"
          className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-foreground"
        />
        <span className="whitespace-nowrap text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
          {name}
        </span>
      </li>
    ))}
  </ul>
);

// Satu satunya marquee di halaman. Berhenti saat kursor menyentuhnya,
// dan berhenti total kalau pengguna minta gerak dikurangi.
const TechMarquee = () => (
  <section id="stack" aria-label="Technologies I work with">
    <BlurFade>
      <div className="marquee -mx-6 py-2">
        <div className="marquee-track">
          <Row />
          <Row ariaHidden />
        </div>
      </div>
    </BlurFade>
  </section>
);

export default TechMarquee;
