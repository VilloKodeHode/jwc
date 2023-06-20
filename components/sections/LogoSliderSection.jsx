import Image from "next/image";

export const LogoSlider = ({ content }) => {
  return (
    <div className="grid grid-flow-col py-5 overflow-hidden bg-gray-300">
      <div className="grid grid-flow-col animate-scroll">
        {content.image.map((item, index) => (
          <Image
            height={80}
            width={150}
            key={item._id + index}
            src={item}
            className="h-[80px] mx-[140px]"
            alt=""
          />
        ))}
      </div>
      <div className="grid grid-flow-col animate-scroll">
        {content.image.map((item, index) => (
          <Image
            height={80}
            width={150}
            key={item._id + index}
            src={item}
            className="h-[80px] mx-[140px]"
            alt=""
          />
        ))}
      </div>{" "}
      <div className="grid grid-flow-col animate-scroll">
        {content.image.map((item, index) => (
          <Image
            height={80}
            width={150}
            key={item._id + index}
            src={item}
            className="h-[80px] mx-[140px]"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};
