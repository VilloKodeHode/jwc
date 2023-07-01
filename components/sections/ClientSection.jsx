import Image from "next/image";
import { CLIENT_LIST } from "../client_list";
import {
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveH5,
  ResponsiveThemedH2,
  ResponsiveThemedH4,
  ResponsiveUL,
  ThemedH3,
  ThemedP,
} from "../Responsive text/ResponsiveText";
import { ClientLayout, TextFlex } from "../Layout";
import Link from "next/link";

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
              className={`overflow-hidden ${
                Theme === "light" ? "bg-Villo-white" : "bg-Villo-black"
              } rounded-lg shadow-lg`}
              href={client.href}
            >
              <Image
                className="object-cover w-full h-48"
                src={client.imageUrl}
                alt={client.name}
                width={500}
                height={400}
              />
              <div
                className={`h-full p-6  ${
                  Theme === "light" ? "bg-Villo-white25" : "bg-Villo-black85"
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
