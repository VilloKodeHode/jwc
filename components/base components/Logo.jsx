import { useContext } from "react";
import ThemeContext from "../Utilities/ThemeSwitch/ThemeContext";
import Link from "next/link";
import Image from "next/image";
import { LOGO } from "../../data/menu_list";


const LogoComponent = ({ onclick }) => {
  const { Theme } = useContext(ThemeContext);

  // Find the logo object based on the theme
  const logoObject = LOGO.find((logo) => logo.hasOwnProperty(Theme));

  if (!logoObject) {
    // Handle case when logo object for the theme is not found
    return null;
  }

  // Get the logo details for the theme
  const logoDetails = logoObject[Theme];

  return (
    <Link onClick={onclick} key={logoDetails.text} href={logoDetails.href} className="">
      <Image

        src={logoDetails.imageSrc}
        width={logoDetails.imageWidth}
        height={logoDetails.imageHeight}
        alt="Villo utvikling logo"
        className="z-20 h-full duration-200 lg:p-1 hover:scale-105"
      />
    </Link>
  );
};

export const SimpleLogoComponent = () => {
  const { Theme } = useContext(ThemeContext);
  // Find the logo object based on the theme
  const logoObject = LOGO.find((logo) => logo.hasOwnProperty(Theme));

  if (!logoObject) {
    // Handle case when logo object for the theme is not found
    return null;
  }

  // Get the logo details for the theme
  const logoDetails = logoObject[Theme];

  return (
    <div>
      <Image
        src={logoDetails.imageSrc}
        width={logoDetails.imageWidth}
        height={logoDetails.imageHeight}
        alt="Villo utvikling logo"
        className="z-50 m-4"
      />
    </div>
  );
};

export default LogoComponent;
