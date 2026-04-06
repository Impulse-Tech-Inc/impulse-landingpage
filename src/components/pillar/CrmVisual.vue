<template>
  <div class="grid grid-cols-1 gap-4 w-full max-w-lg relative">
    <!-- CRM Card -->
    <div class="bg-white border-2 border-[#7F39E9]/30 rounded-[2rem] p-5 relative overflow-hidden flex flex-col h-[220px] z-20" style="box-shadow: 0 20px 50px rgba(127,57,233,0.2)">
      <div class="flex justify-between items-start mb-3">
        <div class="text-[10px] font-black text-[#7F39E9] uppercase tracking-widest">Agentic CRM</div>
        <Icon icon="heroicons-outline:user-circle" class="text-[#7F39E9] text-lg" />
      </div>
      <div class="flex-1 space-y-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-full flex items-center justify-center text-[7px] text-white font-black" style="background: linear-gradient(135deg, #a446f4, #4138f3)">JD</div>
            <div>
              <div class="text-[9px] font-bold text-slate-900">Jane Doe</div>
              <div class="text-[7px] font-black text-slate-400 uppercase tracking-tighter">Acc: #8804-X</div>
            </div>
          </div>
          <div class="px-1.5 py-0.5 rounded bg-teal-500/10 border border-teal-500/20 text-[6px] font-black text-teal-500 uppercase">Platinum 5G</div>
        </div>
        <div class="p-2.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
          <div class="flex justify-between text-[7px] font-black text-slate-400 uppercase tracking-widest">Data Usage <span class="text-slate-900">420GB / 1TB</span></div>
          <div class="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
            <div class="h-full bg-[#7F39E9] w-[42%]" />
          </div>
          <div class="flex justify-between text-[6px] font-bold text-slate-500">Signal Strength <span class="text-teal-500">-62 dBm</span></div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <button class="px-2 py-1.5 rounded-lg bg-slate-900 text-white text-[7px] font-black uppercase tracking-widest shadow-lg">New Ticket</button>
          <button class="px-2 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-900 text-[7px] font-black uppercase tracking-widest">Upgrade</button>
        </div>
      </div>
    </div>

    <!-- Growth Card -->
    <div class="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-2xl relative overflow-hidden h-[180px]">
      <div class="flex justify-between items-start mb-4">
        <div class="text-[10px] font-black text-orange-500 uppercase tracking-widest">Growth Engine</div>
        <Icon icon="heroicons-outline:trending-up" class="text-orange-500 opacity-50 text-lg" />
      </div>
      <div class="text-2xl font-black text-slate-900 tracking-tighter">+$1.4M</div>
      <div class="text-[9px] font-bold text-orange-500 uppercase mb-3">ARPU_LIFT: +12.4%</div>
      <div class="flex items-end gap-1.5 h-10">
        <div v-for="(h, i) in [30, 60, 45, 90, 100]" :key="i" class="flex-1 bg-orange-500/20 border-t-2 border-orange-500 rounded-t-sm" :style="{ height: `${h}%` }" />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default { components: { Icon } }
</script>
