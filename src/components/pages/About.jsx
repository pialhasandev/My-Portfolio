import React from "react";
import Container from "../common/Container";
import { FiCheckSquare } from "react-icons/fi";
import Flex from "../common/Flex";
import Image from "../common/Image";
import portfolioImg from "/src/assets/portimg.png";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaBootstrap,
  FaJs,
} from "react-icons/fa";

import {
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiPostman,
  SiChakraui,
  SiMui,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "Redux", icon: SiRedux, color: "text-purple-500" },
  { name: "Next JS", icon: SiNextdotjs, color: "text-white" },
  { name: "Chakra UI", icon: SiChakraui, color: "text-teal-400" },
  { name: "Material UI", icon: SiMui, color: "text-blue-500" },
  { name: "Figma", icon: FaFigma, color: "text-pink-500" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
  { name: "Context API", icon: FaReact, color: "text-green-400" },
];

const About = () => {
  const duplicatedSkills = [...skills, ...skills];
  return (
   <>
    <section className="bg-bgclr py-16 sm:py-20 lg:py-24">
      <Container>

        {/* Heading */}
        <h4 className="text-gray-300 font-medium mb-10 sm:mb-12 lg:mb-15 font-openSans text-[18px] sm:text-[22px] lg:text-[35px] text-center">
          More About <span className="gradient-primary">Myself</span>
        </h4>

        {/* Main layout */}
        <Flex className="flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* TEXT SECTION */}
         <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-8 lg:px-10">

            <h5 className="mb-5 text-gray-300 font-medium font-playFair text-[28px] sm:text-[40px] lg:text-[50px] leading-snug">
              <span className="gradient-primary">Driven,</span> Innovative Frontend{" "}
              <span className="gradient-secondary">Developer</span>
            </h5>

            <p className="text-gray-400 font-medium font-openSans text-[14px] sm:text-[18px] lg:text-[22px] leading-7 sm:leading-9 lg:leading-10">
              I’m a Frontend Developer with 4 months of hands-on experience building responsive and user-friendly web applications. I focus on writing clean, maintainable code and have a strong attention to detail. Passionate about continuous learning, I’m always exploring new tools and technologies to improve my skills.
            </p>

            {/* LIST */}
            <ul className="mt-8 text-gray-400 space-y-3">

              <li className="flex items-start gap-x-3 text-sm sm:text-lg lg:text-xl font-light">
                <FiCheckSquare className="mt-1 shrink-0" />
                Build responsive and pixel-perfect UI using modern CSS frameworks
              </li>

              <li className="flex items-start gap-x-3 text-sm sm:text-lg lg:text-xl font-light">
                <FiCheckSquare className="mt-1 shrink-0" />
                Develop interactive web applications with React.js.
              </li>

              <li className="flex items-start gap-x-3 text-sm sm:text-lg lg:text-xl font-light">
                <FiCheckSquare className="mt-1 shrink-0" />
                Integrate REST APIs and handle dynamic data efficiently
              </li>

              <li className="flex items-start gap-x-3 text-sm sm:text-lg lg:text-xl font-light">
                <FiCheckSquare className="mt-1 shrink-0" />
                Optimize performance, accessibility, and cross-browser compatibility
              </li>

              <li className="flex items-start gap-x-3 text-sm sm:text-lg lg:text-xl font-light">
                <FiCheckSquare className="mt-1 shrink-0" />
                Write clean, maintainable, and scalable frontend code
              </li>

            </ul>
          </div>

          {/* IMAGE SECTION */}
          <div className="w-full lg:w-1/2 flex justify-center">
  <div className="p-1 rounded-full gradient-fourth-bg animate-float ">
    <div className="p-1 rounded-full gradient-primary-bg">
      <div className="rounded-full bg-bgclr p-2">
        <Image
          className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover"
          src={portfolioImg}
          alt="portfolio"
        />
      </div>
    </div>
  </div>
</div>

        </Flex>

      </Container>
    </section>
    <section className="w-full overflow-hidden border-y border-b border-slate-800 bg-bgclr py-4 sm:py-8 md:py-10 lg:pt-4  lg:pb-10">
      <div className="px-3 sm:px-4 md:px-6 lg:px-8">
        <h2 className="mb-5 text-center text-[10px] font-semibold uppercase tracking-[.2em] text-slate-400 sm:mb-6 sm:text-xs md:mb-8 md:text-sm lg:text-base">
          Skills & Technologies
        </h2>

        <div
          className="overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee gap-2 pl-2 hover:[animation-play-state:paused] sm:gap-3 sm:pl-3 md:gap-4 md:pl-4 lg:gap-5 lg:pl-5">
            {duplicatedSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex items-center gap-1.5 sm:gap-2 h-8 min-w-22.5 justify-center whitespace-nowrap rounded-lg border border-slate-700 bg-slate-900 px-3 text-xs font-semibold text-slate-200 shadow-sm 
                  
                  sm:h-9 sm:min-w-26.25 sm:px-4 sm:text-sm 
                  md:h-10 md:min-w-30 md:px-5 md:text-sm 
                  lg:h-11 lg:min-w-33.75 lg:px-6 lg:text-base 
                  
                  hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.15)] transition duration-300"
                >
                  <Icon className={`text-sm sm:text-base md:text-lg ${skill.color}`} />
                  {skill.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    <div className="bg-bgclr py-5"></div>
   </>
  );
};

export default About;