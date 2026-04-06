<template>
  <div class="flex flex-wrap gap-4">
    <div class="px-5 py-3 rounded-2xl text-white flex items-center gap-3 shadow-xl" style="background: linear-gradient(135deg, #a446f4, #4138f3); border: 1px solid rgba(255,255,255,0.2)">
      <Icon icon="heroicons-outline:shield-check" class="text-teal-300 text-lg" />
      <div class="flex flex-col">
        <span class="text-[9px] font-black uppercase tracking-widest opacity-40">{{ $t('pillarResidency') }}</span>
        <span class="text-xs font-bold">{{ $t('pillarSovereign') }}</span>
      </div>
    </div>
    <div class="px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3 shadow-sm">
      <Icon icon="heroicons-outline:refresh" class="text-[#7F39E9] text-lg" />
      <div class="flex flex-col">
        <span class="text-[9px] font-black uppercase tracking-widest text-slate-400">{{ $t('pillarSync') }}</span>
        <span class="text-xs font-bold text-slate-900">{{ $t('pillarRealTime') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default { components: { Icon } }
</script>
