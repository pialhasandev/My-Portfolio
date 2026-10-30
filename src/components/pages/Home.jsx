import Banner from "../layout/Banner";
import About from "./About";
import ServicePart from "../layout/ServicePart";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <ServicePart />
      <Projects />
      <ContactMe />
    </>
  );
};

export default Home;
