<template>
  <section id="about" class="pt-16 bg-[#0C0C0C]">
    <div class="w-full p-8 text-white">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-24 items-start">
          <div>
            <div class="mt-8">
              <h1 class="text-xl font-bold tracking-wide mb-4 text-white">
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
                <div class="flex items-center gap-4">
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
                  </div>
                </div>
              </div>
              <p class="mt-3 text-sm text-[#CFCFCF]">{{ exp.description }}</p>
            </div>
          </div>
        </div>
        <div class="mt-8">
          <h1 class="text-xl font-bold tracking-wide mb-4 text-white">
            {{ t("about.skillsTitle") }}
          </h1>
          <div class="flex flex-col md:flex-row gap-8">
 
            <div class="flex-1 w-full">
              <h2 class="text-lg font-semibold mb-2 text-white">
                {{ t("about.skills.frontend") }}
              </h2>
              <div class="flex flex-wrap gap-4">
                <div
                  v-for="icon in frontend"
                  :key="icon.alt"
                  class="flex flex-col items-center"
                >
                  <img
                    :src="icon.src"
                    :alt="icon.alt"
                    class="w-10 h-10 object-contain mb-1  "
                  />
                  <span class="text-xs text-[#CFCFCF]">{{ icon.alt }}</span>
                </div>
              </div>
            </div>
            <div class="flex-1">
              <h2 class="text-lg font-semibold mb-2 text-white">
                {{ t("about.skills.backend") }}
              </h2>
              <div class="flex flex-wrap gap-4">
                <div
                  v-for="icon in backend"
                  :key="icon.alt"
                  class="flex flex-col items-center"
                >
                  <img
                    :src="icon.src"
                    :alt="icon.alt"
                    class="w-10 h-10 object-contain mb-1"
                  />
                  <span class="text-xs text-[#CFCFCF]">{{ icon.alt }}</span>
                </div>
              </div>
            </div>
            <div class="flex-1">
              <h2 class="text-lg font-semibold mb-2 text-white">
                {{ t("about.skills.languages") }}
              </h2>
              <div class="flex flex-wrap gap-4">
                <div
                  v-for="icon in languages"
                  :key="icon.alt"
                  class="flex flex-col items-center"
                >
                  <img
                    :src="icon.src"
                    :alt="icon.alt"
                    class="w-10 h-10 object-contain mb-1"
                  />
                  <span class="text-xs text-[#CFCFCF]">{{ icon.alt }}</span>
                </div>
              </div>
            </div>
            <div class="flex-1">
              <h2 class="text-lg font-semibold mb-2 text-white">
                {{ t("about.skills.tools") }}
              </h2>
              <div class="flex flex-wrap gap-4">
                <div
                  v-for="icon in tools"
                  :key="icon.alt"
                  class="flex flex-col items-center"
                >
                  <img
                    :src="icon.src"
                    :alt="icon.alt"
                    class="w-10 h-10 object-contain mb-1"
                  />
                  <span class="text-xs text-[#CFCFCF]">{{ icon.alt }}</span>
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

// Frontend icons
import VueIcon from "@/assets/elements/skills/programming/Vue.png";
import ReactIcon from "@/assets/elements/skills/programming/React.png";
import NuxtJs from "@/assets/elements/skills/programming/NuxtJs.png";
import NextJs from "@/assets/elements/skills/programming/NextJs.png";

// Backend icons
import Firebase from "@/assets/elements/skills/programming/Firebase.png";
import NodeJs from "@/assets/elements/skills/programming/NodeJs.png";
import MongoDB from "@/assets/elements/skills/database/Mongo.png";
import MySQL from "@/assets/elements/skills/programming/MySQL.png";

// Tools
import Figma from "@/assets/elements/skills/tools/Figma.png";
import VSCode from "@/assets/elements/skills/tools/VS.png";
import Git from "@/assets/elements/skills/tools/Git.png";
import Bitbucket from "@/assets/elements/skills/tools/Bitbucket.png";

// Programming languages
import JS from "@/assets/elements/skills/programming/JS.png";
import TS from "@/assets/elements/skills/programming/TS.png";
import HTML from "@/assets/elements/skills/programming/HTML.png";
import CSS from "@/assets/elements/skills/programming/CSS.png";
import Go from "@/assets/elements/skills/programming/Go.png";
import C from "@/assets/elements/skills/programming/C.png";
import Python from "@/assets/elements/skills/programming/Python.png";
import Tailwind from "@/assets/elements/skills/programming/Tailwind.png";

const frontend = [
  { src: VueIcon, alt: "Vue" },
  { src: ReactIcon, alt: "React" },
  { src: NuxtJs, alt: "Nuxt.js" },
  { src: NextJs, alt: "Next.js" },
];

const backend = [
  { src: Firebase, alt: "Firebase" },
  { src: NodeJs, alt: "Node.js" },
  { src: MongoDB, alt: "MongoDB" },
  { src: MySQL, alt: "MySQL" },
];

const tools = [
  { src: Figma, alt: "Figma" },
  { src: VSCode, alt: "VS Code" },
  { src: Git, alt: "Git" },
  { src: Bitbucket, alt: "Bitbucket" },
];

const languages = [
  { src: JS, alt: "JavaScript" },
  { src: TS, alt: "TypeScript" },
  { src: HTML, alt: "HTML" },
  { src: CSS, alt: "CSS" },
  { src: Go, alt: "Go" },
  { src: C, alt: "C" },
  { src: Python, alt: "Python" },
  { src: Tailwind, alt: "Tailwind" },
];
</script>
