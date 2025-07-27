// src/utils/cookie.js

export function getCookie(name) {
  if (typeof document === "undefined") return null; // SSR safety
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

export function setCookie(name, value, days = 365) {
  if (typeof document === "undefined") return; // SSR safety
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

// Опционально: функция для получения языка
export function getLang() {
  const cookieLang = getCookie("lang");
  if (cookieLang) return cookieLang;
  if (typeof navigator !== "undefined") {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("ca")) return "ca";
    if (browserLang.startsWith("es")) return "es";
  }
  return "en";
}
