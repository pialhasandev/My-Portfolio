
import ProjectCard from "../common/ProjectCard";
import Container from "../common/Container";
import portfolio from "/src/assets/portfolio.png";
import orebi from "/src/assets/orebi.png";
import inDMarket from "/src/assets/innovate-D-Market.png";

const Projects = () => {
  return (
    <div className="py-12 sm:py-16 bg-bgclr">
      <Container>
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl my-14 sm:my-20 lg:my-28 text-white font-playFair leading-snug px-3">
          Here's My <span className="gradient-secondary">Newly</span>{" "}
          Worked <span className="gradient-primary">Projects</span>
        </h2>

        {/* Added left-right space */}
        <div className="flex flex-wrap items-center justify-center gap-6 px-3 sm:px-5">
          <ProjectCard
            ttl={"My Portfolio"}
            newTxt={"New"}
            live={"https://my-portfolio-ten-livid-88.vercel.app/"}
            git={"https://github.com/pialhasandev/My_Portfolio"}
            className={"h-52 sm:h-60 lg:h-64"}
            src={portfolio}
            alt={"Portfolio Preview"}
          />

          <ProjectCard
            ttl={"Orebi E-Commerce"}
            newTxt={"New"}
            live={"https://orebi-liard.vercel.app/"}
            git={"https://github.com/pialhasandev/Orebi-E-Commerce"}
            className={"h-52 sm:h-60 lg:h-64"}
            src={orebi}
            alt={"Orebi Preview"}
          />

          <ProjectCard
            ttl={"Innovate Digital Marketing"}
            live={"https://react-routing01-01-c774.vercel.app/"}
            git={"https://github.com/pialhasandev/Innovate-Salon"}
            className={"h-52 sm:h-60 lg:h-64"}
            src={inDMarket}
            newTxt={"New"}
            alt={"Innovate D-Marketing Preview"}
          />
        </div>
      </Container>
    </div>
  );
};

export default Projects;