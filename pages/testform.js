import { useState } from "react";
import CallToActionButton from "@/components/Buttons";
import PageLayout, { EqualTwoGrids, TextFlex } from "@/components/Layout";
import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveP,
} from "@/components/Responsive text/ResponsiveText";
import Image from "next/image";

export default function TestForm() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    project: "",
    timeline: "",
    budget: "",
  });

  const endpoint =
    "https://drayggdi6t7tnbviin7ucjgsjq0jhztd.lambda-url.eu-north-1.on.aws/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = formData;
    setShowModal(true);

    // Construct message string with the form data

    const fetchPromise = fetch(endpoint, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      body: JSON.stringify({
        email: data.email,
        fullName: data.fullName,
        project: data.project,
        timeline: data.timeline,
        budget: data.budget,
      }),
    });
    fetchPromise
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // handle response, catch errors
      });
  };

  return (
    <PageLayout>
      <section className="relative grid lg:grid-cols-[50%_50%] lg:grid-flow-col items-center justify-center min-w-[80%] min-h-[70vh] my-28 text-center">
        <div className="flex justify-center">
          <ResponsiveP>
            <div className="bg-gradient-to-r from-JWC-tertiary to-JWC-secondary bg-clip-text transparent lg:max-w-[15ch] max-w-[10ch]">
              Fill out the form and I will contact you as quickly as possible!
            </div>
          </ResponsiveP>
        </div>
        <form
          className="w-[100%] p-4 text-JWC-black"
          action={endpoint}
          onSubmit={handleSubmit}
        >
          <div className="mt-4">
            <label className="block mb-2 font-bold" htmlFor="fullName">
              Full name
            </label>
            <input
              className="w-full p-2 border rounded border-JWC-primary"
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              required
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 font-bold" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border rounded border-JWC-primary"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 font-bold" htmlFor="project">
              Project details
            </label>
            <textarea
              className="w-full p-2 border rounded border-JWC-primary"
              id="project"
              rows="4"
              name="project"
              value={formData.project}
              onChange={(e) =>
                setFormData({ ...formData, project: e.target.value })
              }
              required
            ></textarea>
          </div>
          <div className="mt-4">
            <label className="block mb-2 font-bold" htmlFor="timeline">
              Timeline
            </label>
            <input
              className="w-full p-2 border rounded border-JWC-primary"
              id="timeline"
              rows="4"
              name="timeline"
              value={formData.timeline}
              onChange={(e) =>
                setFormData({ ...formData, timeline: e.target.value })
              }
              required
            ></input>
          </div>

          <div className="mt-4">
            <label className="block mb-2 font-bold" htmlFor="budget">
              Budget
            </label>
            <input
              className="w-full p-2 border rounded border-JWC-primary"
              id="budget"
              rows="4"
              name="budget"
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
              required
            ></input>
          </div>

          <div className="mt-8">
            <CallToActionButton type="submit">Send</CallToActionButton>
          </div>
        </form>
        {showModal && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
            <div className="flex flex-col items-center justify-center relative p-8 bg-white rounded-lg xl:max-w-[50%] max-w-[80%]">
              <ResponsiveH2 className="text-JWC-tertiary">
                Thank you for your message!
              </ResponsiveH2>
              <ResponsiveP className="text-JWC-tertiary">
                I will get back to you as soon as possible.
              </ResponsiveP>
              <ResponsiveP>Let make something great togheter!</ResponsiveP>
              <Image
                src="/loading.svg"
                width={200}
                height={200}
                alt="loading..."
              />
              <CallToActionButton onClick={() => setShowModal(false)}>
                Okeydokey!
              </CallToActionButton>
            </div>
          </div>
        )}
      </section>
    </PageLayout>
  );
}
