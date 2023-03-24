import { useState } from "react";
import CallToActionButton from "@/components/Buttons";
import PageLayout, { EqualTwoGrids, TextFlex } from "@/components/Layout";
import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveP,
} from "@/components/Responsive text/ResponsiveText";
import sendEmail from "./api/sendEmail";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("submitting");
    try {
      await sendEmail(formData);
      setFormStatus("success");
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
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
        <form className="w-[100%] p-4 text-JWC-black" onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block mb-2 font-bold" htmlFor="firstName">
              First Name
            </label>
            <input
              className="w-full p-2 border rounded border-JWC-primary"
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 font-bold" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="w-full p-2 border rounded border-JWC-primary"
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
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
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 font-bold" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-2 border rounded border-JWC-primary"
              id="message"
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* <div class="mt-4">
            <label class="block font-bold mb-2" for="budget">
              Budget
            </label>
            <input
              class="w-full p-2 border border-JWC-primary rounded"
              id="budget"
              type="text"
              required
            />
          </div>

          <div class="mt-4">
            <label class="block font-bold mb-2" for="timeline">
              Timeline
            </label>
            <input
              class="w-full p-2 border border-JWC-primary rounded"
              id="timeline"
              type="text"
              required
            />
          </div> */}

          <div class="mt-8">
            <CallToActionButton type="submit">Send</CallToActionButton>
          </div>
        </form>
      </section>
    </PageLayout>
  );
}
