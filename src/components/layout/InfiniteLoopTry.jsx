import React from "react";
import Container from "../common/Container";

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

export default function Skills() {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <>
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
          <div className="flex w-max animate-marquee gap-2 pl-2 hover:paused sm:gap-3 sm:pl-3 md:gap-4 md:pl-4 lg:gap-5 lg:pl-5">
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
}