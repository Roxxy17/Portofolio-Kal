"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const project = [
  {
    num: "01",
    category: "frontent",
    title: "Point Rental Mobil",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, odit impedit. Sed doloribus dolorem velit repellendus sint modi iusto, dignissimos nobis recusandae voluptatem illum ex? Tempora quibusdam error eligendi facilis?",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "Vue JS" },
      { name: "Swiper JS" },
    ],
    image: "/Point.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Full-Stack",
    title: "Healify",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, odit impedit. Sed doloribus dolorem velit repellendus sint modi iusto, dignissimos nobis recusandae voluptatem illum ex? Tempora quibusdam error eligendi facilis?",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "Vue JS" },
      { name: "Laravel" },
      { name: "Swiper JS" },
    ],
    image: "/Healify.png",
    live: "",
    github: "",
  },
];

const work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 0 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    ><div className="container mx-auto">Projects</div></motion.section>
  );
};

export default work;
