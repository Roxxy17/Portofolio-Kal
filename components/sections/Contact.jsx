import BlurFade from "@/components/primitives/BlurFade";
import Magnetic from "@/components/primitives/Magnetic";
import { contact, DELAY } from "@/lib/content";

const Contact = () => (
  <section id="contact">
    <BlurFade delay={DELAY * 16}>
      <div className="dotted relative overflow-hidden rounded-xl border px-6 py-16 text-center">
        <div className="relative mx-auto flex max-w-[460px] flex-col items-center gap-4">
          <span className="w-fit rounded-lg bg-foreground px-3 py-1 text-sm text-background">
            {contact.badge}
          </span>

          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {contact.heading}
          </h2>

          <p className="text-muted-foreground">{contact.intro}</p>

          {/* Tombol email tertarik pelan ke arah kursor */}
          <Magnetic className="mt-1">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-xl border bg-card px-4 py-2.5 font-medium transition-colors duration-200 hover:bg-accent"
            >
              {contact.email}
            </a>
          </Magnetic>
        </div>
      </div>
    </BlurFade>
  </section>
);

export default Contact;
