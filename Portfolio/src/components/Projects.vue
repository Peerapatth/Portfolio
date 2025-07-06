<template>
  <section id="projects" class="pt-8 pb-48 bg-[#0C0C0C]">
    <div class="w-full p-8 md:p-8 text-white">
      <div class="container mx-auto">
        <div class="mt-8">
          <h1
            class="text-xl font-bold tracking-wide mb-4 text-white w-full text-center"
          >
            {{ t("projects.title") }}
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-start mt-16">
            <div class="flex flex-col gap-4">
              <div class="flex flex-row gap-4 items-center justify-between">
                <div class="flex flex-row gap-4 items-center">
                  <img
                    src="@/assets/elements/tradekub/ProjectTradekub.png"
                    alt="Tradekub Logo"
                    class="w-32 h-auto object-cover rounded-lg shadow-lg"
                  />
                  <div class="flex flex-col mt-2">
                    <span class="text-xs text-[#9D9E9E]">
                      {{ t("projects.tradekub.time") }}
                    </span>
                  </div>
                </div>
                <div class="flex flex-row gap-4 justify-center items-center">
                  <a
                    :href="t('projects.tradekub.link')"
                    target="_blank"
                    class="flex flex-row gap-2 mt-2 justify-center items-center text-sm text-[#9D9E9E] hover:text-white transition"
                  >
                    <i class="bx bxl-github text-2xl"></i>
                    <div>GitHub</div>
                  </a>
                </div>
              </div>
              <div>
                <h2 class="text-base text-white">
                  {{ t("projects.tradekub.name") }}
                  <span class="text-sm text-[#9D9E9E]">
                    {{ t("projects.tradekub.description") }}
                  </span>
                </h2>
              </div>
              <img
                src="@/assets/elements/tradekub/Banner.webp"
                alt="Tradekub Screenshot"
                class="w-full h-auto object-cover rounded-lg shadow-lg mt-4 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex flex-row gap-4 items-center justify-between">
                <div class="flex flex-row gap-4 items-center">
                  <img
                    src="@/assets/elements/modx/Logo.png"
                    alt="ModX Logo"
                    class="w-20 h-auto object-cover rounded-lg shadow-lg"
                  />
                  <div class="flex flex-col mt-2">
                    <span class="text-xs text-[#9D9E9E]">
                      {{ t("projects.modx.time") }}
                    </span>
                  </div>
                </div>
                <div class="flex flex-row gap-4 justify-center items-center">
                  <a
                    :href="t('projects.modx.link')"
                    target="_blank"
                    class="flex flex-row gap-2 mt-2 justify-center items-center text-sm text-[#9D9E9E] hover:text-white transition"
                  >
                    <i class="bx bxl-github text-2xl"></i>
                    <div>GitHub</div>
                  </a>
                </div>
              </div>
              <div>
                <h2 class="text-base text-white">
                  {{ t("projects.modx.name") }}
                  <span class="text-sm text-[#9D9E9E]">
                    {{ t("projects.modx.description") }}
                  </span>
                </h2>
              </div>
              <div class="w-full flex items-center justify-center">
              <img
                src="@/assets/elements/modx/Mock.webp"
                alt="ModX Screenshot"
                class="w-[90%] h-auto object-cover rounded-lg shadow-lg mt-4 hover:scale-105 transition-transform duration-300"
              />
            </div> </div>
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

<style lang="css" scoped></style>
