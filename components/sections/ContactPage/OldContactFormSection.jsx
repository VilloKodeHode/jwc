import Image from "next/image";
import CallToActionButton from "../../atoms/Buttons";
import {
  ResponsiveH2,
  ResponsiveH4,
  ResponsiveP,

} from "../../atoms/ResponsiveText";
import { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";

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
    const { language } = useContext(UserContext);
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
              <CallToActionButton onClick={handleCloseModal}>
                Flotters!
              </CallToActionButton>
            </div>
          </div>
        )}
      </section>
    );
  };