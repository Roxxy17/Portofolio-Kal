// ? Import Any Headers [next/link,button,component(Nav)]
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";


const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className=" text-4xl font-semibold hover:text-accent-hover">
            Kal<span className="text-accent hover:text-white">.</span>
          </h1>
        </Link>

        {/* dekstop nav */}

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
          <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}

        <div className="xl:hidden"><MobileNav /></div>
      </div>
    </header>
  );
};

export default Header;
