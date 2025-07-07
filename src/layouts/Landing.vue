<template>
  <div class="w-full h-full relative">
    <div class="p-4 md:p-6 absolute inset-0">
      <div class="glass-prism absolute inset-0 z-0"></div>
      <NavBar
        :show-lang-options="openLangOptions"
        @open-lang-options="openLangOptions = true"
        @close-lang-options="openLangOptions = false"
      />
    </div>
    <div
      v-if="showGlassBlur"
      class="fixed left-0 top-0 w-full h-20 z-40 pointer-events-none transition-all duration-300"
      style="backdrop-filter: blur(8px); background: rgba(20,20,20,0.15);"
    ></div>
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import NavBar from "@/components/NavBar.vue";

const openLangOptions = ref(false);
const showGlassBlur = ref(false);

function handleScroll() {
  showGlassBlur.value = window.scrollY > 50;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="css" scoped>
.glass-prism {
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(12px) saturate(180%);
  border-radius: 16px;
  pointer-events: none;
}
</style>