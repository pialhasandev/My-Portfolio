import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTopBtn = () => {
  const [show, setShow] = useState(false);

  // show button after scroll
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200); // show after 200px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll function
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
          className="fixed bottom-6 cursor-pointer right-20 z-500 bg-[#1a1f35] hover:bg-[#2a3050] text-gray-300 hover:text-white p-3 rounded-full shadow-lg duration-800"
        >
          <FaAngleDoubleUp className="text-lg sm:text-xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopBtn;