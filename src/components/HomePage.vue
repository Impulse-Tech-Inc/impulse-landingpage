<template>
  <section class="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 bg-[#030305]">
    <!-- Video Background (slot) -->
    <slot name="videol"></slot>

    <!-- Premium Atmospheric Background -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <!-- Deep Atmospheric Base -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1a1a2e_0%,#030305_100%)]" />

      <!-- Neural Core -->
      <div class="absolute top-[-15%] left-1/2 -translate-x-1/2 w-full max-w-[1600px] aspect-square">
        <!-- Primary Radiant Glow -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(127,57,233,0.08)_0%,transparent_70%)] hero-glow" />

        <!-- Rotating Rings -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="relative w-[90%] h-[90%]">
            <!-- Outer Ring -->
            <div class="absolute inset-0 border border-white/[0.03] rounded-full hero-ring-outer" />
            <!-- Middle Ring -->
            <div class="absolute inset-[15%] border border-white/[0.05] rounded-full border-dashed hero-ring-middle" />
            <!-- Inner Ring -->
            <div class="absolute inset-[30%] border-2 border-[#7F39E9]/20 rounded-full hero-ring-inner" style="box-shadow: 0 0 30px rgba(127,57,233,0.1)" />

            <!-- Orbital Data Nodes -->
            <div v-for="n in 6" :key="'node-'+n" class="absolute inset-0 hero-orbit" :style="{ animationDuration: `${20 + n * 5}s` }">
              <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#7F39E9] rounded-full hero-node-pulse"
                :style="{ transform: `translateY(${15 + n * 5}%)`, animationDelay: `${n * 0.5}s`, boxShadow: '0 0 15px #7F39E9' }"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Signal Beams -->
      <div
        v-for="n in 3"
        :key="'beam-'+n"
        class="absolute h-px bg-gradient-to-r from-transparent via-[#7F39E9]/30 to-transparent blur-[1px] z-10 hero-beam"
        :style="{
          left: `${20 + (n - 1) * 30}%`,
          width: '40%',
          animationDuration: `${3 + n}s`,
          animationDelay: `${n}s`
        }"
      />

      <!-- Grid Floor -->
      <div
        class="absolute bottom-0 left-0 right-0 h-1/2 opacity-[0.03]"
        style="background-image: linear-gradient(to right, #7F39E9 1px, transparent 1px), linear-gradient(to bottom, #7F39E9 1px, transparent 1px); background-size: 120px 120px; transform: perspective(1000px) rotateX(75deg) scale(2.5); mask-image: linear-gradient(to top, black, transparent); -webkit-mask-image: linear-gradient(to top, black, transparent)"
      />
    </div>

    <!-- Content -->
    <div
      class="relative z-20 max-w-[1000px] w-full px-8 text-center transition-all duration-500"
      :style="{ opacity: contentOpacity, transform: `translateY(${contentY}px)` }"
    >
      <!-- Title (word-by-word reveal) -->
      <h1 class="text-[clamp(2.5rem,7vw,6rem)] font-bold text-white tracking-tight leading-[1.05] mb-8 mt-16">
        <span
          v-for="(word, i) in titleWords"
          :key="i"
          class="inline-block mr-[0.25em] last:mr-0"
          :class="[mounted ? 'hero-word-reveal' : 'opacity-0', word.break ? 'basis-full h-0 !mr-0' : '']"
          :style="{ animationDelay: `${0.2 + i * 0.1}s` }"
        >{{ word.break ? '' : word.text }}</span>
      </h1>

      <!-- Subtitle -->
      <p
        class="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12 font-medium leading-relaxed"
        :class="{ 'animate-fade-up': mounted }"
      >
        {{ $t('subtitleLanding') }}
      </p>

      <!-- Email + Request Access -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        :class="{ 'animate-fade-up': mounted }"
      >
        <div class="relative w-full">
          <input
            v-model="email"
            type="email"
            :placeholder="$t('heroEmailPlaceholder')"
            class="w-full px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#7F39E9] transition-all text-white placeholder:text-white/30 shadow-2xl"
          />
        </div>
        <button
          class="relative group w-full sm:w-auto px-8 py-4 bg-white text-gray-950 text-sm font-extrabold rounded-xl hover:opacity-90 transition-all whitespace-nowrap"
          style="box-shadow: 0 0 20px rgba(255,255,255,0.1)"
          @click="handleRequestAccess"
        >
          {{ $t('heroRequestAccess') }}
        </button>
      </div>

      <!-- Compatible with -->
      <div class="mt-16 pt-8 border-t border-white/5">
        <p class="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-6">
          {{ $t('heroCompatible') }}
        </p>
        <div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          <span
            v-for="vendor in vendors"
            :key="vendor"
            class="text-sm font-black tracking-tighter text-white/70 hover:text-white transition-colors cursor-default"
          >
            {{ vendor }}
          </span>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const titleWords = computed(() => {
  const line1 = t('titleLanding').split(' ').map(w => ({ text: w }))
  const line2 = t('titleLanding2').split(' ').map(w => ({ text: w }))
  return [...line1, { break: true }, ...line2]
})

const email = ref('')
const mounted = ref(false)
const contentOpacity = ref(1)
const contentY = ref(0)

const vendors = ['Cisco', 'TP-Link', 'Calix', 'Huawei', 'ZTE', 'Nokia', 'Ubiquiti', 'Juniper', 'MikroTik', 'Adtran']

const handleScroll = () => {
  const scrollY = globalThis.window.scrollY
  contentOpacity.value = Math.max(0, 1 - scrollY / 600)
  contentY.value = -(scrollY * 0.08)
}

const handleRequestAccess = () => {
  if (email.value) {
    globalThis.window.open(
      `https://crm.impulse.ky/book/brian-molina/discovery-call-impulse-platform-overview?email=${encodeURIComponent(email.value)}`,
      '_blank'
    )
  } else {
    globalThis.window.open(
      'https://crm.impulse.ky/book/brian-molina/discovery-call-impulse-platform-overview',
      '_blank'
    )
  }
}

onMounted(() => {
  mounted.value = true
  globalThis.window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  globalThis.window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.animate-fade-up {
  animation: fadeUp 1s ease-out both;
}
.animate-fade-up:nth-child(1) { animation-delay: 0.2s; }
.animate-fade-up:nth-child(2) { animation-delay: 0.3s; }
.animate-fade-up:nth-child(3) { animation-delay: 0.4s; }
.animate-fade-up:nth-child(4) { animation-delay: 0.5s; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Word-by-word reveal */
.hero-word-reveal {
  animation: wordReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes wordReveal {
  from {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

/* Neural Core Animations */
.hero-glow {
  animation: heroGlow 10s ease-in-out infinite;
}
@keyframes heroGlow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
}

.hero-ring-outer {
  animation: heroRingOuter 80s linear infinite;
}
@keyframes heroRingOuter {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.hero-ring-middle {
  animation: heroRingMiddle 60s linear infinite;
}
@keyframes heroRingMiddle {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(-180deg) scale(0.95); }
  100% { transform: rotate(-360deg) scale(1); }
}

.hero-ring-inner {
  animation: heroRingInner 40s linear infinite;
}
@keyframes heroRingInner {
  0% { transform: rotate(0deg); opacity: 0.05; }
  50% { transform: rotate(180deg); opacity: 0.15; }
  100% { transform: rotate(360deg); opacity: 0.05; }
}

.hero-orbit {
  animation: heroOrbit linear infinite;
}
@keyframes heroOrbit {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.hero-node-pulse {
  animation: heroNodePulse 3s ease-in-out infinite;
}
@keyframes heroNodePulse {
  0%, 100% { transform: scale(1); opacity: 0.2; }
  50% { transform: scale(1.5); opacity: 0.5; }
}

/* Signal Beams */
.hero-beam {
  animation: heroBeam ease-in-out infinite;
}
@keyframes heroBeam {
  0% { top: -10%; opacity: 0; }
  30% { opacity: 0.4; }
  70% { opacity: 0.4; }
  100% { top: 110%; opacity: 0; }
}

/* Button Shimmer */
.hero-shimmer {
  animation: heroShimmer 3s linear infinite;
}
@keyframes heroShimmer {
  0% { transform: translateX(-100%) skewX(-12deg); }
  100% { transform: translateX(100%) skewX(-12deg); }
}
</style>
