<template>
  <div class="flex flex-wrap gap-4">
    <div class="px-5 py-3 rounded-2xl bg-slate-900 text-white flex items-center gap-3 shadow-xl border border-white/5">
      <Icon icon="heroicons-outline:shield-check" class="text-teal-400 text-lg" />
      <div class="flex flex-col">
        <span class="text-[9px] font-black uppercase tracking-widest opacity-40">{{ $t('pillarResidency') }}</span>
        <span class="text-xs font-bold">{{ $t('pillarSovereign') }}</span>
      </div>
    </div>
    <div class="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
      <Icon icon="heroicons-outline:refresh" class="text-blue-500 text-lg" />
      <div class="flex flex-col">
        <span class="text-[9px] font-black uppercase tracking-widest text-white/40">{{ $t('pillarSync') }}</span>
        <span class="text-xs font-bold text-white">{{ $t('pillarRealTime') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default { components: { Icon } }
</script>
