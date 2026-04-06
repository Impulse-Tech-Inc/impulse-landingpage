<template>
  <div class="flex items-center gap-5 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#7F39E9]/40 transition-all">
    <div class="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0">
      <Icon :icon="icon" class="text-lg" />
    </div>
    <span class="text-base font-bold text-slate-800">{{ $t(title) }}</span>
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
