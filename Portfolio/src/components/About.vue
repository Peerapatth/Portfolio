<template>
  <section id="about" class="w-full bg-[#0C0C0C] text-white">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div>
          <div class="mt-8">
            <h1 class="text-xl font-bold tracking-wide mb-2 text-white">
              {{ t("about.profileTitle") }}
            </h1>
            <p class="text-sm text-[#9D9E9E]">
              {{ t("about.profile") }}
            </p>
          </div>

          <div class="mt-8">
            <h1 class="text-xl font-bold tracking-wide mb-4 text-white">
              {{ t("about.educationTitle") }}
            </h1>
            <div class="flex flex-col gap-6">
              <div class="flex gap-4 items-center">
                <img :src="KMUTT" alt="KMUTT" class="w-12 h-auto" />
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
              <div class="flex items-center gap-4">
                <div class="w-12 h-auto flex items-center justify-center">
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
        <div class="mt-8">
          <h1 class="text-xl font-bold tracking-wide mb-4 text-white">
            {{ t("about.experienceTitle") }}
          </h1>
          <div
            v-for="(exp, idx) in experience"
            :key="idx"
            class="mb-6 rounded-lg"
          >
            <div class="flex flex-col w-full">
              <HouseOfDev class="w-48 h-auto" />

              <div class="flex flex-row gap-4 items-center mt-4">
                <div class="text-sm text-[#9D9E9E]">
                  <div>{{ exp.type }}</div>
                  <div v-if="exp.internship">{{ exp.internship }}</div>
                </div>

                <div class="border-l border-[#9D9E9E] h-10"></div>
                <div class="flex flex-col">
                  <p class="text-sm text-[#9D9E9E]">{{ exp.duration }}</p>
                  <p class="text-sm text-[#9D9E9E]">{{ exp.location }}</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <h2 class="font-semibold text-lg text-white mt-4">
                {{ exp.position }}
              </h2>
              <p class="text-base text-white">{{ exp.company }}</p>
            </div>
            <p class="mt-3 text-sm text-[#CFCFCF]">{{ exp.description }}</p>
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
import ReactIcon from "@/assets/elements/skills/programming/React.png";
import JS from "@/assets/elements/skills/programming/JS.png";
import TS from "@/assets/elements/skills/programming/TS.png";
import HTML from "@/assets/elements/skills/programming/HTML.png";
import CSS from "@/assets/elements/skills/programming/CSS.png";
import Go from "@/assets/elements/skills/programming/Go.png";
import C from "@/assets/elements/skills/programming/C.png";
import Python from "@/assets/elements/skills/programming/Python.png";
import Tailwind from "@/assets/elements/skills/programming/Tailwind.png";
import VueIcon from "@/assets/elements/skills/programming/Vue.png";

import Figma from "@/assets/elements/skills/tools/Figma.png";
import AdobeXD from "@/assets/elements/skills/tools/XD.png";
import Photoshop from "@/assets/elements/skills/tools/PS.png";
import VSCode from "@/assets/elements/skills/tools/VS.png";
import Git from "@/assets/elements/skills/tools/Git.png";

const programmingIcons = [
  { src: ReactIcon, alt: "React" },
  { src: JS, alt: "JavaScript" },
  { src: TS, alt: "TypeScript" },
  { src: HTML, alt: "HTML" },
  { src: CSS, alt: "CSS" },
  { src: Go, alt: "Go" },
  { src: C, alt: "C" },
  { src: Python, alt: "Python" },
  { src: Tailwind, alt: "Tailwind" },
  { src: VueIcon, alt: "Vue" },
];

const toolIcons = [
  { src: Figma, alt: "Figma" },
  { src: AdobeXD, alt: "Adobe XD" },
  { src: Photoshop, alt: "Photoshop" },
  { src: VSCode, alt: "VS Code" },
  { src: Git, alt: "Git" },
];
</script>
