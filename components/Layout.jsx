export default function PageLayout({ children }) {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen z-50">
      <>{children}</>
    </main>
  );
}

export function TopTwoGridLayout({ children }) {
  return (
    <section className="grid relative text-white sm:grid-cols-[60%_40%] h-[calc(100vh-126.75px)] w-full bg-JWC-lightblue">
      <>{children}</>
    </section>
  );
}

export function TwoGriddedLayout({ children }) {
  return (
    <section className="grid text-white grid-cols-[60%_40%] h-[100vh] w-full">
      <>{children}</>
    </section>
  );
}

export function TextTwoGridLayout({ children }) {
  return (
    <>
      <section className="grid items-start sm:grid-cols-[50%_50%] sm:gap-2 gap-12 min-h-[30vh] w-full relative">
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
      className={`flex flex-col items-center justify-center ${textWidth} mx-auto`}
    >
      <>{children}</>
    </section>
  );
}
