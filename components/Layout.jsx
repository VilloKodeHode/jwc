export default function PageLayout({ children }) {
  return (
    <main className="z-50 flex flex-col items-center justify-start min-h-screen mt-56 overflow-x-hidden">
      <>{children}</>
    </main>
  );
}

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
      <section className="grid items-start lg:grid-cols-[50%_50%] sm:gap-2 gap-12 min-h-[30vh] px-4 text-start w-full relative">
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

export function TextFlex({ children, textWidth }) {
  return (
    <section
      className={`flex flex-col items-center snap-center justify-center ${textWidth} mx-auto text-JWC-black`}
    >
      <>{children}</>
    </section>
  );
}
