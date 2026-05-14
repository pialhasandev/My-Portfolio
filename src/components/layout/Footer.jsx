import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import { Link } from "react-router-dom";
import { FaAngleDoubleUp } from "react-icons/fa";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#0f1322] border-t border-navBg py-8 sm:py-10 md:py-12">
      <Container className="px-3 md:px-2 lg:px-2">

        <Flex className="flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT TEXT */}
          <p className="text-gray-400 text-xs sm:text-sm md:text-base text-center md:text-left">
            Copyright @2026, Pial Hasan. All Rights Reserved
          </p>

          {/* NAV LINKS */}
          <ul className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
            <li className="text-gray-400 hover:text-white duration-300 text-sm md:text-base">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-gray-400 hover:text-white duration-300 text-sm md:text-base">
              <Link to={"about"}>About</Link>
            </li>
            <li className="text-gray-400 hover:text-white duration-300 text-sm md:text-base">
              <Link to={"projects"}>Projects</Link>
            </li>
            <li className="text-gray-400 hover:text-white duration-300 text-sm md:text-base">
              <Link to={"contact"}>Contact Me</Link>
            </li>
          </ul>
          
        </Flex>

      </Container>
    </div>
  );
};

export default Footer;