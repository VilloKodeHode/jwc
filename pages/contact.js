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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await sendEmail({ name, email, message });

      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
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
        <form onSubmit={handleSubmit} className="w-[100%] p-4 text-JWC-black">
          <div className="mt-4">
            <label className="block mb-2 font-bold" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-2 border rounded border-JWC-primary"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mt-8">
            <CallToActionButton disabled={isLoading}>
              {isLoading ? "Sending..." : "Send"}
            </CallToActionButton>
          </div>

          {isSuccess && (
            <p className="mt-4 text-green-500">Email sent successfully!</p>
          )}

          {isError && <p className="mt-4 text-red-500">Error sending email.</p>}
        </form>
      </section>
    </PageLayout>
  );
}
