<template>
  <div class="w-full h-full flex flex-col">
    <Hero id="hero"/>
    <About id="about"/>
    <Projects id="projects"/>
  </div>
</template>

<script setup>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
