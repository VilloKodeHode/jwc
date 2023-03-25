import Link from "next/link";


const NavItem = ({ text, href, active, activeLink, onClick }) => {
  return (
    <div key={text} className="relative z-10 p-3">
      <Link href={href} className="">
        <p
          className={`text-h5 text-JWC-tertiary ${
            active || activeLink === text ? `border-b-4` : ""
          } z-10 p-1 hover:border-b-8 hover:-translate-y-1  hover:border duration-75 active:translate-y-0 active:border-b-4 rounded-xl border-JWC-secondary`}
          onClick={onClick}
        >
          {text}
        </p>
      </Link>
      {(active || activeLink === text) && (
        <div
          className={`animate-Appear absolute top-1/3 -translate-y-1/2 -left-3 h-6 w-6 bg-JWC-secondary -z-10 rounded-full `}
        ></div>
      )}
    </div>
  );
};

export default NavItem;
