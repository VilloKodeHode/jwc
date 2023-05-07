import AIART_LIST from "@/components/aiArt_list";
import PageLayout, { TextFlex } from "@/components/Layout";
import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveP,
} from "@/components/Responsive text/ResponsiveText";
import LanguageContext from "@/components/Utilities/LanguageSwitch/LanguageContext";
import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";

export default function AIArtPage() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>JV Web Consult</title>
        <meta name="JV Web Consult" content="JWC' AI art" />
        <meta
          name="keywords"
          content="AI art, AI kunst, nettinnhold, webcontent, AI"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <PageLayout>
        <section className="relative grid lg:grid-cols-[50%_50%] lg:grid-flow-col items-center justify-center min-w-full text-center">
          <div className="relative px-8 py-16 h-full lg:min-w-[50vw] min-w-[100vw] min-h-[45vh]">
            <Image
              src="https://cdn.midjourney.com/52a4027a-565a-4cfb-ad6a-5b17a39b8f7a/0_1.png"
              alt="Green plantet"
              cover="true"
              style={{ objectFit: "cover", objectPosition: "top" }}
              fill="true"
              priority={true}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <TextFlex>
                <ResponsiveH2 className="font-light text-JWC-white clearText font-Lato">
                  {language === "Norwegian"
                    ? "Jeg lager AI genererte bilder"
                    : "I create images generated by AI."}
                </ResponsiveH2>
              </TextFlex>
            </div>
          </div>
          <div className="relative px-8 py-16 h-full lg:min-w-[50vw] min-w-[100vw] min-h-[45vh] overflow-hidden">
            <Image
              src="https://cdn.midjourney.com/591f3ac9-8b22-46ee-91cd-d4a9b1ae53b7/grid_0.png"
              alt="Etheral Angel"
              cover="true"
              style={{ objectFit: "cover", objectPosition: "top" }}
              fill="true"
              priority={true}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <TextFlex>
                <ResponsiveH3 className="font-light clearText text-JWC-white font-Lato ">
                  {language === "Norwegian"
                    ? "Høykvalitets nettinnhold tilpasset behovene til din nettside."
                    : "High-quality web content tailored to your site's needs."}
                </ResponsiveH3>
              </TextFlex>
            </div>
          </div>
        </section>
        <section className="grid justify-center w-screen bg-JWC-black">
          <TextFlex>
            <ResponsiveH2 className="p-8 font-light bg-gradient-to-r from-JWC-primary to-JWC-secondary bg-clip-text transparent font-Lato">
              {language === "Norwegian" ? "Galleri" : "Gallery"}
            </ResponsiveH2>
          </TextFlex>
          <section className="grid grid-flow-row grid-cols-1 select-none xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {AIART_LIST.map((image, index) => (
              <div key={index} className="relative border border-transparent">
                <Image
                  className=""
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                />
                <div className="absolute flex items-center justify-center w-full h-full transition-opacity duration-200 transform -translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 left-1/2 active:backdrop-blur-[2px] hover:backdrop-blur-[2px] hover:opacity-100">
                  <ResponsiveP className="p-2 rounded-md text-JWC-white10 clearText">
                    {image.alt}
                  </ResponsiveP>
                </div>
              </div>
            ))}
          </section>
        </section>
      </PageLayout>
    </>
  );
}
