import { useContext, useEffect, useState } from "react";
import { ResponsiveH5 } from "./ResponsiveText";
import {
  FiArrowRight,
  FiArrowUpCircle,
  FiExternalLink,
  FiSend,
} from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { MdDoubleArrow, MdOutlineWorkOutline } from "react-icons/md";
import { UserContext } from "@/context/UserContext";

//TODO: Make a button component that has the basic styling and use it on the components below.

export const BaseButton = ({ children, onClick, className }) => {
  const { theme } = useContext(UserContext);
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 group  hover:outline-none py-4 font-bold uppercase shadow-lg transition duration-200 ease-in-out ${className} ${
        theme === "light"
          ? "text-Villo-light-black85 hover:bg-opacity-[0.95] bg-Villo-light-white outline-Villo-light-black85 hover:shadow-Villo-light-white15 hover:text-Villo-light-white  hover:bg-Villo-light-primary"
          : "text-Villo-dark-white10 bg-Villo-light-black hover:bg-opacity-[0.95] outline-Villo-dark-white10 hover:shadow-Villo-dark-black75 hover:bg-Villo-dark-primary"
      } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>{children}</>
    </button>
  );
};

export default function CallToActionButton({ children, onClick, className }) {
  const { theme } = useContext(UserContext);

  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 group  hover:outline-none py-4 font-bold uppercase shadow-lg transition duration-200 ease-in-out ${className} ${
        theme === "light"
          ? "text-Villo-light-black85 hover:bg-opacity-[0.95] bg-Villo-light-white outline-Villo-light-black85 hover:shadow-Villo-light-white15 hover:text-Villo-light-white  hover:bg-Villo-light-primary"
          : "text-Villo-dark-white10 bg-Villo-light-black hover:bg-opacity-[0.95] outline-Villo-dark-white10 hover:shadow-Villo-dark-black75 hover:bg-Villo-dark-primary"
      } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>{children}</>
    </button>
  );
}

export function ReadMoreButton({ children, onClick, className }) {
  const { theme } = useContext(UserContext);
  return (
    <button
      onClick={onClick}
      className={`relative flex w-fit justify-center items-center group font-bold uppercase transition duration-200 ease-in-out ${className} ${
        theme === "light"
          ? "text-Villo-light-black85  hover:text-Villo-light-primary"
          : "text-Villo-dark-white10  hover:text-Villo-dark-primary"
      } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.05] origin-center`}
    >
      <>
        {children}
        <div
          className={`absolute w-full h-[1px] py-[1px] bottom-0 ${
            theme === "light"
              ? "bg-Villo-light-black85  group-hover:bg-Villo-light-primary"
              : "bg-Villo-dark-white10  group-hover:bg-Villo-dark-primary"
          }`}
        />
      </>
    </button>
  );
}

export function SkillLinkButton({ children, onClick, className }) {
  const { theme } = useContext(UserContext);
  return (
    <button
      onClick={onClick}
      className={`px-4 outline outline-[1px] group hover:outline-none py-1 font-bold uppercase shadow-lg transition duration-200 ease-in-out ${className} ${
        theme === "light"
          ? "text-Villo-light-black85 hover:bg-opacity-[0.95] bg-Villo-light-white outline-Villo-light-black85 hover:shadow-Villo-light-white15 hover:text-Villo-light-white  hover:bg-Villo-light-primary"
          : "text-Villo-dark-white10 bg-Villo-light-black hover:bg-opacity-[0.95] outline-Villo-dark-white10 hover:shadow-Villo-dark-black75 hover:bg-Villo-dark-primary"
      } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>{children}</>
    </button>
  );
}

export function ArrowCTA({ children, onClick, className }) {
  const { theme } = useContext(UserContext);
  return (
    <button
      onClick={onClick}
      className={`relative px-6 pr-12 outline outline-2 flex justify-center items-center group hover:outline-none py-4 my-4 font-bold uppercase transition duration-200 ease-in-out ${className} ${
        theme === "light"
          ? "text-Villo-light-black85 bg-Villo-light-white outline-Villo-light-black85 hover:text-Villo-light-white hover:bg-Villo-light-primary"
          : "text-Villo-dark-white10 bg-Villo-light-black outline-Villo-dark-white10 hover:bg-Villo-dark-primary"
      } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.05] origin-center`}
    >
      <>
        {children}
        <FiArrowRight
          className={`${
            theme === "light"
              ? "text-Villo-light-black85   group-hover:text-Villo-light-white"
              : "text-Villo-dark-white10 "
          } group-hover:rotate-[360deg] absolute inline-block w-5 h-5 m-auto ml-1 transition-all duration-200 right-4 opacity-90 group-hover:ml-2 group-hover:w-7 group-hover:h-7`}
        />
      </>
    </button>
  );
}



export function ExternalCTA({ children, onClick, className }) {
  const { theme } = useContext(UserContext);
  return (
    <button
      onClick={onClick}
      className={`relative px-6 pr-12 outline outline-2 flex justify-center items-center group hover:outline-none py-4 my-4 font-bold uppercase transition duration-200 ease-in-out ${className} ${
        theme === "light"
          ? "text-Villo-light-black85 bg-Villo-light-white outline-Villo-light-black85 hover:text-Villo-light-white hover:bg-Villo-light-primary"
          : "text-Villo-dark-white10 bg-Villo-light-black outline-Villo-dark-white10 hover:bg-Villo-dark-primary"
      } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.05] origin-center`}
    >
      <>
        {children}
        <FiExternalLink
          className={`${
            theme === "light"
              ? "text-Villo-light-black85 group-hover:text-Villo-light-white"
              : "text-Villo-dark-white10 "
          } absolute inline-block w-5 h-5 m-auto ml-1 transition-all duration-200 right-4 opacity-90 group-hover:ml-2 group-hover:w-7 group-hover:h-7`}
        />
      </>
    </button>
  );
}

export const CTAButton = ({ children, onClick, className }) => {
  const { theme } = useContext(UserContext);
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 flex justify-center items-center group hover:outline-none py-4 my-4 font-bold uppercase transition duration-100 ease-in-out ${className} ${
        theme === "light"
          ? "text-Villo-light-black85 bg-Villo-light-white outline-Villo-light-black85 hover:text-Villo-light-white hover:bg-Villo-light-primary"
          : "text-Villo-dark-white10 bg-Villo-light-black outline-Villo-dark-white10 hover:bg-Villo-dark-primary"
      } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>{children}</>
    </button>
  );
};

export function SendCTA({ children, onClick, className }) {
  const { theme } = useContext(UserContext);
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 flex justify-center items-center group hover:outline-none py-4 my-4 font-bold uppercase transition duration-100 ease-in-out ${className} ${
        theme === "light"
          ? "text-Villo-light-black85 bg-Villo-light-white outline-Villo-light-black85 hover:text-Villo-light-white hover:bg-Villo-light-primary"
          : "text-Villo-dark-white10 bg-Villo-light-black outline-Villo-dark-white10 hover:bg-Villo-dark-primary"
      } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>
        {children}
        <FiSend className="inline-block w-5 h-5 m-auto ml-1 transition-all duration-200 opacity-90 group-hover:rotate-[405deg] group-hover:opacity-100 group-hover:ml-2 group-hover:w-5 group-hover:h-5 group-hover:animate-pulse" />
      </>
    </button>
  );
}

export function EmailCTA({ children, onClick, className }) {
  const { theme } = useContext(UserContext);
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 flex justify-center items-center group hover:outline-none py-4 my-4 font-bold uppercase transition duration-100 ease-in-out ${className} ${
        theme === "light"
          ? "text-Villo-light-black85 bg-Villo-light-white outline-Villo-light-black85 hover:text-Villo-light-white hover:bg-Villo-light-primary"
          : "text-Villo-dark-white10 bg-Villo-light-black outline-Villo-dark-white10 hover:bg-Villo-dark-primary"
      } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>
        {children}
        <TfiEmail className="inline-block w-5 h-5 m-auto ml-2 transition-all duration-200 group-hover:translate-x-1/2 group-hover:-translate-y-1/4 opacity-90 group-hover:rotate-45 group-hover:opacity-100 group-hover:ml-2 group-hover:w-5 group-hover:h-5 group-hover:animate-pulse" />
      </>
    </button>
  );
}

export function PortfolioCTA({ children, onClick, className }) {
  const { theme } = useContext(UserContext);
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 flex justify-center shadow items-center group hover:outline-none py-4 my-4 font-bold uppercase transition duration-100 ease-in-out ${className} ${
        theme === "light"
          ? "text-Villo-light-black85 bg-Villo-light-white hover:shadow-Villo-light-black outline-Villo-light-black85 hover:text-Villo-light-white hover:bg-Villo-light-primary"
          : "text-Villo-dark-white10 bg-Villo-light-black outline-Villo-dark-white10 hover:shadow-Villo-dark-black hover:bg-Villo-dark-primary"
      } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>
        {children}
        <MdOutlineWorkOutline className="inline-block w-5 h-5 m-auto ml-2 transition-all duration-200 group-hover:-translate-y-1/2 group-hover:animate-cookieShake opacity-90 group-hover:opacity-100 group-hover:ml-2 group-hover:w-5 group-hover:h-5" />
      </>
    </button>
  );
}

export function CookieAccept({ children, onClick, className }) {
  const { theme } = useContext(UserContext);
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 group hover:outline-none py-2 font-bold uppercase transition duration-200 ease-in-out ${className} ${
        theme === "light"
          ? "text-Villo-light-black85 bg-Villo-light-white outline-Villo-light-black85 hover:text-Villo-light-white  hover:bg-Villo-light-primary"
          : "text-Villo-dark-white10 bg-Villo-light-black outline-Villo-dark-white10 hover:bg-Villo-dark-primary"
      } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>{children}</>
    </button>
  );
}

export function ScrollToTopButton() {
  const { theme } = useContext(UserContext);
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
      className={` ${
        theme === "light"
          ? "text-Villo-light-white20 hover:text-Villo-light-primary"
          : "text-Villo-dark-black50 hover:text-Villo-dark-primary"
      } z-50 p-1 fixed sm:bottom-4 bottom-1 sm:right-4 right-1 transition-all duration-200 rounded-full hover:scale-125  ${
        isVisible ? "opacity-100 " : "opacity-0 cursor-default"
      }`}
    >
      <FiArrowUpCircle
        className={`w-12 h-12 rounded-full ${
          theme === "light"
            ? "fill-Villo-light-white hover:fill-Villo-light-white20"
            : "fill-Villo-dark-black85 hover:fill-Villo-dark-black"
        }`}
        strokeWidth={1.5}
      />
    </button>
  );
}
