import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";



export const UserContext = createContext({
  theme: "",
  setTheme: () => {},
  language: "",
  setLanguage: () => {},
  cookiesAccepted: false,
  setCookiesAccepted: () => {},
  currentPath: "",
});



export default function UserContextProvider({ children }) {
  
  const [language, setLanguage] = useState("Norwegian");
  const [theme, setTheme] = useState("dark");
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const router = useRouter();
  const currentPath = router.asPath;



  useEffect(() => {
    // Check if the user has accepted cookies by checking a cookie
    const acceptedCookies = getCookie("acceptedCookies");
    if (acceptedCookies) {
      setCookiesAccepted(true);
    }
  }, [setTheme, setLanguage]);

  // Callback to handle cookie acceptance

  useEffect(() => {
    // Check if cookies are accepted
    if (cookiesAccepted) {
      // Set the theme cookie to the current theme
      setCookie("theme", theme, {
        maxAge: 30 * 24 * 60 * 60,
      });

      // Set the language cookie to the current language
      setCookie("language", language, {
        maxAge: 365 * 24 * 60 * 60,
      });
    }
  }, [cookiesAccepted, theme, language]);
  return (
    <UserContext.Provider value={{language, setLanguage, theme, setTheme, cookiesAccepted, setCookiesAccepted, currentPath }}>
      {children}
    </UserContext.Provider>
  );
}
