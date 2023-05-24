import Image from "next/image";
import CallToActionButton from "../Buttons";
import {
  ResponsiveH2,
  ResponsiveH4,
  ResponsiveP,
  ResponsiveThemedH1,
  ThemedP,
} from "../Responsive text/ResponsiveText";
import { useContext, useState } from "react";
import LanguageContext from "../Utilities/LanguageSwitch/LanguageContext";
import ThemeContext from "../Utilities/ThemeSwitch/ThemeContext";

export const ContactformSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    });
    fetchPromise
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // handle response, catch errors
      });
  };
  const { language } = useContext(LanguageContext);
  const { Theme } = useContext(ThemeContext);
  return (
    <div className="animate-PageAppearRight flex flex-col min-h-[calc(100vh-144px)] justify-center items-center py-8">
      <ResponsiveThemedH1 className="mb-4">
        {language === "Norwegian" ? "Kontaktskjema" : "Contact form"}
      </ResponsiveThemedH1>
      <ThemedP className="mb-4">
        {language === "Norwegian"
          ? "Vennligst fyll ut skjemaet under og vi vil komme tilbake til deg så snart som mulig."
          : "Please fill out the form below and we will get back to you as soon as possible."}
      </ThemedP>
      <form
        className="w-full max-w-lg"
        action={endpoint}
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className={`block font-bold mb-2 ${
              Theme === "light" ? "text-Villo-black" : "text-Villo-white"
            }`}
          >
            {language === "Norwegian" ? "Navn" : "Name"}
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-lg border-Villo-primary focus:outline-none focus:border-Villo-secondary"
            placeholder={language === "Norwegian" ? "Ditt navn" : "Your name"}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className={`block font-bold mb-2 ${
              Theme === "light" ? "text-Villo-black" : "text-Villo-white"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg border-Villo-primary focus:outline-none focus:border-Villo-secondary"
            placeholder={
              language === "Norwegian"
                ? "Din email addresse"
                : "Your email address"
            }
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className={`block font-bold mb-2 ${
              Theme === "light" ? "text-Villo-black" : "text-Villo-white"
            }`}
          >
            {language === "Norwegian" ? "Melding" : "Message"}
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2 border rounded-lg border-Villo-primary focus:outline-none focus:border-Villo-secondary"
            rows="4"
            placeholder={
              language === "Norwegian" ? "Din melding" : "Your message"
            }
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          ></textarea>
        </div>
        <CallToActionButton type="submit">Send</CallToActionButton>
      </form>
      {showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col items-center justify-center relative p-8 bg-Villo-black rounded-3xl xl:max-w-[50%] max-w-[80%]">
            <ResponsiveH2 className="text-Villo-secondary">
              {language === "Norwegian"
                ? "Takk for at du tok kontakt!"
                : "Thank you for reaching out!"}
            </ResponsiveH2>
            <ResponsiveP className="text-Villo-primary">
              {language === "Norwegian"
                ? "Du vil snart få svar på henvendelsen din."
                : "You will soon receive a reply to your inquiry."}
            </ResponsiveP>
            <ResponsiveP className="text-Villo-primary">
              {language === "Norwegian"
                ? "La oss lage noe fantastisk!"
                : "Let's make something awesome!"}
            </ResponsiveP>
            <Image
              src="/loading.svg"
              width={200}
              height={200}
              alt="loading..."
            />
            <CallToActionButton onClick={() => setShowModal(false)}>
              {language === "Norwegian" ? "Flotters!" : "Roger that!"}
            </CallToActionButton>
          </div>
        </div>
      )}
    </div>
  );
};

export const OldContactformSection = () => {
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
  const { language } = useContext(LanguageContext);
  return (
    <section className="relative grid lg:grid-cols-[50%_50%] lg:grid-flow-col items-center justify-center min-w-[80%] min-h-[70vh] my-28 text-center">
      <div className="flex justify-center px-8">
        <ResponsiveH4 className="bg-gradient-to-r from-Villo-tertiary to-Villo-secondary bg-clip-text transparent lg:max-w-[20ch] max-w-[30ch]">
          {language === "Norwegian"
            ? "Ønsker du å ta en prat? Fyll ut skjemaet og vi vil kontakte deg så snart som mulig."
            : "Fill out the form if you want to have a chat, and you will be contacted as soon as possible."}
        </ResponsiveH4>
      </div>
      <form
        className="w-[100%] flex flex-col justify-center items-center p-4 text-Villo-white15"
        action={endpoint}
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mt-4">
            <label className="block mb-2 font-bold" htmlFor="fullName">
              Full name
            </label>
            <input
              className="w-full p-2 border rounded border-Villo-primary"
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
              className="w-full p-2 border rounded border-Villo-primary"
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
              className="w-full p-2 border rounded border-Villo-primary"
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
              className="w-full p-2 border rounded border-Villo-primary"
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
              className="w-full p-2 border rounded border-Villo-primary"
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

          <div className="grid justify-start mt-8">
            <CallToActionButton type="submit">Send</CallToActionButton>
          </div>
        </div>
      </form>
      {showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col items-center justify-center relative p-8 bg-Villo-black rounded-3xl xl:max-w-[50%] max-w-[80%]">
            <ResponsiveH2 className="text-Villo-secondary">
              Takk for at du tok kontakt!
            </ResponsiveH2>
            <ResponsiveP className="text-Villo-primary">
              Du vil snart få svar på henvendelsen din.
            </ResponsiveP>
            <ResponsiveP className="text-Villo-primary">
              La oss lage noe fantastisk!
            </ResponsiveP>
            <Image
              src="/loading.svg"
              width={200}
              height={200}
              alt="loading..."
            />
            <CallToActionButton onClick={() => setShowModal(false)}>
              Flotters!
            </CallToActionButton>
          </div>
        </div>
      )}
    </section>
  );
};
