<template>
  <section class="min-h-screen bg-[#0a0a12] pt-24 pb-32 px-6 md:px-8 overflow-hidden">
    <div class="max-w-[1400px] mx-auto">
      <!-- Back Button -->
      <button
        class="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/30 hover:text-white transition-all mb-8"
        @click="$emit('back')"
      >
        <div class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover:bg-[#7F39E9] group-hover:text-white group-hover:border-[#7F39E9]">
          <Icon icon="heroicons-outline:arrow-left" class="text-base" />
        </div>
        {{ $t('pillarBack') }}
      </button>

      <component
        :is="currentSection"
        @back="$emit('back')"
        @navigate="(p) => $emit('navigate', p)"
      />
    </div>
  </section>
</template>

<script>
import Icon from "@/components/Icon"
import PillarNetworkSection from "@/components/pillar/PillarNetworkSection.vue"
import PillarCrmSection from "@/components/pillar/PillarCrmSection.vue"
import PillarSupportSection from "@/components/pillar/PillarSupportSection.vue"
import PillarBillingSection from "@/components/pillar/PillarBillingSection.vue"
import PillarAdvisorySection from "@/components/pillar/PillarAdvisorySection.vue"

const SECTION_BY_PILLAR = {
  network: "PillarNetworkSection",
  crm: "PillarCrmSection",
  support: "PillarSupportSection",
  billing: "PillarBillingSection",
  advisory: "PillarAdvisorySection",
}

export default {
  components: {
    Icon,
    PillarNetworkSection,
    PillarCrmSection,
    PillarSupportSection,
    PillarBillingSection,
    PillarAdvisorySection,
  },
  props: {
    pillarId: { type: String, required: true },
  },
  emits: ["back", "navigate"],
  computed: {
    currentSection() {
      return SECTION_BY_PILLAR[this.pillarId] || "PillarNetworkSection"
    },
  },
}
</script>
