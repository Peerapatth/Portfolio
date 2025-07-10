<template>
  <div
    id="hero"
    class="w-full h-[100dvh] flex flex-col items-center justify-center bg-[#0C0C0C] text-white relative overflow-hidden"
    @mousemove="handleMouseMove"
    @mouseleave="resetGrid"
  >
    <div class="highlight-center"></div>

    <canvas
      ref="gridCanvas"
      class="absolute inset-0 w-full h-full pointer-events-none z-0"
    ></canvas>

    <div class="container mx-auto p-8 z-10">
      <div class="flex justify-center mb-6" data-aos="fade-up">
        <div class="relative">
          <div
            class="w-40 h-40 rounded-full bg-gradient-to-br from-[#CDFF04]/20 to-[#CDFF04]/10 flex items-center justify-center animate-pulse-glow"
          >
            <img
              :src="Me"
              alt="Peerapat Padt"
              class="w-36 h-36 rounded-full object-cover border-4 border-[#CDFF04]/20 shadow-2xl transition-transform duration-300 hover:scale-105 animate-mouth-interaction"
            />
          </div>
        </div>
      </div>

      <div class="text-center max-w-3xl mx-auto">
        <div class="" data-aos="fade-up" data-aos-delay="200">
          <span class="text-white text-xl font-medium animate-text-glow"
            >Hello! I'm Peerapat</span
          >
        </div>
        <h2
          class="text-base text-gray-300 mb-3"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Software Developer
        </h2>
        <div
          class="flex gap-3 justify-center mb-8"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div class="relative group">
            <a
              href="https://www.linkedin.com/in/peerapatpadt/"
              target="_blank"
              class="text-[#9D9E9E] hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <i class="bx bxl-linkedin text-xl"></i>
            </a>
            <div
              class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#181818] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
            >
              LinkedIn
            </div>
          </div>

          <div class="relative group">
            <a
              href="https://github.com/Peerapatth"
              target="_blank"
              class="text-[#9D9E9E] hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <i class="bx bxl-github text-xl"></i>
            </a>
            <div
              class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#181818] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
            >
              GitHub
            </div>
          </div>

          <div class="relative group">
            <a
              href="https://www.figma.com/proto/zL8oeKqRLu2jqVApfUGLQP/Work?node-id=1045-147&t=K6UzsQai4racBCIC-0&scaling=min-zoom&content-scaling=fixed&page-id=560%3A2"
              target="_blank"
              class="text-[#9D9E9E] hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <i class="bx bx-code-alt text-xl"></i>
            </a>
            <div
              class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#181818] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
            >
              CV
            </div>
          </div>
        </div>
        <div
          class="text-[#9D9E9E] text-sm md:text-base max-w-lg mx-auto leading-relaxed min-h-[3rem] flex items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <span class="typing-text">
            {{ displayedText }}
            <span class="cursor" :class="{ 'cursor-blink': showCursor }"
              >|</span
            >
          </span>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle hidden lg:block ml-[10px]"
    >
      <div
        class="w-5 h-8 border-2 border-[#9D9E9E] rounded-full flex justify-center"
      >
        <div
          class="w-1 h-2 bg-[#9D9E9E] rounded-full mt-1 animate-scroll-dot"
        ></div>
      </div>
    </div>

  <!-- filepath: d:\Portfolio\src\components\Hero.vue -->
<div
  class="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none z-30"
>
  <div
    class="relative flex items-center justify-center"
    style="width: 75px; height: 75px;"
  >
    <div class="absolute inset-0 rounded-full border border-[#181818] bg-[#0C0C0C]"></div>
    <svg
      class="absolute inset-0"
      width="75"
      height="75"
      viewBox="0 0 75 75"
      :style="{ transform: `rotate(${scrollAngle}deg)` }"
    >
      <defs>
        <path
          id="circlePath"
          d="M 37.5,37.5 m -28,0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0"
        />
      </defs>
      <text
        fill="#9D9E9E"
        font-size="6"
        font-family="Inter, sans-serif"
        font-weight="600"
        letter-spacing="1"
      >
        <textPath
          xlink:href="#circlePath"
          startOffset="0"
          textLength="176"
        >
        &nbsp;  Scroll down • Scroll down •
        </textPath>
      </text>
    </svg>
    <span
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base text-[#9D9E9E] font-bold select-none"
      >↓</span
    >
  </div>
</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import Me from "@/assets/images/Me.webp";

const { t } = useI18n();

const scrollAngle = ref(0);

function handleScroll() {
  scrollAngle.value = window.scrollY % 360;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const fullText =
  '"Exploring the world of development and enjoying the journey of turning ideas into code."';
const displayedText = ref("");
const showCursor = ref(true);
const currentIndex = ref(0);

let typingInterval;
let cursorInterval;

const startTyping = () => {
  cursorInterval = setInterval(() => {
    showCursor.value = !showCursor.value;
  }, 500);

  setTimeout(() => {
    typingInterval = setInterval(() => {
      if (currentIndex.value < fullText.length) {
        displayedText.value += fullText[currentIndex.value];
        currentIndex.value++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
  }, 1500);
};

const gridCanvas = ref(null);
let animationFrame;
let gridAnimTime = 0;
let hoverX = null;
let hoverY = null;

const gridSize = 40;
let gridPoints = [];

function initGridPoints(width, height) {
  gridPoints = [];
  for (let x = -gridSize; x < width; x += gridSize) {
    for (let y = -gridSize; y < height; y += gridSize) {
      gridPoints.push({
        x,
        y,
        hoverStrength: 0,
      });
    }
  }
}

function drawGrid(ctx, width, height, animTime, hoverX, hoverY) {
  ctx.clearRect(0, 0, width, height);

  let vignette = ctx.createRadialGradient(
    width / 2,
    height / 2,
    Math.min(width, height) * 0.4,
    width / 2,
    height / 2,
    Math.max(width, height) * 0.5
  );

  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, width, height);

  ctx.save();

  for (const point of gridPoints) {
    let target = 0;
    if (
      hoverX !== null &&
      hoverY !== null &&
      Math.hypot(point.x - hoverX, point.y - hoverY) < 50
    ) {
      target = 1;
    }
    point.hoverStrength += (target - point.hoverStrength) * 0.15;

    ctx.beginPath();
    ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
    ctx.closePath();
    const alpha = 0.12 + 0.68 * point.hoverStrength;
    ctx.fillStyle = `rgba(205,255,4,${alpha})`;
    ctx.shadowColor = "#CDFF04";
    ctx.shadowBlur = 8 * point.hoverStrength;
    ctx.fill();
    ctx.shadowBlur = 0;
  }
  ctx.restore();
}

function animateGrid() {
  const canvas = gridCanvas.value;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = (canvas.width = canvas.offsetWidth);
  const height = (canvas.height = canvas.offsetHeight);

  if (
    gridPoints.length === 0 ||
    Math.abs(gridPoints[gridPoints.length - 1].x - width) > gridSize ||
    Math.abs(gridPoints[gridPoints.length - 1].y - height) > gridSize
  ) {
    initGridPoints(width, height);
  }

  gridAnimTime += 8;
  drawGrid(ctx, width, height, gridAnimTime, hoverX, hoverY);
  animationFrame = requestAnimationFrame(animateGrid);
}

function handleMouseMove(e) {
  const rect = gridCanvas.value.getBoundingClientRect();
  hoverX = e.clientX - rect.left;
  hoverY = e.clientY - rect.top;
}

function resetGrid() {
  hoverX = null;
  hoverY = null;
}

onMounted(() => {
  startTyping();
  animateGrid();
});

onUnmounted(() => {
  if (typingInterval) clearInterval(typingInterval);
  if (cursorInterval) clearInterval(cursorInterval);
  if (animationFrame) cancelAnimationFrame(animationFrame);
});
</script>

<style lang="css" scoped>
@keyframes bounceGentle {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-5px) translateX(-50%);
  }
  60% {
    transform: translateY(-3px) translateX(-50%);
  }
}

@keyframes scrollDot {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(12px);
    opacity: 0.3;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes pulseGlow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(205, 255, 4, 0.1);
  }
  50% {
    box-shadow: 0 0 30px rgba(205, 255, 4, 0.2);
  }
}

@keyframes mouthInteraction {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
    filter: brightness(1);
  }
  25% {
    transform: scale(1.02) rotate(-0.5deg);
    filter: brightness(1.1);
  }
  50% {
    transform: scale(1.03) rotate(0deg);
    filter: brightness(1.15);
  }
  75% {
    transform: scale(1.02) rotate(0.5deg);
    filter: brightness(1.1);
  }
}

@keyframes textGlow {
  0%,
  100% {
    text-shadow: 0 0 5px rgba(205, 255, 4, 0.3);
  }
  50% {
    text-shadow: 0 0 10px rgba(205, 255, 4, 0.6);
  }
}

@keyframes cursorBlink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

.animate-bounce-gentle {
  animation: bounceGentle 2s infinite;
}

.animate-scroll-dot {
  animation: scrollDot 2s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulseGlow 2s ease-in-out infinite;
}

.animate-mouth-interaction {
  animation: mouthInteraction 4s ease-in-out infinite;
}

.animate-text-glow {
  animation: textGlow 2s ease-in-out infinite;
}

.animate-social-float {
  animation: socialFloat 2s ease-in-out infinite;
}

.cursor {
  color: #9d9e9e;
  font-weight: normal;
  animation: cursorBlink 1s infinite;
}

.cursor-blink {
  animation: cursorBlink 1s infinite;
}

canvas {
  transition: opacity 0.5s;
  image-rendering: pixelated;
  display: block;
}

.highlight-center {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  background: radial-gradient(circle at 50% 50%, transparent 10%, #0c0c0c 100%);
}
</style>
