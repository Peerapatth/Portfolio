import { createI18n } from "vue-i18n";
import en from "./en.json";
import th from "./th.json";

const savedLang = localStorage.getItem("lang") || "en";
const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: "en",
  messages: {
    en,
    th,
  },
});

export default i18n;
