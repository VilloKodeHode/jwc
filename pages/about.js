import { BigButton } from "@/components/Buttons";
import PageLayout, { TextFlex } from "@/components/Layout";
import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveP,
  ResponsiveSmall,
} from "@/components/Responsive text/ResponsiveText";
import SkillWithTabs from "@/components/Skills/SkillsWithTabs";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import { IoConstructOutline } from "react-icons/io5";

export default function About() {
  return (
    <PageLayout gap="gap-28">
      <section className="grid items-center min-h-[70vh] justify-center w-screen font-bold text-center lg:grid-cols-2 mt-[56px]">
        <div className="flex flex-col items-center justify-center lg:h-full h-[50vh] bg-JWC-primary p-4">
          <div className="">
            <ResponsiveH2 className="text-JWC-white">
              JV Web Consult
            </ResponsiveH2>
            <ResponsiveH2>
              <div className="bg-gradient-to-r from-JWC-tertiary to-JWC-secondary bg-clip-text transparent">
                Joakim Villo
              </div>
            </ResponsiveH2>
          </div>
          <TextFlex textWidth="max-w-[60ch]">
            <ResponsiveH3 className="text-JWC-white">
              Norsk foretak
            </ResponsiveH3>
            <ResponsiveP className="text-JWC-white">
              Virksomheten ble startet i Tønsberg i 2023, og har siden da
              prioritert mindre oppdrag for å bygge opp en trofast kundebase
            </ResponsiveP>
          </TextFlex>
        </div>
        <div className="w-screen lg:h-full lg:w-full h-[50vh] tonsbergBG" />
      </section>

      <section className="flex relative w-screen min-h-[40vh] py-8 bg-JWC-tertiary snap-center font-Lato">
        <div className="z-20 grid items-start justify-center w-full">
          <SkillWithTabs />
        </div>
      </section>

      <div className="mb-[92px]">
        <Link href="/projects">
          <BigButton>
            <ResponsiveSmall className="text-JWC-white">
              Mine prosjekter
            </ResponsiveSmall>
          </BigButton>
        </Link>
      </div>
    </PageLayout>
  );
}
