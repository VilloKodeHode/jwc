import {
  ResponsiveH3,
  ThemedH3,
} from "@/components/Responsive text/ResponsiveText";
import Image from "next/image";

export const Loading = () => {
  return (
    <div className="z-50 flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-1/2 h-1/2">
        <Image
          src="/logo/WindLogoNoText.svg"
          alt="Villo utvikling logo"
          width="50"
          height="50"
          className="animate-bounce"
        />
        <ThemedH3 className="rainbowtext">Loading...</ThemedH3>
      </div>
    </div>
  );
};
