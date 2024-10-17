import { createContext, useState } from "react";

export const NavigationContext = createContext({
  notTop: false,
  setNotTop: () => {},
  isOpen: false,
  setIsOpen: () => {},
  showToolBar: false,
  setShowToolBar: () => {},
  toggleDropDown: true,
  setToggleDropDown: () => {},
  handleMenuToggle: () => {},
});

export default function NavigationContextProvider({ children }) {
  const [notTop, setNotTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showToolBar, setShowToolBar] = useState(false);
  const [toggleDropDown, setToggleDropDown] = useState(true);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationContext.Provider
      value={{
        notTop,
        setNotTop,
        isOpen,
        setIsOpen,
        showToolBar,
        setShowToolBar,
        toggleDropDown,
        setToggleDropDown,
        handleMenuToggle,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
