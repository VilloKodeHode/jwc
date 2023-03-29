//Component for displaying project layout

import Image from "next/image";
import { useState } from "react";
import { CallToActionButtonAlt } from "../Buttons";
import {
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveP,
} from "../Responsive text/ResponsiveText";

export default function ProjectCard(props) {
  const {
    href,
    projectName,
    textColor,
    src,
    mobileSrc,
    description,
    hrefCode,
    alt,
    cardColor,
  } = props;

  const [toggle, setToggle] = useState(false);
  return (
    <>
      <section
        className={`w-[100vw] my-28 ${cardColor} shadow-JWC-black50 shadow-sm`}
      >
        <div className="z-10 flex flex-col items-center justify-center m-4 snap-always snap-mandatory snap-center">
          <ResponsiveH3 className={`p-8 ${textColor}`}>
            {projectName}
          </ResponsiveH3>
          <div className="flex flex-col items-center justify-center gap-12 p-8 xl:flex-row">
            <ResponsiveP className={`xl:max-w-[30%] max-w-[80%] ${textColor}`}>
              {description}
            </ResponsiveP>
            <div className="">
              <Image
                width={800}
                height={800}
                className={`hidden md:block`}
                src={src}
                alt={alt}
              />
              <Image
                width={450}
                height={450}
                className={`md:hidden block`}
                src={mobileSrc}
                alt={alt}
              />

              <a className="" href={href} target="_blank">
                <CallToActionButtonAlt className={``}>
                  App
                </CallToActionButtonAlt>
              </a>
              <a href={hrefCode} target="_blank">
                <CallToActionButtonAlt className="">Kode</CallToActionButtonAlt>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
