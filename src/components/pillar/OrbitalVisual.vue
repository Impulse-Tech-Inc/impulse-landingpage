<template>
  <div class="relative w-full h-full flex items-center justify-center">
    <!-- Topology Grid -->
    <div class="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-1 opacity-10 pointer-events-none">
      <div v-for="i in 144" :key="i" class="w-full h-full bg-slate-400 rounded-full animate-dot" :style="{ animationDelay: `${Math.random() * 5}s` }" />
    </div>

    <!-- Rotating Rings -->
    <div v-for="i in 3" :key="'ring-'+i" class="absolute inset-0 border border-[#7F39E9]/20 rounded-full border-dashed" :class="i % 2 === 0 ? 'animate-spin-cw' : 'animate-spin-ccw'" :style="{ transform: `scale(${1 + i * 0.2})` }" />

    <!-- Signal Dots -->
    <div v-for="(brand, i) in vendors" :key="'signal-'+brand" class="absolute signal-dot-wrapper" :style="getSignalStyle(i, vendors.length)">
      <div class="w-1.5 h-1.5 bg-teal-500 rounded-full signal-dot" :style="{ animationDelay: `${i * 0.4}s` }" />
    </div>

    <!-- Core -->
    <div class="relative w-48 h-48 bg-white rounded-full flex flex-col items-center justify-center border border-slate-200 overflow-hidden z-10" style="box-shadow: 0 0 120px rgba(127,57,233,0.3)">
      <div class="absolute inset-0 bg-gradient-to-br from-[#7F39E9]/5 to-transparent" />
      <div class="flex items-center gap-1 h-12 mb-4">
        <div v-for="i in 8" :key="i" class="w-1.5 bg-[#7F39E9]/40 rounded-full animate-wave" :style="{ animationDelay: `${i * 0.1}s`, height: '20px' }" />
      </div>
      <div class="text-center relative z-10">
        <div class="text-[9px] font-black uppercase tracking-[0.4em] text-[#7F39E9] mb-1">Telemetrics_Core</div>
        <div class="flex items-center gap-2 justify-center">
          <div class="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          <span class="text-[10px] font-black uppercase tracking-widest text-slate-900">2M_SIG/SEC</span>
        </div>
      </div>
    </div>

    <!-- Vendor Nodes -->
    <div v-for="(brand, i) in vendors" :key="brand" class="absolute" :style="getNodeStyle(i, vendors.length)">
      <div class="px-3 py-1.5 border rounded-lg bg-white/95 border-slate-200 text-slate-900 shadow-xl flex items-center gap-2 whitespace-nowrap">
        <div class="w-1.5 h-1.5 rounded-full bg-[#7F39E9] animate-pulse shrink-0" />
        <span class="text-[9px] font-black tracking-[0.2em] uppercase">{{ brand }}</span>
      </div>
    </div>

    <!-- AND MANY MORE Node -->
    <div class="absolute" :style="getNodeStyle(vendors.length, vendors.length + 1)">
      <div class="px-3 py-1.5 border rounded-lg border-[#7F39E9]/40 text-[#7F39E9] shadow-xl flex items-center gap-2 whitespace-nowrap cursor-pointer hover:bg-[#7F39E9]/10 transition-all" style="background: linear-gradient(135deg, rgba(164,70,244,0.08), rgba(65,56,243,0.08))" @click="showManyMore = true">
        <div class="w-1.5 h-1.5 rounded-full bg-[#7F39E9] animate-pulse shrink-0" />
        <span class="text-[9px] font-black tracking-[0.2em] uppercase">AND MANY MORE...</span>
      </div>
    </div>

    <!-- Scanner Line -->
    <div class="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent z-10 animate-scan" />

    <!-- Many More Modal -->
    <div v-if="showManyMore" class="fixed inset-0 z-50 flex items-center justify-center p-6" @click.self="showManyMore = false">
      <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" @click="showManyMore = false" />
      <div class="relative z-10 bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full space-y-6">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-black text-slate-900 uppercase tracking-wider">Supported Vendors</h3>
          <button class="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-400 transition-all" @click="showManyMore = false">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div v-for="v in allVendors" :key="v" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-center">
            <span class="text-[10px] font-black uppercase tracking-widest text-slate-700">{{ v }}</span>
          </div>
        </div>
        <p class="text-center text-xs text-slate-400 font-bold uppercase tracking-widest">+ Custom integrations available</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vendors: ['CISCO', 'HUAWEI', 'ZTE', 'UBIQUITI', 'TP-LINK', 'MIKROTIK', 'CALIX'],
      showManyMore: false,
      moreVendors: ['Adtran', 'Juniper', 'Arista', 'Calix', 'Nokia', 'VSOL', 'Ericsson', 'Extreme Networks', 'Fortinet', 'Palo Alto', 'Aruba', 'Ruckus', 'Cambium', 'Mimosa', 'Siklu', 'Radwin']
    }
  },
  computed: {
    allVendors() {
      return [...this.vendors, ...this.moreVendors]
    }
  },
  methods: {
    getNodeStyle(i, total) {
      const angle = (i * (360 / total)) - 90
      const radius = 42
      const x = Math.cos((angle * Math.PI) / 180) * radius
      const y = Math.sin((angle * Math.PI) / 180) * radius
      return {
        top: `calc(50% + ${y}%)`,
        left: `calc(50% + ${x}%)`,
        transform: 'translate(-50%, -50%)'
      }
    },
    getSignalStyle(i, total) {
      const angle = (i * (360 / total)) - 90
      const rad = (angle * Math.PI) / 180
      return {
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        '--signal-radius': '120px'
      }
    }
  }
}
</script>

<style scoped>
.animate-spin-cw { animation: spinCW 30s linear infinite; }
.animate-spin-ccw { animation: spinCCW 40s linear infinite; }
@keyframes spinCW { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes spinCCW { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }

.animate-dot { animation: dotPulse 4s ease-in-out infinite; }
@keyframes dotPulse { 0%, 100% { opacity: 0.1; } 50% { opacity: 0.3; } }

.animate-wave { animation: wave 1s ease-in-out infinite alternate; }
@keyframes wave { from { height: 10px; } to { height: 30px; } }

.animate-scan { animation: scan 8s ease-in-out infinite; }
@keyframes scan { 0%, 100% { top: 0%; } 50% { top: 100%; } }

.signal-dot-wrapper {
  width: 0;
  height: 0;
  pointer-events: none;
}

.signal-dot {
  animation: signalOut 3s linear infinite;
  opacity: 0;
}

@keyframes signalOut {
  0% { transform: translateX(0); opacity: 0; }
  10% { opacity: 1; }
  80% { opacity: 0.6; }
  100% { transform: translateX(var(--signal-radius, 120px)); opacity: 0; }
}
</style>
