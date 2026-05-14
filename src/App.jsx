import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayouts from "./components/layout/RootLayouts";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Errorx from "./components/pages/Errorx";
import Projects from "./components/pages/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ContactMe from "./components/pages/ContactMe";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<ContactMe />} />
          <Route path="*" element={<Errorx />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
