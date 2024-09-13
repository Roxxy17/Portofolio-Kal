"use client";

import {
  FaCss3,
  FaHtml5,
  FaBootstrap,
  FaJsSquare,
  FaPython,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLaravel,
  FaVuejs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiKotlin,
  SiFlutter,
} from "react-icons/si";

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
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Indonesia & English",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description:
    " I'm open to collaborating on Any Project Like Website Back-end, And full-stack Application Mobile and Desktop ( Currently Study FullStack and Android Developer)",
  items: [
    {
      company: "Prospekin",
      position: "Data Miner Analyst",
      duration: "2023 - 2023",
    },
    {
      company: "Forum Asisten",
      position: "Lecturer Assistant",
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
    {
      company: "Freelancer",
      position: "Data Analyst",
      duration: "2024 - Present",
    },
    {
      company: "Freelancer",
      position: "Data Mining",
      duration: "2024 - Present",
    },
    {
      company: "Freelancer",
      position: "Video Editor",
      duration: "2024 - Present",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description:
    "As an undergraduate Informatics student with a focus on data analysis, Android development, and full-stack web development, I have gained strong technical skills in analyzing data, building mobile applications, and developing scalable web solutions.",
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
    "my main focus revolves around delving into the realms of Full-Stack Web programming and Software Engineering.",
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
      icon: <SiFlutter />,
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
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education  */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.items.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider>
                          <Tooltip delayDuration={0}>
                            <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default resume;
