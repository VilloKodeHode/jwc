import Link from "next/link";
import { ResponsiveThemedH3 } from "../Responsive text/ResponsiveText";
import CallToActionButton from "../Buttons";
import Image from "next/image";

export const LetsGoCTA = ({
  Theme,
  language,
  engText,
  norText,
  href,
  buttonEngText,
  buttonNorText,
}) => {
  return (
    <section className="relative grid items-center justify-center gap-2 px-12 pt-12 mx-auto md:py-12 sm:pt-0 xl:gap-16 mb-[126px]">
      <div className="z-20 mb-16">
        <ResponsiveThemedH3 className="z-20 flex px-12 font-extrabold text-center">
          {language === "Norwegian" ? norText : engText}
        </ResponsiveThemedH3>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center mx-auto w-fit group">
        <Link href={href}>
          <CallToActionButton Theme={Theme}>
            {language === "Norwegian" ? buttonNorText : buttonEngText}
          </CallToActionButton>
        </Link>
        <Image
          src={
            Theme === "light"
              ? "/logo/WindLogoNoTextLightMode.svg"
              : "/logo/WindLogoNoTextDarkMode.svg"
          }
          className="absolute duration-500 -translate-y-1/2 -z-10 group-active:scale-110 group-hover:rotate-180 group-hover:scale-150 top-1/2"
          width={200}
          height={200}
          alt=""
        />
      </div>
    </section>
  );
};
