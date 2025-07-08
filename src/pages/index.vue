<template>
  <div class="w-full h-full flex flex-col relative bg-[#0C0C0C] text-white">
    <Hero ref="heroSection" />
    <About />
    <Skills />
    <Projects />

      <Certificate />

    <Footer />
    <button
      v-if="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-4 right-4 bg-[#0C0C0C] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-opacity duration-300 z-50 border border-[#181818] hover:cursor-pointer"
      aria-label="Back to top"
    >
      <i class="bx bx-chevrons-up text-xl"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
import Certificate from "@/components/Certificate.vue";
import Footer from "@/components/Footer.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const showBackToTop = ref(false);
const heroSection = ref(null);

const handleScroll = () => {
  if (heroSection.value) {
    const heroBottom = heroSection.value.$el.getBoundingClientRect().bottom;
    showBackToTop.value = heroBottom < 0;
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang=" css" scoped></style>
