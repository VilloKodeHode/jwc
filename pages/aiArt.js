import PageLayout from "@/components/Layout";
import {
  ResponsiveH2,
  ResponsiveH3,
  ThemedH3,
} from "@/components/Responsive text/ResponsiveText";
import AIART_LIST from "@/data/aiArt_list";

import Head from "next/head";
import Image from "next/image";

export default function AIArtPage({ language, Theme }) {
  return (
    <>
      <Head>
        <title>JV Web Consult</title>
        <meta name="JV Web Consult" content="Villo's AI art" />
        <meta
          name="keywords"
          content="AI art, AI kunst, nettinnhold, webcontent, AI"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="icon"
          href={
            Theme === "light"
              ? "/logo/WindLogoNoTextLightMode.svg"
              : "/logo/WindLogoNoTextDarkMode.svg"
          }
        />
      </Head>
      <PageLayout>
        <section className="relative grid lg:grid-cols-[50%_50%] min-h-[70vh] pt-16 lg:grid-flow-col items-center justify-center min-w-full text-center">
          <div className="relative h-full lg:min-w-[30vw] min-w-[80vw] min-h-[45vh]">
            <Image
              src="/images/midjourney/green_planet.webp"
              alt="Green plantet"
              cover="true"
              style={{ objectFit: "cover", objectPosition: "top" }}
              fill="true"
              priority={true}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <ResponsiveH2 className="max-w-xl font-light text-Villo-white clearText font-Lato">
                {language === "Norwegian"
                  ? "Jeg lager AI genererte bilder"
                  : "I create images generated by AI."}
              </ResponsiveH2>
            </div>
          </div>
          <div className="relative h-full lg:min-w-[30vw] min-w-[80vw] min-h-[45vh] overflow-hidden">
            <Image
              src="/images/midjourney/etheral_angel.webp"
              alt="Etheral Angel"
              cover="true"
              style={{ objectFit: "cover", objectPosition: "top" }}
              fill="true"
              priority={true}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <ResponsiveH3 className="max-w-xl font-light clearText text-Villo-white font-Lato ">
                {language === "Norwegian"
                  ? "Høykvalitets nettinnhold tilpasset behovene til din nettside."
                  : "High-quality web content tailored to your site's needs."}
              </ResponsiveH3>
            </div>
          </div>
        </section>
        <section className="grid justify-center">
          <div className="grid justify-center">
            <ThemedH3
              className={`p-36 transition-all text-h1 font-light bg-gradient-to-r bg-clip-text transparent ${
                Theme === "light"
                  ? "from-Villo-light-primary to-Villo-light-secondary"
                  : "from-Villo-dark-primary to-Villo-dark-secondary"
              } `}
            >
              {language === "Norwegian" ? "Galleri" : "Gallery"}
            </ThemedH3>
          </div>
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {AIART_LIST.map((image, index) => (
              <div key={index} className="relative">
                <Image
                  className=""
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                />
                <div className="absolute top-0 left-0 w-full h-full transition duration-300 opacity-0 bg-Villo-black hover:opacity-80">
                  <div className="absolute w-full text-center text-white transform -translate-y-1/2 top-1/2">
                    <p className="text-lg bg-black">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>
      </PageLayout>
    </>
  );
}
