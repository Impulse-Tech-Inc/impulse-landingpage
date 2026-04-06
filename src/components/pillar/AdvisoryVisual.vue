<template>
  <div class="relative w-full max-w-md">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(127,57,233,0.1),transparent_70%)]" />

    <div class="relative z-10 bg-white border border-slate-200 rounded-[3rem] p-8 shadow-2xl overflow-hidden">
      <!-- Radar -->
      <div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,rgba(127,57,233,0.5)_0%,transparent_70%)]" />
      <div class="absolute inset-0 border border-[#7F39E9]/10 rounded-full border-dashed m-6 animate-spin-slow" />

      <div class="relative z-10 space-y-8">
        <!-- Header -->
        <div class="flex justify-between items-start">
          <div class="space-y-1">
            <div class="text-[8px] font-black text-[#7F39E9] uppercase tracking-[0.4em]">Strategic Command</div>
            <h3 class="text-2xl font-black text-slate-900 tracking-tighter">Operational KPI Ownership</h3>
          </div>
          <div class="p-3 rounded-xl bg-[#7F39E9]/10 border border-[#7F39E9]/20 text-[#7F39E9] shadow-lg">
            <Icon icon="heroicons-outline:map" class="text-2xl" />
          </div>
        </div>

        <!-- Metrics -->
        <div class="grid grid-cols-2 gap-4">
          <div class="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Strategic Outcome</span>
              <Icon icon="heroicons-outline:trending-up" class="text-teal-500 text-sm" />
            </div>
            <div class="text-xl font-black text-slate-900 tracking-tighter uppercase">Proven ROI</div>
            <div class="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
              <div class="h-full bg-teal-500 animate-progress-85" />
            </div>
          </div>
          <div class="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Churn Target</span>
              <Icon icon="heroicons-outline:cursor-click" class="text-teal-500 text-sm" />
            </div>
            <div class="text-xl font-black text-slate-900 tracking-tighter">-24%</div>
            <div class="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
              <div class="h-full bg-teal-500 animate-progress-72" />
            </div>
          </div>
        </div>

        <!-- Audit Bars -->
        <div class="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] space-y-4 relative overflow-hidden">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#7F39E9] animate-pulse" />
              <span class="text-[8px] font-black text-slate-500 uppercase tracking-widest">Network Audit</span>
            </div>
            <span class="text-[8px] font-mono text-[#7F39E9]">PHASE_04</span>
          </div>
          <div class="flex items-end gap-1 h-12">
            <div v-for="(h, i) in [60,40,85,30,95,50,70,45,80,55,90,65]" :key="i" class="flex-1 bg-[#7F39E9]/15 border-t border-[#7F39E9]/40 rounded-t-sm animate-bar-reverse" :style="{ height: `${h}%`, animationDelay: `${i * 0.05}s` }" />
          </div>
          <div class="flex justify-between items-center text-[7px] font-black text-slate-400 uppercase tracking-widest">
            <span>Silo Detection: Active</span>
            <span>Latency: 14ms</span>
          </div>
        </div>
      </div>

      <!-- Decorative -->
      <div class="absolute top-0 right-0 p-8 opacity-5">
        <Icon icon="heroicons-outline:map" class="text-[#7F39E9] text-7xl" />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default { components: { Icon } }
</script>

<style scoped>
.animate-spin-slow { animation: spin 10s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.animate-progress-85 { animation: p85 2s ease-out both infinite; }
@keyframes p85 { 0% { width: 0; } 50%, 100% { width: 85%; } }

.animate-progress-72 { animation: p72 2s ease-out both infinite; animation-delay: 0.5s; }
@keyframes p72 { 0% { width: 0; } 50%, 100% { width: 72%; } }

.animate-bar-reverse { animation: barRev 2s ease-in-out infinite alternate; }
@keyframes barRev { from { transform: scaleY(1); } to { transform: scaleY(0.4); } }
</style>
