<template>
  <teleport to="body">
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
    >
      <div
        class="relative bg-[#1D1D1D] p-8 rounded-3xl shadow-2xl w-90 max-w-[80vw] border border-[#242424]"
      >
        <button
          @click="$emit('close')"
          class="absolute top-4 right-4 text-gray-400 hover:text-white transition hover:cursor-pointer"
          aria-label="Close"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
        <div class="flex items-center gap-4 mb-6">
          <div>
            <div class="text-gray-300 text-sm">Let's</div>
            <div class="text-white font-bold text-2xl tracking-wide">
              C<span class="text-primary">{{ displayedText }}</span>
            </div>
          </div>
        </div>
        <div class="space-y-4 mb-6">
          <div class="flex items-start gap-3">
            <img
              :src="Address"
              alt="Address"
              class="w-6 h-6 rounded-full border border-[#9D9E9E]"
            />
            <p class="text-gray-200 text-sm leading-snug">
              {{ t("about.address.line1") }}<br />
              {{ t("about.address.line2") }}<br />
              {{ t("about.address.line3") }}
            </p>
          </div>
          <div class="flex items-center gap-3">
            <img
              :src="Email"
              alt="Email"
              class="w-6 h-6 rounded-full border border-[#9D9E9E]"
            />
            <p class="text-gray-200 text-sm">{{ t("about.email") }}</p>
          </div>
          <div class="flex items-center gap-3">
            <img
              :src="Phone"
              alt="Phone"
              class="w-6 h-6 rounded-full border border-[#9D9E9E]"
            />
            <p class="text-gray-200 text-sm">{{ t("about.phone") }}</p>
          </div>
        </div>
        <div class="border-t border-[#9D9E9E] my-4"></div>
        <div class="flex flex-col items-center">
          <div class="text-white font-semibold mb-2">Contact me</div>
          <div class="flex items-center space-x-2 text-2xl">
            <a
              href="https://www.linkedin.com/in/peerapatpadt/"
              target="_blank"
              rel="noopener"
              class="text-gray-400 hover:text-[#0A66C2] transition"
              aria-label="LinkedIn"
            >
              <i class="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/Peerapatth"
              target="_blank"
              rel="noopener"
              class="text-gray-400 hover:text-white transition"
              aria-label="GitHub"
            >
              <i class="bx bxl-github"></i>
            </a>
        
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watchEffect } from "vue";

const textDisplay = "ontact!";
const displayedText = ref("");
import Address from "@/assets/images/Address.png";
import Email from "@/assets/images/Email.png";
import Phone from "@/assets/images/Call.png";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

onMounted(() => {
  let index = 0;
  const interval = setInterval(() => {
    displayedText.value = textDisplay.slice(0, index + 1);
    index++;
    if (index > textDisplay.length) {
      index = 0;
      displayedText.value = "";
    }
  }, 300);

  document.body.style.overflow = "hidden";

  onUnmounted(() => {
    clearInterval(interval);
    document.body.style.overflow = "";
  });
});
</script>

<style scoped></style>
