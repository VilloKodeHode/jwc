import Link from "next/link";

const NavItem = ({
  text,
  href,
  active,
  activeWidth,
  activeHeight,
  handleMenuClick,
  activeLink,
  textsize,
  position,
  underline,
}) => {
  const handleClick = () => {
    handleMenuClick({ text });
  };

  return (
    <div key={text} className="relative z-10 p-3">
      <Link href={href}>
        <span
          className={`${textsize} ${
            active || activeLink === text ? `${underline}` : ""
          } z-10 p-1 hover:${underline} border-JWC-secondary`}
          onClick={handleClick}
        >
          {text}
        </span>
      </Link>
      {(active || activeLink === text) && (
        <div
          className={`animate-Appear absolute top-1/3 -translate-y-1/2 ${position} ${activeWidth} ${activeHeight} bg-JWC-secondary -z-10 rounded-full `}
        ></div>
      )}
    </div>
  );
};

export default NavItem;
