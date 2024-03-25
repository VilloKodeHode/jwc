import { useContext } from "react";
import { ResponsiveH2, ResponsiveLi, ResponsiveP } from "../base_components/ResponsiveText";
import { UserContext } from "../Utilities/UserContext";
import VilloIcon from "../base_components/Icon";


export const BullitinSection = () => {
  const { theme, language } = useContext(UserContext);
  return (
    <section className="relative grid justify-center items-center py-8 w-full bg-Villo-tertiary my-8 min-h-[35vh] text-left xl:gap-0 gap-12">
      <div className="mx-auto">
        <ResponsiveH2 className="flex px-12 text-center">
          {language === "Norwegian"
            ? "Hva du kan oppnå med Villo utvikling"
            : "What you can achieve with Villo development"}
        </ResponsiveH2>
      </div>
      <div className="flex flex-wrap justify-center gap-12 xl:items-start text-Villo-white15">
        <div>
          <div className="flex gap-2">
            <VilloIcon />
            <ResponsiveP maxWidth="max-w-xs">
              {language === "Norwegian"
                ? "Kvalitet til en god pris"
                : "Quality for a good price"}
            </ResponsiveP>
          </div>
          <ResponsiveLi maxWidth="max-w-xs" className="ml-8 text-Villo-black25">
            {language === "Norwegian"
              ? "Ingen mellomledd som tar en stor del av budsjettet"
              : "No middleman that takes a big part of the budget"}
          </ResponsiveLi>
        </div>
        <div>
          <div className="flex gap-2">
            <VilloIcon />
            <ResponsiveP maxWidth="max-w-xs">
              {language === "Norwegian"
                ? "Optimaliserte websider som bruker den nyeste teknologien"
                : "Optimized websites that use the latest technology"}
            </ResponsiveP>
          </div>
          <ResponsiveLi maxWidth="max-w-xs" className="ml-8 text-Villo-black25">
            {language === "Norwegian"
              ? "For den beste nettrafikken og brukeropplevelse"
              : "For the best web traffic and user experience"}
          </ResponsiveLi>
        </div>
        <div>
          <div className="flex gap-2 ">
            <VilloIcon />
            <ResponsiveP maxWidth="max-w-xs">
              {language === "Norwegian"
                ? "Kontinuerlige kommunikasjon gjennom hele prosessen"
                : "Continuous communication throughout the whole process"}
            </ResponsiveP>
          </div>
          <ResponsiveLi maxWidth="max-w-xs" className="ml-8 text-Villo-black25">
            {language === "Norwegian"
              ? "For å sikre at du får det resultatet du ønsker"
              : "To ensure that the result will be just what you want"}
          </ResponsiveLi>
        </div>
      </div>
    </section>
  );
};

export const OldBullitinSection = () => {
  const { theme, language } = useContext(UserContext);
  return (
    <section className="relative grid justify-center items-center py-8 w-full bg-Villo-tertiary my-8 min-h-[35vh] text-left xl:gap-0 gap-12">
      <div className="mx-auto">
        <ResponsiveH2 className="flex px-12 text-center">
          {language === "Norwegian"
            ? "Hva du kan oppnå med Villo"
            : "What you can achieve with Villo"}
        </ResponsiveH2>
      </div>
      <div className="flex flex-wrap justify-center gap-12 xl:items-start text-Villo-white15">
        <div>
          <div className="flex gap-2">
            <VilloIcon />
            <ResponsiveP maxWidth="max-w-xs">
              {language === "Norwegian"
                ? "Kvalitet til en god pris"
                : "Quality for a good price"}
            </ResponsiveP>
          </div>
          <ResponsiveLi maxWidth="max-w-xs" className="ml-8 text-Villo-black25">
            {language === "Norwegian"
              ? "Ingen mellomledd som tar en stor del av budsjettet"
              : "No middleman that takes a big part of the budget"}
          </ResponsiveLi>
        </div>
        <div>
          <div className="flex gap-2">
            <VilloIcon />
            <ResponsiveP maxWidth="max-w-xs">
              {language === "Norwegian"
                ? "Optimaliserte websider som bruker den nyeste teknologien"
                : "Optimized websites that use the latest technology"}
            </ResponsiveP>
          </div>
          <ResponsiveLi maxWidth="max-w-xs" className="ml-8 text-Villo-black25">
            {language === "Norwegian"
              ? "For den beste nettrafikken og brukeropplevelse"
              : "For the best web traffic and user experience"}
          </ResponsiveLi>
        </div>
        <div>
          <div className="flex gap-2 ">
            <VilloIcon />
            <ResponsiveP maxWidth="max-w-xs">
              {language === "Norwegian"
                ? "Kontinuerlige kommunikasjon gjennom hele prosessen"
                : "Continuous communication throughout the whole process"}
            </ResponsiveP>
          </div>
          <ResponsiveLi maxWidth="max-w-xs" className="ml-8 text-Villo-black25">
            {language === "Norwegian"
              ? "For å sikre at du får det resultatet du ønsker"
              : "To ensure that the result will be just what you want"}
          </ResponsiveLi>
        </div>
      </div>
    </section>
  );
};
