<template>
      <div class="space-y-24">

        <!-- SECTION 1: HERO -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="flex items-center gap-4">
              <div class="w-12 h-px" style="background: linear-gradient(90deg, #a446f4, #4138f3)" />
              <span class="text-[12px] font-black uppercase tracking-[0.5em] text-[#7F39E9]">Intelligence & Action</span>
            </div>
            <h1 class="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight md:leading-[0.85] tracking-tighter">Support<br />AI.</h1>
            <h2 class="text-2xl md:text-3xl font-bold text-white/70 tracking-tight leading-tight max-w-md">{{ $t('pillarSupportHeroSubtitle') }}</h2>
            <p class="text-xl text-white/50 font-light max-w-xl leading-relaxed">{{ $t('pillarSupportHero') }}</p>
            <PillarBadges />
          </div>
          <div class="relative aspect-square flex items-center justify-center max-h-[50vh] lg:max-h-none">
            <SupportVisual />
          </div>
        </div>

        <!-- SECTION 2: THE SUPPORT GAP -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 bg-white/[0.03] border border-white/10 rounded-[3rem] text-center space-y-12">
          <div class="space-y-4">
            <div class="text-[12px] font-black text-[#7F39E9] uppercase tracking-[0.5em]">{{ $t('pillarSupportGapLabel') }}</div>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none max-w-4xl mx-auto">
              {{ $t('pillarSupportProblem') }}
            </h2>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div class="p-8 bg-rose-500/5 border border-rose-500/10 rounded-[2rem] space-y-6 text-left">
              <h3 class="text-xl font-black text-rose-500 tracking-tight">{{ $t('pillarSupportOther') }}</h3>
              <ul class="space-y-3">
                <li v-for="(item, i) in supportOldKeys" :key="i" class="flex items-center gap-3 text-white/60 font-medium text-sm">
                  <div class="w-1.5 h-1.5 rounded-full bg-rose-500/40 shrink-0" />{{ $t(item) }}
                </li>
              </ul>
            </div>
            <div class="p-8 bg-[#7F39E9]/5 border border-[#7F39E9]/30 rounded-[2rem] space-y-6 text-left">
              <h3 class="text-xl font-black text-white tracking-tight">{{ $t('pillarSupportImpulse') }}</h3>
              <ul class="space-y-3">
                <li v-for="(item, i) in supportNewKeys" :key="i" class="flex items-center gap-3 text-white font-bold text-sm">
                  <Icon icon="heroicons-outline:check-circle" class="text-teal-500 text-lg shrink-0" />{{ $t(item) }}
                </li>
              </ul>
            </div>
          </div>

          <div class="pt-8">
            <div class="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter leading-none">{{ $t('pillarSupportBigStat') }}</div>
            <div class="text-lg font-bold text-[#7F39E9] uppercase tracking-[0.3em] mt-4">{{ $t('pillarSupportBigStatLabel') }}</div>
          </div>
        </div>

        <!-- SECTION 3: OMNI-CHANNEL -->
        <div v-reveal class="space-y-12">
          <div class="text-center space-y-6 max-w-3xl mx-auto">
            <div class="text-[10px] font-black uppercase tracking-[0.4em] text-[#7F39E9]">{{ $t('pillarSupportOmniLabel') }}</div>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{{ $t('pillarSupportOmniTitle') }}</h2>
            <p class="text-xl text-white/50 font-light leading-relaxed">{{ $t('pillarSupportOmniDesc') }}</p>
          </div>

          <!-- Hub Diagram -->
          <div class="relative h-[300px] md:h-[450px] w-full flex items-center justify-center overflow-hidden">
            <!-- Ambient Glow -->
            <div class="absolute w-64 h-64 rounded-full blur-[100px] opacity-20" style="background: linear-gradient(135deg, #a446f4, #4138f3)" />

            <!-- Central Brain -->
            <div class="relative z-20 w-44 h-44 rounded-full flex flex-col items-center justify-center text-center shadow-[0_0_60px_rgba(127,57,233,0.4)] omni-brain-glow" style="background: linear-gradient(135deg, #a446f4, #4138f3)">
              <!-- Inner ring shimmer -->
              <div class="absolute inset-1 rounded-full border border-white/20" />
              <Icon icon="heroicons-outline:lightning-bolt" class="text-white text-5xl mb-2 drop-shadow-lg" />
              <div class="text-[10px] font-black uppercase tracking-[0.3em] text-white">Impulse AI</div>
              <div class="flex items-center gap-1.5 mt-1.5">
                <div class="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_#14b8a6]" />
                <span class="text-[8px] font-black uppercase tracking-widest text-white/80">Intent Router</span>
              </div>
            </div>

            <!-- Orbiting Rings -->
            <div class="absolute w-[280px] h-[280px] border border-[#7F39E9]/15 rounded-full border-dashed omni-ring-1" />
            <div class="absolute w-[380px] h-[380px] border border-[#7F39E9]/10 rounded-full border-dashed omni-ring-2" />

            <!-- Signal Pulses (brain to nodes) -->
            <div v-for="(ch, i) in supportChannels" :key="'pulse-'+i" class="absolute w-full h-full pointer-events-none">
              <div class="absolute top-1/2 left-1/2 w-2 h-2 rounded-full shadow-[0_0_10px_#7F39E9] omni-signal-pulse" style="background: linear-gradient(135deg, #a446f4, #4138f3)" :style="{ animationDelay: `${i * 0.6}s`, '--angle': `${(i * (360 / supportChannels.length)) - 90}deg` }" />
            </div>

            <!-- Channel Nodes -->
            <div v-for="(ch, i) in supportChannels" :key="i"
              class="absolute w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl text-[#7F39E9] hover:scale-110 hover:border-[#7F39E9]/50 transition-all cursor-default"
              :style="getOmniNodePos(i, supportChannels.length, 120)"
            >
              <Icon :icon="ch.icon" class="text-xl" />
            </div>
          </div>

          <!-- Channel Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div v-for="(ch, i) in supportChannels" :key="'grid-'+i" class="p-6 bg-white/5 border border-white/10 rounded-[2rem] space-y-4 text-center hover:border-[#7F39E9]/30 hover:bg-[#7F39E9]/5 transition-all">
              <div class="w-12 h-12 mx-auto rounded-xl bg-[#7F39E9]/10 flex items-center justify-center text-[#7F39E9]">
                <Icon :icon="ch.icon" class="text-xl" />
              </div>
              <h4 class="text-sm font-black text-white uppercase tracking-wider">{{ $t(ch.titleKey) }}</h4>
              <p class="text-xs text-white/50 font-light leading-relaxed">{{ $t(ch.descKey) }}</p>
            </div>
          </div>
        </div>

        <!-- SECTION 4: CONTEXT ENGINEERING -->
        <div v-reveal class="p-6 md:p-10 lg:p-16 bg-white/5 border border-white/10 rounded-[3rem] space-y-12">
          <div class="text-center space-y-4 max-w-3xl mx-auto">
            <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">{{ $t('pillarSupportContextLabel') }}</div>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{{ $t('pillarSupportContextTitle') }}</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(ctx, i) in supportContextCards" :key="i" class="p-8 bg-white/5 border border-white/10 rounded-[2rem] space-y-4 hover:bg-white/10 transition-all">
              <div class="w-12 h-12 rounded-xl bg-[#7F39E9]/10 flex items-center justify-center text-[#7F39E9]">
                <Icon :icon="ctx.icon" class="text-xl" />
              </div>
              <h4 class="text-lg font-black text-white tracking-tight">{{ $t(ctx.titleKey) }}</h4>
              <p class="text-sm text-white/50 font-light leading-relaxed">{{ $t(ctx.descKey) }}</p>
            </div>
          </div>
        </div>

        <!-- SECTION 5: PROACTIVE OUTREACH -->
        <div v-reveal class="p-6 md:p-10 lg:p-16 rounded-[3rem] space-y-12" style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); border: 1px solid rgba(255,255,255,0.15)">
          <div class="text-center space-y-4 max-w-3xl mx-auto">
            <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">{{ $t('pillarSupportProactiveLabel') }}</div>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{{ $t('pillarSupportProactiveTitle') }}</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(trigger, i) in supportTriggers" :key="i" class="flex flex-col bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-sm">
              <div class="p-8 space-y-6 flex-1">
                <div class="inline-flex px-3 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-widest" :class="trigger.badgeClass">
                  {{ $t(trigger.badgeKey) }}
                </div>
                <div class="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <Icon :icon="trigger.icon" class="text-2xl" :class="trigger.iconColor" />
                </div>
                <h4 class="text-2xl font-black text-white tracking-tighter">{{ $t(trigger.titleKey) }}</h4>
                <p class="text-base text-white/60 font-light leading-relaxed">{{ $t(trigger.descKey) }}</p>
              </div>
              <div class="p-6 bg-white/5 border-t border-white/10 text-center">
                <div class="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{{ $t(trigger.statKey) }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 6: HUMAN CO-PILOT MODE -->
        <div v-reveal class="space-y-10">
          <div class="text-center space-y-4">
            <div class="text-[12px] font-black text-[#7F39E9] uppercase tracking-[0.5em]">{{ $t('pillarSupportCopilotLabel') }}</div>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{{ $t('pillarSupportCopilotTitle') }}</h2>
            <p class="text-xl text-white/50 font-light max-w-3xl mx-auto leading-relaxed">{{ $t('pillarSupportCopilotDesc') }}</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/[0.03] p-8 lg:p-14 rounded-[3rem] border border-white/10 relative overflow-hidden">
            <!-- Left: Live Chat -->
            <div class="space-y-6 relative z-10">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-3 h-3 rounded-full bg-rose-500" />
                <div class="text-[10px] font-black uppercase tracking-widest text-white/40">Live Session · ID: 8821-X</div>
              </div>
              <!-- Customer Message -->
              <div class="flex justify-end animate-fade-up" style="opacity: 0; animation-delay: 0.5s; animation-fill-mode: forwards">
                <div class="max-w-[80%] p-5 bg-white/10 rounded-2xl rounded-tr-none text-white font-medium text-sm">
                  {{ $t('pillarSupportCopilotCustomer') }}
                </div>
              </div>
              <!-- AI Suggestion -->
              <div class="flex justify-start animate-fade-up" style="opacity: 0; animation-delay: 1.5s; animation-fill-mode: forwards">
                <div class="max-w-[85%] p-5 bg-[#7F39E9]/10 border border-[#7F39E9]/20 rounded-2xl rounded-tl-none space-y-3">
                  <div class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#7F39E9]">
                    <Icon icon="heroicons-outline:lightning-bolt" class="text-xs" /> AI Suggestion
                  </div>
                  <p class="text-white font-medium text-sm leading-relaxed">{{ $t('pillarSupportCopilotAI') }}</p>
                  <div class="flex gap-2">
                    <button class="px-4 py-2 bg-[#7F39E9] rounded-lg text-[10px] font-black uppercase tracking-widest text-white">Use Response</button>
                    <button class="px-4 py-2 bg-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-white">Edit</button>
                  </div>
                </div>
              </div>
              <div class="text-[10px] font-black uppercase tracking-widest text-rose-500 animate-fade-up" style="opacity: 0; animation-delay: 2.5s; animation-fill-mode: forwards">🛡️ {{ $t('pillarSupportCopilotRescue') }}</div>
            </div>

            <!-- Right: Network Context Panel -->
            <div class="bg-white/5 border border-white/10 rounded-[2rem] p-8 space-y-8 relative z-10">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-black text-white tracking-tight">Network Context</h3>
                <div class="px-3 py-1 bg-teal-500/10 text-teal-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-teal-500/20">Sovereign AI</div>
              </div>
              <div class="space-y-4">
                <div v-for="(row, i) in supportCopilotData" :key="i" class="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0">
                  <span class="text-xs font-bold text-white/40 uppercase tracking-widest">{{ row.label }}</span>
                  <span class="text-sm font-black" :class="row.color">{{ row.value }}</span>
                </div>
              </div>
              <div class="grid grid-cols-1 gap-3">
                <button class="w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-widest text-white flex items-center justify-center gap-2" style="background: linear-gradient(135deg, #a446f4, #4138f3)">
                  <Icon icon="heroicons-outline:lightning-bolt" class="text-sm" /> Reboot Router
                </button>
                <button class="w-full py-3.5 bg-teal-500 rounded-xl text-xs font-black uppercase tracking-widest text-white flex items-center justify-center gap-2">
                  <Icon icon="heroicons-outline:credit-card" class="text-sm" /> Apply SLA Credit
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 7: CLOSING CARD -->
        <div v-reveal class="p-6 md:p-12 lg:p-20 rounded-[3rem] text-center space-y-8 relative overflow-hidden" style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); border: 1px solid rgba(255,255,255,0.15)">
          <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight max-w-4xl mx-auto">{{ $t('pillarSupportCloseLine1') }}</h2>
          <h2 class="text-3xl md:text-5xl font-black tracking-tighter leading-tight max-w-4xl mx-auto" style="color: #7dd3fc">{{ $t('pillarSupportCloseLine2') }}</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8">
            <div v-for="(stat, i) in supportCloseStats" :key="i" class="text-center">
              <div class="text-3xl md:text-4xl font-black text-white tracking-tighter">{{ stat.val }}</div>
              <div class="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mt-2">{{ $t(stat.labelKey) }}</div>
            </div>
          </div>
          <div class="flex flex-col items-center gap-4 pt-4 max-w-md mx-auto">
            <div class="flex flex-col sm:flex-row items-center gap-3 w-full">
              <input
                v-model="pillarEmail"
                type="email"
                :placeholder="$t('heroEmailPlaceholder')"
                class="w-full px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#7F39E9] transition-all text-white placeholder:text-white/30"
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
import SupportVisual from "@/components/pillar/SupportVisual.vue"
import ToastNotification from "@/components/ToastNotification.vue"
import reveal from "@/directives/reveal"
import pillarContact from "@/mixins/pillarContact"

export default {
  name: "PillarSupportSection",
  directives: { reveal },
  components: { Icon, PillarBadges, SupportVisual, ToastNotification },
  mixins: [pillarContact],
  emits: ['back', 'navigate'],
  data() {
    return {
      pillarName: 'Support',
      supportOldKeys: [
        'pillarSupportOld1', 'pillarSupportOld2', 'pillarSupportOld3', 'pillarSupportOld4', 'pillarSupportOld5'
      ],
      supportNewKeys: [
        'pillarSupportNew1', 'pillarSupportNew2', 'pillarSupportNew3', 'pillarSupportNew4', 'pillarSupportNew5'
      ],
      supportChannels: [
        { icon: 'heroicons-outline:chat-alt-2', titleKey: 'pillarSupportChWeb', descKey: 'pillarSupportChWebDesc' },
        { icon: 'heroicons-outline:device-mobile', titleKey: 'pillarSupportChWhatsApp', descKey: 'pillarSupportChWhatsAppDesc' },
        { icon: 'heroicons-outline:phone', titleKey: 'pillarSupportChVoice', descKey: 'pillarSupportChVoiceDesc' },
        { icon: 'heroicons-outline:mail', titleKey: 'pillarSupportChEmail', descKey: 'pillarSupportChEmailDesc' },
        { icon: 'heroicons-outline:chat', titleKey: 'pillarSupportChSms', descKey: 'pillarSupportChSmsDesc' }
      ],
      supportContextCards: [
        { icon: 'heroicons-outline:wifi', titleKey: 'pillarSupportCtxRouter', descKey: 'pillarSupportCtxRouterDesc' },
        { icon: 'heroicons-outline:trending-down', titleKey: 'pillarSupportCtxChurn', descKey: 'pillarSupportCtxChurnDesc' },
        { icon: 'heroicons-outline:document-text', titleKey: 'pillarSupportCtxPlan', descKey: 'pillarSupportCtxPlanDesc' },
        { icon: 'heroicons-outline:clock', titleKey: 'pillarSupportCtxHistory', descKey: 'pillarSupportCtxHistoryDesc' }
      ],
      supportTriggers: [
        { icon: 'heroicons-outline:exclamation', iconColor: 'text-amber-400', titleKey: 'pillarSupportTrigDeg', descKey: 'pillarSupportTrigDegDesc', badgeKey: 'pillarSupportTrigDegBadge', badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/30', statKey: 'pillarSupportTrigDegStat' },
        { icon: 'heroicons-outline:speakerphone', iconColor: 'text-rose-400', titleKey: 'pillarSupportTrigOutage', descKey: 'pillarSupportTrigOutageDesc', badgeKey: 'pillarSupportTrigOutageBadge', badgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/30', statKey: 'pillarSupportTrigOutageStat' },
        { icon: 'heroicons-outline:shield-exclamation', iconColor: 'text-purple-300', titleKey: 'pillarSupportTrigChurn', descKey: 'pillarSupportTrigChurnDesc', badgeKey: 'pillarSupportTrigChurnBadge', badgeClass: 'bg-purple-500/20 text-purple-300 border-purple-500/30', statKey: 'pillarSupportTrigChurnStat' }
      ],
      supportCopilotData: [
        { label: 'Device', value: 'ZTE F670L', color: 'text-white' },
        { label: 'Status', value: '● Online', color: 'text-teal-500' },
        { label: 'Outages (30d)', value: '3 incidents', color: 'text-rose-500' },
        { label: 'Churn Risk', value: '82 / 100', color: 'text-rose-500' },
        { label: 'Tenure', value: '14 months', color: 'text-white' },
        { label: 'CLV', value: '$756/yr', color: 'text-white' }
      ],
      supportCloseStats: [
        { val: '82%', labelKey: 'pillarSupportStatResolution' },
        { val: '5', labelKey: 'pillarSupportStatAgents' },
        { val: '5', labelKey: 'pillarSupportStatChannels' },
        { val: '<90s', labelKey: 'pillarSupportStatTime' }
      ],
    }
  },
  methods: {
    getOmniNodePos(i, total, radius) {
      const angle = (i * (360 / total)) - 90
      const x = Math.cos((angle * Math.PI) / 180) * radius
      const y = Math.sin((angle * Math.PI) / 180) * radius
      return { transform: `translate(${x}px, ${y}px)` }
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
