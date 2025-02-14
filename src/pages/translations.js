import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Локализованные ресурсы
const resources = {
  ru: {
    translation: {
      cartWarning: "Корзина неавторизованных пользователей хранится 7 дней. Пожалуйста, {{login}}",
      login: "авторизуйтесь",
      search: "Поиск...",
      // ... другие ключи
    }
  },
  uz: {
    translation: {
      cartWarning: "Ro'yxatdan o'tmagan foydalanuvchilar savati 7 kun saqlanadi. Iltimos, {{login}}",
      login: "tizimga kiring",
      search: "Qidirish...",
      // ... другие ключи
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ru",
    debug: false,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;