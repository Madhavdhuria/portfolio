"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Paytm Transaction Management Prototype",
    description:
      "Developed a scalable transaction management prototype, simulating key functionalities of Paytm's financial operations. The project was structured using Turborepo to efficiently manage multiple microservices. ",
    stack: [
      { name: "Next.js" },
      { name: "Prisma" },
      { name: "Turborepo" },
      { name: "Tailwind.css" },
      { name: "Typescript" },
    ],
    image: "/assets/paytm.png",
    github: "https://github.com/Madhavdhuria/Paytm",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Ecommerce-Store",
    description:
      " Developed a comprehensive Ecommerce web application with a focus on providing a valuable admin side experience. The project features a modern, responsive user interface and a powerful admin dashboard.",
    stack: [
      { name: "React" },
      { name: "typecript" },
      { name: "MongoDb" },
      { name: "Express" },
      { name: "Redux" },
    ],
    image: "/assets/ecommerce.png",
    github: "https://github.com/Madhavdhuria/ecommerce-frontend",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Chat App",
    description:
      "Developed a highly responsive real-time chat application designed to handle up to 1,000 simultaneous users.",
    stack: [
      { name: "React" },
      { name: "Tailwind.css" },
      { name: "web sockets" },
      { name: "express" },
    ],
    image: "/assets/chatapp.png",
    live: "",
    github: "https://github.com/Madhavdhuria/Chat-App",
  },
];

const Work = () => {
  const handleSlideChange = (swiper) => {
    const CurrentIndex = swiper.activeIndex;
    setProject(projects[CurrentIndex]);
  };
  const [Project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col  justify-center py-12 xl:px-0"
    >
      <div className="mx-auto container">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {Project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
                {Project.title}
              </h2>
              <p className="text-white/60">{Project.description}</p>
              <ul className="flex flex-wrap gap-4">
                {Project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {index !== Project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={Project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="h-[70px] w-[70px]  rounded-full bg-white/5  flex justify-center items-center group   ">
                        <BsGithub className="text-white  text-3xl group-hover:text-accent  " />
                      </TooltipTrigger>
                      <TooltipContent>GitHub Repo</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[560px] mb-12"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide className="w-full" key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          alt=""
                          className="object-contain"
                          fill
                        />
                      </div>
                    </div>
                    <WorkSliderBtns
                      containerStyles="flex gap-2 absolute right-0 botton-calc(50%_-_22px) xl:bottom=0 z-20 w-full justify-between xl:w-max xl:justify-none"
                      btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]  w-[44px] h-[44px] flex justify-center items-center transition-all  "
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
