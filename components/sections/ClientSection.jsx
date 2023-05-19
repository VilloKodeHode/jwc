import Image from "next/image";
import { CLIENT_LIST } from "../client_list";
import { useContext } from "react";
import LanguageContext from "../Utilities/LanguageSwitch/LanguageContext";
import {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveH5,
  ResponsiveThemedH2,
  ResponsiveUL,
} from "../Responsive text/ResponsiveText";
import { ClientLayout, TextFlex } from "../Layout";
import ThemeContext from "../Utilities/ThemeSwitch/ThemeContext";

export const ClientSection = () => {
  const { language } = useContext(LanguageContext);
  const clientObj = CLIENT_LIST.find((client) => client.language === language);
  const CLIENTS = clientObj ? clientObj.CLIENTS : [];
  const { Theme } = useContext(ThemeContext);
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="text-center">
        <ResponsiveThemedH2 className="px-12 text-center">
          {language === "Norwegian" ? "Klienter" : "Clients"}
        </ResponsiveThemedH2>
      </div>
      {/* <div
        className={`py-10  
        
        `}
      > */}
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((client) => (
            <div
              key={client.id}
              className="overflow-hidden bg-white rounded-lg shadow-lg"
            >
              <Image
                className="object-cover object-center w-full h-48"
                src={client.imageUrl}
                alt={client.name}
                width={500}
                height={400}
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {client.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{client.jobDone}</p>
              </div>
            </div>
          ))}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export const OldClientLayout = () => {
  return (
    <section className="relative grid items-start justify-center w-full gap-12 px-4 text-center">
      <div className="absolute w-screen left-1/2 -translate-x-1/2 h-[70%] bg-JWC-tertiary -translate-y-1/2 top-1/2 " />
      <TextFlex textWidth="max-w-[60ch]">
        <div>
          <ResponsiveH3>
            {language === "Norwegian" ? "Klienter" : "Clients"}
          </ResponsiveH3>
        </div>
        <ClientLayout>
          <ResponsiveH4 className="text-JWC-black">Wileo AS</ResponsiveH4>
          <Image
            src="/liva-logo.png"
            alt="LIVA"
            width="50"
            height="50"
            className="absolute top-5 left-5"
          />
          <div className="text-start ">
            <ResponsiveUL>
              <p className="text-JWC-black">
                {language === "Norwegian"
                  ? "Et startup som skal lansere produktet sitt midt i Q2."
                  : "A startup that is planning to launch its product in the middle of Q2."}
              </p>
              <ResponsiveH5 className="font-bold underline text-JWC-black">
                {language === "Norwegian" ? "JWC's roller:" : "JWC's roles:"}
              </ResponsiveH5>
              <p className="text-JWC-black">
                {" "}
                {language === "Norwegian"
                  ? "Lage deres landingsside"
                  : "Make their landing page"}
              </p>
              <p className="text-JWC-black">
                {language === "Norwegian"
                  ? "Skape innhold for deres konsept"
                  : "Create content for their concept"}
              </p>
              <p className="text-xs text-JWC-black">
                {language === "Norwegian"
                  ? "(linker kommer når siden lanseres)"
                  : "(links will be added when the page is launched)"}
              </p>
              <ResponsiveH5 className="font-bold underline text-JWC-black">
                {language === "Norwegian"
                  ? " JWC's potensielle roller:"
                  : "JWC's potential roles:"}
              </ResponsiveH5>
              <p className="text-JWC-black">Full design makover for Wileo.no</p>
              <p className="text-JWC-black">
                {language === "Norwegian"
                  ? "Innholdskaper for deres nettsted"
                  : "Content creator for their website"}
              </p>
            </ResponsiveUL>
          </div>
        </ClientLayout>
      </TextFlex>
    </section>
  );
};
