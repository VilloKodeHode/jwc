import Header from "@/components/navigation/Header";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";

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
