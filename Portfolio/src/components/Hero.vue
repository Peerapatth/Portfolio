<template>
  <div
    id="hero"
    class="w-full h-[100dvh] flex items-center justify-center bg-[#0C0C0C] text-white"
  >
    <div>
      <h3
        class="font-bold text-xl md:text-2xl leading-tight tracking-tight text-white"
      >
        {{ t("about.firstname") }}
      </h3>
      <h3
        class="font-bold text-xl md:text-2xl leading-tight tracking-tight text-white mb-2"
      >
        {{ t("about.lastname") }}
      </h3>
      <p class="mt-2 text-lg text-white font-semibold">
        {{ t("about.role") }}
        <span class="text-white font-normal">{{ t("about.roleSub") }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style lang="css" scoped></style>
