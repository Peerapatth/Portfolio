<template>
  <section id="about" class="pt-16 bg-[#0C0C0C]">
    <div class="w-full p-8 text-white">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2  md:gap-24 items-start">
          <div>
            <div class="mt-16" data-aos="fade-up">
              <h1 
                class="text-xl font-bold tracking-wide mb-4 text-white"
                data-aos="fade-up" 
                data-aos-delay="50"
              >
                {{ t("about.profileTitle") }}
              </h1>
              <p 
                class="text-sm text-[#9D9E9E]"
                data-aos="fade-up" 
                data-aos-delay="100"
              >
                {{ t("about.profile-1") }} <br />
                <br />
                {{ t("about.profile-2") }}
              </p>
            </div>

            <div class="mt-16" data-aos="fade-up" data-aos-delay="120">
              <h1 
                class="text-xl font-bold tracking-wide mb-4 text-white"
                data-aos="fade-up" 
                data-aos-delay="140"
              >
                {{ t("about.educationTitle") }}
              </h1>
              <div class="flex flex-col gap-6">
                <div 
                  class="flex gap-4 items-center"
                  data-aos="fade-up" 
                  data-aos-delay="160"
                >
                  <div
                    class="w-16 h-auto aspect-square flex items-center justify-center"
                  >
                    <img
                      :src="KMUTT"
                      alt="KMUTT"
                      class="w-16 h-auto aspect-square object-contain"
                    />
                  </div>
                  <div>
                    <h2 class="font-semibold text-base text-white">
                      {{ t("about.education.kmutt.name") }}
                    </h2>
                    <p class="text-sm text-[#9D9E9E]">
                      {{ t("about.education.kmutt.major") }}
                    </p>
                    <p class="text-sm text-[#9D9E9E]">
                      {{ t("about.education.kmutt.degree") }}
                    </p>
                    <p class="text-sm text-[#9D9E9E]">
                      {{ t("about.education.kmutt.year") }}
                    </p>
                  </div>
                </div>
                <div 
                  class="flex items-center gap-4"
                  data-aos="fade-up" 
                  data-aos-delay="180"
                >
                  <div
                    class="w-16 h-auto aspect-square flex items-center justify-center"
                  >
                    <div class="bg-white h-2 w-2 rounded-full"></div>
                  </div>
                  <div>
                    <h2 class="font-semibold text-base text-white">
                      {{ t("about.education.srw.name") }}
                    </h2>
                    <p class="text-sm text-[#9D9E9E]">
                      {{ t("about.education.srw.major") }}
                    </p>
                    <p class="text-sm text-[#9D9E9E]">
                      {{ t("about.education.srw.degree") }}
                    </p>
                    <p class="text-sm text-[#9D9E9E]">
                      {{ t("about.education.srw.year") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="mt-16" data-aos="fade-up" data-aos-delay="60">
              <h1 
                class="text-xl font-bold tracking-wide mb-4 text-white"
                data-aos="fade-up" 
                data-aos-delay="80"
              >
                {{ t("about.experienceTitle") }}
              </h1>
              <div
                v-for="(exp, idx) in experience"
                :key="idx"
                class="mb-6 rounded-lg"
                data-aos="fade-up" 
                :data-aos-delay="100 + (idx * 30)"
              >
                <div class="flex flex-col w-full">
                  <div class="flex flex-col lg:flex-row gap-4 items-end mt-4">
                    <div class="flex flex-col w-full">
                      <HouseOfDev class="w-48 h-auto" />
                      <h2 class="font-semibold text-lg text-white mt-4">
                        {{ exp.position }}
                      </h2>
                      <p class="text-base text-white">{{ exp.company }}</p>
                      <p class="text-sm text-[#9D9E9E]">{{ exp.location }}</p>
                    </div>
                    <div class="flex flex-col w-full lg:text-end">
                      <div class="text-sm text-[#9D9E9E]">
                        <div>{{ exp.type }}</div>
                        <div v-if="exp.internship">{{ exp.internship }}</div>
                      </div>
                      <p class="text-sm text-[#9D9E9E] lg:mt-4">
                        {{ exp.duration }}
                      </p>
                      <a
                        v-if="exp.link"
                        :href="exp.link"
                        target="_blank"
                        class="text-sm text-[#9D9E9E] hover:text-white transition underline hover:cursor-pointer"
                      >
                        Certificate
                      </a>
                    </div>
                  </div>
                </div>
                <p class="mt-3 text-sm text-[#9D9E9E]">{{ exp.description }}</p>
              </div>
            </div>
            <div class="mt-8" data-aos="fade-up" data-aos-delay="140">
              <h1 
                class="text-xl font-bold tracking-wide mb-4 text-white"
                data-aos="fade-up" 
                data-aos-delay="160"
              >
                {{ t("about.languagesTitle") }}
              </h1>
              <div class="flex flex-col gap-2">
                <div 
                  class="flex items-center gap-2"
                  data-aos="fade-up" 
                  data-aos-delay="180"
                >
                  <span class="text-white">{{ t("about.languages.en") }}</span>
                  <span class="text-sm text-[#9D9E9E]">
                    / {{ t("about.languages.en-level") }}
                  </span>
                </div>
                <div 
                  class="flex items-center gap-2"
                  data-aos="fade-up" 
                  data-aos-delay="190"
                >
                  <span class="text-white">{{ t("about.languages.th") }}</span>
                  <span class="text-sm text-[#9D9E9E]">
                    / {{ t("about.languages.th-level") }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
const { t, locale, messages } = useI18n();
const experience = computed(() => {
  return messages.value[locale.value]?.about?.experience || [];
});

import HouseOfDev from "@/assets/elements/HouseOfDev.vue";
import KMUTT from "@/assets/images/KMUTT.png";
</script>