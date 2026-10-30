import { useState } from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import { Link } from "react-router-dom";
import { FiGithub, FiMenu, FiX } from "react-icons/fi";
import logo from "/src/assets/logo.png";
import Image from "../common/Image";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-900 bg-linear-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-lg border-b border-white/10 shadow-lg py-3">
      <Container>
        {/* Added px-3 for mobile side spacing */}
        <Flex className="justify-between items-center px-3 sm:px-0">
          {/* LOGO */}
          <Link to="/" className="shrink-0">
            <img
              src={logo}
              alt="Pial Hasan Logo"
              className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-full"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-x-6 lg:gap-x-10">
              <li>
                <Link
                  className="text-gray-400 hover:text-white transition"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-400 hover:text-white transition"
                  to="/about"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-400 hover:text-white transition"
                  to="/projects"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-400 hover:text-white transition"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/pialhasandev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all"
            >
              <FiGithub className="text-3xl" />
            </a>
          </div>

          {/* MOBILE BUTTON */}
          {/* Added pr-2 for right spacing */}
          <div className="md:hidden pr-2">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <FiX className="text-2xl text-gray-300" />
              ) : (
                <FiMenu className="text-2xl text-gray-300" />
              )}
            </button>
          </div>
        </Flex>
      </Container>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-3 px-4 pb-5">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl py-5">
            <ul className="flex flex-col gap-4 text-center">
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-white"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-white"
                  to="/about"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-white"
                  to="/projects"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-white"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="flex justify-center mt-5">
              <a
                href="https://github.com/pialhasandev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FiGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
