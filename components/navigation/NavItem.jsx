import Link from "next/link";


const NavItem = ({ text, href, active, activeLink, onClick, className }) => {
  return (
    <div key={text} className={`relative z-10 p-3 ${className}`}>
      <Link href={href} className="">
        <p
          className={`text-h6 text-JWC-black75 ${
            active || activeLink === text ? `border-b-2` : " hover:mb-[0px]"
          } z-10 border-JWC-secondary`}
          onClick={onClick}
        >
          {text}
        </p>
      </Link>
      {(active || activeLink === text) && (
        <div
          className={`animate-Appear absolute top-1/2 -translate-y-1/2 -left-5 h-6 w-6 border-l-8 border-t-8 border-r-8 border-r-JWC-tertiary border-l-JWC-primary border-t-JWC-secondary duration-75 -z-10 rounded-full `}
        ></div>
      )}
    </div>
  );
};

export default NavItem;
