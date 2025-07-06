<template>
  <div
    class="w-full h-[100dvh] flex items-center justify-center bg-[#0C0C0C] text-white"
  >     <div>
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
              <span class="text-white font-normal">{{
                t("about.roleSub")
              }}</span>
            </p>
          </div>
    <div class="mt-6 space-y-3">
      <div class="flex items-start gap-3">
        <img
          :src="Address"
          alt="Address"
          class="w-5 h-5 rounded-full border border-white"
        />
        <p class="text-sm">
          {{ t("about.address.line1") }}<br />
          {{ t("about.address.line2") }}<br />
          {{ t("about.address.line3") }}
        </p>
      </div>
      <div class="flex items-center gap-3">
        <img
          :src="Email"
          alt="Email"
          class="w-5 h-5 rounded-full border border-white"
        />
        <p class="text-sm">{{ t("about.email") }}</p>
      </div>
      <div class="flex items-center gap-3">
        <img
          :src="Phone"
          alt="Phone"
          class="w-5 h-5 rounded-full border border-white"
        />
        <p class="text-sm">{{ t("about.phone") }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import Address from "@/assets/images/Address.png";
import Email from "@/assets/images/Email.png";
import Phone from "@/assets/images/Call.png";
</script>

<style lang="css" scoped></style>
