import Image from "next/image"

export const LogoBullitinPoint = ({ Theme }) => {
    return (
        <Image
            src={
                Theme === "light"
                    ? "/logo/WindLogoNoTextLightMode.svg"
                    : "/logo/WindLogoNoTextDarkMode.svg"
            }
            className="transition-all"
            width={50}
            height={50}
            alt=""
        />
    )
}

export const LogoBullitinPointSmall = ({ Theme }) => {
    return (
        <Image
            src={
                Theme === "light"
                    ? "/logo/WindLogoNoTextLightMode.svg"
                    : "/logo/WindLogoNoTextDarkMode.svg"
            }
            className="absolute transition-all duration-500 -top-2 -left-2"
            width={50}
            height={50}
            alt=""
        />
    )
}