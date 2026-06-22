<template>
      <div class="space-y-24">

        <!-- SECTION 1: HERO -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="flex items-center gap-4">
              <div class="w-12 h-px bg-blue-500" />
              <span class="text-[12px] font-black uppercase tracking-[0.5em] text-blue-500">Intelligence & Action</span>
            </div>
            <h1 class="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight md:leading-[0.85] tracking-tighter">Agentic<br />CRM.</h1>
            <h2 class="text-2xl md:text-3xl font-bold text-white/70 tracking-tight leading-tight max-w-md">{{ $t('pillarCrmHeroSubtitle') }}</h2>
            <p class="text-xl text-white/50 font-light max-w-md leading-relaxed">{{ $t('pillarCrmHeroDesc') }}</p>
            <PillarBadges />
          </div>
          <div class="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
            <StoryLaneEmbed />
          </div>
        </div>

        <!-- SECTION 2: ENGAGE - NETWORK-AWARE CRM -->
        <div v-reveal class="p-6 md:p-10 lg:p-16 bg-white/5 border border-white/10 rounded-[3rem] space-y-10 shadow-[0_20px_60px_rgba(59,130,246,0.08)]">
          <!-- Header -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-lg">
                <Icon icon="heroicons-outline:user-group" class="text-xl" />
              </div>
              <span class="text-[11px] font-black uppercase tracking-[0.3em] text-white/50">{{ $t('pillarCrmEngageLabel') }}</span>
            </div>
            <div class="px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_2px_10px_rgba(20,184,166,0.2)]">{{ $t('pillarActiveModule') }}</div>
          </div>

          <!-- Quote -->
          <p class="text-2xl md:text-3xl text-white font-serif italic leading-snug max-w-5xl">"{{ $t('pillarCrmQuote') }}"</p>

          <!-- 3 Capabilities -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(cap, i) in crmCaps" :key="i" class="p-8 bg-white/5 border border-white/10 rounded-[2rem] space-y-4 hover:bg-white/10 transition-all">
              <div class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Icon :icon="cap.icon" class="text-xl" />
              </div>
              <h4 class="text-xl font-black text-white tracking-tight">{{ $t(cap.titleKey) }}</h4>
              <p class="text-sm text-white/50 font-light leading-relaxed">{{ $t(cap.descKey) }}</p>
            </div>
          </div>

          <!-- Stats Row -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
            <div v-for="(stat, i) in crmStats" :key="i">
              <div class="text-4xl md:text-5xl font-black text-white tracking-tighter">{{ stat.val }}</div>
              <div class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mt-2">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- SECTION 3: AGENTIC - AI ORCHESTRATION -->
        <div v-reveal class="p-6 md:p-10 lg:p-16 rounded-[3rem] relative overflow-hidden bg-white/5 border border-white/10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <!-- Left -->
            <div class="space-y-8">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <Icon icon="heroicons-outline:lightning-bolt" class="text-xl" />
                </div>
                <span class="text-[11px] font-black uppercase tracking-[0.3em] text-white/60">{{ $t('pillarCrmAgenticLabel') }}</span>
              </div>
              <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">{{ $t('pillarCrmAgenticTitle') }}</h2>
              <p class="text-lg text-white/70 font-light leading-relaxed max-w-xl">{{ $t('pillarCrmAgenticDesc') }}</p>

              <!-- Agent Cards -->
              <div class="space-y-4">
                <div v-for="(agent, i) in crmAgents" :key="i" class="p-5 bg-white/10 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/15 transition-all">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
                      <Icon :icon="agent.icon" class="text-lg" />
                    </div>
                    <div class="space-y-1">
                      <h4 class="text-base font-black text-white tracking-tight">{{ $t(agent.nameKey) }}</h4>
                      <p class="text-sm text-white/60 font-light leading-relaxed">{{ $t(agent.descKey) }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Channel Badges -->
              <div class="flex flex-wrap gap-3 pt-2">
                <div v-for="channel in ['Web Chat', 'WhatsApp', 'Voice']" :key="channel" class="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em]">
                  {{ channel }}
                </div>
              </div>
            </div>

            <!-- Right: Demo Visual -->
            <div class="relative flex items-center justify-center">
              <div class="w-full max-w-md mx-auto">
                <!-- Browser Chrome -->
                <div class="bg-white/10 border border-white/10 rounded-[1.5rem] overflow-hidden backdrop-blur-sm">
                  <!-- Title Bar -->
                  <div class="flex items-center gap-2 px-5 py-3 border-b border-white/10">
                    <div class="w-3 h-3 rounded-full bg-rose-400/80" />
                    <div class="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div class="w-3 h-3 rounded-full bg-teal-400/80" />
                    <div class="ml-4 text-[10px] font-black text-white/40 uppercase tracking-widest">Live Demo · Agentic Resolution</div>
                  </div>
                  <!-- Content Area -->
                  <div class="relative aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-blue-500/30 to-blue-400/30">
                    <!-- Idle State: Play Button -->
                    <template v-if="!demoRunning">
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-32 h-32 rounded-full border border-white/10 crm-demo-pulse" />
                      </div>
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-48 h-48 rounded-full border border-white/5 crm-demo-pulse-delayed" />
                      </div>
                      <button class="relative z-10 w-20 h-20 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all group cursor-pointer" @click="startDemo">
                        <Icon icon="heroicons-outline:play" class="text-3xl ml-1 group-hover:scale-110 transition-transform" />
                      </button>
                    </template>
                    <!-- Running State: Step Animation -->
                    <template v-else>
                      <div class="flex flex-col items-center justify-center space-y-6 px-6">
                        <!-- Spinning Ring + Icon -->
                        <div class="relative w-28 h-28 flex items-center justify-center">
                          <div class="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin-very-slow" />
                          <div class="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                            <Icon :icon="demoSteps[demoStep].icon" class="text-2xl text-white" />
                          </div>
                        </div>
                        <!-- Label -->
                        <div class="text-center space-y-2">
                          <div class="text-xl font-black text-white tracking-tight">{{ demoSteps[demoStep].label }}</div>
                          <div class="text-[10px] font-black uppercase tracking-[0.3em] text-teal-300">Status: {{ demoSteps[demoStep].status }}</div>
                        </div>
                        <!-- Progress dots -->
                        <div class="flex gap-2">
                          <div
                            v-for="(s, si) in demoSteps"
                            :key="si"
                            class="rounded-full transition-all duration-500"
                            :class="si <= demoStep ? 'w-8 h-1 bg-teal-400' : 'w-4 h-1 bg-white/20'"
                          />
                        </div>
                      </div>
                    </template>
                  </div>
                  <!-- Status Bar -->
                  <div class="flex items-center justify-between px-5 py-3 border-t border-white/10">
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 rounded-full crm-demo-blink" :class="demoRunning ? 'bg-teal-400' : 'bg-white/30'" />
                      <span class="text-[10px] font-bold text-white/50 uppercase tracking-wider">{{ demoRunning ? demoSteps[demoStep].log : $t('pillarCrmDemoStatus') }}</span>
                    </div>
                    <span class="text-[10px] font-bold text-white/30 uppercase tracking-wider">{{ demoRunning ? 'Running...' : $t('pillarCrmDemoPlay') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 4: GROW - REVENUE INTELLIGENCE -->
        <div v-reveal class="p-6 md:p-10 lg:p-16 bg-white/5 border border-white/10 rounded-[3rem] space-y-10 shadow-[0_20px_60px_rgba(59,130,246,0.08)]">
          <!-- Header -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-lg">
                <Icon icon="heroicons-outline:trending-up" class="text-xl" />
              </div>
              <span class="text-[11px] font-black uppercase tracking-[0.3em] text-white/50">{{ $t('pillarCrmGrowLabel') }}</span>
            </div>
            <div class="px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_2px_10px_rgba(20,184,166,0.2)]">{{ $t('pillarActiveModule') }}</div>
          </div>

          <!-- Quote -->
          <p class="text-2xl md:text-3xl text-white font-serif italic leading-snug max-w-5xl">"{{ $t('pillarCrmGrowQuote') }}"</p>

          <!-- 3 Capabilities -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(cap, i) in crmGrowCaps" :key="i" class="p-8 bg-white/5 border border-white/10 rounded-[2rem] space-y-4 hover:bg-white/10 transition-all">
              <div class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Icon :icon="cap.icon" class="text-xl" />
              </div>
              <h4 class="text-xl font-black text-white tracking-tight">{{ $t(cap.titleKey) }}</h4>
              <p class="text-sm text-white/50 font-light leading-relaxed">{{ $t(cap.descKey) }}</p>
            </div>
          </div>

          <!-- Big Stat -->
          <div class="pt-8 border-t border-white/5 text-center">
            <div class="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">+$12.40</div>
            <div class="text-[11px] font-black uppercase tracking-[0.4em] text-blue-500 mt-3">{{ $t('pillarCrmGrowStat') }}</div>
          </div>
        </div>

        <!-- SECTION 5: CLOSING CARD -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 rounded-[3rem] text-center space-y-8 relative overflow-hidden bg-white/5 border border-white/10">
          <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight max-w-4xl mx-auto">{{ $t('pillarCrmCloseLine1') }}</h2>
          <h2 class="text-3xl md:text-5xl font-black text-blue-400 tracking-tighter leading-tight max-w-4xl mx-auto">{{ $t('pillarCrmCloseLine2') }}</h2>
          <p class="text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto">{{ $t('pillarCrmCloseDesc') }}</p>
          <div class="flex flex-col items-center gap-4 pt-4 max-w-md mx-auto">
            <div class="flex flex-col sm:flex-row items-center gap-3 w-full">
              <input
                v-model="pillarEmail"
                type="email"
                :placeholder="$t('heroEmailPlaceholder')"
                class="w-full px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder:text-white/30"
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
import StoryLaneEmbed from "@/components/StoryLaneEmbed.vue"
import ToastNotification from "@/components/ToastNotification.vue"
import reveal from "@/directives/reveal"
import pillarContact from "@/mixins/pillarContact"

export default {
  name: "PillarCrmSection",
  directives: { reveal },
  components: { Icon, PillarBadges, StoryLaneEmbed, ToastNotification },
  mixins: [pillarContact],
  emits: ['back', 'navigate'],
  data() {
    return {
      pillarName: 'CRM',
      crmAgents: [
        { icon: 'heroicons-outline:chip', nameKey: 'pillarCrmAgentTech', descKey: 'pillarCrmAgentTechDesc' },
        { icon: 'heroicons-outline:currency-dollar', nameKey: 'pillarCrmAgentBilling', descKey: 'pillarCrmAgentBillingDesc' },
        { icon: 'heroicons-outline:shield-exclamation', nameKey: 'pillarCrmAgentChurn', descKey: 'pillarCrmAgentChurnDesc' }
      ],
      crmGrowCaps: [
        { icon: 'heroicons-outline:trending-up', titleKey: 'pillarCrmGrowCap1', descKey: 'pillarCrmGrowCap1Desc' },
        { icon: 'heroicons-outline:phone-outgoing', titleKey: 'pillarCrmGrowCap2', descKey: 'pillarCrmGrowCap2Desc' },
        { icon: 'heroicons-outline:chart-bar', titleKey: 'pillarCrmGrowCap3', descKey: 'pillarCrmGrowCap3Desc' }
      ],
      crmCaps: [
        { icon: 'heroicons-outline:search', titleKey: 'pillarCrmCap1', descKey: 'pillarCrmCap1Desc' },
        { icon: 'heroicons-outline:trending-down', titleKey: 'pillarCrmCap2', descKey: 'pillarCrmCap2Desc' },
        { icon: 'heroicons-outline:shield-exclamation', titleKey: 'pillarCrmCap3', descKey: 'pillarCrmCap3Desc' }
      ],
      crmStats: [
        { val: '15–40%', label: 'Churn Reduction' },
        { val: '50%+', label: 'First-Call Resolution' },
        { val: '2–4 Weeks', label: 'Early Warning Lead Time' }
      ],
      demoRunning: false,
      demoStep: 0,
      demoTimer: null,
      demoSteps: [
        { label: 'Detecting Packet Loss', status: 'Analysis', icon: 'heroicons-outline:chart-bar', log: '> analyzing_optical_levels...' },
        { label: 'Remote TR-069 Handshake', status: 'Connecting', icon: 'heroicons-outline:refresh', log: '> tr069_diagnostics_running...' },
        { label: 'Router Reboot Initiated', status: 'Execution', icon: 'heroicons-outline:lightning-bolt', log: '> triggering_remote_reboot...' },
        { label: 'Signal Stabilized', status: 'Verified', icon: 'heroicons-outline:check-circle', log: '> signal_restored [82s]' },
        { label: 'Ticket Closed Autonomously', status: 'Complete', icon: 'heroicons-outline:shield-check', log: '> resolution_successful' }
      ]
    }
  },
  beforeUnmount() {
    if (this.demoTimer) clearInterval(this.demoTimer)
  },
  methods: {
    startDemo() {
      if (this.demoRunning) return
      this.demoRunning = true
      this.demoStep = 0
      this.demoTimer = setInterval(() => {
        if (this.demoStep < this.demoSteps.length - 1) {
          this.demoStep++
        } else {
          clearInterval(this.demoTimer)
          setTimeout(() => {
            this.demoRunning = false
            this.demoStep = 0
          }, 2500)
        }
      }, 2000)
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
