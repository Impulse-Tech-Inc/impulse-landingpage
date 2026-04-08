<template>
  <div class="flex items-center gap-5 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/40 transition-all">
    <div class="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0">
      <Icon :icon="icon" class="text-lg" />
    </div>
    <span class="text-base font-bold text-white/80">{{ $t(title) }}</span>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default {
  components: { Icon },
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true }
  }
}
</script>
