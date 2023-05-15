import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import Image from "next/image";
import LIGHTMODE from "./assets/lightmode.svg";
import DARKMODE from "./assets/darkmode.svg";

const ThemeSwitch = () => {
  const { Theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    if (Theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    console.log("Current theme:", Theme);
  };
  return (
    <button onClick={toggleTheme}>
      <Image
        src={Theme === "light" ? LIGHTMODE : DARKMODE}
        width={320}
        height={320}
        alt="themeswitch"
        className="w-5 h-5"
      />
    </button>
  );
};

export default ThemeSwitch;
