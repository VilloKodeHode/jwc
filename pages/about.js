import PageLayout from "@/components/Layout";
import ResponsiveH1 from "@/components/Responsive text/ResponsiveText";
import { Player } from "@lottiefiles/react-lottie-player";
import { IoConstructOutline } from "react-icons/io5";

export default function About() {
  return (
    <PageLayout>
      <section className="relative grid justify-center min-h-[70vh] my-28 text-center">
        <ResponsiveH1>About</ResponsiveH1>
        <div className="flex justify-center">
          {/* <IoConstructOutline className="h-36 w-36" /> */}
        </div>
        <Player
          autoplay
          loop
          src="https://assets4.lottiefiles.com/packages/lf20_riAqnQrYxZ.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </section>
    </PageLayout>
  );
}
