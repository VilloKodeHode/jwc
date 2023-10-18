import { useEffect, useState } from "react";
import { ResponsiveH5 } from "./Responsive text/ResponsiveText";
import {
  FiArrowRight,
  FiArrowUpCircle,
  FiExternalLink,
  FiSend,
} from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { MdDoubleArrow, MdOutlineWorkOutline } from "react-icons/md";

export default function CallToActionButton({
  children,
  Theme,
  onClick,
  className,
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 group  hover:outline-none py-4 font-bold uppercase shadow-lg transition duration-200 ease-in-out ${className} ${Theme === "light"
        ? "text-Villo-light-black85 hover:bg-opacity-[0.95] bg-Villo-light-white outline-Villo-light-black85 hover:shadow-Villo-light-white15 hover:text-Villo-light-white  hover:bg-Villo-light-primary"
        : "text-Villo-dark-white10 bg-Villo-light-black hover:bg-opacity-[0.95] outline-Villo-dark-white10 hover:shadow-Villo-dark-black75 hover:bg-Villo-dark-primary"
        } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>{children}</>
    </button>
  );
}

export function SkillLinkButton({
  children,
  Theme,
  onClick,
  className,
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 outline outline-[1px] group hover:outline-none py-1 font-bold uppercase shadow-lg transition duration-200 ease-in-out ${className} ${Theme === "light"
        ? "text-Villo-light-black85 hover:bg-opacity-[0.95] bg-Villo-light-white outline-Villo-light-black85 hover:shadow-Villo-light-white15 hover:text-Villo-light-white  hover:bg-Villo-light-primary"
        : "text-Villo-dark-white10 bg-Villo-light-black hover:bg-opacity-[0.95] outline-Villo-dark-white10 hover:shadow-Villo-dark-black75 hover:bg-Villo-dark-primary"
        } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>{children}</>
    </button>
  );
}


export function ArrowCTA({ children, Theme, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 pr-12 outline outline-2 flex justify-center items-center group hover:outline-none py-4 my-4 font-bold uppercase transition duration-200 ease-in-out ${className} ${Theme === "light"
        ? "text-Villo-light-black85 bg-Villo-light-white outline-Villo-light-black85 hover:text-Villo-light-white hover:bg-Villo-light-primary"
        : "text-Villo-dark-white10 bg-Villo-light-black outline-Villo-dark-white10 hover:bg-Villo-dark-primary"
        } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.05] origin-center`}
    >
      <>
        {children}
        <FiArrowRight className={`${Theme === "light"
          ? "text-Villo-light-black85   group-hover:text-Villo-light-white"
          : "text-Villo-dark-white10 "
          } group-hover:rotate-[360deg] absolute inline-block w-5 h-5 m-auto ml-1 transition-all duration-200 right-4 opacity-90 group-hover:ml-2 group-hover:w-7 group-hover:h-7`} />
      </>
    </button>
  );
}

export function ReadMoreButton({ children, Theme, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`relative flex w-fit justify-center items-center group font-bold uppercase transition duration-200 ease-in-out ${className} ${Theme === "light"
        ? "text-Villo-light-black85  hover:text-Villo-light-primary"
        : "text-Villo-dark-white10  hover:text-Villo-dark-primary"
        } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.05] origin-center`}
    >
      <>
        {children}
        <div className={`absolute w-full h-[1px] py-[1px] bottom-0 ${Theme === "light"
          ? "bg-Villo-light-black85  group-hover:bg-Villo-light-primary"
          : "bg-Villo-dark-white10  group-hover:bg-Villo-dark-primary"
          }`} />
      </>
    </button>
  );
}


export function ExternalCTA({ children, Theme, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 flex justify-center items-center group hover:outline-none py-4 my-4 font-bold uppercase transition duration-100 ease-in-out ${className} ${Theme === "light"
        ? "text-Villo-light-black85 bg-Villo-light-white outline-Villo-light-black85 hover:text-Villo-light-white hover:bg-Villo-light-primary"
        : "text-Villo-dark-white10 bg-Villo-light-black outline-Villo-dark-white10 hover:bg-Villo-dark-primary"
        } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>
        {children}
        <FiExternalLink className="inline-block w-3 h-3 m-auto ml-1 transition-all duration-200 opacity-90 group-hover:opacity-100 group-hover:ml-2 group-hover:w-5 group-hover:h-5" />
      </>
    </button>
  );
}

export function SendCTA({ children, Theme, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 flex justify-center items-center group hover:outline-none py-4 my-4 font-bold uppercase transition duration-100 ease-in-out ${className} ${Theme === "light"
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

export function EmailCTA({ children, Theme, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 flex justify-center shadow items-center group hover:outline-none py-4 my-4 font-bold uppercase transition duration-100 ease-in-out ${className} ${Theme === "light"
        ? "text-Villo-light-black85 bg-Villo-light-white hover:shadow-Villo-light-black outline-Villo-light-black85 hover:text-Villo-light-white hover:bg-Villo-light-primary"
        : "text-Villo-dark-white10 bg-Villo-light-black outline-Villo-dark-white10 hover:shadow-Villo-dark-black hover:bg-Villo-dark-primary"
        } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>
        {children}
        <TfiEmail className="inline-block w-5 h-5 m-auto ml-2 transition-all duration-200 group-hover:translate-x-1/2 group-hover:-translate-y-1/4 opacity-90 group-hover:rotate-45 group-hover:opacity-100 group-hover:ml-2 group-hover:w-5 group-hover:h-5 group-hover:animate-pulse" />
      </>
    </button>
  );
}

export function PortfolioCTA({ children, Theme, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 flex justify-center shadow items-center group hover:outline-none py-4 my-4 font-bold uppercase transition duration-100 ease-in-out ${className} ${Theme === "light"
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



export function CookieAccept({ children, Theme, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 outline outline-2 group hover:outline-none py-2 font-bold uppercase transition duration-200 ease-in-out ${className} ${Theme === "light"
        ? "text-Villo-light-black85 bg-Villo-light-white outline-Villo-light-black85 hover:text-Villo-light-white  hover:bg-Villo-light-primary"
        : "text-Villo-dark-white10 bg-Villo-light-black outline-Villo-dark-white10 hover:bg-Villo-dark-primary"
        } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.02]`}
    >
      <>{children}</>
    </button>
  );
}

export function ToolsToggleButton({ children, Theme, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`outline outline-2 flex justify-center items-center group hover:outline-none py-2 px-4 pl-8 my-4 font-bold uppercase transition-all duration-200 ease-in-out ${className} ${Theme === "light"
        ? "text-Villo-light-black85 bg-Villo-light-white outline-Villo-light-black85 hover:text-Villo-light-white hover:bg-Villo-light-primary"
        : "text-Villo-dark-white10 bg-Villo-light-black outline-Villo-dark-white10 hover:bg-Villo-dark-primary"
        } rounded-full shadow-md xl:w-fit active:scale-95 text-p leading-p hover:scale-[1.05] origin-bottom-right`}
    >
      <>
        {children}
        <MdDoubleArrow className="inline-block w-5 h-5 m-auto ml-1 transition-all duration-200 opacity-90 group-hover:opacity-100 group-hover:ml-2 group-hover:w-7 group-hover:h-7" />
      </>
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

export function ScrollToTopButton({ Theme }) {
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
      className={` ${Theme === "light"
        ? "text-Villo-light-white20 hover:text-Villo-light-primary"
        : "text-Villo-dark-black50 hover:text-Villo-dark-primary"
        } z-50 p-1 fixed sm:bottom-4 bottom-1 sm:right-4 right-1 transition-all duration-200 rounded-full hover:scale-125  ${isVisible ? "opacity-100 " : "opacity-0 cursor-default"
        }`}
    >
      <FiArrowUpCircle className={`w-12 h-12 hover:fill-none ${Theme === "light" ? "fill-Villo-light-white hover:fill-Villo-light-white20" : "fill-Villo-dark-black85 hover:fill-Villo-dark-black"}`} strokeWidth={1.5} />
    </button>
  );
}
