"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero itaque nesciunt fuga nemo? Cupiditate, nihil est?",

  info: [
    {
      fieldName: "Name",
      fieldvalue: "Madhav",
    },
    {
      fieldName: "Phone",
      fieldvalue: "9877914810",
    },
    {
      fieldName: "Experience",
      fieldvalue: "1+ year",
    },
    {
      fieldName: "Email",
      fieldvalue: "madhavdhuria556@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldvalue: "India",
    },
    {
      fieldName: "Languages",
      fieldvalue: "Hindi/English/Punjabi",
    },
    {
      fieldName: "Freelance",
      fieldvalue: "Available",
    },
  ],
};

const skills = {
  title: "Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero itaque nesciunt fuga nemo? Cupiditate, nihil est?",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0  "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full mx-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <div className="w-full min-h-[70vh]">
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
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
            <TabsContent
              value="about"
              className=" w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
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
                        <span className="text-white/60 ">{item.fieldName}</span>
                        <span className="text-xl ">{item.fieldvalue}</span>
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

export default Resume;
