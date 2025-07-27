// src/context/LanguageContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { getCookie, setCookie, getLang } from "../utils/getLang";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => getLang()); // ИСПРАВЛЕНО

  useEffect(() => {
    setCookie("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);