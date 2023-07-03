import { useEffect, useState } from "react";
import {
  ResponsiveH5,
  ResponsiveP,
  ResponsiveThemedH5,
} from "./Responsive text/ResponsiveText";
import { FiArrowUpCircle } from "react-icons/fi";

export default function CallToActionButton({ children, onClick, Theme }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-4 my-4 font-bold uppercase duration-100 ease-in-out ${
                Theme === "light" ? "text-Villo-light-white10  bg-Villo-light-primary hover:text-Villo-dark-black85 hover:bg-Villo-dark-primary" : "text-Villo-dark-black85 hover:text-Villo-light-white10  bg-Villo-dark-primary hover:bg-Villo-light-primary"
              } rounded-md shadow-md xl:w-fit active:scale-95 text-p leading-p shadow-Villo-black85 hover:scale-105`}
    >
      <>{children}</>
    </button>
  );
}

export function CallToActionButtonAlt({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-4 font-bold uppercase duration-100 ease-in-out rounded-md shadow-md xl:w-fit leading-p active:scale-95 text-p text-Villo-white shadow-Villo-black bg-Villo-black hover:scale-105"
    >
      <>{children}</>
    </button>
  );
}

export function BigButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="h-20 px-16 py-4 m-4 transition shadow w-80 font-Roboto shadow-Villo-black hover:scale-[0.99] bg-Villo-black rounded-3xl"
    >
      <ResponsiveH5>{children}</ResponsiveH5>
    </button>
  );
}

export function SmallButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-1 rounded-md font-Roboto shadow-Villo-black text-[12px] bg-gradient-to-r from-Villo-black75 to-Villo-black"
    >
      <>{children}</>
    </button>
  );
}

export function ScrollToTopButton({Theme}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollToTop}
      className={`${Theme === "light" ? "text-Villo-light-black hover:text-Villo-light-primary" : "text-Villo-dark-white hover:text-Villo-dark-primary" } z-50 p-1 fixed md:bottom-8 bottom-4 md:right-8 right-4 transition-all duration-200 rounded-full hover:scale-125  ${
        isVisible ? "opacity-100 " : "opacity-0 cursor-default"
      }`}
    >
      <FiArrowUpCircle
        className="w-12 h-12"
        strokeWidth={1.5}
      />
    </button>
  );
}
