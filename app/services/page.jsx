"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = [
  {
    num: "01",
    title: "web development",
    description:
      "Providing high-quality web development services, creating responsive and user-friendly websites tailored to client needs. We ensure seamless functionality and optimized performance.",
    href: "",
  },
  {
    num: "02",
    title: "video editor",
    description:
      "Expert video editing services, bringing your vision to life with professional editing techniques. We focus on storytelling, transitions, effects, and overall video enhancement.",
    href: "",
  },
  {
    num: "03",
    title: "ui/ux designer",
    description:
      "Delivering exceptional UI/UX design, ensuring user-friendly interfaces and immersive experiences. We focus on both aesthetics and usability for optimal user satisfaction.",
    href: "",
  },
  {
    num: "04",
    title: "Data Miner",
    description:
      "Offering data mining and web scraping services, extracting valuable insights and information from various sources efficiently and accurately for data-driven decision making.",
    href: "",
  },
];

const services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {Services.map((Services, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                    {Services.num}
                  </div>
                  <Link
                    href={Services.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-black text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {Services.title}
                </h2>
                <p>{Services.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default services;
