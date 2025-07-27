import { useEffect, useState } from "react";
import { translations } from "../config/lang";
import { useLanguage } from "../context/LanguageContext"; // путь подстрой

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}
function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/";
}

export const Cookie = () => {
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;

  useEffect(() => {
    if (!getCookie("cookieAccepted")) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookieAccepted", "yes", 365);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-block">
      <h3 className="cookie-block__title">Cookie</h3>
      <p className="cookie-block__text">{t.cookie}</p>
      <button className="cookie-block__btn" onClick={handleAccept}>
        Accept
      </button>
    </div>
  );
};
