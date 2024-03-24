import Image from "next/image";
import {
  ResponsiveThemedH2,
  ThemedP,
} from "../../base_components/ResponsiveText";
import { CLIENT_LIST } from "@/data/client_list";
import { useContext } from "react";
import { UserContext } from "../../Utilities/UserContext";

export const ClientsSection = () => {
  const { theme, language } = useContext(UserContext);
  const clientObj = CLIENT_LIST.find((client) => client.language === language);
  const CLIENTS = clientObj ? clientObj.CLIENTS : [];
  return (
    <div className="relative z-10 flex flex-col justify-center py-8 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 min-h-[30vh]">
      <div
        className={`absolute w-screen h-full translate-x-1/2  -z-10 right-1/2 ${
          theme === "light" ? "bg-Villo-light-white20" : "bg-Villo-dark-black85"
        }`}
      />
      <div className="z-10 text-center">
        <ResponsiveThemedH2 className="px-12 text-center">
          {language === "Norwegian" ? "Klienter" : "Clients"}
        </ResponsiveThemedH2>
      </div>
      <div className="mt-10">
        <div className={`z-10 flex flex-wrap justify-center gap-1`}>
          {CLIENTS.map((client) => (
            <a
              key={client.id}
              href={client.href}
              target={client.href ? "_blank" : undefined}
              className={`overflow-hidden w-48 rounded-sm shadow-lg hover:scale-105 transition`}
            >
              <div
                className={`z-20 group grid justify-center transition-all px-2 py-4 ${
                  theme === "light"
                    ? "bg-Villo-light-white15 hover:bg-Villo-light-white10"
                    : "bg-Villo-dark-black75 hover:bg-Villo-dark-black50"
                }`}
              >
                <div className="relative w-28 h-28">
                  <ThemedP className="absolute z-10 w-full text-center transition-all translate-x-1/2 opacity-0 -top-4 group-hover:opacity-100 right-1/2">
                    {client.progress === "in progress" ||
                    client.progress === "under arbeid"
                      ? client.progress
                      : ""}
                  </ThemedP>
                  <Image
                    className={`object-contain w-full h-full ${
                      theme !== "light" && "invert"
                    }`}
                    src={client.imageUrl}
                    alt={client.name}
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
