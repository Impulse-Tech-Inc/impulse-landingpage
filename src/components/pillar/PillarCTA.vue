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
      <div class="flex flex-col items-center gap-6 max-w-md mx-auto">
        <div class="flex flex-col sm:flex-row items-center gap-3 w-full">
          <input
            v-model="email"
            type="email"
            :placeholder="$t('heroEmailPlaceholder')"
            :disabled="sending"
            class="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-white placeholder:text-white/40"
          />
          <button
            class="w-full sm:w-auto min-w-[200px] px-10 py-4 bg-white text-slate-900 text-xs font-black uppercase tracking-[0.3em] rounded-xl transition-all shadow-2xl whitespace-nowrap flex items-center justify-center gap-2 relative"
            :class="!isValidEmail || sending ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-90'"
            :disabled="!isValidEmail || sending"
            @click="$emit('request', email)"
          >
            <svg v-if="sending" class="w-4 h-4 animate-spin absolute" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" /><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
            <span :class="sending ? 'invisible' : ''">{{ $t('pillarRequestAccess') }}</span>
          </button>
        </div>
        <button
          class="text-white/40 hover:text-white font-bold border-b border-white/20 hover:border-white pb-1 transition-all text-sm"
          @click="$emit('goback')"
        >
          {{ $t('pillarBack') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['request', 'goback'],
  props: {
    sending: { type: Boolean, default: false }
  },
  data() {
    return { email: '' }
  },
  computed: {
    isValidEmail() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
    }
  }
}
</script>
