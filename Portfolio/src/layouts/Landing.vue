<template>
  <div class="w-full h-full relative">
    <div class="p-4 md:p-6 absolute inset-0">
      <NavBar
        :show-lang-options="openLangOptions"
        @open-lang-options="openLangOptions = true"
        @close-lang-options="openLangOptions = false"
      >
      </NavBar>
    </div>
    <slot />
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavBar from "@/components/NavBar.vue";

const openLangOptions = ref(false);
</script>

<style lang="css" scoped></style>
