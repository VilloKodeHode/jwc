import AIART_LIST from "@/components/aiArt_list";
import PageLayout, { TextFlex } from "@/components/Layout";
import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveP,
} from "@/components/Responsive text/ResponsiveText";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>JV Web Consult</title>
        <meta name="description" content="JWC official website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <section className="relative grid lg:grid-cols-[50%_50%] lg:grid-flow-col items-center justify-center w-screen text-center">
          <div className="bg-[url('https://cdn.midjourney.com/52a4027a-565a-4cfb-ad6a-5b17a39b8f7a/0_1.png')] flex bg-cover px-8 py-16 h-full min-h-[45vh]">
            <TextFlex>
              <ResponsiveH1 className="font-extralight text-JWC-white clearText">
                Jeg lager AI genererte bilder
              </ResponsiveH1>
            </TextFlex>
          </div>
          <div className="bg-[url('https://cdn.midjourney.com/591f3ac9-8b22-46ee-91cd-d4a9b1ae53b7/grid_0.png')] bg-cover px-8 py-16 h-full flex min-h-[45vh] clearText">
            <TextFlex>
              <ResponsiveH3 className="font-extralight text-JWC-white">
                Nettinnhold til din side
              </ResponsiveH3>
            </TextFlex>
          </div>
        </section>
        <section className="grid justify-center w-screen bg-JWC-black">
          <TextFlex>
            <ResponsiveH2 className="p-8 font-extralight clearText bg-gradient-to-r from-JWC-primary to-JWC-secondary bg-clip-text transparent">
              Galleri
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
