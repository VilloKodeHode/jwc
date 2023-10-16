import Image from "next/image";
import Link from "next/link";


const NavItem = ({
  text,
  href,
  onClick,
  className,
  textSize,
  Theme,
  currentPath,
}) => {
  return (
    <div key={text} className={`relative group z-10 ${className}`}>
      <Link href={href} className="">
        <p
          className={`${textSize} ${Theme === "light"
            ? "text-Villo-light-black"
            : "text-Villo-dark-white"
            }  z-10`}
          onClick={onClick}
        >
          {text}
        </p>
        <div
          className={`${currentPath === href ? `h-2` : "group-hover:h-2"
            } absolute w-full h-0 transition-all ${Theme === "light"
              ? "bg-Villo-light-primary "
              : "bg-Villo-dark-primary"
            }`}
        />
      </Link>
      {(currentPath === href) && (
        <div className="absolute top-0 w-3 h-full -left-4">
          <Image
            src={
              Theme === "light"
                ? "/logo/WindLogoNoTextLightMode.svg"
                : "/logo/WindLogoNoTextDarkMode.svg"
            }
            className="w-auto h-full animate-Appear"
            fill="responsive"
            alt=""
          />
        </div>
      )}
    </div>
  );
};
export const DropDown = ({
  children,
  onClick,
  className,
  textSize,
  Theme,
  currentPath,

}) => {
  const subPagesPaths = (currentPath === "/services_provided/website" || currentPath === "/services_provided/webcontent" || currentPath === "/services_provided/SEO")
  return (
    <div className={`relative group z-10 ${className}`}>

      <button
        className={`${textSize} ${Theme === "light"
          ? "text-Villo-light-black"
          : "text-Villo-dark-white"
          }  z-10`}
        onClick={onClick}
      >
        {children}
      </button>
      <div
        className={`${subPagesPaths ? `h-2` : "group-hover:h-2"
          } absolute w-full h-0 transition-all ${Theme === "light"
            ? "bg-Villo-light-primary"
            : "bg-Villo-dark-primary"
          }`}
      />

      {(subPagesPaths) && (
        <div className="absolute top-0 w-3 h-full -left-4">
          <Image
            src={
              Theme === "light"
                ? "/logo/WindLogoNoTextLightMode.svg"
                : "/logo/WindLogoNoTextDarkMode.svg"
            }
            className="w-auto h-full animate-Appear"
            fill="responsive"
            alt=""
          />
        </div>
      )}
    </div>
  )
}

export const DropDownItem = ({
  text,
  href,
  onClick,
  className,
  textSize,
  Theme,
  currentPath,
}) => {
  return (
    <div key={text} className={`relative group z-10 ${className}`}>
      <Link href={href} className="">
        <p
          className={`z-10 hover:animate-pulse ${textSize} ${Theme === "light"
            ? "text-Villo-light-black"
            : "text-Villo-dark-white"
            }  
           
            `}
          onClick={onClick}
        >
          {text}
        </p>
        {/* <div
          className={`${currentPath === href ? `border opacity-100` : "group-hover:border group-hover:opacity-100"
            } absolute w-[110%] bottom-1/2 translate-y-1/2 translate-x-1/2  -z-10 h-[110%] opacity-0 transition-all ${Theme === "light"
              ? " border-Villo-light-primary"
              : "border-Villo-dark-primary"
            }`}
        /> */}
      </Link>
      {(currentPath === href) && (
        <div className="absolute top-0 w-3 h-full -left-4">
          <Image
            src={
              Theme === "light"
                ? "/logo/WindLogoNoTextLightMode.svg"
                : "/logo/WindLogoNoTextDarkMode.svg"
            }
            className="w-auto h-full animate-Appear"
            fill="responsive"
            alt=""
          />
        </div>
      )}
    </div>
  );
};







export default NavItem;
