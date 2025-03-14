/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createContext, useContext } from "react";

interface ScrollContextType {
  scrollTo: (id: string) => void;
}

const defaultContext = {
  scrollTo: () => {},
};

const ScrollContext = createContext<ScrollContextType | undefined>(
  defaultContext
);

export const ScrollProvider = ({ children }: any) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const value = { scrollTo };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
