import CallToActionButton from "../Buttons";
import {
  ResponsiveH2,
  ResponsiveH5,
  ResponsiveP,
} from "../Responsive text/ResponsiveText";

export const ServicesSection = () => {
  return (
    <div className="py-12 ">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <ResponsiveH2 className="font-extrabold text-JWC-White15">
            Services
          </ResponsiveH2>
          <p className="mt-4 text-JWC-white15">
            I offer a range of services to meet your needs. Whether you need
            help with your website, digital marketing, or anything in between,
            I&apos;ve got you covered.
          </p>
        </div>

        <div className="mt-10 ">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="overflow-hidden shadow shadow-JWC-black75 sm:rounded-lg">
                <div className="flex flex-col justify-between px-4 py-5 min-h-[180px] bg-JWC-black sm:p-6">
                  <div className="h-full">
                    <ResponsiveH5 className="font-light bg-gradient-to-br from-JWC-secondary to-JWC-primary bg-clip-text transparent">
                      Website creation
                    </ResponsiveH5>

                    <p className="mt-2 text-JWC-white15">
                      I create websites that are optimized for the best user
                      experience and web traffic. The latest technology is used
                      to ensure that your website is fast, secure, and
                      responsive.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="overflow-hidden shadow shadow-JWC-black75 sm:rounded-lg">
                <div className="flex flex-col justify-between px-4 py-5 min-h-[180px] bg-JWC-black sm:p-6">
                  <div className="h-full">
                    <ResponsiveH5 className="font-light bg-gradient-to-br from-JWC-secondary to-JWC-primary bg-clip-text transparent">
                      Webcontent
                    </ResponsiveH5>
                    <p className="mt-2 text-JWC-white15">
                      Im knowledgeable in several fields outside of programming,
                      like nutrition, pedagogy and physical activity. I can
                      write content for your website that is both informative
                      and engaging.
                    </p>
                  </div>
                  {/* <CallToActionButton>Learn more</CallToActionButton> */}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 md:grid md:grid-cols-2 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="overflow-hidden shadow shadow-JWC-black75 sm:rounded-lg">
                <div className="flex flex-col justify-between px-4 py-5 min-h-[180px] bg-JWC-black sm:p-6">
                  <div className="h-full">
                    <ResponsiveH5 className="font-light bg-gradient-to-br from-JWC-secondary to-JWC-primary bg-clip-text transparent">
                      Webdesign
                    </ResponsiveH5>
                    <p className="mt-2 text-JWC-white15">
                      If you dont know what you want your website to look like,
                      I can help you with that. I can create a design that fits
                      your needs and your brand. I can also help you create a
                      brand if you dont have one.
                    </p>
                  </div>
                  {/* <CallToActionButton>Learn more</CallToActionButton> */}
                </div>
              </div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="overflow-hidden shadow shadow-JWC-black75 sm:rounded-lg">
                <div className="flex flex-col justify-between px-4 py-5 min-h-[180px] bg-JWC-black sm:p-6">
                  <div className="h-full">
                    <ResponsiveH5 className="font-light bg-gradient-to-br from-JWC-secondary to-JWC-primary bg-clip-text transparent">
                      Odd jobs
                    </ResponsiveH5>
                    <p className="mt-2 text-JWC-white15">
                      If you need help with something that is not listed here,
                      dont hesitate to contact me. I&apos;m always open to new
                      challenges and I&apos;m sure we can work something out.
                    </p>
                  </div>
                  {/* <CallToActionButton>Contact me</CallToActionButton> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//! Use the component below after I have added pages or modals for each service
// export const ServicesSection = () => {
//   return (
//     <div className="py-12 ">
//       <div className="mx-auto max-w-7xl">
//         <div className="text-center">
//           <ResponsiveH2 className="font-extrabold text-JWC-White15">
//             Services
//           </ResponsiveH2>
//           <p className="mt-4 text-JWC-white15">
//             I offer a range of services to meet your needs. Whether you need
//             help with your website, digital marketing, or anything in between,
//             I&apos;ve got you covered.
//           </p>
//         </div>

//         <div className="mt-10 ">
//           <div className="md:grid md:grid-cols-2 md:gap-6">
//             <div className="mt-5 md:mt-0 md:col-span-1">
//               <div className="overflow-hidden shadow shadow-JWC-black75 sm:rounded-lg">
//                 <div className="flex flex-col justify-between px-4 py-5 h-[310px] bg-JWC-black sm:p-6">
//                   <div className="h-full">
//                     <ResponsiveH5 className="font-light bg-gradient-to-br from-JWC-secondary to-JWC-primary bg-clip-text transparent">
//                       Website creation
//                     </ResponsiveH5>

//                     <p className="mt-2 text-JWC-white15">
//                       I create websites that are optimized for the best user
//                       experience and web traffic. The latest technology is used
//                       to ensure that your website is fast, secure, and
//                       responsive. I can make everything for simple landing pages
//                       to complex web applications.
//                     </p>
//                   </div>
//                   <CallToActionButton>Learn more</CallToActionButton>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-5 md:mt-0 md:col-span-1">
//               <div className="overflow-hidden shadow shadow-JWC-black75 sm:rounded-lg">
//                 <div className="flex flex-col justify-between px-4 py-5 h-[310px] bg-JWC-black sm:p-6">
//                   <div className="h-full">
//                     <ResponsiveH5 className="font-light bg-gradient-to-br from-JWC-secondary to-JWC-primary bg-clip-text transparent">
//                       Webcontent
//                     </ResponsiveH5>
//                     <p className="mt-2 text-JWC-white15">
//                       Im knowledgeable in several fields outside of programming,
//                       like nutrition, pedagogy and physical activity. I can
//                       write content for your website that is both informative
//                       and engaging.
//                     </p>
//                   </div>
//                   <CallToActionButton>Learn more</CallToActionButton>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-10 md:grid md:grid-cols-2 md:gap-6">
//             <div className="mt-5 md:mt-0 md:col-span-1">
//               <div className="overflow-hidden shadow shadow-JWC-black75 sm:rounded-lg">
//                 <div className="flex flex-col justify-between px-4 py-5 h-[310px] bg-JWC-black sm:p-6">
//                   <div className="h-full">
//                     <ResponsiveH5 className="font-light bg-gradient-to-br from-JWC-secondary to-JWC-primary bg-clip-text transparent">
//                       Webdesign
//                     </ResponsiveH5>
//                     <p className="mt-2 text-JWC-white15">
//                       If you dont know what you want your website to look like,
//                       I can help you with that. I can create a design that fits
//                       your needs and your brand. I can also help you create a
//                       brand if you dont have one.
//                     </p>
//                   </div>
//                   <CallToActionButton>Learn more</CallToActionButton>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-5 md:mt-0 md:col-span-1">
//               <div className="overflow-hidden shadow shadow-JWC-black75 sm:rounded-lg">
//                 <div className="flex flex-col justify-between px-4 py-5 h-[310px] bg-JWC-black sm:p-6">
//                   <div className="h-full">
//                     <ResponsiveH5 className="font-light bg-gradient-to-br from-JWC-secondary to-JWC-primary bg-clip-text transparent">
//                       Odd jobs
//                     </ResponsiveH5>
//                     <p className="mt-2 text-JWC-white15">
//                       If you need help with something that is not listed here,
//                       dont hesitate to contact me. I&apos;m always open to new
//                       challenges and I&apos;m sure we can work something out.
//                     </p>
//                   </div>
//                   <CallToActionButton>Contact me</CallToActionButton>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
