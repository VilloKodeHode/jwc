import { useEffect, useState } from "react";
import CallToActionButton from "@/components/Buttons";
import PageLayout, { EqualTwoGrids, TextFlex } from "@/components/Layout";
import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveH5,
  ResponsiveP,
} from "@/components/Responsive text/ResponsiveText";
import Image from "next/image";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleProjectChange = (event) => {
    setProject(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleTimelineChange = (event) => {
    setTimeline(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailBody = `Project Request\n\nName: ${name}\nEmail: ${email}\nProject Description: ${project}\nBudget: ${budget}\nTimeline: ${timeline}`;

    setShowModal(true);

    setTimeout(() => {
      window.location.href = `mailto:villokodehode@gmail.com?subject=Project%20request%20-%20${encodeURIComponent(
        name
      )}&body=${encodeURIComponent(emailBody)}`;
      setName("");
      setEmail("");
      setProject("");
      setBudget("");
      setTimeline("");
      setTimeout(() => {
        setShowModal(false);
      }, 5000); // wait 5 seconds before hiding the modal
    }, 5000); // wait 5 seconds before redirecting
  };
  useEffect(() => {
    console.log(showModal);
  }, [showModal]);
  return (
    <PageLayout>
      <section className="relative grid lg:grid-cols-[50%_50%] lg:grid-flow-col items-center justify-center min-w-[80%] min-h-[70vh] my-28 text-center">
        <div className="flex items-center justify-center">
          <ResponsiveH5>
            <div className="bg-gradient-to-r from-JWC-tertiary to-JWC-secondary bg-clip-text transparent lg:max-w-[20ch] max-w-[30ch]">
              Fill out the form and I will contact you as quickly as possible!
            </div>
          </ResponsiveH5>
        </div>
        <form
          onSubmit={handleSubmit}
          method="post"
          encType="application/x-www-form-urlencoded"
          className="w-[100%] p-4 text-JWC-black"
        >
          <div className="mt-4">
            <label className="block mb-2 font-bold" htmlFor="Name">
              Name
            </label>
            <input
              className="w-full p-2 border rounded border-JWC-primary"
              id="Name"
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="your name"
              required
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 font-bold" htmlFor="Email">
              Email
            </label>
            <input
              className="w-full p-2 border rounded border-JWC-primary"
              id="Email"
              type="Email"
              value={email}
              placeholder="your email address"
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 font-bold" htmlFor="Project">
              Project description
            </label>
            <textarea
              className="w-full p-2 border rounded border-JWC-primary"
              id="Project"
              rows="4"
              value={project}
              type="text"
              onChange={handleProjectChange}
              placeholder="project description"
              required
            ></textarea>
          </div>

          <div className="mt-4">
            <label className="block mb-2 font-bold" htmlFor="Budget">
              Budget
            </label>
            <input
              className="w-full p-2 border rounded border-JWC-primary"
              id="Budget"
              rows="4"
              value={budget}
              onChange={handleBudgetChange}
              type="text"
              placeholder="your budget (in NOK)"
              required
            ></input>
          </div>

          <div class="mt-4">
            <label class="block font-bold mb-2" for="Timeline">
              Timeline
            </label>
            <input
              class="w-full p-2 border border-JWC-primary rounded"
              id="Timeline"
              value={timeline}
              onChange={handleTimelineChange}
              type="text"
              placeholder="your timeline for the project"
              required
            />
          </div>

          <div class="mt-8">
            <CallToActionButton type="submit" value="Send">
              Send
            </CallToActionButton>
          </div>
        </form>
        {/* modal for when the form is submitted  */}
        {showModal && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
            <div className="flex flex-col items-center justify-center relative p-8 bg-white rounded-lg xl:max-w-[50%] max-w-[80%]">
              <ResponsiveH2>
                <div className="text-JWC-tertiary">
                  Thank you for your message!
                </div>
              </ResponsiveH2>
              <ResponsiveP>
                <div className="text-JWC-tertiary">
                  I will get back to you as soon as possible.
                </div>
              </ResponsiveP>
              <ResponsiveP>
                You will be redirected to your email client in a few seconds.
              </ResponsiveP>
              <Image
                src="/loading.svg"
                width={200}
                height={200}
                alt="loading..."
              />
            </div>
          </div>
        )}
      </section>
    </PageLayout>
  );
}
