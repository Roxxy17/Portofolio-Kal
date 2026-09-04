import Sidebar from "@/components/layout/Sidebar";
import TechMarquee from "@/components/sections/TechMarquee";
import Showcase from "@/components/sections/Showcase";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Now from "@/components/sections/Now";
import Experience from "@/components/sections/Experience";
import Awards from "@/components/sections/Awards";
import Journey from "@/components/sections/Journey";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

// Dua kolom di layar lebar: rail identitas menempel di kiri, isi mengalir
// di kanan. Di bawah 1280px keduanya menumpuk jadi satu kolom.
const Home = () => (
  <div className="mx-auto w-full max-w-[1240px] px-6 xl:grid xl:grid-cols-[minmax(0,380px)_minmax(0,1fr)] xl:gap-20">
    <Sidebar />

    <main className="flex flex-col gap-14 py-8 xl:py-24">
      <TechMarquee />
      <About />
      <Stats />
      <Now />
      <Experience />
      <Awards />
      <Journey />
      <Showcase />
      <Skills />
      <Projects />
      <Services />
      <Process />
      <Faq />
      <Contact />
    </main>
  </div>
);

export default Home;
