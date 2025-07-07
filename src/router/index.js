import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/index.vue";
import AOS from "aos";
import "aos/dist/aos.css";

const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach(() => {
  AOS.refresh();
});

export default router;