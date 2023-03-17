import Link from "next/link";

const NavItem = ({
  text,
  href,
  color,
  active,
  activeWidth,
  activeHeight,
  handleMenuClick,
  activeLink,
  textsize,
}) => {
  const handleClick = () => {
    handleMenuClick({ text });
  };

  return (
    <div key={text} className="relative p-4">
      <Link href={href}>
        <span
          className={`${textsize} ${
            active || activeLink === text ? "underline" : ""
          }`}
          onClick={handleClick}
        >
          {text}
        </span>
      </Link>
      {(active || activeLink === text) && (
        <div
          className={`animate-Appear absolute top-1/2 -translate-y-1/2 left-1 -z-10 ${activeWidth} ${activeHeight} rounded-full ${color}`}
        ></div>
      )}
    </div>
  );
};

export default NavItem;
