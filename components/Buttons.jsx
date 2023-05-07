import { useEffect, useState } from "react";
import { ResponsiveP } from "./Responsive text/ResponsiveText";
import { FiArrowUpCircle } from "react-icons/fi";

export default function CallToActionButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="grid items-center w-full px-10 py-4 font-semibold uppercase duration-100 ease-in-out rounded-md shadow-md text-JWC-black active:scale-95 text-p font-Roboto shadow-JWC-tertiary bg-gradient-to-r hover:scale-105 from-JWC-primary to-JWC-secondary"
    >
      <>{children}</>
    </button>
  );
}

export function CallToActionButtonAlt({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="grid items-center px-10 py-4 m-4 font-semibold uppercase duration-100 ease-in-out rounded-md shadow-sm active:scale-95 text-p text-JWC-white font-Roboto shadow-JWC-black bg-gradient-to-r from-JWC-black hover:scale-105 to-JWC-black75"
    >
      <>{children}</>
    </button>
  );
}

export function BigButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="h-20 px-16 py-4 m-4 w-80 text-JWC-white font-Roboto shadow-JWC-black btn bg-gradient-to-r from-JWC-black75 to-JWC-black rounded-3xl"
    >
      <>{children}</>
    </button>
  );
}

export function SmallButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-1 rounded-md font-Roboto shadow-JWC-black text-[12px] bg-gradient-to-r from-JWC-black75 to-JWC-black"
    >
      <>{children}</>
    </button>
  );
}

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.pageYOffset > 0);
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
      className={`text-JWC-white15 z-50 p-1 fixed md:bottom-8 bottom-4 md:right-8 right-4 transition-all duration-200 hover:text-JWC-secondary hover:scale-125  ${
        isVisible ? "opacity-100 " : "opacity-0 cursor-default"
      }`}
    >
      <FiArrowUpCircle className="w-12 h-12" />
    </button>
  );
}
