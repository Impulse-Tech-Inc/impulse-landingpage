<template>
  <section class="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 bg-[#0a0418]">
    <!-- Video Background (slot) -->
    <slot name="videol"></slot>

    <!-- Overlay for dark effect on video -->
    <div class="absolute inset-0 z-10 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
    </div>

    <!-- Content -->
    <div
      class="relative z-20 max-w-[1000px] w-full px-8 text-center transition-all duration-500"
      :style="{ opacity: contentOpacity, transform: `translateY(${contentY}px)` }"
    >
      <!-- Title -->
      <h1
        class="text-[clamp(2.5rem,7vw,6rem)] font-bold text-white tracking-tight leading-[1.05] mb-8 mt-16"
        :class="{ 'animate-fade-up': mounted }"
      >
        {{ $t('titleLanding') }}<br />
        <span class="text-white">
          {{ $t('titleLanding2') }}
        </span>
      </h1>

      <!-- Subtitle -->
      <p
        class="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-12 font-medium leading-relaxed"
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
            class="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder:text-white/60 shadow-sm backdrop-blur-md"
          />
        </div>
        <button
          class="w-full sm:w-auto px-8 py-4 bg-white text-gray-950 text-sm font-extrabold rounded-xl hover:opacity-90 transition-all whitespace-nowrap shadow-xl"
          @click="handleRequestAccess"
        >
          {{ $t('heroRequestAccess') }}
        </button>
      </div>

      <!-- Compatible with -->
      <div class="mt-16 pt-8 border-t border-white/10">
        <p class="text-[10px] font-black uppercase tracking-[0.3em] text-white/80 mb-6">
          {{ $t('heroCompatible') }}
        </p>
        <div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          <span
            v-for="vendor in vendors"
            :key="vendor"
            class="text-sm font-black tracking-tighter text-white hover:text-white transition-colors cursor-default"
          >
            {{ vendor }}
          </span>
        </div>
      </div>
    </div>

    <!-- Scroll Hint (comentado por ahora)
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20">
      <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
        {{ $t('heroScroll') }}
      </span>
      <div class="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
    </div>
    -->
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

useI18n()

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
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
