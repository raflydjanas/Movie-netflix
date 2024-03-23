import { useState, createContext } from "react";

const LangguegeContext = createContext();

const LangguegeContextProvider = ({ children }) => {
  const [lang, setLang] = useState("english");

  return <LangguegeContext.Provider value={{ lang, setLang }}>{children}</LangguegeContext.Provider>;
};

export { LangguegeContext };
export default LangguegeContextProvider;
