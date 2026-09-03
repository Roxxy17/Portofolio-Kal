import BlurFade from "@/components/primitives/BlurFade";
import { FiChevronDown } from "react-icons/fi";
import { faq } from "@/lib/content";

// Memakai details dan summary bawaan browser. Tidak butuh JavaScript,
// bisa dibuka dengan keyboard, dan tetap terbaca kalau skrip gagal muat.
const Faq = () => (
  <section id="faq">
    <div className="flex flex-col gap-6">
      <BlurFade>
        <h2 className="section-heading">{faq.heading}</h2>
      </BlurFade>

      <div className="flex flex-col gap-2">
        {faq.items.map((item, index) => (
          <BlurFade key={item.question} delay={0.04 + index * 0.05}>
            <details className="group rounded-xl border bg-card px-4 open:pb-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-medium marker:hidden [&::-webkit-details-marker]:hidden">
                {item.question}
                <FiChevronDown
                  aria-hidden="true"
                  className="size-4 flex-none text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          </BlurFade>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
