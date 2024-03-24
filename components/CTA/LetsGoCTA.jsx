import Link from "next/link";
import { ResponsiveThemedH3 } from "../base_components/ResponsiveText";
import CallToActionButton, { EmailCTA, PortfolioCTA } from "../base_components/Buttons";
import Image from "next/image";
import { UserContext } from "../Utilities/UserContext";
import { useContext } from "react";

export const LetsGoCTA = ({
  engText,
  norText,
  href,
  children,
  type,
}) => {
  const { language, theme } = useContext(UserContext);
  return (
    <section className="relative grid items-center justify-center px-12 sm:pt-0 mb-[126px]">
      <div className="z-20 mb-16">
        <ResponsiveThemedH3 className="z-20 flex px-12 font-extrabold text-center">
          {language === "Norwegian" ? norText : engText}
        </ResponsiveThemedH3>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center mx-auto w-fit group">
        <Link href={href}>
          {type === "email" ? (
            <EmailCTA Theme={theme}>
              {children}
            </EmailCTA>
          ) : type === "portfolio" ?
            (
              <PortfolioCTA Theme={theme}>
                {children}
              </PortfolioCTA>
            ) : (<CallToActionButton Theme={theme}>
              {children}
            </CallToActionButton>)}

        </Link>
        <Image
          src={
            theme === "light"
              ? "/logo/WindLogoNoTextLightMode.svg"
              : "/logo/WindLogoNoTextDarkMode.svg"
          }
          className="absolute duration-500 -translate-y-1/2 opacity-70 -z-10 group-active:scale-110 group-hover:rotate-180 group-hover:scale-150 top-1/2"
          width={200}
          height={200}
          alt=""
        />
      </div>
    </section>
  );
};
