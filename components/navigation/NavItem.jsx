import Image from "next/image";
import Link from "next/link";

const NavItem = ({
  text,
  href,
  icon,
  active,
  activeLink,
  onClick,
  className,
  textSize,
  Theme,
}) => {
  return (
    <div key={text} className={`relative z-10 p-5 ${className}`}>
      <Link href={href} className="">
        <p
          className={`${textSize} ${
            Theme === "light"
              ? "text-Villo-black border-Villo-black"
              : "text-Villo-white border-Villo-white"
          } ${
            active || activeLink === text ? `border-b` : "hover:underline"
          } z-10`}
          onClick={onClick}
        >
          {text}
        </p>
      </Link>
      {(active || activeLink === text) && (
        <div className="absolute top-0 w-5 h-full -left-1">
          <Image
            src={icon}
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
