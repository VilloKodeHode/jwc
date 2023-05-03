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
  textColor,
  textSize,
}) => {
  return (
    <div key={text} className={`relative z-10 p-5 ${className}`}>
      <Link href={href} className="">
        <p
          className={`${textSize} ${textColor} ${
            active || activeLink === text ? `border-b-2` : "hover:underline"
          } z-10 border-JWC-black duration-150`}
          onClick={onClick}
        >
          {text}
        </p>
      </Link>
      {(active || activeLink === text) && (
        <div className="absolute top-0 w-5 h-full -left-1">
          <Image
            src={icon}
            className="w-auto h-full"
            fill="responsive"
            alt=""
          />
        </div>
        // <div
        //   className={`animate-Appear absolute top-1/2 -translate-y-1/2 -left-2 h-6 w-6 border-l-8 border-t-8 border-r-8 border-r-JWC-tertiary border-l-JWC-primary border-t-JWC-secondary duration-75 -z-10 rounded-full `}
        // ></div>
      )}
    </div>
  );
};

export default NavItem;
