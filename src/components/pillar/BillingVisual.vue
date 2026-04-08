<template>
  <div class="relative w-full h-full flex items-center justify-center p-8">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.15),transparent_70%)]" />

    <!-- Revenue Core -->
    <div class="relative z-20 w-56 h-56 flex items-center justify-center">
      <!-- Pulse Rings -->
      <div v-for="i in 3" :key="'ring-'+i" class="absolute inset-0 rounded-full border border-teal-500/30 animate-pulse-ring" :style="{ animationDelay: `${i * 1.3}s` }" />

      <!-- Central Ledger -->
      <div class="relative w-40 h-40 bg-white rounded-full flex flex-col items-center justify-center border border-slate-200 overflow-hidden animate-glow-teal">
        <div class="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent" />
        <Icon icon="heroicons-outline:credit-card" class="text-teal-500 text-4xl mb-2 relative z-10" />
        <div class="text-center relative z-10">
          <div class="text-[9px] font-black uppercase tracking-[0.4em] text-teal-500 mb-1">Revenue_Engine</div>
          <div class="flex items-center gap-2 justify-center">
            <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span class="text-[10px] font-black uppercase tracking-widest text-slate-900">PRECISION_BILLING</span>
          </div>
        </div>

        <!-- Currency Particles -->
        <span v-for="i in 5" :key="'$-'+i" class="absolute text-emerald-500/40 font-black text-xs animate-float" :style="{ left: `${20 + i * 15}%`, animationDelay: `${i * 0.6}s` }">$</span>
      </div>

      <!-- Service Nodes -->
      <div v-for="(node, i) in serviceNodes" :key="i" class="absolute w-12 h-12 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-center shadow-xl" :class="node.color" :style="getNodePos(i, 3, 130)">
        <Icon :icon="node.icon" class="text-base" />
        <span class="text-[7px] font-black mt-0.5">{{ node.label }}</span>
      </div>
    </div>

    <!-- Revenue HUD -->
    <div class="absolute bottom-4 left-4 right-4 p-3 bg-white/60 backdrop-blur-xl border border-slate-200 rounded-2xl font-mono text-[9px] text-emerald-600 space-y-1 overflow-hidden h-20 shadow-lg">
      <div class="flex items-center justify-between mb-1 border-b border-slate-200 pb-1">
        <span class="text-slate-400 uppercase tracking-widest">Revenue_Lifecycle_Log</span>
        <span class="flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />REAL-TIME_OCS</span>
      </div>
      <div v-for="(log, i) in logs" :key="i" class="whitespace-nowrap" :style="{ opacity: 1 - i * 0.25 }">{{ log }}</div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default {
  components: { Icon },
  data() {
    return {
      serviceNodes: [
        { icon: 'heroicons-outline:phone', label: 'VOI', color: 'text-purple-500' },
        { icon: 'heroicons-outline:wifi', label: 'FIB', color: 'text-blue-500' },
        { icon: 'heroicons-outline:desktop-computer', label: 'TV', color: 'text-teal-500' }
      ],
      logs: [
        '> OCS_SESSION_STARTED [UID_882]',
        '> METERING_DATA_INGESTED [4.2GB]',
        '> CALCULATING_TAX_JURISDICTION...',
        '> INVOICE_GENERATED_#9921'
      ],
      logInterval: null
    }
  },
  mounted() {
    const allLogs = [
      '> PAYMENT_CONFIRMED [STRIPE]',
      '> TOP-UP_APPLIED [100GB_BOOST]',
      '> SUBSCRIPTION_RENEWED_SUCCESS',
      '> REVENUE_LEAK_DETECTED_&_FIXED',
      '> REAL-TIME_OCS_CHARGING_SYNC',
      '> SETTLEMENT_BATCH_PROCESSED'
    ]
    this.logInterval = setInterval(() => {
      this.logs = [...this.logs.slice(1), allLogs[Math.floor(Math.random() * allLogs.length)]]
    }, 3500)
  },
  beforeUnmount() { clearInterval(this.logInterval) },
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
.animate-pulse-ring { animation: pulseRing 4s ease-out infinite; }
@keyframes pulseRing { from { transform: scale(0.8); opacity: 0.5; } to { transform: scale(1.5); opacity: 0; } }

.animate-glow-teal { animation: glowTeal 4s ease-in-out infinite; }
@keyframes glowTeal { 0%, 100% { box-shadow: 0 0 40px rgba(20,184,166,0.15); } 50% { box-shadow: 0 0 80px rgba(20,184,166,0.35); } }

.animate-float { animation: floatUp 3s linear infinite; }
@keyframes floatUp { from { transform: translateY(60px); opacity: 0; } 50% { opacity: 0.4; } to { transform: translateY(-60px); opacity: 0; } }
</style>
