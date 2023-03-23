import CallToActionButton from "@/components/Buttons";
import PageLayout, { EqualTwoGrids, TextFlex } from "@/components/Layout";
import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveP,
} from "@/components/Responsive text/ResponsiveText";

export default function Contact() {
  return (
    <PageLayout>
      <section className="relative grid lg:grid-cols-[50%_50%] lg:grid-flow-col items-center justify-center min-h-[70vh] my-28 text-center">
        <ResponsiveH2>
          <div className="bg-gradient-to-r from-JWC-tertiary to-JWC-secondary bg-clip-text transparent lg:max-w-[15ch] max-w-[10ch]">
            Fill out the form and I will contact you as quickly as possible!
          </div>
        </ResponsiveH2>
        <form class="max-w-[700px] p-4">
          <div class="mt-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
              Name
            </label>
            <input
              class="w-full p-2 border border-gray-400 rounded"
              id="name"
              type="text"
            />
          </div>

          <div class="mt-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
              Email
            </label>
            <input
              class="w-full p-2 border border-gray-400 rounded"
              id="email"
              type="email"
            />
          </div>

          <div class="mt-4">
            <label
              class="block text-gray-700 font-bold mb-2"
              for="project-details"
            >
              Project Details
            </label>
            <textarea
              class="w-full p-2 border border-gray-400 rounded"
              id="project-details"
              rows="4"
            ></textarea>
          </div>

          <div class="mt-4">
            <label class="block text-gray-700 font-bold mb-2" for="budget">
              Budget
            </label>
            <input
              class="w-full p-2 border border-gray-400 rounded"
              id="budget"
              type="text"
            />
          </div>

          <div class="mt-4">
            <label class="block text-gray-700 font-bold mb-2" for="timeline">
              Timeline
            </label>
            <input
              class="w-full p-2 border border-gray-400 rounded"
              id="timeline"
              type="text"
            />
          </div>

          <div class="mt-8">
            <button class="px-4 py-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-600">
              Send
            </button>
          </div>
        </form>
      </section>
    </PageLayout>
  );
}
