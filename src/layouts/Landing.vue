<template>
  <div class="w-full h-full relative">
    <div class="p-4 md:p-6 absolute inset-0">
      <NavBar
        :show-lang-options="openLangOptions"
        @open-lang-options="openLangOptions = true"
        @close-lang-options="openLangOptions = false"
      />
    </div>

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

<style lang="css" scoped></style>