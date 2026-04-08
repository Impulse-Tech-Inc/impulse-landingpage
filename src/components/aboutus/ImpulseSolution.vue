<template>
  <section class="relative py-20 overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div v-reveal class="text-center space-y-6 mb-16">
        <div class="text-[10px] font-black uppercase tracking-[0.4em] text-[#a446f4]">{{ t('aboutUsLeadingLabel') }}</div>
        <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight max-w-3xl mx-auto">
          {{ t('aboutUsLeadingIndustryTitle') }}
        </h2>
        <p class="text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
          {{ t('aboutUsLeadingIndustryDescription') }}
        </p>
      </div>

      <!-- Stats / Highlights -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="(stat, i) in stats" :key="i"
          v-reveal
          :style="{ animationDelay: `${i * 0.1}s` }"
          class="p-6 md:p-8 bg-white/5 border border-white/10 rounded-[1.5rem] text-center space-y-3 hover:border-white/20 transition-all"
        >
          <div class="text-3xl md:text-4xl font-black text-white tracking-tighter">{{ stat.value }}</div>
          <div class="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import reveal from "@/directives/reveal"

const vReveal = reveal
const { t } = useI18n()

const stats = computed(() => [
  { value: '100+', label: t('statYears') },
  { value: '20+', label: t('statOperators') },
  { value: '4', label: t('statContinents') },
  { value: '35+', label: t('statVendorIntegrations') }
])
</script>

<style scoped>
.animate-fade-up {
  animation: fadeUp 0.8s ease-out both;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
