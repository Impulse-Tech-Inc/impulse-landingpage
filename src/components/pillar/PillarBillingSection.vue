<template>
      <div class="space-y-24">

        <!-- SECTION 1: HERO -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="flex items-center gap-4">
              <div class="w-12 h-px" style="background: linear-gradient(90deg, #a446f4, #4138f3)" />
              <span class="text-[12px] font-black uppercase tracking-[0.5em] text-[#7F39E9]">Revenue & Growth</span>
            </div>
            <h1 class="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight md:leading-[0.85] tracking-tighter">Billing<br />AI.</h1>
            <h2 class="text-2xl md:text-3xl font-bold text-white/70 tracking-tight leading-tight max-w-md">{{ $t('pillarBillingHeroSubtitle') }}</h2>
            <p class="text-xl text-white/50 font-light max-w-xl leading-relaxed">{{ $t('pillarBillingHero') }}</p>
            <PillarBadges />
          </div>
          <!-- Billing Video -->
          <div class="relative flex items-center justify-center max-h-[50vh] lg:max-h-none">
            <div class="relative w-full aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <div v-show="!billingLoaded" class="absolute inset-0 z-10 animate-pulse bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.08]"></div>
              <video
                class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                :class="billingLoaded ? 'opacity-100' : 'opacity-0'"
                :src="billingVideo"
                autoplay
                muted
                loop
                playsinline
                controls
                @canplay="billingLoaded = true"
              ></video>
            </div>
          </div>
        </div>

        <!-- SECTION 2: THE BILLING GAP -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 bg-white/[0.03] border border-white/10 rounded-[3rem] text-center space-y-12">
          <div class="space-y-6 max-w-4xl mx-auto">
            <div class="text-[12px] font-black text-[#7F39E9] uppercase tracking-[0.5em]">{{ $t('pillarBillingGapLabel') }}</div>
            <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">
              {{ $t('pillarBillingGapTitle') }}
            </h2>
            <p class="text-xl text-white/50 font-light leading-relaxed max-w-3xl mx-auto">{{ $t('pillarBillingGapDesc') }}</p>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-6">
            <div v-for="(stat, i) in billingStatPills" :key="i" class="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white text-sm font-black uppercase tracking-widest shadow-sm">
              {{ stat }}
            </div>
          </div>
        </div>

        <!-- SECTION 3: CORE BILLING ENGINE -->
        <div v-reveal class="space-y-12 text-center">
          <div class="space-y-6 max-w-3xl mx-auto">
            <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">{{ $t('pillarBillingCoreLabel') }}</div>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{{ $t('pillarBillingCoreTitle') }}</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(cap, i) in billingCaps" :key="i" class="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-5 hover:bg-white/10 transition-all text-left">
              <div class="w-14 h-14 rounded-2xl bg-[#7F39E9]/10 flex items-center justify-center text-[#7F39E9]">
                <Icon :icon="cap.icon" class="text-2xl" />
              </div>
              <h3 class="text-xl font-black text-white tracking-tight">{{ $t(cap.titleKey) }}</h3>
              <p class="text-sm text-white/50 font-light leading-relaxed">{{ $t(cap.descKey) }}</p>
            </div>
          </div>
        </div>

        <!-- SECTION 4: PRICING INTELLIGENCE -->
        <div v-reveal class="space-y-12 text-center">
          <div class="space-y-6 max-w-3xl mx-auto">
            <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">{{ $t('pillarBillingPricingLabel') }}</div>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{{ $t('pillarBillingPricingTitle') }}</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div v-for="(card, i) in billingPricingCards" :key="i" class="p-8 rounded-[2rem] space-y-4 text-left transition-all bg-white/5 border border-white/10 hover:bg-white/10" :class="card.accent ? 'border-[#7F39E9]/30' : ''">
              <div class="w-12 h-12 rounded-xl bg-[#7F39E9]/10 flex items-center justify-center text-[#7F39E9]">
                <Icon :icon="card.icon" class="text-xl" />
              </div>
              <h4 class="text-xl font-black tracking-tight text-white">{{ $t(card.titleKey) }}</h4>
              <p class="text-sm font-light leading-relaxed text-white/50">{{ $t(card.descKey) }}</p>
            </div>
          </div>
        </div>

        <!-- SECTION 5: IN-HOUSE ACCOUNTING -->
        <div v-reveal class="p-6 md:p-10 lg:p-16 rounded-[3rem] space-y-12" style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); border: 1px solid rgba(255,255,255,0.15)">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <!-- Left -->
            <div class="space-y-8">
              <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">{{ $t('pillarBillingAcctLabel') }}</div>
              <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">{{ $t('pillarBillingAcctTitle') }}</h2>
              <p class="text-lg text-white/70 font-light leading-relaxed max-w-xl">{{ $t('pillarBillingAcctDesc') }}</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div v-for="(feat, i) in billingAcctFeats" :key="i" class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
                    <Icon :icon="feat.icon" class="text-sm" />
                  </div>
                  <span class="text-sm font-bold text-white">{{ $t(feat.titleKey) }}</span>
                </div>
              </div>
            </div>
            <!-- Right: Mock Income Statement -->
            <div class="bg-white/10 border border-white/10 rounded-[1.5rem] overflow-hidden backdrop-blur-sm">
              <div class="flex items-center gap-2 px-5 py-3 border-b border-white/10">
                <div class="w-3 h-3 rounded-full bg-rose-400/80" />
                <div class="w-3 h-3 rounded-full bg-amber-400/80" />
                <div class="w-3 h-3 rounded-full bg-teal-400/80" />
                <div class="ml-4 text-[10px] font-black text-white/40 uppercase tracking-widest">{{ $t('pillarBillingAcctMockTitle') }}</div>
              </div>
              <div class="p-6 space-y-4 text-sm font-mono">
                <div class="flex justify-between text-white/80">
                  <span>{{ $t('pillarBillingAcctRevenue') }}</span><span class="font-bold text-teal-300">$284,500</span>
                </div>
                <div class="flex justify-between text-white/60">
                  <span>{{ $t('pillarBillingAcctCOGS') }}</span><span>($112,300)</span>
                </div>
                <div class="border-t border-white/10 pt-3 flex justify-between text-white/80">
                  <span class="font-bold">{{ $t('pillarBillingAcctGross') }}</span><span class="font-bold text-teal-300">$172,200</span>
                </div>
                <div class="flex justify-between text-white/60">
                  <span>{{ $t('pillarBillingAcctOpex') }}</span><span>($68,400)</span>
                </div>
                <div class="border-t border-white/10 pt-3 flex justify-between text-white">
                  <span class="font-black">{{ $t('pillarBillingAcctNet') }}</span><span class="font-black text-teal-300">$103,800</span>
                </div>
                <div class="flex items-center gap-3 pt-4 mt-2 border-t border-white/10">
                  <button v-for="ext in ['CSV', 'Excel', 'PDF']" :key="ext" class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black text-white/40 uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all flex items-center gap-2">
                    <Icon icon="heroicons-outline:download" class="text-xs" /> {{ ext }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 6: DIGITAL CONTRACTS & SELF-SERVICE -->
        <div v-reveal class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Left: Digital Contracts -->
          <div class="p-10 bg-white/5 border border-white/10 rounded-[3rem] space-y-8">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-[#7F39E9]/10 flex items-center justify-center text-[#7F39E9]">
                  <Icon icon="heroicons-outline:document-duplicate" class="text-xl" />
                </div>
                <span class="text-[11px] font-black uppercase tracking-[0.3em] text-white/50">{{ $t('pillarBillingContractsLabel') }}</span>
              </div>
              <h3 class="text-2xl md:text-3xl font-black text-white tracking-tighter">{{ $t('pillarBillingContractsTitle') }}</h3>
              <p class="text-sm text-white/50 font-light leading-relaxed">{{ $t('pillarBillingContractsDesc') }}</p>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <div v-for="(step, i) in billingContractSteps" :key="i" class="flex items-center gap-3">
                <div class="px-5 py-2.5 rounded-full text-sm font-black uppercase tracking-wider" :class="step.active ? 'bg-[#7F39E9] text-white' : 'bg-white/5 border border-white/10 text-white/70'">
                  {{ $t(step.labelKey) }}
                </div>
                <Icon v-if="i < billingContractSteps.length - 1" icon="heroicons-outline:chevron-right" class="text-white/30 text-base" />
              </div>
            </div>
          </div>
          <!-- Right: Impulse Pay -->
          <div class="p-10 bg-white/5 border border-white/10 rounded-[3rem] space-y-8">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-[#7F39E9]/10 flex items-center justify-center text-[#7F39E9]">
                  <Icon icon="heroicons-outline:device-mobile" class="text-xl" />
                </div>
                <span class="text-[11px] font-black uppercase tracking-[0.3em] text-white/50">{{ $t('pillarBillingPayLabel') }}</span>
              </div>
              <h3 class="text-2xl md:text-3xl font-black text-white tracking-tighter">{{ $t('pillarBillingPayTitle') }}</h3>
              <p class="text-sm text-white/50 font-light leading-relaxed">{{ $t('pillarBillingPayDesc') }}</p>
            </div>
            <div class="flex flex-wrap gap-3">
              <span v-for="(feat, i) in billingPayFeats" :key="i" class="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-xs font-bold text-white/70">
                {{ $t(feat) }}
              </span>
            </div>
          </div>
        </div>

        <!-- SECTION 7: CLOSING CARD -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 rounded-[3rem] text-center space-y-8 relative overflow-hidden" style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); border: 1px solid rgba(255,255,255,0.15)">
          <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight max-w-4xl mx-auto">{{ $t('pillarBillingCloseTitle') }}</h2>
          <div class="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto pt-4">
            <span v-for="(stat, i) in billingCloseStats" :key="i" class="px-5 py-2.5 rounded-full bg-white/10 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em]">
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
                <span :class="sending ? 'invisible' : ''">{{ $t('pillarRequestAccess') }}</span>
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
import ToastNotification from "@/components/ToastNotification.vue"
import reveal from "@/directives/reveal"
import pillarContact from "@/mixins/pillarContact"
import billingVideo from "@/assets/images/billing-promo.mp4"

export default {
  name: "PillarBillingSection",
  directives: { reveal },
  components: { Icon, PillarBadges, ToastNotification },
  mixins: [pillarContact],
  emits: ['back', 'navigate'],
  data() {
    return {
      pillarName: 'Billing',
      billingVideo,
      billingLoaded: false,
      billingStatPills: ['150+ API Endpoints', '27 Billing Modules', 'Real-Time OCS Charging'],
      billingCaps: [
        { icon: 'heroicons-outline:refresh', titleKey: 'pillarBillingCap1', descKey: 'pillarBillingCap1Desc' },
        { icon: 'heroicons-outline:document-text', titleKey: 'pillarBillingCap2', descKey: 'pillarBillingCap2Desc' },
        { icon: 'heroicons-outline:credit-card', titleKey: 'pillarBillingCap3', descKey: 'pillarBillingCap3Desc' },
        { icon: 'heroicons-outline:shield-exclamation', titleKey: 'pillarBillingCap4', descKey: 'pillarBillingCap4Desc' }
      ],
      billingPricingCards: [
        { icon: 'heroicons-outline:view-grid', titleKey: 'pillarBillingPricing1', descKey: 'pillarBillingPricing1Desc', accent: false },
        { icon: 'heroicons-outline:lightning-bolt', titleKey: 'pillarBillingPricing2', descKey: 'pillarBillingPricing2Desc', accent: true },
        { icon: 'heroicons-outline:calculator', titleKey: 'pillarBillingPricing3', descKey: 'pillarBillingPricing3Desc', accent: false }
      ],
      billingAcctFeats: [
        { icon: 'heroicons-outline:collection', titleKey: 'pillarBillingAcctFeat1' },
        { icon: 'heroicons-outline:book-open', titleKey: 'pillarBillingAcctFeat2' },
        { icon: 'heroicons-outline:document-report', titleKey: 'pillarBillingAcctFeat3' },
        { icon: 'heroicons-outline:receipt-tax', titleKey: 'pillarBillingAcctFeat4' },
        { icon: 'heroicons-outline:cash', titleKey: 'pillarBillingAcctFeat5' },
        { icon: 'heroicons-outline:currency-dollar', titleKey: 'pillarBillingAcctFeat6' }
      ],
      billingContractSteps: [
        { labelKey: 'pillarBillingStepDraft', active: false },
        { labelKey: 'pillarBillingStepSent', active: false },
        { labelKey: 'pillarBillingStepSigned', active: true },
        { labelKey: 'pillarBillingStepActivated', active: false }
      ],
      billingPayFeats: [
        'pillarBillingPayFeat1', 'pillarBillingPayFeat2', 'pillarBillingPayFeat3',
        'pillarBillingPayFeat4', 'pillarBillingPayFeat5', 'pillarBillingPayFeat6'
      ],
      billingCloseStats: ['150+ API Endpoints', '39 UI Views', 'Real-Time OCS', 'Full Double-Entry Accounting', 'Digital Contracts'],
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
