import Image from "next/image";
// import JWCMAINSHAPE from "/logo_main_shape.svg";

export default function JWCIcon() {
  return (
    <div className="w-8 h-8">
      <Image
        src="/logo_main_shape.svg"
        className="w-auto h-full duration-500 hover:rotate-45"
        width={15}
        height={15}
        alt=""
      />
    </div>

    // <div
    //   className={`animate-Appear h-6 w-6 border-l-8 border-t-8 border-r-8 border-r-JWC-tertiary border-l-JWC-primary border-t-JWC-secondary duration-75 z-10 rounded-full `}
    // ></div>
  );
}
