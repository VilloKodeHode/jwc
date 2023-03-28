import Link from "next/link";
import { FiFacebook, FiLinkedin, FiMail } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { ResponsiveH5, ResponsiveP } from "../Responsive text/ResponsiveText";

export default function Footer() {
  return (
    <>
      <div className="footerwave h-[100px] mt-28 z-10" />
      <div className="bg-JWC-black py-12">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row">
              <div className="flex flex-row items-center justify-center m-4">
                <Link href="/contact">
                  <FiMail className="text-white hover:text-JWC-tertiary mr-4 h-8 w-8 hover:scale-125 duration-200" />
                </Link>
              </div>
              <div className="flex flex-row items-center justify-center m-4">
                <a href="https://github.com/VilloKodeHode" target="_blank">
                  <VscGithubAlt className="text-white hover:text-JWC-tertiary mr-4 h-8 w-8 hover:scale-125 duration-200" />
                </a>
              </div>
              <div className="flex flex-row items-center justify-center m-4">
                <a
                  href="https://www.linkedin.com/in/joakim-villo-71b814a1/"
                  target="_blank"
                >
                  <SlSocialLinkedin className="text-white hover:text-JWC-tertiary mr-4 h-8 w-8 hover:scale-125 duration-200" />
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
