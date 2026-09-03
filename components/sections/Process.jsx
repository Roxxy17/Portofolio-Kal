import BlurFade from "@/components/primitives/BlurFade";
import { process } from "@/lib/content";

// Nomor di sini bermakna: ini urutan kerja yang sebenarnya, bukan hiasan.
const Process = () => (
  <section id="process">
    <div className="flex flex-col gap-6">
      <BlurFade>
        <h2 className="section-heading">{process.heading}</h2>
      </BlurFade>

      <BlurFade delay={0.04}>
        <p className="text-muted-foreground">{process.intro}</p>
      </BlurFade>

      <ol className="flex flex-col gap-6">
        {process.steps.map((step, index) => (
          <BlurFade key={step.title} delay={0.08 + index * 0.05} as="li">
            <div className="flex gap-4">
              <span className="grid size-8 flex-none place-items-center rounded-full border bg-muted text-xs font-semibold tabular-nums ring-2 ring-border">
                {index + 1}
              </span>
              <div className="flex flex-col gap-1 pt-1">
                <h3 className="font-semibold leading-none">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          </BlurFade>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
