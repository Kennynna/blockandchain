import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext"; // путь подстрой
import { WorldIcon } from "../../assets/icons/World";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "ca", label: "CA" },
  { code: "es", label: "ES" },
];

export const LangChange = () => {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelect = (code) => {
    setLang(code);
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      <div
        className="flex items-center gap-2 cursor-pointer hover:opacity-60 p-2 rounded transition-all 0.3s"
        onClick={handleToggle}
      >
        <WorldIcon className="icon-24-20" />
        <p className="text-18-14 uppercase">{lang}</p>
      </div>
      {isOpen && (
        <div
          className={`absolute bottom-full mb-2 w-20 bg-[var(--bg-black)] border border-[var(--border-gray)]  shadow-lg z-10 
      animate-fade-in-up`}
        >
          {LANGUAGES.map(({ code, label }) => (
            <div
              key={code}
              className={`px-4 py-2 text-18-14 cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:text-black ${lang === code ? "bg-white font-semibold text-black" : ""
                }`}
              onClick={() => handleSelect(code)}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
