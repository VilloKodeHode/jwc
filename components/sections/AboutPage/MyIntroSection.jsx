import Image from "next/image";
import {
  ResponsiveThemedH2,
  ResponsiveThemedH3,
  ResponsiveThemedP,
} from "../../atoms/ResponsiveText";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

export const MyIntroSection = () => {
  const { theme, language } = useContext(UserContext);
  return (
    <div className="grid max-w-7xl justify-center text-center items-center min-h-[calc(100dvh-144px)]">
      <ResponsiveThemedH2 className="py-4">
        {language === "Norwegian" ? "Kort om meg" : "About me"}
      </ResponsiveThemedH2>
      <div className="animate-PageAppearRight">
        <div
          className={`sm:rounded-lg grid min-h-[70dvh] lg:grid-cols-2 transition-colors duration-1000  ${
            theme === "light"
              ? "bg-Villo-light-white10"
              : "bg-Villo-dark-black75"
          }`}
        >
          <div
            className={`col-span-1 py-12 min-h-[30dvh] text-left flex flex-col justify-center items-center`}
          >

            <ResponsiveThemedH3 className="py-5 text-left text-bold">
              Joakim Villo
            </ResponsiveThemedH3>
            <ResponsiveThemedP className="max-w-md px-8 pb-5 text-center">
              {language === "Norwegian"
                ? "Jeg er en utdannet utvikler som for øyeblikket underviser i grunnleggende programmering og webutviklingskurs. Jeg har to bachelorgrader i andre fagfelt, og tidligere jobb har hatt sammenheng med disse gradene. I 2022 byttet jeg til programmering og koding, som nå har blitt min sanne lidenskap i livet."
                : "I'm a trained developer who's currently teaching fundamental programming and web development courses. I hold two bachelor's degrees in other fields, and previous work has been related to those degrees. In 2022, I switched to programming and coding, which has now become my true passion in life."}
            </ResponsiveThemedP>
          </div>
          <div className="col-span-1">
            <Image
              src="/Joakim.webp"
              width={1200}
              height={1200}
              alt="Tønsberg brygge"
              className="object-cover w-full h-full rounded-b-lg lg:rounded-r-lg lg:rounded-b-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
