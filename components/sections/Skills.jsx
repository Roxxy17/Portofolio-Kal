import BlurFade from "@/components/primitives/BlurFade";
import { skills, DELAY } from "@/lib/content";

const Skills = () => (
  <section id="skills">
    <div className="flex flex-col gap-4">
      <BlurFade delay={DELAY * 9}>
        <h2 className="section-heading">{skills.heading}</h2>
      </BlurFade>
      <div className="flex flex-wrap gap-2">
        {skills.items.map(({ icon: Icon, name }, index) => (
          <BlurFade key={name} delay={DELAY * 10 + index * 0.04}>
            <div className="skill-pill group cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              {Icon ? (
                <Icon
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6"
                />
              ) : null}
              <span>{name}</span>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
