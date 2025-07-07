<template>
  <section id="certificate" class="pt-8 bg-[#0C0C0C]">
    <div class="w-full p-8 text-white">
      <div class="container mx-auto">
        <div data-aos="fade-up">
          <div class="mb-8">
            <h1
              class="text-xl font-bold tracking-wide mb-4 text-white w-full text-center"
            >
              {{ t("certificates.title") }}
            </h1>
          </div>
        </div>
        <div data-aos="fade-up">
          <div class="flex flex-col gap-8">
            <div
              class="bg-[#0C0C0C] rounded-xl p-6 shadow-lg flex-1 border border-[#181818]"
            >
              <p class="text-xs text-[#9D9E9E] mb-2">
                {{ t("certificates.c1.time") }}
              </p>
              <a
                :href="t('certificates.c1.link')"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:underline"
              >
                <h2 class="text-base font-semibold mb-1">
                  {{ t("certificates.c1.title") }}
                </h2>
              </a>
              <p class="text-sm text-[#9D9E9E]">
                {{ t("certificates.c1.desc") }}
              </p>
            </div>
            <div
              class="bg-[#0C0C0C] rounded-xl p-6 shadow-lg flex-1 border border-[#181818]"
            >
              <p class="text-xs text-[#9D9E9E] mb-2">
                {{ t("certificates.c2.time") }}
              </p>
              <a
                :href="t('certificates.c2.link')"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:underline"
              >
                <h2 class="text-base font-semibold mb-1">
                  {{ t("certificates.c2.title") }}
                </h2>
              </a>
              <p class="text-sm text-[#9D9E9E]">
                {{ t("certificates.c2.desc") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
