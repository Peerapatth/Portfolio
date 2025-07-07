import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./locales/i18n.js";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
createApp(App).use(i18n).use(router).mount("#app");