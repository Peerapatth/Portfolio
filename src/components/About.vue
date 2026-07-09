<template>
  <section id="about" class="pt-16 bg-[#0C0C0C]">
    <div class="w-full p-8 text-white">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div class="space-y-8 mt-8">
            <div
              class="rounded-2xl border border-[#1F1F1F] bg-[#111111] p-6 md:p-7"
              data-aos="fade-up"
            >
              <h1 class="text-xl font-bold tracking-wide text-white mb-5">
                {{ t("about.profileTitle") }}
              </h1>
              <div class="flex items-center gap-2 text-xs font-mono text-[#CDFF04] mb-4">
                <span>$</span>
                <span>whoami</span>
              </div>
              <h2 class="text-2xl md:text-3xl font-bold tracking-wide text-white">
                {{ t("about.firstname") }} {{ t("about.lastname") }}
              </h2>
              <p class="text-sm md:text-base text-[#CDFF04] font-medium mt-2">
                {{ t("about.role") }} {{ t("about.roleSub") }}
              </p>
              <p class="text-sm text-[#B7B7B7] leading-relaxed mt-5">
                {{ t("about.about") }}
              </p>
              <div class="mt-6 pt-5 border-t border-[#222222] space-y-2 text-sm">
                <p class="text-[#D5D5D5]">
                  <span class="font-mono text-[#9D9E9E]">email:</span>
                  {{ t("about.email") }}
                </p>
                <p class="text-[#D5D5D5]">
                  <span class="font-mono text-[#9D9E9E]">phone:</span>
                  {{ t("about.phone") }}
                </p>
                <p class="text-[#D5D5D5] leading-relaxed">
                  <span class="font-mono text-[#9D9E9E]">address:</span>
                  {{ t("about.address.line1") }}
                  {{ t("about.address.line2") }}
                  {{ t("about.address.line3") }}
                </p>
              </div>
            </div>

            <div
              class="rounded-2xl border border-[#1F1F1F] bg-[#111111] p-6 md:p-7"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <h1 class="text-xl font-bold tracking-wide mb-5 text-white">
                {{ t("about.educationTitle") }}
              </h1>
              <div class="space-y-4">
                <div class="rounded-xl border border-[#232323] bg-[#0D0D0D] p-4">
                  <p class="text-white font-semibold">{{ t("about.education.kmutt.name") }}</p>
                  <p class="text-sm text-[#B0B0B0]">{{ t("about.education.kmutt.major") }}</p>
                  <p class="text-sm text-[#9D9E9E]">{{ t("about.education.kmutt.degree") }}</p>
                  <p class="text-xs text-[#8A8A8A] mt-1">{{ t("about.education.kmutt.year") }}</p>
                </div>
                <div class="rounded-xl border border-[#232323] bg-[#0D0D0D] p-4">
                  <p class="text-white font-semibold">{{ t("about.education.srw.name") }}</p>
                  <p class="text-sm text-[#B0B0B0]">{{ t("about.education.srw.major") }}</p>
                  <p class="text-sm text-[#9D9E9E]">{{ t("about.education.srw.degree") }}</p>
                  <p class="text-xs text-[#8A8A8A] mt-1">{{ t("about.education.srw.year") }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-8 mt-8">
            <div
              class="rounded-2xl border border-[#1F1F1F] bg-[#111111] p-6 md:p-7"
              data-aos="fade-up"
              data-aos-delay="40"
            >
              <h1 class="text-xl font-bold tracking-wide mb-5 text-white">
                {{ t("about.experienceTitle") }}
              </h1>
              <div class="space-y-4">
                <article
                  v-for="(exp, idx) in experience"
                  :key="idx"
                  class="rounded-xl border border-[#232323] bg-[#0D0D0D] p-4"
                  data-aos="fade-up"
                  :data-aos-delay="70 + idx * 30"
                >
                  <div class="flex flex-wrap items-center justify-between gap-2">
                    <p class="font-semibold text-white">{{ exp.company }}</p>
                    <span class="text-xs font-mono text-[#CDFF04]">{{ exp.type }}</span>
                  </div>
                  <p class="text-sm text-[#DDDDDD] mt-1">{{ exp.position }}</p>
                  <p class="text-xs text-[#A0A0A0] mt-1">
                    {{ exp.employmentType }} · {{ exp.location }}
                  </p>
                  <p v-if="exp.internship" class="text-xs text-[#9D9E9E] mt-2">
                    {{ exp.internship }}
                  </p>
                  <p class="text-sm text-[#B4B4B4] mt-3 leading-relaxed">
                    {{ exp.description }}
                  </p>
                  <a
                    v-if="exp.link"
                    :href="exp.link"
                    target="_blank"
                    class="inline-flex mt-3 text-xs text-[#9D9E9E] hover:text-white transition underline"
                  >
                    View Reference
                  </a>
                </article>
              </div>
            </div>

            <div
              class="rounded-2xl border border-[#1F1F1F] bg-[#111111] p-6 md:p-7"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <h1 class="text-xl font-bold tracking-wide mb-4 text-white">
                {{ t("about.languagesTitle") }}
              </h1>
              <div class="space-y-2 text-sm">
                <p class="text-[#D8D8D8]">
                  <span class="text-white">{{ t("about.languages.en") }}</span>
                  <span class="text-[#9D9E9E]"> / {{ t("about.languages.en-level") }}</span>
                </p>
                <p class="text-[#D8D8D8]">
                  <span class="text-white">{{ t("about.languages.th") }}</span>
                  <span class="text-[#9D9E9E]"> / {{ t("about.languages.th-level") }}</span>
                </p>
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
const { t, tm } = useI18n();

const experience = computed(() => {
  return tm("about.experience") || [];
});
</script>
