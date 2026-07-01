<template>
      <div class="space-y-24">

        <!-- SECTION 1: HERO -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="flex items-center gap-4">
              <div class="w-12 h-px bg-blue-500" />
              <span class="text-[12px] font-black uppercase tracking-[0.5em] text-blue-500">Infrastructure & Automation</span>
            </div>
            <h1 class="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight md:leading-[0.85] tracking-tighter">
              Telemetrics<br />Intelligence.
            </h1>
            <h2 class="text-2xl md:text-3xl font-bold text-white/70 tracking-tight leading-tight max-w-md">{{ $t('pillarNetworkHeroSubtitle') }}</h2>
            <p class="text-xl text-white/50 font-light max-w-xl leading-relaxed">{{ $t('pillarNetworkHero') }}</p>
            <PillarBadges />
          </div>
          <!-- Telemetrics Video -->
          <div class="relative flex items-center justify-center max-h-[50vh] lg:max-h-none">
            <div class="relative w-full aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <div v-show="!telemetricsLoaded" class="absolute inset-0 z-10 animate-pulse bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.08]"></div>
              <video
                class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                :class="telemetricsLoaded ? 'opacity-100' : 'opacity-0'"
                :src="telemetricsVideo"
                autoplay
                muted
                loop
                playsinline
                controls
                @canplay="telemetricsLoaded = true"
              ></video>
            </div>
          </div>
        </div>

        <!-- SECTION 2: MODULE DEEP-DIVE -->
        <div v-reveal class="p-6 md:p-10 lg:p-16 bg-white/5 border border-white/10 rounded-[3rem] space-y-16 shadow-[0_20px_60px_rgba(59,130,246,0.08)]">

          <!-- Module Header -->
          <div class="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg bg-blue-500">
              <Icon icon="heroicons-outline:chip" class="text-xl" />
            </div>
            <div class="flex items-center gap-3 flex-wrap">
              <span class="text-sm font-black text-white uppercase tracking-wider">TELEMETRICS</span>
              <span class="text-sm text-white/40">&middot;</span>
              <span class="text-sm text-white/50">{{ $t('pillarNetworkModuleLabel') }}</span>
              <span class="px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-[10px] font-black text-teal-600 uppercase tracking-widest shadow-[0_2px_10px_rgba(20,184,166,0.2)]">{{ $t('pillarActiveModule') }}</span>
            </div>
          </div>

          <!-- Quote -->
          <p class="text-xl md:text-2xl text-white/50 italic font-light leading-relaxed max-w-4xl border-l-4 border-blue-500/30 pl-6">
            {{ $t('pillarNetworkQuote') }}
          </p>

          <!-- Noise vs Signal -->
          <div class="p-4 md:p-10 lg:p-16 bg-white/5 border border-white/10 rounded-[2rem] relative overflow-hidden">
              <!-- Background Noise Dots -->
              <div class="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-2 opacity-10 p-6 pointer-events-none">
                <div v-for="n in 72" :key="'noise-'+n" class="w-1 h-1 bg-rose-500 rounded-full noise-dot" :style="{ animationDelay: `${Math.random() * 5}s`, animationDuration: `${2 + Math.random() * 3}s` }" />
              </div>
            <div class="relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left justify-center">
              <div class="space-y-2">
                <div class="text-[10px] font-black text-rose-500 uppercase tracking-[0.3em]">{{ $t('pillarNetworkNoise') }}</div>
                <div class="text-4xl md:text-6xl font-black text-white tracking-tighter">561</div>
                <div class="text-[10px] font-bold text-white/40 uppercase tracking-widest">{{ $t('pillarNetworkAlarms') }}</div>
              </div>
              <div class="relative w-28 h-28 flex items-center justify-center">
                <div class="absolute inset-0 border border-blue-500/20 rounded-full border-dashed animate-spin-very-slow" />
                <div class="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500">
                  <Icon icon="heroicons-outline:filter" class="text-3xl" />
                </div>
              </div>
              <div class="space-y-2">
                <div class="text-[10px] font-black text-teal-500 uppercase tracking-[0.3em]">{{ $t('pillarNetworkSignal') }}</div>
                <div class="text-4xl md:text-6xl font-black text-white tracking-tighter">1</div>
                <div class="text-[10px] font-bold text-white/40 uppercase tracking-widest">{{ $t('pillarNetworkRoot') }}</div>
              </div>
            </div>
          </div>

          <!-- Strategic Value -->
          <div class="space-y-6">
            <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">{{ $t('pillarStrategicValue') }}</div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CapabilityCard v-for="(cap, i) in networkCaps" :key="i" :title="cap.title" :icon="cap.icon" />
            </div>
          </div>

          <!-- Process Flow -->
          <div class="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 p-8 md:p-10 bg-white/[0.03] rounded-[2.5rem] border border-white/5 overflow-hidden">
            <template v-for="(step, i) in networkProcessSteps" :key="i">
              <!-- Step Node -->
              <div class="relative z-10 flex flex-col items-center gap-4">
                <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 shadow-xl hover:border-blue-500 transition-all">
                  <Icon :icon="step.icon" class="text-2xl" />
                </div>
                <div class="text-[10px] font-black uppercase tracking-[0.3em] text-white">{{ step.label }}</div>
              </div>
              <!-- Connecting Line with Pulse -->
              <div v-if="i < networkProcessSteps.length - 1" class="hidden md:block flex-1 h-px bg-white/10 relative mx-2">
                <div class="process-pulse absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" :style="{ animationDelay: `${i * 0.5}s` }" />
              </div>
              <!-- Mobile Arrow -->
              <div v-if="i < networkProcessSteps.length - 1" class="md:hidden text-white/30">
                <Icon icon="heroicons-outline:chevron-down" class="text-lg" />
              </div>
            </template>
          </div>

          <!-- Impact Card -->
          <div class="p-6 md:p-12 rounded-[2rem] relative overflow-hidden bg-white/5 border border-white/10">
            <div class="relative z-10 flex flex-col lg:flex-row items-center gap-10">
              <div class="w-24 h-24 rounded-[2rem] bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-500 shrink-0">
                <Icon icon="heroicons-outline:exclamation" class="text-5xl" />
              </div>
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div class="px-4 py-1.5 rounded-full bg-rose-500 text-white text-[10px] font-black uppercase tracking-[0.2em]">1 ALERT. NOT 561.</div>
                </div>
                <p class="text-xl text-white/80 leading-relaxed font-light max-w-4xl">{{ $t('pillarNetworkImpact') }}</p>
              </div>
            </div>
          </div>

          <!-- Killer Feature Callout -->
          <div class="p-6 md:p-12 lg:p-16 bg-white/5 border border-white/10 rounded-[2rem] relative overflow-hidden group">
            <div class="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <Icon icon="heroicons-outline:user-group" class="text-blue-500 text-[200px]" />
            </div>
            <div class="relative z-10 space-y-8">
              <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-500 text-xs font-black uppercase tracking-widest">
                <Icon icon="heroicons-outline:lightning-bolt" class="text-sm" />
                {{ $t('pillarNetworkAdvantageLabel') }}
              </div>
              <h3 class="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-tight max-w-4xl">
                {{ $t('pillarNetworkAdvantageTitle') }}
              </h3>
              <p class="text-lg text-white/50 font-light max-w-2xl leading-relaxed">
                {{ $t('pillarNetworkAdvantageDesc') }}
              </p>
            </div>
          </div>

          <!-- BRIDGE TO ENGAGE -->
          <div class="rounded-[3rem] border border-white/10">
            <div class="rounded-[2.9rem] p-12 md:p-20 relative overflow-hidden bg-white/5">
              <div class="relative z-10 flex flex-col items-center text-center space-y-10 max-w-4xl mx-auto">
                <h3 class="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight">
                  {{ $t('pillarNetworkBridge1') }}<br />
                  <span class="text-blue-400">{{ $t('pillarNetworkBridge2') }}</span>
                </h3>
                <p class="text-lg text-white/40 font-light leading-relaxed">{{ $t('pillarNetworkBridgeDesc') }}</p>
                <button class="px-10 py-5 bg-white rounded-xl text-slate-900 text-sm font-black uppercase tracking-widest hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all" @click="$emit('navigate', 'crm')">
                  {{ $t('pillarNetworkBridgeBtn') }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 3: SOVEREIGN INFRASTRUCTURE -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 rounded-[3rem] space-y-12 bg-white/5 border border-white/10">
          <div class="text-center space-y-6 max-w-3xl mx-auto">
            <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">{{ $t('pillarNetworkSovereignLabel') }}</div>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{{ $t('pillarNetworkSovereignTitle') }}</h2>
            <p class="text-xl text-white/50 font-light leading-relaxed">{{ $t('pillarNetworkSovereignDesc') }}</p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div v-for="(feat, i) in networkSovereignFeats" :key="i" class="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm space-y-4">
                <div class="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <Icon :icon="feat.icon" class="text-lg" />
                </div>
                <h4 class="text-sm font-black text-white uppercase tracking-wider">{{ $t(feat.titleKey) }}</h4>
                <p class="text-sm text-white/50 font-light leading-relaxed">{{ $t(feat.descKey) }}</p>
              </div>
            </div>
            <!-- Sovereign Core Visual -->
            <div class="relative aspect-square flex items-center justify-center">
              <div class="relative w-full h-full flex items-center justify-center">
                <!-- Outer ring -->
                <div class="absolute w-[80%] h-[80%] border border-white/10 rounded-full border-dashed sov-ring-outer" />
                <!-- Inner ring with particles -->
                <div class="absolute w-[60%] h-[60%] border-2 border-blue-500/20 rounded-full sov-ring-inner">
                  <div v-for="n in 6" :key="'sov-'+n" class="absolute w-2 h-2 bg-blue-500 rounded-full sov-particle shadow-[0_0_15px_#3b82f6]" :style="{ top: '50%', left: '50%', transform: `rotate(${n * 60}deg) translateX(100px)`, animationDelay: `${n * 0.3}s` }" />
                </div>
                <!-- Central shield -->
                <div class="relative z-10 w-40 h-40 bg-white rounded-[2.5rem] flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.3)] sov-core-glow">
                  <Icon icon="heroicons-outline:shield-check" class="text-blue-500 text-7xl" />
                </div>
                <!-- Scanning blur -->
                <div class="absolute w-72 h-72 bg-blue-500/10 blur-[80px] rounded-full sov-scan" />
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 4: ECOSYSTEM -->
        <div v-reveal class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-10">
            <div class="space-y-6">
              <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-widest">
                <Icon icon="heroicons-outline:cube" class="text-sm" />
                {{ $t('pillarNetworkEcoLabel') }}
              </div>
              <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{{ $t('pillarNetworkEcoTitle1') }}<br />{{ $t('pillarNetworkEcoTitle2') }}</h2>
              <p class="text-xl text-white/50 font-light leading-relaxed max-w-xl">{{ $t('pillarNetworkEcoDesc') }}</p>
            </div>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="vendor in networkVendors"
                :key="vendor"
                class="px-5 py-2.5 rounded-2xl border border-white/10 bg-white/[0.03] text-sm font-bold text-white/70"
              >{{ vendor }}</span>
              <span @click="showVendorModal = true" class="px-5 py-2.5 rounded-2xl text-sm font-black uppercase tracking-widest text-white cursor-pointer hover:bg-blue-600 transition-all bg-blue-500">{{ $t('pillarNetworkEcoMore') }}</span>
            </div>
          </div>
          <!-- Integration Visual -->
          <div class="relative aspect-video bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
            <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3),transparent_70%)]" />
            <div class="absolute inset-0 flex items-center justify-center p-12">
              <div class="relative w-full h-full border border-white/5 rounded-2xl flex items-center justify-center">
                <div class="grid grid-cols-3 gap-10">
                  <div v-for="n in 6" :key="n" class="w-16 h-16 rounded-xl bg-white/[0.03] border border-white/10 eco-node-pulse" :style="{ animationDelay: `${n * 0.5}s` }" />
                </div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-24 h-24 rounded-3xl flex items-center justify-center text-white bg-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.4)]">
                    <Icon icon="heroicons-outline:link" class="text-5xl" />
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute bottom-5 left-6 right-6 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              <span>Native Integration Layer</span>
              <span>v4.2.0_STABLE</span>
            </div>
          </div>
        </div>

        <!-- SECTION 5: CLOSING CTA -->
        <PillarCTA :sending="sending" @request="(e) => submitRequest(e)" @goback="$emit('back')" />
      </div>
    <Teleport to="body">
      <Transition name="vendor-modal">
        <div v-if="showVendorModal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" @click.self="showVendorModal = false">
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="showVendorModal = false" />
          <div class="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-8">
            <div class="flex items-center justify-between mb-8">
              <h3 class="text-xl font-black text-[#0a0a12] uppercase tracking-wide">{{ $t('pillarNetworkVendorModalTitle') }}</h3>
              <button @click="showVendorModal = false" class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-all">
                <Icon icon="heroicons-outline:x" class="text-lg" />
              </button>
            </div>
            <div class="grid grid-cols-3 gap-3">
              <div
                v-for="vendor in allSupportedVendors"
                :key="vendor"
                class="px-4 py-3 rounded-xl border border-gray-200 text-center text-sm font-bold text-[#0a0a12]/70 hover:border-blue-300 hover:bg-blue-50 transition-all"
              >{{ vendor }}</div>
            </div>
            <p class="text-center text-sm font-bold text-blue-500 uppercase tracking-widest mt-8">{{ $t('pillarNetworkVendorModalCustom') }}</p>
          </div>
        </div>
      </Transition>
    </Teleport>
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
import PillarCTA from "@/components/pillar/PillarCTA.vue"
import CapabilityCard from "@/components/pillar/CapabilityCard.vue"
import ToastNotification from "@/components/ToastNotification.vue"
import reveal from "@/directives/reveal"
import pillarContact from "@/mixins/pillarContact"
import telemetricsVideo from "@/assets/images/telemetrics-pill.mp4"

export default {
  name: "PillarNetworkSection",
  directives: { reveal },
  components: { Icon, PillarBadges, PillarCTA, CapabilityCard, ToastNotification },
  mixins: [pillarContact],
  emits: ['back', 'navigate'],
  data() {
    return {
      pillarName: 'Network',
      telemetricsVideo,
      telemetricsLoaded: false,
      networkCaps: [
        { title: 'pillarNetworkCap1', icon: 'heroicons-outline:shield-check' },
        { title: 'pillarNetworkCap2', icon: 'heroicons-outline:currency-dollar' },
        { title: 'pillarNetworkCap3', icon: 'heroicons-outline:lightning-bolt' }
      ],
      networkProcessSteps: [
        { label: 'EDGE', icon: 'heroicons-outline:server', descKey: 'pillarNetworkStepEdge' },
        { label: 'INGEST', icon: 'heroicons-outline:database', descKey: 'pillarNetworkStepIngest' },
        { label: 'ANALYZE', icon: 'heroicons-outline:chart-bar', descKey: 'pillarNetworkStepAnalyze' },
        { label: 'ACTION', icon: 'heroicons-outline:lightning-bolt', descKey: 'pillarNetworkStepAction' }
      ],
      networkSovereignFeats: [
        { icon: 'heroicons-outline:globe-alt', titleKey: 'pillarNetworkSovFeat1', descKey: 'pillarNetworkSovFeat1Desc' },
        { icon: 'heroicons-outline:lock-closed', titleKey: 'pillarNetworkSovFeat2', descKey: 'pillarNetworkSovFeat2Desc' },
        { icon: 'heroicons-outline:cube', titleKey: 'pillarNetworkSovFeat3', descKey: 'pillarNetworkSovFeat3Desc' },
        { icon: 'heroicons-outline:shield-check', titleKey: 'pillarNetworkSovFeat4', descKey: 'pillarNetworkSovFeat4Desc' }
      ],
      showVendorModal: false,
      networkVendors: ['Cisco', 'Juniper', 'Nokia', 'Huawei', 'ZTE', 'Ubiquiti', 'MikroTik', 'Calix', 'Zhone'],
      allSupportedVendors: [
        'Cisco', 'Huawei', 'ZTE', 'Ubiquiti', 'TP-Link', 'MikroTik',
        'Calix', 'Zhone', 'Adtran', 'Juniper', 'Arista', 'Nokia', 'GenieACS',
        'VSOL', 'Ericsson', 'Extreme Networks', 'Fortinet', 'Palo Alto', 'Aruba',
        'Ruckus', 'Cambium', 'Mimosa', 'Siklu', 'Radwin'
      ],
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
