"use client";  // Pastikan ini ditambahkan di bagian paling atas

import { useState } from "react";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-0 xl:gap-1">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&#39;m <br />{" "}
              <span className="text-accent">Kalila Atha Achmad</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Hello! I&#39;m Atha, A passionate Full Stack Web Developer and
              Software Engineer with a keen interest in Data Analysis. I
              specialize in building robust, efficient, and scalable web
              applications while continuously exploring new technologies and
              analytical methods to extract meaningful insights from data.
              Let&#39;s create something amazing together!
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                onClick={openModal}
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span className="">Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full h-full relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-2xl font-bold text-gray-600"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">My CV</h2>
            <iframe
              src="/CV Kalila Atha Achmad.pdf"
              width="100%"
              height="100%"
              title="CV"
              className="border"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
