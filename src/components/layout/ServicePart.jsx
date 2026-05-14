import React from "react";
import Container from "../common/Container";
import { LuAppWindow } from "react-icons/lu";
import { MonitorSmartphoneIcon } from "lucide-react";
import { MdOutlineAutoFixHigh, MdOutlineWeb } from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";
import { GrOptimize } from "react-icons/gr";

const ServicePart = () => {
  return (
    <div className="bg-bgclr py-12 sm:py-16 lg:py-20">
      <Container>
        <p className="text-gray-300 font-medium mb-6 sm:mb-10 text-center font-openSans text-base sm:text-xl lg:text-2xl">
          I like to make things easy and fun
        </p>

        <h2 className="mb-10 text-center text-gray-300 font-medium font-playFair text-2xl sm:text-4xl lg:text-5xl leading-snug max-w-4xl mx-auto px-3">
          My <span className="gradient-primary">Special Services</span> For
          your Frontend{" "}
          <span className="gradient-secondary">Development</span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-3 sm:px-5">
          
          {/* Card 1 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-navBg hover:scale-105 transition duration-500 border border-gray-700 text-center">
            <LuAppWindow className="text-gray-300 mx-auto text-4xl" />

            <h4 className="text-gray-300 font-bold font-playFair mt-5 text-xl sm:text-2xl">
              Frontend Developer
            </h4>

            <p className="text-gray-400 font-openSans mt-3 text-sm sm:text-base">
              Convert Figma/PSD designs into pixel-perfect,
              production-ready interfaces with clean layouts,
              precise spacing and typography.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-navBg border hover:scale-105 transition duration-500 border-gray-700 text-center">
            <MonitorSmartphoneIcon className="text-gray-300 mx-auto w-10 h-10" />

            <h4 className="text-gray-300 font-bold font-playFair mt-5 text-xl sm:text-2xl">
              Responsive Design
            </h4>

            <p className="text-gray-400 font-openSans mt-3 text-sm sm:text-base">
              Ensure responsive, cross-device compatibility across
              mobile, tablet, and desktop with a consistent user
              experience.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-navBg border hover:scale-105 transition duration-500 border-gray-700 text-center">
            <MdOutlineWeb className="text-gray-300 mx-auto text-4xl" />

            <h4 className="text-gray-300 font-bold font-playFair mt-5 text-xl sm:text-2xl">
              Interactive Features
            </h4>

            <p className="text-gray-400 font-openSans mt-3 text-sm sm:text-base">
              Build intuitive UI interactions with smooth animations
              and reliable form validation for seamless experience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-navBg border hover:scale-105 transition duration-500 border-gray-700 text-center">
            <AiOutlineApi className="text-gray-300 mx-auto text-4xl" />

            <h4 className="text-gray-300 font-bold font-playFair mt-5 text-xl sm:text-2xl">
              API Integration
            </h4>

            <p className="text-gray-400 font-openSans mt-3 text-sm sm:text-base">
              Integrate UI with real data, manage loading states
              and handle errors smoothly.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-navBg border hover:scale-105 transition duration-500 border-gray-700 text-center">
            <MdOutlineAutoFixHigh className="text-gray-300 mx-auto w-10 h-10" />

            <h4 className="text-gray-300 font-bold font-playFair mt-5 text-xl sm:text-2xl">
              Bug Fixing & Maintenance
            </h4>

            <p className="text-gray-400 font-openSans mt-3 text-sm sm:text-base">
              Fix bugs and maintain clean, stable and scalable
              frontend codebases.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-navBg border hover:scale-105 transition duration-500 border-gray-700 text-center">
            <GrOptimize className="text-gray-300 mx-auto text-4xl" />

            <h4 className="text-gray-300 font-bold font-playFair mt-5 text-xl sm:text-2xl">
              Performance Optimization
            </h4>

            <p className="text-gray-400 font-openSans mt-3 text-sm sm:text-base">
              Optimize performance with lazy loading, code splitting
              and image optimization.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicePart;