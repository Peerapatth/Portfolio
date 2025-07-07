<template>
  <section id="projects" class="pt-8 bg-[#0C0C0C]">
    <div class="w-full p-8 md:p-8 text-white">
      <div class="container mx-auto">
        <div class="mt-8">
          <h1
            class="text-xl font-bold tracking-wide mb-4 text-white w-full text-center"
          >
            {{ t("projects.title") }}
          </h1>
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-start mt-12"
          >
            <div class="flex flex-col gap-4 h-full">
              <div class="flex flex-row gap-4 items-center justify-between" data-aos="fade-up">
                <div class="flex flex-row gap-4 items-center">
                  <img
                    src="@/assets/images/hod/MeijiLogo.png"
                    alt="Meiji Logo"
                    class="w-20 h-auto object-cover rounded-lg"
                  />
                  <div class="flex flex-col mt-2">
                    <span class="text-xs text-[#9D9E9E]">
                      {{ t("projects.meiji.time") }}
                    </span>
                  </div>
                </div>
                <div class="flex flex-row gap-4 justify-center items-center">
                  <a
                    :href="t('projects.meiji.link')"
                    target="_blank"
                    class="flex flex-row gap-2 mt-2 justify-center items-center text-sm text-[#9D9E9E] hover:text-white transition"
                  >
                    <i class="bx bxl-facebook text-2xl"></i>
                    <div>Facebook</div>
                  </a>
                </div>
              </div>
              <div data-aos="fade-up">
                <h2 class="text-base text-white">
                  {{ t("projects.meiji.name") }}
                  <span class="text-sm text-[#9D9E9E]">
                    {{ t("projects.meiji.description") }}
                  </span>
                </h2>
              </div>
              <div class="w-full h-full flex items-center justify-center" data-aos="fade-up">
                <img
                  src="@/assets/images/hod/Meiji.webp"
                  alt="Meiji Screenshot"
                  class="w-full md:w-4/5 h-auto object-cover rounded-lg mt-4 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div class="flex flex-col gap-4 h-full">
              <div class="flex flex-row gap-4 items-center justify-between" data-aos="fade-up">
                <div class="flex flex-row gap-4 items-center">
                  <HouseOfDev class="w-36 h-auto object-cover" />
                  <div class="flex flex-col mt-2">
                    <span class="text-xs text-[#9D9E9E]">
                      {{ t("projects.HOD-Landing.time") }}
                    </span>
                  </div>
                </div>
                <div class="flex flex-row gap-4 justify-center items-center">
                  <a
                    :href="t('projects.HOD-Landing.link')"
                    target="_blank"
                    class="flex flex-row gap-2 mt-2 justify-center items-center text-sm text-[#9D9E9E] hover:text-white transition"
                  >
                    <i class="bx bx-link text-2xl"></i>
                    <div>website</div>
                  </a>
                </div>
              </div>
              <div data-aos="fade-up">
                <h2 class="text-base text-white">
                  {{ t("projects.HOD-Landing.name") }}
                  <span class="text-sm text-[#9D9E9E]">
                    {{ t("projects.HOD-Landing.description") }}
                  </span>
                </h2>
              </div>
              <div class="w-full h-full flex items-center justify-center" data-aos="fade-up">
                <img
                  src="@/assets/images/hod/HodLanding.webp"
                  alt="HOD Landing Screenshot"
                  class="w-full h-auto object-cover rounded-lg mt-4 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div class="flex flex-col gap-4 h-full">
              <div class="flex flex-row gap-4 items-center justify-between" data-aos="fade-up">
                <div class="flex flex-row gap-4 items-center" >
                  <img
                    src="@/assets/images/hod/Pocumi.png"
                    alt="Pocumi Logo"
                    class="w-20 h-auto object-cover r"
                  />
                  <div class="flex flex-col mt-2">
                    <span class="text-xs text-[#9D9E9E]">
                      {{ t("projects.pocumi.time") }}
                    </span>
                  </div>
                </div>
                <div class="flex flex-row gap-4 justify-center items-center" >
                  <a
                    :href="t('projects.pocumi.link')"
                    target="_blank"
                    class="flex flex-row gap-2 mt-2 justify-center items-center text-sm text-[#9D9E9E] hover:text-white transition"
                  >
                    <i class="bx bx-link text-2xl"></i>
                    <div>Website</div>
                  </a>
                </div>
              </div>
              <div  data-aos="fade-up">
                <h2 class="text-base text-white">
                  {{ t("projects.pocumi.name") }}
                  <span class="text-sm text-[#9D9E9E]">
                    {{ t("projects.pocumi.description") }}
                  </span>
                </h2>
              </div>
              <div class="w-full h-full flex items-center justify-center"  data-aos="fade-up">
                <img
                  src="@/assets/images/hod/PocumiLanding.webp"
                  alt="Pocumi Screenshot"
                  class="w-full md:w-3/5 h-auto object-cover rounded-xl mt-4 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div class="flex flex-col gap-4 h-full">
              <div class="flex flex-row gap-4 items-center justify-between" data-aos="fade-up">
                <div class="flex flex-row gap-4 items-center">
                  <img
                    src="@/assets/images/hod/VerscanLogo.png"
                    alt="Verscan Logo"
                    class="w-26 h-auto object-cover"
                  />
                  <div class="flex flex-col mt-2">
                    <span class="text-xs text-[#9D9E9E]">
                      {{ t("projects.verscan.time") }}
                    </span>
                  </div>
                </div>
                <div class="flex flex-row gap-4 justify-center items-center">
                  <a
                    :href="t('projects.verscan.link')"
                    target="_blank"
                    class="flex flex-row gap-2 mt-2 justify-center items-center text-sm text-[#9D9E9E] hover:text-white transition"
                  >
                    <i class="bx bx-link text-2xl"></i>
                    <div>Website</div>
                  </a>
                </div>
              </div>
              <div data-aos="fade-up">
                <h2 class="text-base text-white">
                  {{ t("projects.verscan.name") }}
                  <span class="text-sm text-[#9D9E9E]">
                    {{ t("projects.verscan.description") }}
                  </span>
                </h2>
              </div>
              <div class="w-full h-full flex items-center justify-center" data-aos="fade-up">
                <img
                  src="@/assets/images/hod/Verscan.webp"
                  alt="Verscan Screenshot"
                  class="w-full md:w-3/5 h-auto object-cover rounded-lg mt-4 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div class="flex flex-col gap-4 h-full">
              <div class="flex flex-row gap-4 items-center justify-between" data-aos="fade-up">
                <div class="flex flex-row gap-4 items-center">
                  <img
                    src="@/assets/images/hod/CrystalLyte.png"
                    alt="Crystallyte Logo"
                    class="w-32 h-auto object-cover rounded-lg"
                  />
                  <div class="flex flex-col mt-2">
                    <span class="text-xs text-[#9D9E9E]">
                      {{ t("projects.crystallyte.time") }}
                    </span>
                  </div>
                </div>
                <div class="flex flex-row gap-4 justify-center items-center">
                  <a
                    :href="t('projects.crystallyte.link')"
                    target="_blank"
                    class="flex flex-row gap-2 mt-2 justify-center items-center text-sm text-[#9D9E9E] hover:text-white transition"
                  >
                    <i class="bx bx-link text-2xl"></i>
                    <div>Website</div>
                  </a>
                </div>
              </div>
              <div data-aos="fade-up">
                <h2 class="text-base text-white">
                  {{ t("projects.crystallyte.name") }}
                  <span class="text-sm text-[#9D9E9E]">
                    {{ t("projects.crystallyte.description") }}
                  </span>
                </h2>
              </div>
              <div class="w-full h-full flex items-center justify-center" data-aos="fade-up">
                <img
                  src="@/assets/images/hod/CL.webp"
                  alt="Crystallyte"
                  class="w-full md:w-4/5 h-auto object-cover rounded-lg mt-4 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div class="flex flex-col gap-4 h-full">
              <div class="flex flex-row gap-4 items-center justify-between" data-aos="fade-up">
                <div class="flex flex-row gap-4 items-center">
                  <img
                    src="@/assets/images/hod/GON.webp"
                    alt="Greenery of North Logo"
                    class="w-32 h-auto object-cover -mb-2"
                  />
                  <div class="flex flex-col mt-2">
                    <span class="text-xs text-[#9D9E9E]">
                      {{ t("projects.greeneryofnorth.time") }}
                    </span>
                  </div>
                </div>
                <div class="flex flex-row gap-4 justify-center items-center">
                  <a
                    :href="t('projects.greeneryofnorth.link')"
                    target="_blank"
                    class="flex flex-row gap-2 mt-2 justify-center items-center text-sm text-[#9D9E9E] hover:text-white transition"
                  >
                    <i class="bx bx-link text-2xl"></i>
                    <div>Website</div>
                  </a>
                </div>
              </div>
              <div data-aos="fade-up">
                <h2 class="text-base text-white">
                  {{ t("projects.greeneryofnorth.name") }}
                  <span class="text-sm text-[#9D9E9E]">
                    {{ t("projects.greeneryofnorth.description") }}
                  </span>
                </h2>
              </div>
              <div class="w-full h-full flex items-center justify-center" data-aos="fade-up">
                <img
                  src="@/assets/images/hod/greeneryofnorth.webp"
                  alt="Greenery of North Screenshot"
                  class="w-full md:w-4/5 h-auto object-cover rounded-lg mt-4 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div class="flex flex-col gap-4 h-full">
              <div class="flex flex-row gap-4 items-center justify-between" data-aos="fade-up">
                <div class="flex flex-row gap-4 items-center">
                  <img
                    src="@/assets/images/inu/INU2.png"
                    alt="Inu Logo"
                    class="w-14 h-auto object-cover"
                  />
                  <div class="flex flex-col mt-2">
                    <span class="text-xs text-[#9D9E9E]">
                      {{ t("projects.inu.time") }}
                    </span>
                  </div>
                </div>
                <div class="flex flex-row gap-4 justify-center items-center">
                  <a
                    :href="t('projects.inu.link')"
                    target="_blank"
                    class="flex flex-row gap-2 mt-2 justify-center items-center text-sm text-[#9D9E9E] hover:text-white transition"
                  >
                    <i class="bx bxl-github text-2xl"></i>
                    <div>GitHub</div>
                  </a>
                </div>
              </div>
              <div data-aos="fade-up">
                <h2 class="text-base text-white">
                  {{ t("projects.inu.name") }}
                  <span class="text-sm text-[#9D9E9E]">
                    {{ t("projects.inu.description") }}
                  </span>
                </h2>
              </div>
              <div class="w-full h-full flex items-center justify-center" data-aos="fade-up">
                <img
                  src="@/assets/images/inu/Banner.webp"
                  alt="Inu Screenshot"
                  class="w-full h-auto object-cover rounded-lg mt-4 -ml-8 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div class="flex flex-col gap-4 h-full">
              <div class="flex flex-row gap-4 items-center justify-between" data-aos="fade-up">
                <div class="flex flex-row gap-4 items-center">
                  <img
                    src="@/assets/images/tradekub/ProjectTradekub.png"
                    alt="Tradekub Logo"
                    class="w-32 h-auto object-cover rounded-lg"
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
              <div data-aos="fade-up">
                <h2 class="text-base text-white">
                  {{ t("projects.tradekub.name") }}
                  <span class="text-sm text-[#9D9E9E]">
                    {{ t("projects.tradekub.description") }}
                  </span>
                </h2>
              </div>
              <div class="w-full h-full flex items-center justify-center" data-aos="fade-up">
                <img
                  src="@/assets/images/tradekub/Banner.webp"
                  alt="Tradekub Screenshot"
                  class="w-full h-auto object-cover rounded-lg mt-4 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div class="flex flex-col gap-4 h-full">
              <div class="flex flex-row gap-4 items-center justify-between" data-aos="fade-up">
                <div class="flex flex-row gap-4 items-center">
                  <img
                    src="@/assets/images/modx/Logo.png"
                    alt="ModX Logo"
                    class="w-20 h-auto object-cover rounded-lg"
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
              <div data-aos="fade-up">
                <h2 class="text-base text-white">
                  {{ t("projects.modx.name") }}
                  <span class="text-sm text-[#9D9E9E]">
                    {{ t("projects.modx.description") }}
                  </span>
                </h2>
              </div>
              <div class="w-full h-full flex items-center justify-center" data-aos="fade-up">
                <img
                  src="@/assets/images/modx/Mock.webp"
                  alt="ModX Screenshot"
                  class="w-full md:w-[90%] h-auto object-cover rounded-lg mt-4 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div class="flex flex-col gap-4 h-full">
              <div class="flex flex-row gap-4 items-center justify-between" data-aos="fade-up">
                <div class="flex flex-row gap-4 items-center">
                  <img
                    src="@/assets/images/savorly/Icon.png"
                    alt="Savorly Logo"
                    class="w-20 h-auto object-cover rounded-lg"
                  />
                  <div class="flex flex-col mt-2">
                    <span class="text-xs text-[#9D9E9E]">
                      {{ t("projects.savorly.time") }}
                    </span>
                  </div>
                </div>
                <div class="flex flex-row gap-4 justify-center items-center">
                  <a
                    :href="t('projects.savorly.link')"
                    target="_blank"
                    class="flex flex-row gap-2 mt-2 justify-center items-center text-sm text-[#9D9E9E] hover:text-white transition"
                  >
                    <i class="bx bxl-behance text-2xl"></i>
                    <div>Behance</div>
                  </a>
                </div>
              </div>
              <div data-aos="fade-up">
                <h2 class="text-base text-white">
                  {{ t("projects.savorly.name") }}
                  <span class="text-sm text-[#9D9E9E]">
                    {{ t("projects.savorly.description") }}
                  </span>
                </h2>
              </div>
              <div class="flex flex-row gap-4 justify-center items-center" data-aos="fade-up">
                <img
                  src="@/assets/images/savorly/Savorly.webp"
                  alt="Savorly Screenshot"
                  class="w-4/5 md:w-3/4 h-auto object-cover rounded-lg mt-6 hover:scale-105 transition-transform duration-300"
                />
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
import HouseOfDev from "@/assets/elements/HouseOfDev.vue";
const { t } = useI18n();
</script>

<style lang="css" scoped></style>
