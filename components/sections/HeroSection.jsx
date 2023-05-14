import CallToActionButton from "../Buttons";
import ResponsiveH1, {
  ResponsiveH5,
  ResponsiveP,
} from "../Responsive text/ResponsiveText";

export const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center w-full min-h-[calc(100vh-144px)] bg-center bg-cover">
      <div className="max-w-6xl">
        <div className="relative z-10 text-left">
          <ResponsiveP className="mb-8 text-left rainbowtext w-fit">
            Get your website up and running, fast!
          </ResponsiveP>
          <ResponsiveH1 className="mb-8">
            <span className="text-JWC-primary"> AI-powered developer</span>{" "}
            creating <span className="text-JWC-secondary">websites</span>{" "}
            <span className="text-JWC-tertiary"> faster </span>and
            <span className="text-JWC-tertiary"> better </span>
          </ResponsiveH1>

          <ResponsiveH5 className="mb-8 font-normal text-left">
            {/* <span className="text-JWC-secondary">I build websites </span>{" "}
            <span className="text-JWC-tertiary">quickly</span> and{" "}
            <span className="text-JWC-tertiary">efficiently</span> using the
            latest <span className="text-JWC-accent">web technologies.</span>{" "}
            With <span className="text-JWC-accent">prompt engineering</span> I
            can make content <span className="text-JWC-tertiary">swiftly</span>,
            then <span className="text-JWC-tertiary">improve</span> upon this
            with my own <span className="text-JWC-primary">expertise</span> to{" "}
            <span className="text-JWC-tertiary">create</span> a{" "}
            <span className="text-JWC-secondary">unique website</span> for your
            needs. */}
            I build websites quickly and efficiently using the latestweb
            technologies. With prompt engineering can make content swiftly, then
            improve upon this with my own expertise to create a unique website
            for your needs.
          </ResponsiveH5>

          <CallToActionButton>Contact me</CallToActionButton>
        </div>
      </div>
    </section>
  );
};
