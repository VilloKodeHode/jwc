import PageLayout from "@/components/Layout";
import ResponsiveH1 from "@/components/Responsive text/ResponsiveText";
import { IoConstructOutline } from "react-icons/io5";

export default function Projects() {
  return (
    <PageLayout>
      <section className="relative grid grid-col items-center min-h-[70vh] my-28 text-center">
        <ResponsiveH1>Projects</ResponsiveH1>
        <div className="flex justify-center">
          <IoConstructOutline className="h-36 w-36" />
        </div>
        <code>Page is currently being built</code>
      </section>
    </PageLayout>
  );
}
