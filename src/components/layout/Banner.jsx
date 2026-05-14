import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Button from "../common/Button";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-bgclr py-16 sm:py-20 md:py-24 lg:pt-32 font-mono">
      <Container className="px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center lg:justify-start mb-6 pt-6 sm:pt-10 md:pt-0">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full 
  bg-linear-to-r from-white/10 via-white/5 to-white/10 
  backdrop-blur-lg border border-white/10 shadow-lg"
          >
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]"></span>

            <p className="text-xs sm:text-sm text-blue-300 font-medium">
              Available for new projects
            </p>
          </div>
        </div>

        {/* Layout */}
        <Flex className="flex-col lg:flex-row items-start justify-between gap-12">
          {/* LEFT */}
          <div className="text-center lg:text-left max-w-xl">
            <h1
              className="font-bold uppercase 
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] 
              text-gray-200 font-playFair leading-tight"
            >
              Building digital{" "}
              <span className="gradient-secondary ">experiences</span> that
              matter.
            </h1>

            <p
              className=" text-primarty 
              text-sm sm:text-base md:text-lg 
              font-medium font-openSans mt-5 leading-relaxed"
            >
              I’m a Frontend Developer focused on building responsive,
              user-friendly, and visually polished web interfaces using modern
              technologies.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <a
                href="/MyResume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button btnTxt={"Download Resume"} />
              </a>

              <Link to={"contact"}>
                <Button btnTxt={"Contact Me"} />
              </Link>
            </div>

            <Flex className="justify-center lg:justify-start gap-5 mt-6">
              <a
                href="https://www.linkedin.com/in/pialhasandev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-gray-400 hover:text-white transition" />
              </a>

              <a
                href="https://x.com/pialhasandev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-gray-400 hover:text-white transition" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mh.pial.dev@gmail.com&su=Project Inquiry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiOutlineMail className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-gray-400 hover:text-white transition" />
              </a>
            </Flex>
          </div>

          {/* RIGHT */}
          <div
            data-aos="fade-up"
            className="bg-[#0f172a] w-full max-w-sm sm:max-w-md md:max-w-lg rounded-xl p-4 sm:p-5 md:p-6 shadow-2xl 
            transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          >
            {/* Top Bar */}
            <div className="flex gap-2 ml-10 mb-4">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></span>
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></span>
            </div>

            {/* Code Block */}
            <pre className="text-[10px] sm:text-xs md:text-sm leading-5 pb-18 py-5 sm:leading-6 text-slate-200 whitespace-pre-wrap ml-10 overflow-x-auto">
              {/* 🔥 FLOATING COMMENT */}
              <span
                data-aos="fade-right"
                className="inline-block text-slate-500 mb-2 
                px-2 py-1 rounded-md bg-white/5 shadow-md 
                animate-[float_3s_ease-in-out_infinite]"
              >
                // Welcome to my portfolio
              </span>
              {"\n\n"}
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">profile</span> = {"{"}
              {"\n  "}
              name: <span className="text-green-400">'Pial Hasan'</span>,
              {"\n  "}
              role:{" "}
              <span className="text-green-400">'Front-End Developer'</span>,
              {"\n  "}
              location:{" "}
              <span className="text-green-400">
                'Azimpur, Dhaka, Bangladesh'
              </span>
              ,{"\n  "}
              skills: [{"\n    "}
              <span className="text-green-400">'React'</span>,{" "}
              <span className="text-green-400">'JavaScript'</span>,{" "}
              <span className="text-green-400">'Tailwind CSS'</span>,{"\n    "}
              <span className="text-green-400">'Redux Toolkit'</span>,{" "}
              <span className="text-green-400">'Next.js'</span>
              {"\n  "}],
              {"\n  "}
              hireable: <span className="text-yellow-400 ">true</span>
              {"\n"}
              {"}"}
            </pre>
          </div>
        </Flex>
      </Container>

      {/* 🔥 Floating animation */}
      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        `}
      </style>
    </div>
  );
};

export default Banner;
