<template>
  <nav
    class="sticky text-base top-6 w-full bg-[#0C0C0C] text-[#9D9E9E] flex items-center justify-between py-4 z-50 shadow px-4 rounded-full"
  >
    <div class="flex items-center relative z-50">
      <button @click="scrollToTop" class="hover:cursor-pointer">
        <Peerapat class="w-24 h-auto ml-2 md:ml-6" />
      </button>
    </div>

    <ul class="hidden md:flex flex-1 justify-center gap-8">
      <li>
        <a
          class="hover:text-white transition"
          :class="{ 'text-white font-semibold ': activeSection === 'about' }"
          href="#about"
          @click="setActive('about')"
          >About</a
        >
      </li>
      <li>
        <a
          class="hover:text-white transition"
          :class="{ 'text-white font-semibold ': activeSection === 'skills' }"
          href="#skills"
          @click="setActive('skills')"
          >Skills</a
        >
      </li>
      <li>
        <a
          class="hover:text-white transition"
          :class="{ 'text-white font-semibold ': activeSection === 'projects' }"
          href="#projects"
          @click="setActive('projects')"
          >Projects</a
        >
      </li>
      <li>
        <a
          class="hover:text-white transition"
          :class="{ 'text-white font-semibold ': activeSection === 'certificate' }"
          href="#certificate"
          @click="setActive('certificate')"
          >Certificate</a
        >
      </li>
    </ul>

    <div class="flex items-center gap-4">
      <button
        class="flex flex-col gap-1 md:hidden relative z-50 mr-2 text-white"
        @click="toggleMenu"
        aria-label="Toggle navigation"
      >
        <Menu v-if="!menuOpen" class="w-6 h-6" />
        <Close v-else class="w-4 h-4 p-[2px]" />
      </button>
      <ul class="hidden md:flex items-center gap-4">
        <li class="relative">
          <button
            class="py-1 rounded-lg transition hover:cursor-pointer"
            @click="toggleLangOptions"
          >
            <img
              src="@/assets/elements/Locales.png"
              alt="Language"
              class="w-4 h-4 inline-block mr-1 filter invert"
            />
            {{ locale === "en" ? "English" : "Thai" }}
          </button>
          <div
            v-if="showLangOptions"
            class="absolute right-0 mt-1 w-16 bg-[#0C0C0C] border border-[#9D9E9E] rounded-lg shadow-lg z-50"
            @mouseleave="closeLangOptions"
          >
            <button
              class="block w-full text-left px-4 py-2 hover:font-semibold text-white hover:cursor-pointer"
              @click="selectLang('en')"
            >
              EN
            </button>
            <button
              class="block w-full text-left px-4 py-2 hover:font-semibold text-white hover:cursor-pointer"
              @click="selectLang('th')"
            >
              TH
            </button>
          </div>
        </li>
        <li>
          <a
            class="font-semibold text-black px-8 py-3 bg-[#CDFF04] rounded-full hover:cursor-pointer"
            @click="setActive('contact')"
            >Contact</a
          >
        </li>
      </ul>
    </div>

    <ul
      class="flex flex-col gap-4 md:hidden absolute left-0 right-0 top-4 pt-12 p-6 rounded-2xl bg-[#0C0C0C] transition-all duration-200 z-40 flex-end w-full justify-end drop-shadow-box"
      :class="menuOpen ? 'flex w-full entry-animation' : 'hidden'"
    >
      <li>
        <a
          class="hover:text-white transition"
          :class="{ 'text-white font-semibold ': activeSection === 'about' }"
          href="#about"
          @click="setActive('about')"
          >About</a
        >
      </li>
      <li>
        <a
          class="hover:text-white transition"
          :class="{ 'text-white font-semibold ': activeSection === 'skills' }"
          href="#skills"
          @click="setActive('skills')"
          >Skills</a
        >
      </li>
      <li>
        <a
          class="hover:text-white transition"
          :class="{ 'text-white font-semibold ': activeSection === 'projects' }"
          href="#projects"
          @click="setActive('projects')"
          >Projects</a
        >
      </li>
      <li>
        <a
          class="hover:text-white transition"
          :class="{ 'text-white font-semibold ': activeSection === 'certificate' }"
          href="#certificate"
          @click="setActive('certificate')"
          >Certificate</a
        >
      </li>
      <li class="py-3">
        <a
          class="font-semibold text-black px-8 py-3 bg-[#CDFF04] rounded-full hover:cursor-pointer"
          @click="setActive('contact')"
          >Contact</a
        >
      </li>
      <li class="relative">
        <button
          class="py-1 rounded-lg transition hover:cursor-pointer"
          @click="toggleLangOptions"
        >
          <img
            src="@/assets/elements/Locales.png"
            alt="Language"
            class="w-4 h-4 inline-block mr-1 filter invert"
          />
          {{ locale === "en" ? "English" : "Thai" }}
        </button>
        <div
          v-if="showLangOptions"
          class="absolute md:right-0 mt-1 w-16 bg-[#0C0C0C] border border-[#9D9E9E] rounded-lg shadow-lg z-50"
          @mouseleave="closeLangOptions"
        >
          <button
            class="block w-full text-left px-4 py-2 hover:font-semibold text-white hover:cursor-pointer"
            @click="selectLang('en')"
          >
            EN
          </button>
          <button
            class="block w-full text-left px-4 py-2 hover:font-semibold text-white hover:cursor-pointer"
            @click="selectLang('th')"
          >
            TH
          </button>
        </div>
      </li>
    </ul>
    <slot />
  </nav>
  <Contact v-if="showContactModal" @close="showContactModal = false" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";
import { useI18n } from "vue-i18n";
import Peerapat from "@/assets/Peerapat.vue";
import Menu from "@/assets/elements/Menu.vue";
import Close from "@/assets/elements/Close.vue";
import Contact from "@/components/modals/Contact.vue";
import AOS from "aos";
import "aos/dist/aos.css";

const showContactModal = ref(false);

const props = defineProps({
  showLangOptions: Boolean,
});
const emits = defineEmits(["open-lang-options", "close-lang-options"]);

const menuOpen = ref(false);
const { locale } = useI18n();
const activeSection = ref("hero");

const sectionIds = ["hero", "about", "skills", "projects"];
const sectionOffsets = ref({});

function updateSectionOffsets() {
  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      sectionOffsets.value[id] = el.offsetTop;
      AOS.init();
    }
  });
}

function onScroll() {
  const scrollPosition = window.scrollY + 100;
  let current = "about";
  for (let i = 0; i < sectionIds.length; i++) {
    const id = sectionIds[i];
    const nextId = sectionIds[i + 1];
    const currentOffset = sectionOffsets.value[id] || 0;
    const nextOffset = sectionOffsets.value[nextId] || Infinity;
    if (scrollPosition >= currentOffset && scrollPosition < nextOffset) {
      current = id;
      break;
    }
  }
  activeSection.value = current;

  if (current === "hero") {
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  } else if (window.location.hash !== `#${current}`) {
    history.replaceState(null, "", `#${current}`);
  }

  menuOpen.value = false;
  emits("close-lang-options");
}

onMounted(async () => {
  await nextTick();
  updateSectionOffsets();

  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", updateSectionOffsets);

  const images = document.querySelectorAll("img");
  images.forEach(img => {
    img.addEventListener("load", updateSectionOffsets);
  });

  window.addEventListener("load", updateSectionOffsets);
});

watch(locale, async () => {
  await nextTick();
  updateSectionOffsets();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", updateSectionOffsets);
  window.removeEventListener("load", updateSectionOffsets);
});

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
  if (!menuOpen.value) {
    emits("close-lang-options");
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setActive("hero");
  const element = document.getElementById("hero");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname);
  }
}

function setActive(section) {
  activeSection.value = section;
  menuOpen.value = false;
  if (section === "contact") {
    showContactModal.value = true;
    return;
  }
  const element = document.getElementById(section);
  if (element) {

    const yOffset = -100;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    if (section === "hero") {
      history.replaceState(null, "", window.location.pathname);
    } else {
      history.replaceState(null, "", `#${section}`);
    }
  }
}

function toggleLangOptions() {
  if (props.showLangOptions) {
    emits("close-lang-options");
  } else {
    emits("open-lang-options");
  }
}
function closeLangOptions() {
  emits("close-lang-options");
}
function selectLang(lang) {
  locale.value = lang;
  localStorage.setItem("lang", lang);
  emits("close-lang-options");
}
</script>

<style lang="css" scoped>
.entry-animation {
  animation: entryAnimation 0.2s ease-in-out forwards;
}

@keyframes entryAnimation {
  0% {
    transform: translateY(-5px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.drop-shadow-box {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>
