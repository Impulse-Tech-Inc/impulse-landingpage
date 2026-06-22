<template>
      <div class="space-y-24">

        <!-- SECTION 1: HERO -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="flex items-center gap-4">
              <div class="w-12 h-px" style="background: linear-gradient(90deg, #a446f4, #4138f3)" />
              <span class="text-[12px] font-black uppercase tracking-[0.5em] text-[#7F39E9]">{{ $t('pillarAdvisoryLabel') }}</span>
            </div>
            <h1 class="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight md:leading-[0.85] tracking-tighter">Impulse<br />Advisory.</h1>
            <h2 class="text-2xl md:text-3xl font-bold text-white/70 tracking-tight leading-tight max-w-md">{{ $t('pillarAdvisoryHeroSubtitle') }}</h2>
            <p class="text-xl text-white/50 font-light max-w-xl leading-relaxed">{{ $t('pillarAdvisoryHero') }}</p>
            <PillarBadges />
          </div>
          <div class="relative aspect-square flex items-center justify-center max-h-[50vh] lg:max-h-none">
            <AdvisoryVisual />
          </div>
        </div>

        <!-- SECTION 2: THE PROBLEM -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 rounded-[3rem] text-center space-y-10" style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); border: 1px solid rgba(255,255,255,0.15)">
          <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/70">{{ $t('pillarAdvisoryProblemLabel') }}</div>
          <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none max-w-4xl mx-auto">
            {{ $t('pillarAdvisoryProblem') }}
          </h2>
          <p class="text-xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto">{{ $t('pillarAdvisoryProblemDesc') }}</p>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <div v-for="(pill, i) in advisoryStatPills" :key="i" class="px-6 py-3 rounded-full bg-white/10 border border-white/10 text-white text-sm font-black uppercase tracking-widest">
              {{ pill }}
            </div>
          </div>
        </div>

        <!-- SECTION 3: THE FLYWHEEL -->
        <div v-reveal class="p-6 md:p-10 lg:p-16 bg-white/5 border border-white/10 rounded-[3rem] space-y-12">
          <div class="text-center space-y-6 max-w-3xl mx-auto">
            <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">{{ $t('pillarAdvisoryFlywheelLabel') }}</div>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{{ $t('pillarAdvisoryFlywheelTitle') }}</h2>
            <p class="text-xl text-white/50 font-light leading-relaxed">{{ $t('pillarAdvisoryFlywheelDesc') }}</p>
          </div>
          <div class="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <!-- Connecting line (desktop only) -->
            <div class="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-white/10 z-0" />
            <div v-for="(step, i) in advisorySteps" :key="i" class="relative z-10 text-center space-y-4">
              <div class="w-16 h-16 mx-auto rounded-2xl text-white flex items-center justify-center shadow-xl" style="background: linear-gradient(135deg, #a446f4, #4138f3)">
                <Icon :icon="step.icon" class="text-2xl" />
              </div>
              <div class="text-[10px] font-black text-[#7F39E9] uppercase tracking-widest">{{ $t('pillarAdvisoryStepLabel') }} 0{{ i + 1 }}</div>
              <h4 class="text-lg font-black text-white tracking-tight">{{ $t(step.titleKey) }}</h4>
              <p class="text-sm text-white/50 font-light leading-relaxed">{{ $t(step.descKey) }}</p>
            </div>
          </div>
        </div>

        <!-- SECTION 4: SERVICE OFFERINGS -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 rounded-[3rem] space-y-12" style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); border: 1px solid rgba(255,255,255,0.15)">
          <div class="text-center space-y-4 max-w-4xl mx-auto">
            <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">{{ $t('pillarAdvisoryServicesTitle') }}</h2>
          </div>
          <!-- First row: 3 cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              v-for="(svc, i) in advisoryServices.slice(0, 3)"
              :key="i"
              class="p-8 rounded-[2rem] space-y-5 transition-all"
              :class="svc.highlighted ? 'bg-white/10 border-2 border-amber-400/30' : 'bg-white/5 border border-white/10'"
            >
              <div v-if="svc.highlighted" class="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-[0.2em] inline-block">{{ $t('pillarAdvisoryMostPopular') }}</div>
              <div class="w-12 h-12 rounded-xl flex items-center justify-center" :class="svc.highlighted ? 'bg-[#7F39E9]/10 text-[#7F39E9]' : 'bg-white/10 border border-white/20 text-white'">
                <Icon :icon="svc.icon" class="text-xl" />
              </div>
              <h4 class="text-xl font-black tracking-tight" :class="svc.highlighted ? 'text-white' : 'text-white'">{{ $t(svc.titleKey) }}</h4>
              <p class="text-sm font-light leading-relaxed" :class="svc.highlighted ? 'text-white/50' : 'text-white/60'">{{ $t(svc.descKey) }}</p>
              <div class="flex flex-wrap items-center gap-3 pt-2">
                <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest" :class="svc.highlighted ? 'bg-white/5 text-white/70' : 'bg-white/10 text-white/80'">{{ svc.price }}</span>
                <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest" :class="svc.highlighted ? 'bg-white/5 text-white/70' : 'bg-white/10 text-white/80'">{{ svc.timeline }}</span>
              </div>
            </div>
          </div>
          <!-- Second row: 2 cards centered -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div
              v-for="(svc, i) in advisoryServices.slice(3, 5)"
              :key="i + 3"
              class="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-5 transition-all"
            >
              <div class="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Icon :icon="svc.icon" class="text-xl" />
              </div>
              <h4 class="text-xl font-black text-white tracking-tight">{{ $t(svc.titleKey) }}</h4>
              <p class="text-sm text-white/60 font-light leading-relaxed">{{ $t(svc.descKey) }}</p>
              <div class="flex flex-wrap items-center gap-3 pt-2">
                <span class="px-3 py-1 rounded-full bg-white/10 text-white/80 text-[10px] font-black uppercase tracking-widest">{{ svc.price }}</span>
                <span class="px-3 py-1 rounded-full bg-white/10 text-white/80 text-[10px] font-black uppercase tracking-widest">{{ svc.timeline }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 5: ENTRY POINT CTA -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 rounded-[3rem] text-center space-y-8 border-2 border-amber-500/50" style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); box-shadow: 0 0 50px rgba(245,158,11,0.1)">
          <div class="text-[10px] font-black uppercase tracking-[0.4em] text-amber-300">{{ $t('pillarAdvisoryCtaLabel') }}</div>
          <h2 class="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight max-w-3xl mx-auto">
            {{ $t('pillarAdvisoryCtaTitle') }}
          </h2>
          <p class="text-lg text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
            {{ $t('pillarAdvisoryCtaDesc') }}
          </p>
          <p class="text-xl text-amber-300 italic font-light max-w-xl mx-auto">"{{ $t('pillarAdvisoryCtaQuote') }}"</p>
          <div class="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto w-full">
            <input
              v-model="pillarEmail"
              type="email"
              :placeholder="$t('heroEmailPlaceholder')"
              class="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all text-white placeholder:text-white/40"
            />
            <button
              class="w-full sm:w-auto min-w-[200px] px-10 py-4 bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-[0.3em] rounded-xl transition-all shadow-2xl whitespace-nowrap flex items-center justify-center gap-2 relative"
              :class="!isValidPillarEmail || sending ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-90'"
              :disabled="!isValidPillarEmail || sending"
              @click="submitRequest(pillarEmail)"
            >
              <svg v-if="sending" class="w-4 h-4 animate-spin absolute" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" /><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
              <span :class="sending ? 'invisible' : ''">{{ $t('pillarAdvisoryCtaButton') }}</span>
            </button>
          </div>
        </div>

        <!-- SECTION 6: CLOSING CARD -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 rounded-[3rem] text-center space-y-8 relative overflow-hidden" style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); border: 1px solid rgba(255,255,255,0.15)">
          <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight max-w-4xl mx-auto">{{ $t('pillarAdvisoryCloseLine1') }}</h2>
          <h2 class="text-3xl md:text-5xl font-black text-white/70 tracking-tighter leading-tight max-w-4xl mx-auto">{{ $t('pillarAdvisoryCloseLine2') }}</h2>
          <p class="text-lg text-white/50 font-light leading-relaxed max-w-2xl mx-auto">{{ $t('pillarAdvisoryCloseDesc') }}</p>
          <div class="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto pt-4">
            <span v-for="(stat, i) in advisoryCloseStats" :key="i" class="px-5 py-2.5 rounded-full bg-white/10 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em]">
              {{ stat }}
            </span>
          </div>
          <div class="flex flex-col items-center gap-4 pt-4 max-w-md mx-auto">
            <div class="flex flex-col sm:flex-row items-center gap-3 w-full">
              <input
                v-model="pillarEmail"
                type="email"
                :placeholder="$t('heroEmailPlaceholder')"
                class="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-white placeholder:text-white/40"
              />
              <button
                class="w-full sm:w-auto min-w-[200px] px-10 py-4 bg-white text-slate-900 text-xs font-black uppercase tracking-[0.3em] rounded-xl transition-all shadow-2xl whitespace-nowrap flex items-center justify-center gap-2 relative"
                :class="!isValidPillarEmail || sending ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-90'"
                :disabled="!isValidPillarEmail || sending"
                @click="submitRequest(pillarEmail)"
              >
                <svg v-if="sending" class="w-4 h-4 animate-spin absolute" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" /><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                <span :class="sending ? 'invisible' : ''">{{ $t('pillarAdvisorySchedule') }}</span>
              </button>
            </div>
            <button
              class="text-white/40 hover:text-white font-bold border-b border-white/20 hover:border-white pb-1 transition-all text-sm"
              @click="$emit('back')"
            >
              {{ $t('pillarBack') }}
            </button>
          </div>
        </div>

      </div>
    <ToastNotification
      :visible="toast.visible"
      :type="toast.type"
      :title="toast.title"
      :message="toast.message"
      @close="toast.visible = false"
    />
</template>

<script>
import Icon from "@/components/Icon"
import PillarBadges from "@/components/pillar/PillarBadges.vue"
import AdvisoryVisual from "@/components/pillar/AdvisoryVisual.vue"
import ToastNotification from "@/components/ToastNotification.vue"
import reveal from "@/directives/reveal"
import pillarContact from "@/mixins/pillarContact"

export default {
  name: "PillarAdvisorySection",
  directives: { reveal },
  components: { Icon, PillarBadges, AdvisoryVisual, ToastNotification },
  mixins: [pillarContact],
  emits: ['back', 'navigate'],
  data() {
    return {
      pillarName: 'Advisory',
      advisorySteps: [
        { icon: 'heroicons-outline:search', titleKey: 'pillarAdvisoryStep1', descKey: 'pillarAdvisoryStep1Desc' },
        { icon: 'heroicons-outline:document-text', titleKey: 'pillarAdvisoryStep2', descKey: 'pillarAdvisoryStep2Desc' },
        { icon: 'heroicons-outline:cog', titleKey: 'pillarAdvisoryStep3', descKey: 'pillarAdvisoryStep3Desc' },
        { icon: 'heroicons-outline:trending-up', titleKey: 'pillarAdvisoryStep4', descKey: 'pillarAdvisoryStep4Desc' }
      ],
      advisoryStatPills: ['3-7% Monthly Revenue Recovery', '30-Day Audit', 'No Platform Commitment Required'],
      advisoryServices: [
        { icon: 'heroicons-outline:search-circle', titleKey: 'pillarAdvisorySvc1', descKey: 'pillarAdvisorySvc1Desc', price: '$5,000–$15,000', timeline: '30–60 Days', highlighted: true },
        { icon: 'heroicons-outline:clipboard-check', titleKey: 'pillarAdvisorySvc2', descKey: 'pillarAdvisorySvc2Desc', price: '$5,000–$10,000', timeline: '2–3 Weeks', highlighted: false },
        { icon: 'heroicons-outline:light-bulb', titleKey: 'pillarAdvisorySvc3', descKey: 'pillarAdvisorySvc3Desc', price: '$15,000–$35,000', timeline: '60–90 Days', highlighted: false },
        { icon: 'heroicons-outline:chart-bar', titleKey: 'pillarAdvisorySvc4', descKey: 'pillarAdvisorySvc4Desc', price: '$5,000–$20,000/mo', timeline: 'Ongoing', highlighted: false },
        { icon: 'heroicons-outline:support', titleKey: 'pillarAdvisorySvc5', descKey: 'pillarAdvisorySvc5Desc', price: '$10,000–$25,000', timeline: '30–45 Days', highlighted: false }
      ],
      advisoryCloseStats: ['5 Engagement Types', '30-Day Entry Point', 'Performance-Based Options Available'],
    }
  }
}
</script>

<style scoped>
.animate-spin-very-slow {
  animation: spin 10s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.crm-demo-pulse {
  animation: crmPulse 3s ease-in-out infinite;
}
.crm-demo-pulse-delayed {
  animation: crmPulse 3s ease-in-out infinite 1.5s;
}
@keyframes crmPulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.15); opacity: 0.1; }
}
.crm-demo-blink {
  animation: crmBlink 2s ease-in-out infinite;
}
@keyframes crmBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
.process-pulse {
  animation: processPulse 2s linear infinite;
}
@keyframes processPulse {
  0% { left: 0; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { left: 100%; opacity: 0; }
}
.omni-brain-glow {
  animation: omniBrainGlow 4s ease-in-out infinite;
}
@keyframes omniBrainGlow {
  0%, 100% { box-shadow: 0 0 40px rgba(127,57,233,0.3); }
  50% { box-shadow: 0 0 80px rgba(127,57,233,0.6), 0 0 120px rgba(127,57,233,0.2); }
}
.omni-ring-1 { animation: spin 25s linear infinite; }
.omni-ring-2 { animation: spin 35s linear infinite reverse; }
.omni-signal-pulse {
  position: absolute;
  animation: omniSignal 3s ease-in-out infinite;
}
@keyframes omniSignal {
  0% { transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translate(-50%, -50%) rotate(var(--angle)) translateX(170px); opacity: 0; }
}
.eco-node-pulse {
  animation: ecoNodePulse 3s ease-in-out infinite;
}
@keyframes ecoNodePulse {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.05); }
}
@keyframes aboutSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.sov-ring-outer { animation: aboutSpin 40s linear infinite; }
.sov-ring-inner { animation: aboutSpin 25s linear infinite reverse; }
.sov-particle { animation: sovParticlePulse 2s ease-in-out infinite; }
@keyframes sovParticlePulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
.sov-core-glow { animation: sovGlow 4s ease-in-out infinite; }
@keyframes sovGlow { 0%, 100% { box-shadow: 0 0 40px rgba(127,57,233,0.2); } 50% { box-shadow: 0 0 80px rgba(127,57,233,0.4); } }
.sov-scan { animation: sovScan 5s ease-in-out infinite; }
@keyframes sovScan { 0%, 100% { opacity: 0; transform: scale(0.8); } 50% { opacity: 0.2; transform: scale(1.2); } }
.noise-dot { animation: noisePulse ease-in-out infinite; }
@keyframes noisePulse { 0%, 100% { opacity: 0.1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.2); } }
.vendor-modal-enter-active, .vendor-modal-leave-active { transition: opacity 0.3s ease; }
.vendor-modal-enter-active .relative, .vendor-modal-leave-active .relative { transition: transform 0.3s ease, opacity 0.3s ease; }
.vendor-modal-enter-from, .vendor-modal-leave-to { opacity: 0; }
.vendor-modal-enter-from .relative { transform: scale(0.95); opacity: 0; }
.vendor-modal-leave-to .relative { transform: scale(0.95); opacity: 0; }
</style>
