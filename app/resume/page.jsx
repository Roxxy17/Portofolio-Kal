"use client";

import {
  FaCss3,
  FaHtml5,
  FaBootstrap,
  FaFlutter,
  FaJsSquare,
  FaPython,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLaravel,
  FaVuejs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiKotlin } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore dolorum cumque sunt. Suscipit modi optio illo vitae obcaecati? Impedit, saepe rem? Voluptatem magnam aspernatur ducimus nobis rem minus ut itaque?",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Kalila Atha Achmad",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 888 0614 7806",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Instagram",
      fieldValue: "waylonggss",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesia",
    },
    {
      fieldName: "Email",
      fieldValue: "kalilaatha8@gmail.com",
    },
    {
      fieldName: "Language",
      fieldValue: "Indonesia & English",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis maiores repellendus veritatis sit sunt error eius? Expedita dolores tempore veritatis nobis dicta ullam sit amet, blanditiis quos, incidunt, similique atque",
  items: [
    {
      company: "Prospekin",
      position: "Data Miner Analyst",
      duration: "2023 - 2023",
    },
    {
      company: "Forum Asisten",
      position: "Computer Lab Assistant",
      duration: "2023 - Present",
    },
    {
      company: "ABP Startup Incubator",
      position: "Video Content Creator",
      duration: "2024 - Present",
    },
    {
      company: "SAKA Kominfo Sleman",
      position: "IT Field Coordinator",
      duration: "2020 - Present",
    },
    {
      company: "Freelancer",
      position: "Web Development",
      duration: "2024 - Present",
    },
  ],
};

const education = {
  icon: "",
  title: "My Experience",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis maiores repellendus veritatis sit sunt error eius? Expedita dolores tempore veritatis nobis dicta ullam sit amet, blanditiis quos, incidunt, similique atque",
  items: [
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2022 - present",
    },
    {
      institution: "Amikom University",
      degree: "Bachelor Degree In Computer Science",
      duration: "2022 - present",
    },
    {
      institution: "Amikom Computer Club",
      degree: "Certifies Android Developer",
      duration: "2023 - 2023",
    },
    {
      institution: "Bangkit Academy By Google",
      degree: "Certified Android Developer",
      duration: "2024 - Present",
    },
    {
      institution: "Dicoding",
      degree: "various programming certificates",
      duration: "2022 - Present",
    },
    {
      institution: "Online Course",
      degree: "various programming Course",
      duration: "2022 - Present",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis maiores repellendus veritatis sit sunt error eius? Expedita dolores tempore veritatis nobis dicta ullam sit amet, blanditiis quos, incidunt, similique atque",
  items: [
    {
      icon: <FaReact />,
      name: "React.JS",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaBootstrap />,
      name: "BootsStrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailWind CSS",
    },
    {
      icon: <FaFlutter />,
      name: "Flutter",
    },
    {
      icon: <SiKotlin />,
      name: "Kotlin",
    },
    {
      icon: <FaJsSquare />,
      name: "JavaScript",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.JS",
    },
    {
      icon: <FaDatabase />,
      name: "SQL",
    },
    {
      icon: <FaLaravel />,
      name: "Laravel",
    },
    {
      icon: <FaVuejs />,
      name: "Vue.JS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              Skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default resume;
