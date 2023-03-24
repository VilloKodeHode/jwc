import { useState } from "react";
import Header from "@/components/navigation/Header";
import "@/styles/globals.css";
import Drawer from "@/components/navigation/Drawer";

export default function App({ Component, pageProps }) {
  const [activeLink, setActiveLink] = useState("");
  const [activeMenu, setActiveMenu] = useState("");
  return (
    <>
      <Drawer
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        setActiveMenu={setActiveMenu}
      >
        <Header />
        <Component {...pageProps} />
      </Drawer>
    </>
  );
}
