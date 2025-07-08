<template>
  <section id="skills" class="pt-16 bg-[#0C0C0C]">
    <div class="w-full p-8 text-white">
      <div class="container mx-auto">
        <div class="mt-8">
          <h1 class="text-xl font-bold tracking-wide mb-4 text-white">
            {{ t("about.skillsTitle") }}
          </h1>
          <div class="flex flex-col md:flex-row justify-between gap-8 mt-8">
            <div class="flex flex-col">
              <h2 class="text-base mb-2 text-white">
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
                    class="w-10 h-10 object-contain mb-1"
                  />
                  <span class="text-xs text-[#CFCFCF]">{{ icon.alt }}</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <h2 class="text-base mb-2 text-white">
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
            <div class="flex flex-col">
              <h2 class="text-base mb-2 text-white">
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
            <div class="flex-flex-col">
              <h2 class="text-base mb-2 text-white">
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
const { t } = useI18n();
// Frontend icons
import VueIcon from "@/assets/elements/Skills/programming/Vue.png";
import ReactIcon from "@/assets/elements/Skills/programming/React.png";
import NuxtJs from "@/assets/elements/Skills/programming/NuxtJs.png";
import NextJs from "@/assets/elements/Skills/programming/NextJs.png";

// Backend icons
import Firebase from "@/assets/elements/Skills/programming/Firebase.png";
import NodeJs from "@/assets/elements/Skills/programming/NodeJs.png";
import MongoDB from "@/assets/elements/Skills/database/Mongo.png";
import MySQL from "@/assets/elements/Skills/programming/MySQL.png";

// Tools
import Figma from "@/assets/elements/Skills/tools/Figma.png";
import VSCode from "@/assets/elements/Skills/tools/VS.png";
import Git from "@/assets/elements/Skills/tools/Git.png";
import Bitbucket from "@/assets/elements/Skills/tools/Bitbucket.png";

// Programming languages
import JS from "@/assets/elements/Skills/programming/JS.png";
import TS from "@/assets/elements/Skills/programming/TS.png";
import HTML from "@/assets/elements/Skills/programming/HTML.png";
import CSS from "@/assets/elements/Skills/programming/CSS.png";
import Go from "@/assets/elements/Skills/programming/Go.png";
import C from "@/assets/elements/Skills/programming/C.png";
import Python from "@/assets/elements/Skills/programming/Python.png";
import Tailwind from "@/assets/elements/Skills/programming/Tailwind.png";

const frontend = [
  { src: VueIcon, alt: "Vue" },
  { src: ReactIcon, alt: "React" },
  { src: NuxtJs, alt: "Nuxt.js" },
  { src: NextJs, alt: "Next.js" },
];

const backend = [
  { src: Firebase, alt: "Firebase" },
  { src: NodeJs, alt: "Node.js" },
  // { src: MongoDB, alt: "MongoDB" },
  // { src: MySQL, alt: "MySQL" },
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
  // { src: Go, alt: "Go" },
  { src: C, alt: "C" },
  { src: Python, alt: "Python" },
  { src: Tailwind, alt: "Tailwind" },
];
</script>

<style lang="scss" scoped></style>
