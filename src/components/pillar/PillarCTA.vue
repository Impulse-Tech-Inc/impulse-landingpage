<template>
  <div class="p-12 md:p-20 rounded-[3rem] text-white text-center relative overflow-hidden" style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); border: 1px solid rgba(255,255,255,0.2)">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(127,57,233,0.1),transparent_70%)]" />
    <div class="relative z-10 space-y-10">
      <h2 class="text-4xl md:text-6xl font-black tracking-tighter leading-none text-white">
        Your Network. Fully Visible.<br />
        <span class="text-white">Fully Yours.</span>
      </h2>
      <p class="text-lg text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
        ImpulseOS deployments go live in 14 days. Join the 20+ operators already protecting revenue with real-time network intelligence.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button
          class="px-10 py-5 bg-white text-slate-900 text-xs font-black uppercase tracking-[0.3em] rounded-full hover:opacity-90 transition-all shadow-2xl"
          @click="$emit('request')"
        >
          {{ $t('pillarRequestAccess') }} →
        </button>
        <button
          class="text-white/40 hover:text-white font-bold border-b border-white/20 hover:border-white pb-1 transition-all text-sm"
          @click="$emit('request')"
        >
          {{ $t('pillarBack') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default { emits: ['request'] }
</script>
