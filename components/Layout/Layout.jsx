// Components to simplify the layout of the page and sections

import { useContext } from "react";
import { NavigationContext } from "@/context/NavigationContext";
export default function PageLayout({ children }) {
  const { isOpen } = useContext(NavigationContext);
  return (
    <main
      className={`flex flex-col animate-Appear items-center px-4 sm:px-6 lg:px-12 justify-start ${isOpen ? "h-[500px] [&>*]:hidden overflow-y-hidden" : "min-h-screen"}  overflow-x-hidden gap-28`}
    >
      <>{children}</>
    </main>
  );
}

//TODO: Look over the whole code. See if layouts can be made for different parts that are equal in styling.

export function TwoGriddedLayout({ children }) {
  return (
    <section className="grid text-white grid-cols-[60%_40%] h-[100vh] w-full px-4">
      <>{children}</>
    </section>
  );
}

export function TextTwoGridLayout({ children }) {
  return (
    <>
      <section className="grid lg:grid-cols-[50%_50%] gap-12 justify-center items-start px-4 text-center w-full relative">
        <>{children}</>
      </section>
    </>
  );
}

export function EqualTwoGrids({ children }) {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center gap-0 px-2 sm:flex-row sm:gap-2">
        <>{children}</>
      </section>
    </>
  );
}

export function SkillsLayout({ children }) {
  return (
    <section className="grid text-white grid-cols-[40%_60%] h-[100vh] w-full">
      <>{children}</>
    </section>
  );
}

//TODO: Dont use this component. OR make more of it, and make more different that could be used in other places. Choose 1.
export function TextFlex({ children, textWidth }) {
  return (
    <div
      className={`flex flex-col items-center snap-center justify-center ${textWidth} mx-auto text-Villo-black`}
    >
      <>{children}</>
    </div>
  );
}

export function ClientLayout({ children }) {
  return (
    <section className="relative p-10 px-4 [&>*]:font-mono border shadow-sm border-Villo-15 shadow-Villo-black bg-Villo-white rounded-sm">
      <>{children}</>
    </section>
  );
}
