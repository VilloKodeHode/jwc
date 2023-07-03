//Footer component

import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { ResponsiveH5 } from "../Responsive text/ResponsiveText";

export default function Footer({ language, Theme }) {
  return (
    <>
      <div className={`relative pt-12 pb-12 ${Theme === "light" ? "bg-Villo-light-primary" : "bg-Villo-dark-primary"}`}>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row">
              <div className="flex flex-row items-center justify-center m-4">
                <Link href="/contact">
                  <FiMail className={`w-8 h-8 mr-4  ${Theme === "light" ? "text-Villo-light-white10 hover:text-Villo-light-secondary" : "text-Villo-dark-white10 hover:text-Villo-dark-secondary"} duration-200  hover:scale-125`} />
                </Link>
              </div>
              <div className="flex flex-row items-center justify-center m-4">
                <a href="https://github.com/VilloKodeHode" target="_blank">
                  <VscGithubAlt className={`w-8 h-8 mr-4  ${Theme === "light" ? "text-Villo-light-white10 hover:text-Villo-light-secondary" : "text-Villo-dark-white10 hover:text-Villo-dark-secondary"} duration-200  hover:scale-125`} />
                </a>
              </div>
              <div className="flex flex-row items-center justify-center m-4">
                <a
                  href="https://www.linkedin.com/in/joakim-villo-71b814a1/"
                  target="_blank"
                >
                  <SlSocialLinkedin className={`w-8 h-8 mr-4  ${Theme === "light" ? "text-Villo-light-white10 hover:text-Villo-light-secondary" : "text-Villo-dark-white10 hover:text-Villo-dark-secondary"} duration-200  hover:scale-125`} />
                </a>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center m-4">
              <ResponsiveH5 className={`${Theme === "light" ? "text-Villo-light-white" : "text-Villo-dark-white"}`}>
                {language === "Norwegian"
                  ? "© 2023 Villo utvikling"
                  : "© 2023 Villo development"}
              </ResponsiveH5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
