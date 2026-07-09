<template>
  <section id="skills" class="pt-16 bg-[#0C0C0C]">
    <div class="w-full p-8 text-white">
      <div class="container mx-auto">
        <div class="mt-8 space-y-6">
          <h1 class="text-xl font-bold tracking-wide text-white" data-aos="fade-up">
            {{ t("about.skillsTitle") }}
          </h1>
          <div
            class="rounded-2xl border border-[#1F1F1F] bg-[#111111] p-6 md:p-7"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            <div class="flex items-center gap-2 text-xs font-mono text-[#CDFF04] mb-5">
              <span>$</span>
              <span>cat ./skills.json</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <article
                v-for="(group, idx) in skillGroups"
                :key="group.key"
                class="rounded-xl border border-[#242424] bg-[#0D0D0D] p-4"
                data-aos="fade-up"
                :data-aos-delay="100 + idx * 30"
              >
                <h2 class="text-base text-white font-semibold mb-3">
                  {{ group.title }}
                </h2>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="item in group.items"
                    :key="item"
                    class="text-xs md:text-sm px-2.5 py-1 rounded-md border border-[#2D2D2D] bg-[#141414] text-[#CECECE] font-mono"
                  >
                    {{ item }}
                  </span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { t, tm } = useI18n();

const skillGroups = computed(() => {
  const groups = tm("about.skills") || {};
  return ["frontend", "backend", "languages", "concepts"].map(key => ({
    key,
    title: groups[key]?.title || key,
    items: groups[key]?.items || [],
  }));
});
</script>

<style lang="css" scoped></style>
