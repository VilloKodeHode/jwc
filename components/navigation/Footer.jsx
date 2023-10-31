//Footer component

import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { ResponsiveH5 } from "../Responsive text/ResponsiveText";

export default function Footer({ language, Theme }) {
  return (
    <div className={`relative py-24 sm:px-6 lg:px-12 px-4 ${Theme === "light" ? "bg-Villo-light-primary" : "bg-Villo-dark-primary"}`}>

      {/* <FooterLinks Theme={Theme} /> */}
      <div className="flex flex-col items-center justify-center w-full gap-4 sm:justify-between sm:flex-row">
        {/* Contact Information */}
        <div className={`flex flex-col gap-2 ${Theme === "light" ? "text-Villo-light-white" : "text-Villo-dark-white"}`}>
          <div className="flex gap-4">
            <Link className="w-fit" href="/contact">
              <FiMail className={`w-8 h-8  ${Theme === "light" ? "text-Villo-light-white10 hover:text-Villo-light-white20" : "text-Villo-dark-white10 hover:text-Villo-dark-white20"} duration-200  hover:scale-125`} />
            </Link>

            <a href="https://github.com/VilloKodeHode" target="_blank">
              <VscGithubAlt className={`w-8 h-8  ${Theme === "light" ? "text-Villo-light-white10 hover:text-Villo-light-white20" : "text-Villo-dark-white10 hover:text-Villo-dark-white20"} duration-200  hover:scale-125`} />
            </a>
            <a
              href="https://www.linkedin.com/in/joakim-villo-71b814a1/"
              target="_blank"
            >
              <SlSocialLinkedin className={`w-8 h-8  ${Theme === "light" ? "text-Villo-light-white10 hover:text-Villo-light-white20" : "text-Villo-dark-white10 hover:text-Villo-dark-white20"} duration-200  hover:scale-125`} />
            </a>

          </div>
          <p>Email: Joakim@jvwebconsult.no</p>
          <p>Phone: +47 932 850 44</p>
          <p>Address: Brekkelia 62B, 3153 Tolvsrød</p>
        </div>
        {/* Copyright Information */}
        <div className={`flex items-center text-center ${Theme === "light" ? "text-Villo-light-white" : "text-Villo-dark-white"}`}>
          <h4 className="text-h4">{language === "Norwegian" ? "© 2023 Villo utvikling" : "© 2023 Villo development"}</h4>
        </div>
        {/* Privacy Policy and Terms of Service */}
        {/* <div className={`text-right ${Theme === "light" ? "text-Villo-light-white" : "text-Villo-dark-white"}`}>
            <Link href="/privacy-policy">
              <p className="">Privacy Policy</p>
            </Link>
            <Link href="/terms-of-service">
              <p>Terms of Service</p>
            </Link>
          </div> */}
      </div>
    </div>
  );
}



export const FooterLinks = (Theme) => {
  return (
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
  )
}