import { useState } from "react";
import Header from "@/components/navigation/Header";
import "@/styles/globals.css";
import Drawer from "@/components/navigation/Drawer";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Footer from "@/components/navigation/Footer";

const theme = extendTheme({
  colors: {
    JWC: {
      primary: "#ac6bde",
      // 100: "#ac6bde",
      secondary: "#eb65cf",
      // 200: "#eb65cf",
      tertiary: "#6865eb",
      700: "#6865eb",

      //font colors:
      black: "#312b35",
      // 100: "#312b35",
      black75: "#656068",
      500: "#656068",
      black50: "#98959a",
      600: "#98959a",
      black25: "#cbcacc",
      1000: "#cbcacc",
      black15: "#e0dfe1",
      800: "#e0dfe1",
      logo: "#3c4343",
      900: "#3c4343",
      white: "#fbf7fd",
      white10: "#f7f1fc",
      100: "#f7f1fc",
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
}
