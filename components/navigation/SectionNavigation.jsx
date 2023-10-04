export const SectionNavigation = () => {
  const generateSpans = (text, href) => {
    return (
      <a href={href} className="my-2 w-fit h-fit">
        {text.split("").map((char, index) => (
          <>
            <span
              key={index + char}
              className=" group drop-shadow-[10px_10px_0px_#383844] hover:drop-shadow-[10px_10px_0px_#858ee0] transition-all duration-500 ease-in-out hover:text-Villo-light-primary"
            >
              {char}
              <span className="absolute left-0 w-full border-2 border-Villo-dark-primary transition-all duration-500 ease-in-out top-1/4 h-[60%] hover:scale-110"></span>
            </span>

          </>
        ))}
      </a>
    );
  };
  return (
    <>
      <section
        className="flex items-center justify-end w-full h-[calc(100vh-152px)]"
        id="SectionNavigation"
      >
        <div className="flex flex-col tracking-widest sm:text-[100px] ml:text-[70px] mm:text-[50px] text-[40px] justify-end items-end text-end font-extrabold px-12 text-Villo-dark-white20">
          {generateSpans("WHO?", "#HeroSection")}
          {generateSpans("WHAT?", "#CTAOneSection")}
          {generateSpans("WHY?", "#OfferSection")}
          {generateSpans("WHEN?", "#ServiceSection")}
        </div>
      </section>
    </>
  );
};


{/* <a href="#HeroSection" className="my-2 w-fit h-fit group">

<Image src="/logo/WindLogoDarkmode.svg" width="200" height="200" alt="logo" className="border-Villo-dark-primary border-2 drop-shadow-[10px_10px_0px_#383844] hover:drop-shadow-[10px_10px_0px_#858ee0] transition-all duration-500 ease-in-out hover:text-Villo-light-primary  hover:scale-[1.02]"></Image>

</a> */}