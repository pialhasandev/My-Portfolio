import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "./Image";

const ProjectCard = ({
  src,
  alt,
  ttl,
  live,
  git,
  className,
  newTxt,
}) => {
  return (
    <div className="border-3 hover:scale-105 transition duration-300 border-gray-700 w-full sm:w-[48%] lg:w-[32%]  overflow-hidden rounded-2xl bg-gray-900">
      <Image
        className={`rounded-t-[14px] w-full object-cover ${className}`}
        src={src}
        alt={alt}
      />

      <div className="pb-1">
        <h4 className="gradient-primary text-base sm:text-lg px-3 flex items-center justify-between border-t-3 border-b-3 border-gray-700 font-bold py-4 sm:py-5 gap-2">
          <span>{ttl}</span>

          <span className="text-[10px] sm:text-[12px] gradient-third-bg rounded-3xl text-fill-white py-1 px-3 whitespace-nowrap">
            {newTxt}
          </span>
        </h4>

        <div className="flex flex-col sm:flex-row items-center py-4 justify-center gap-3 sm:gap-x-5 px-3">
          <a
            className="text-black gradient-third-bg hover:scale-105 transition duration-300 font-bold border-2 border-gray-700 rounded-xl py-2 px-5 flex items-center justify-center gap-x-2 w-full sm:w-fit"
            href={live}
            target="_blank"
            rel="noreferrer"
          >
            Live <FaExternalLinkAlt />
          </a>

          <a
            className="gradient-third-bg text-black hover:scale-105 transition duration-300 font-bold border-2 border-gray-700 rounded-xl py-2 px-5 flex items-center justify-center gap-x-2 w-full sm:w-fit"
            href={git}
            target="_blank"
            rel="noreferrer"
          >
            Code <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;