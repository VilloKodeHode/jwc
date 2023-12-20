import Image from "next/image";
import CallToActionButton, { SendCTA } from "../../Buttons";
import {
  ResponsiveThemedH1,
  ResponsiveThemedH2,
  ResponsiveThemedP,
  ThemedP,
} from "../../Responsive text/ResponsiveText";
import { useState } from "react";

export const ContactformSection = ({ language, Theme }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Message:", formData.message);

    setShowModal(true);

    const fetchPromise = fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // cache: "no-cache",
      body: JSON.stringify(formData),
    });



    try {
      const response = await fetchPromise;
      const data = await response.json();
      console.log(data); // handle response, catch errors
    } catch (error) {
      console.error("Error:", error);
      console.log("Full response:", response);
      // Handle error scenarios here
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="grid justify-center items-center min-h-[calc(100vh-144px)]">
      {!showModal && (
        <>
          <div className="animate-PageAppearRight">
            <ResponsiveThemedH1 className="mb-4">
              {language === "Norwegian" ? "Kontaktskjema" : "Contact form"}
            </ResponsiveThemedH1>
            <ThemedP className="mb-4">
              {language === "Norwegian"
                ? "Vennligst fyll ut skjemaet under og vi vil komme tilbake til deg så snart som mulig."
                : "Please fill out the form below and we will get back to you as soon as possible."}
            </ThemedP>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className={`block font-bold mb-2 ${
                    Theme === "light"
                      ? "text-Villo-light-black"
                      : "text-Villo-dark-white"
                  }`}
                >
                  {language === "Norwegian" ? "Navn" : "Name"}
                </label>
                <input
                  type="text"
                  id="name"
                  className={` ${
                    Theme === "light"
                      ? "text-Villo-light-black bg-Villo-light-white border-Villo-light-black focus:border-Villo-light-primary focus:outline-Villo-light-primary"
                      : "text-Villo-dark-white bg-Villo-dark-black focus:border-Villo-dark-primary border-Villo-dark-white focus:outline-Villo-dark-primary"
                  } w-full px-4 py-2 border rounded-lg  focus:outline `}
                  placeholder={
                    language === "Norwegian" ? "Ditt navn" : "Your name"
                  }
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={`block font-bold mb-2 ${
                    Theme === "light"
                      ? "text-Villo-light-black"
                      : "text-Villo-dark-white"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={` ${
                    Theme === "light"
                      ? "text-Villo-light-black bg-Villo-light-white border-Villo-light-black focus:border-Villo-light-primary focus:outline-Villo-light-primary"
                      : "text-Villo-dark-white bg-Villo-dark-black focus:border-Villo-dark-primary border-Villo-dark-white focus:outline-Villo-dark-primary"
                  } w-full px-4 py-2 border rounded-lg  focus:outline `}
                  placeholder={
                    language === "Norwegian"
                      ? "Din email adresse"
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
                    Theme === "light"
                      ? "text-Villo-light-black"
                      : "text-Villo-dark-white"
                  }`}
                >
                  {language === "Norwegian" ? "Melding" : "Message"}
                </label>
                <textarea
                  id="message"
                  className={` ${
                    Theme === "light"
                      ? "text-Villo-light-black bg-Villo-light-white border-Villo-light-black focus:border-Villo-light-primary focus:outline-Villo-light-primary"
                      : "text-Villo-dark-white bg-Villo-dark-black focus:border-Villo-dark-primary border-Villo-dark-white focus:outline-Villo-dark-primary"
                  } w-full px-4 py-2 border rounded-lg  focus:outline `}
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
              <SendCTA Theme={Theme} type="submit">
                Send
              </SendCTA>
            </form>
          </div>
        </>
      )}
      {showModal && (
        <div
          className={`flex items-center rounded-xl justify-center ${
            Theme === "light"
              ? "bg-Villo-light-white20"
              : "bg-Villo-dark-black50"
          } `}
        >
          <div className="relative flex flex-col items-center justify-center gap-8 p-8 bg-Villo-black rounded-3xl">
            <ResponsiveThemedH2 className="text-center">
              {language === "Norwegian"
                ? "Takk for at du tok kontakt!"
                : "Thank you for reaching out!"}
            </ResponsiveThemedH2>
            <div className="text-center">
              <ResponsiveThemedP className="">
                {language === "Norwegian"
                  ? "Du vil snart få svar på henvendelsen din."
                  : "You will soon receive a reply to your inquiry."}
              </ResponsiveThemedP>
              <ResponsiveThemedP className="">
                {language === "Norwegian"
                  ? "La oss lage noe fantastisk!"
                  : "Let's make something awesome!"}
              </ResponsiveThemedP>
            </div>
            <Image
              className="animate-pulse"
              src={
                Theme === "light"
                  ? "/logo/WindLogoNoTextLightMode.svg"
                  : "/logo/WindLogoNoTextDarkMode.svg"
              }
              width={200}
              height={200}
              alt="loading..."
            />
            <CallToActionButton Theme={Theme} onClick={handleCloseModal}>
              {language === "Norwegian" ? "Flotters!" : "Roger that!"}
            </CallToActionButton>
          </div>
        </div>
      )}
    </div>
  );
};
