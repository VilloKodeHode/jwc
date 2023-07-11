import Image from "next/image";
import Link from "next/link";

const NavItem = ({
  text,
  href,
  active,
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
          className={`${textSize} ${
            Theme === "light"
              ? "text-Villo-light-black"
              : "text-Villo-dark-white"
          }  z-10`}
          onClick={onClick}
        >
          {text}
        </p>
        <div
          className={`${
            active || currentPath === href ? `h-2` : "group-hover:h-2"
          } absolute w-full h-0 transition-all ${
            Theme === "light"
              ? "bg-Villo-light-primary "
              : "bg-Villo-dark-primary"
          }`}
        />
      </Link>
      {(active || currentPath === href) && (
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
