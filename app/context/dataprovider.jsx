"use client";
import { createContext, useState } from "react";

export const LoginContext = createContext(null);
// export const SearchContext = createContext("");

const ContextProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [search, setSearch] = useState("");

  return (
    <LoginContext.Provider value={{ account, setAccount, search, setSearch }}>
      {children}
    </LoginContext.Provider>
  );
};

export default ContextProvider;
