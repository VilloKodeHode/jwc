import Image from "next/image";
import {
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveH5,
  ResponsiveThemedH2,
  ResponsiveThemedH4,
  ResponsiveThemedH5,
  ResponsiveUL,
  ThemedH3,
  ThemedP,
} from "../../Responsive text/ResponsiveText";
import { ClientLayout, TextFlex } from "../../Layout/Layout";
import Link from "next/link";
import { CLIENT_LIST } from "@/data/client_list";

export const ClientSection = ({ language, Theme }) => {
  const clientObj = CLIENT_LIST.find((client) => client.language === language);
  const CLIENTS = clientObj ? clientObj.CLIENTS : [];
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="text-center">
        <ResponsiveThemedH2 className="px-12 text-center">
          {language === "Norwegian" ? "Klienter" : "Clients"}
        </ResponsiveThemedH2>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((client) => (
            <Link
              key={client.id}
              className={`overflow-hidden ${Theme === "light"
                ? "bg-Villo-light-primary"
                : "bg-Villo-dark-primary"
                } rounded-lg shadow-lg`}
              href={client.href}
            >
              <div className="grid items-center grid-flow-col gap-4 px-2 py-4">
                <div className="w-28 h-28">
                  <Image
                    className="w-28 h-28"
                    src={client.imageUrl}
                    alt={client.name}
                    width={300}
                    height={300}
                  />
                </div>
                <ResponsiveThemedH4 className="font-medium">
                  {client.name}
                </ResponsiveThemedH4>
              </div>
              <div
                className={`h-full p-6  ${Theme === "light"
                  ? "bg-Villo-light-white10"
                  : "bg-Villo-dark-black85"
                  }`}
              >
                <ResponsiveThemedH4 className="font-medium">
                  {client.name}
                </ResponsiveThemedH4>
                <ThemedP className="mt-2 text-sm">{client.jobDone}</ThemedP>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const NewClientLayout = ({ language, Theme }) => {
  const clientObj = CLIENT_LIST.find((client) => client.language === language);
  const CLIENTS = clientObj ? clientObj.CLIENTS : [];
  return (

    <div className="relative z-10 flex flex-col justify-center py-8 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 min-h-[30vh]">
      <div className={`absolute w-screen h-full translate-x-1/2  -z-10 right-1/2 ${Theme === "light" ? "bg-Villo-light-white20" : "bg-Villo-dark-black85"}`} />
      <div className="z-10 text-center">
        <ResponsiveThemedH2 className="px-12 text-center">
          {language === "Norwegian" ? "Klienter" : "Clients"}
        </ResponsiveThemedH2>
      </div>
      <div className="mt-10">
        <div className={`z-10 flex flex-wrap justify-center gap-1`}>
          {CLIENTS.map((client) => (
            <Link
              key={client.id}
              href={client.href}
              target="_blank"
              className={`overflow-hidden w-48 rounded-sm shadow-lg hover:scale-105 transition`}
            >
              <div
                className={`z-20 group grid justify-center transition-all px-2 py-4 ${Theme === "light"
                  ? "bg-Villo-light-white15 hover:bg-Villo-light-white10"
                  : "bg-Villo-dark-black75 hover:bg-Villo-dark-black50"
                  }`}
              >
                <div className="relative w-28 h-28">
                  <p className="absolute z-10 text-center transition-all translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 bottom-1/2 right-1/2">{client.progress === "in progress" || client.progress === "under arbeid" ? client.progress : ""}</p>
                  <Image
                    className="object-contain w-full h-full filter grayscale"
                    src={client.imageUrl}
                    alt={client.name}
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              {/* <div
                className={`h-full p-2 ${
                  Theme === "light"
                    ? "bg-Villo-light-white10"
                    : "bg-Villo-dark-black85"
                }`}
              >
                <ResponsiveThemedH5 className="font-normal text-center">
                  {client.name}
                </ResponsiveThemedH5>
              </div> */}
            </Link>
          ))}
        </div>
      </div>
    </div>

  );
};

export const OldClientLayout = () => {
  return (
    <section className="relative grid items-start justify-center w-full gap-12 px-4 text-center">
      <div className="absolute w-screen left-1/2 -translate-x-1/2 h-[70%] bg-Villo-tertiary -translate-y-1/2 top-1/2 " />
      <TextFlex textWidth="max-w-[60ch]">
        <div>
          <ResponsiveH3>
            {language === "Norwegian" ? "Klienter" : "Clients"}
          </ResponsiveH3>
        </div>
        <ClientLayout>
          <ResponsiveH4 className="text-Villo-black">Wileo AS</ResponsiveH4>
          <Image
            src="/liva-logo.png"
            alt="LIVA"
            width="50"
            height="50"
            className="absolute top-5 left-5"
          />
          <div className="text-start ">
            <ResponsiveUL>
              <p className="text-Villo-black">
                {language === "Norwegian"
                  ? "Et startup som skal lansere produktet sitt midt i Q2."
                  : "A startup that is planning to launch its product in the middle of Q2."}
              </p>
              <ResponsiveH5 className="font-bold underline text-Villo-black">
                {language === "Norwegian"
                  ? "Villo utvikling's roller:"
                  : "Villo development's roles:"}
              </ResponsiveH5>
              <p className="text-Villo-black">
                {" "}
                {language === "Norwegian"
                  ? "Lage deres landingsside"
                  : "Make their landing page"}
              </p>
              <p className="text-Villo-black">
                {language === "Norwegian"
                  ? "Skape innhold for deres konsept"
                  : "Create content for their concept"}
              </p>
              <p className="text-xs text-Villo-black">
                {language === "Norwegian"
                  ? "(linker kommer når siden lanseres)"
                  : "(links will be added when the page is launched)"}
              </p>
              <ResponsiveH5 className="font-bold underline text-Villo-black">
                {language === "Norwegian"
                  ? " Villo utvikling's potensielle roller:"
                  : "Villo development's potential roles:"}
              </ResponsiveH5>
              <p className="text-Villo-black">
                Full design makover for Wileo.no
              </p>
              <p className="text-Villo-black">
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
