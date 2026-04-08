<template>
  <div class="relative bg-[#0a0a12] min-h-screen overflow-hidden">
    <!-- Premium Background -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <!-- Uniform base color -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#1a1a2e_0%,#0a0a12_70%)]" />

      <!-- Neural Core (top) -->
      <div class="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px]">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,57,233,0.06)_0%,transparent_70%)]" />
        <div class="absolute inset-[5%] border border-white/[0.02] rounded-full about-ring-1" />
        <div class="absolute inset-[20%] border border-white/[0.03] rounded-full border-dashed about-ring-2" />
        <div class="absolute inset-[35%] border border-[#7F39E9]/[0.04] rounded-full about-ring-3" />

        <!-- Orbital Nodes -->
        <div v-for="n in 6" :key="'about-node-'+n" class="absolute inset-0 about-orbit" :style="{ animationDuration: `${20 + n * 5}s` }">
          <div
            class="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#7F39E9] rounded-full about-node-pulse"
            :style="{ transform: `translateY(${15 + n * 5}%)`, animationDelay: `${n * 0.5}s`, boxShadow: '0 0 15px #7F39E9' }"
          />
        </div>
      </div>

      <!-- Signal Beams -->
      <div
        v-for="n in 3"
        :key="'about-beam-'+n"
        class="absolute h-px bg-gradient-to-r from-transparent via-[#7F39E9]/25 to-transparent blur-[1px] about-beam"
        :style="{ left: `${15 + (n - 1) * 30}%`, width: '40%', animationDuration: `${4 + n}s`, animationDelay: `${n * 1.5}s` }"
      />

      <!-- Grid Floor -->
      <div class="absolute bottom-0 left-0 right-0 h-1/3 opacity-[0.02]" style="background-image: linear-gradient(to right, #7F39E9 1px, transparent 1px), linear-gradient(to bottom, #7F39E9 1px, transparent 1px); background-size: 120px 120px; transform: perspective(1000px) rotateX(75deg) scale(2.5); mask-image: linear-gradient(to top, black, transparent); -webkit-mask-image: linear-gradient(to top, black, transparent)" />
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-screen-2xl mx-auto">
      <div>
        <OurExecutiveTeam />
      </div>
      <div>
        <ImpulseSolution />
      </div>
      <div>
        <MissionVision />
      </div>
    </div>
  </div>
</template>

<script>
import OurExecutiveTeam from "@/components/aboutus/OurExecutiveTeam.vue"
import ImpulseSolution from "@/components/aboutus/ImpulseSolution.vue"
import MissionVision from "@/components/aboutus/MissionVision.vue"
import { useI18n } from 'vue-i18n'

export default {
  components: {
    OurExecutiveTeam,
    ImpulseSolution,
    MissionVision
  },
  setup() {
    const { t } = useI18n()
    return { t }
  },
}
</script>

<style scoped>
.observe-section {
  will-change: opacity, transform;
}
.about-ring-1 { animation: aboutSpin 80s linear infinite; }
.about-ring-2 { animation: aboutSpin 60s linear infinite reverse; }
.about-ring-3 { animation: aboutSpin 40s linear infinite; }
@keyframes aboutSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.about-orbit { animation: aboutSpin linear infinite; }
.about-node-pulse { animation: aboutNodePulse 3s ease-in-out infinite; }
@keyframes aboutNodePulse { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.5); } }
.about-beam { animation: aboutBeam ease-in-out infinite; }
@keyframes aboutBeam { 0% { top: -10%; opacity: 0; } 30% { opacity: 0.3; } 70% { opacity: 0.3; } 100% { top: 110%; opacity: 0; } }
</style>
