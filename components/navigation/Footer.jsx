//Footer component

import Link from "next/link";
import { FiFacebook, FiLinkedin, FiMail } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { ResponsiveH5, ResponsiveP } from "../Responsive text/ResponsiveText";

export default function Footer() {
  return (
    <>
      <div className="relative pt-12 pb-12 bg-Villo-black85">
        {/* <div className="absolute footerwave h-[80px] z-10 -top-1/3" /> */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row">
              <div className="flex flex-row items-center justify-center m-4">
                <Link href="/contact">
                  <FiMail className="w-8 h-8 mr-4 text-white duration-200 hover:text-Villo-secondary hover:scale-125" />
                </Link>
              </div>
              <div className="flex flex-row items-center justify-center m-4">
                <a href="https://github.com/VilloKodeHode" target="_blank">
                  <VscGithubAlt className="w-8 h-8 mr-4 text-white duration-200 hover:text-Villo-secondary hover:scale-125" />
                </a>
              </div>
              <div className="flex flex-row items-center justify-center m-4">
                <a
                  href="https://www.linkedin.com/in/joakim-villo-71b814a1/"
                  target="_blank"
                >
                  <SlSocialLinkedin className="w-8 h-8 mr-4 text-white duration-200 hover:text-Villo-secondary hover:scale-125" />
                </a>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center m-4">
              <ResponsiveH5 className="text-white">
                © 2023 JV Web Consult
              </ResponsiveH5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
