import { useContext, useState } from "react";
import ThemeContext from "../Utilities/ThemeSwitch/ThemeContext";
import Link from "next/link";
import Image from "next/image";
import { LOGO } from "../navigation/menu_list";
import { useDisclosure } from "@chakra-ui/react";

const LogoComponent = ({ onClose }) => {
  const { Theme } = useContext(ThemeContext);
  const handleImageClick = () => {
    onClose();
  };

  // Find the logo object based on the theme
  const logoObject = LOGO.find((logo) => logo.hasOwnProperty(Theme));

  if (!logoObject) {
    // Handle case when logo object for the theme is not found
    return null;
  }

  // Get the logo details for the theme
  const logoDetails = logoObject[Theme];

  return (
    <Link key={logoDetails.text} href={logoDetails.href}>
      <Image
        onClick={handleImageClick}
        src={logoDetails.imageSrc}
        width={logoDetails.imageWidth}
        height={logoDetails.imageHeight}
        alt="Villo utvikling logo"
        className="z-50 h-full duration-200 lg:p-1 hover:scale-105"
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
