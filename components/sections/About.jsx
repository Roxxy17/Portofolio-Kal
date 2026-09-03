import { FiMapPin, FiCode, FiBookOpen } from "react-icons/fi";
import BlurFade from "@/components/primitives/BlurFade";
import { about, site } from "@/lib/content";

const renderBio = (text) =>
  text.split("==").map((chunk, index) =>
    index % 2 === 1 ? (
      <span
        key={index}
        className="font-medium text-foreground underline decoration-border underline-offset-4"
      >
        {chunk}
      </span>
    ) : (
      <span key={index}>{chunk}</span>
    )
  );

// Kartu kecil yang miring dan melayang di margin kanan. Sisi kiri sengaja
// dilewati karena di sana sudah ada rail identitas.
//
// Rotasi dipasang di pembungkus luar dan animasi melayang di lapisan dalam.
// Kalau digabung, keyframe translate akan menimpa transform rotate.
const FloatCard = ({ className, rotate, delay, children }) => (
  <div
    className={`pointer-events-none absolute hidden w-[172px] 2xl:block ${className}`}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <div
      className="floaty rounded-xl border bg-card p-3 shadow-sm"
      style={{ animationDuration: "9s", animationDelay: delay }}
    >
      {children}
    </div>
  </div>
);

const About = () => (
  <section id="about" className="relative">
    <FloatCard className="-right-56 -top-6" rotate={-6} delay="0s">
      <div className="flex items-center gap-2">
        <FiMapPin aria-hidden="true" className="size-3.5 text-muted-foreground" />
        <span className="text-xs font-medium">Based in</span>
      </div>
      <p className="mt-1 text-sm font-semibold leading-tight">{site.location}</p>
    </FloatCard>

    <FloatCard className="-right-64 top-24" rotate={5} delay="0.7s">
      <div className="flex items-center gap-2">
        <FiCode aria-hidden="true" className="size-3.5 text-muted-foreground" />
        <span className="text-xs font-medium">Focus</span>
      </div>
      <p className="mt-1 text-sm font-semibold leading-tight">
        Full-stack and data
      </p>
    </FloatCard>

    <FloatCard className="-right-52 top-52" rotate={-3} delay="1.4s">
      <div className="flex items-center gap-2">
        <FiBookOpen aria-hidden="true" className="size-3.5 text-muted-foreground" />
        <span className="text-xs font-medium">Studying</span>
      </div>
      <p className="mt-1 text-sm font-semibold leading-tight">
        Computer Science, Amikom
      </p>
    </FloatCard>

    <div className="flex flex-col gap-4">
      <BlurFade>
        <h2 className="section-heading">{about.heading}</h2>
      </BlurFade>
      <BlurFade delay={0.04}>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          {renderBio(about.bio)}
        </p>
      </BlurFade>
    </div>
  </section>
);

export default About;
