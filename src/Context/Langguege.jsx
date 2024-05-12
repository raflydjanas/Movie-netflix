import { useState, createContext, useEffect } from "react";
const LangguegeContext = createContext();

const LangguegeContextProvider = ({ children }) => {
  const getInitialLanguage = () => {
    const saveLanguage = localStorage.getItem("language");
    return saveLanguage ? JSON.parse(saveLanguage) : "english";
  };
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language));
  }, [language]);

  return <LangguegeContext.Provider value={{ language, setLanguage }}>{children}</LangguegeContext.Provider>;
};

export { LangguegeContext };
export default LangguegeContextProvider;
