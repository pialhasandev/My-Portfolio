
import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-8 z-[9998]
          cursor-pointer bg-[#1a1f35] hover:bg-[#2a3050]
          text-gray-300 hover:text-white
          p-3 rounded-full shadow-lg
          transition-all duration-300 hover:scale-110"
        >
          <FaAngleDoubleUp className="text-lg sm:text-xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopBtn;
