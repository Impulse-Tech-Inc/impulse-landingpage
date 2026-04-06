<template>
  <div class="relative w-full flex items-center justify-center">
    <div class="w-full max-w-md bg-white border border-slate-200 rounded-[3rem] shadow-2xl overflow-hidden">
      <!-- Main Visual Area -->
      <div class="relative flex items-center justify-center py-10 px-6">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(127,57,233,0.08),transparent_70%)]" />

        <!-- Resolution Core -->
        <div class="relative z-10 w-48 h-48 flex items-center justify-center">
          <!-- Progress Ring -->
          <svg class="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="none" stroke="#f1f5f9" stroke-width="0.5" />
            <circle cx="50" cy="50" r="46" fill="none" stroke="url(#purpleGrad)" stroke-width="2" stroke-dasharray="289" class="animate-ring" stroke-linecap="round" />
            <defs>
              <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#a446f4" />
                <stop offset="100%" stop-color="#14b8a6" />
              </linearGradient>
            </defs>
          </svg>

          <!-- Central Core -->
          <div class="relative w-32 h-32 rounded-full flex flex-col items-center justify-center overflow-hidden animate-glow" style="background: linear-gradient(135deg, #a446f4, #4138f3)">
            <div class="absolute inset-0.5 rounded-full border border-white/20" />
            <Icon icon="heroicons-outline:lightning-bolt" class="text-white text-3xl mb-1.5 relative z-10 drop-shadow-lg" />
            <div class="text-center relative z-10">
              <div class="text-[8px] font-black uppercase tracking-[0.3em] text-white mb-0.5">Support_AI</div>
              <div class="flex items-center gap-1.5 justify-center">
                <div class="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shadow-[0_0_6px_#14b8a6]" />
                <span class="text-[8px] font-black uppercase tracking-widest text-white/80">AGENTIC_MODE</span>
              </div>
            </div>
          </div>

          <!-- Channel Nodes -->
          <div v-for="(node, i) in channelNodes" :key="i" class="absolute w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-lg" :class="node.color" :style="getNodePos(i, 3, 100)">
            <Icon :icon="node.icon" class="text-sm" />
          </div>
        </div>
      </div>

      <!-- Resolution Log -->
      <div class="px-5 pb-5">
        <div class="p-3.5 bg-slate-50 border border-slate-100 rounded-xl font-mono text-[9px] text-teal-600 space-y-1 overflow-hidden">
          <div class="flex items-center justify-between mb-1.5 border-b border-slate-200 pb-1.5">
            <span class="text-slate-400 uppercase tracking-widest">Resolution_Log</span>
            <span class="flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-teal-500 animate-ping" />LIVE_EXECUTION</span>
          </div>
          <div v-for="(log, i) in logs" :key="i" class="whitespace-nowrap" :style="{ opacity: 1 - i * 0.2 }">{{ log }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default {
  components: { Icon },
  data() {
    return {
      channelNodes: [
        { icon: 'heroicons-outline:chat-alt-2', color: 'text-emerald-500' },
        { icon: 'heroicons-outline:phone', color: 'text-[#7F39E9]' },
        { icon: 'heroicons-outline:chat', color: 'text-blue-500' }
      ],
      logs: [
        '> ANALYZING_OPTICAL_LEVELS...',
        '> SIGNAL_DEGRADATION_DETECTED',
        '> TRIGGERING_REMOTE_REBOOT...',
        '> RESOLUTION_SUCCESSFUL [82s]'
      ],
      logInterval: null
    }
  },
  mounted() {
    const allLogs = [
      '> ANALYZING_LATENCY_SPIKE...',
      '> TR-069_DIAGNOSTICS_RUNNING...',
      '> SUBSCRIBER_EXPERIENCE_OPTIMIZED',
      '> RESOLUTION_SUCCESSFUL [82s]',
      '> MONITORING_WIRE_LAYER...',
      '> PROACTIVE_OUTREACH_TRIGGERED',
      '> CHURN_RISK_MITIGATED'
    ]
    this.logInterval = setInterval(() => {
      this.logs = [...this.logs.slice(1), allLogs[Math.floor(Math.random() * allLogs.length)]]
    }, 3000)
  },
  beforeUnmount() {
    clearInterval(this.logInterval)
  },
  methods: {
    getNodePos(i, total, radius) {
      const angle = (i * (360 / total)) - 90
      const x = Math.cos((angle * Math.PI) / 180) * radius
      const y = Math.sin((angle * Math.PI) / 180) * radius
      return { transform: `translate(${x}px, ${y}px)` }
    }
  }
}
</script>

<style scoped>
.animate-ring { animation: ringDraw 10s linear infinite; }
@keyframes ringDraw { from { stroke-dashoffset: 289; } to { stroke-dashoffset: 0; } }

.animate-glow {
  animation: glow 4s ease-in-out infinite;
}
@keyframes glow {
  0%, 100% { box-shadow: 0 0 30px rgba(127,57,233,0.3); }
  50% { box-shadow: 0 0 60px rgba(127,57,233,0.5), 0 0 100px rgba(127,57,233,0.15); }
}
</style>
