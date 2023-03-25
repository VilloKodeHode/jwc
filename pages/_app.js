import { useState } from "react";
import Header from "@/components/navigation/Header";
import "@/styles/globals.css";
import Drawer from "@/components/navigation/Drawer";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
