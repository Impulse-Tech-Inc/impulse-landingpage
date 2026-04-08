<template>
  <Teleport to="body">
    <Transition name="toast">
      <div
        v-if="visible"
        class="fixed bottom-6 right-6 z-[9999] max-w-sm w-full pointer-events-auto"
      >
        <div
          class="flex items-start gap-4 px-5 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl"
          :class="typeClasses"
        >
          <!-- Icon -->
          <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" :class="iconBgClass">
            <svg v-if="type === 'success'" class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <svg v-else class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>

          <!-- Text -->
          <div class="flex-1 min-w-0 pt-0.5">
            <p class="text-sm font-bold text-white">{{ title }}</p>
            <p class="text-xs text-white/50 mt-0.5">{{ message }}</p>
          </div>

          <!-- Close -->
          <button
            class="flex-shrink-0 text-white/30 hover:text-white transition-colors mt-0.5"
            @click="$emit('close')"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Progress bar -->
        <div class="absolute bottom-0 left-5 right-5 h-[2px] rounded-full overflow-hidden">
          <div
            class="h-full rounded-full toast-progress"
            :class="type === 'success' ? 'bg-emerald-500' : 'bg-red-500'"
            :style="{ animationDuration: `${duration}ms` }"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  visible: { type: Boolean, default: false },
  type: { type: String, default: 'success' },
  title: { type: String, default: '' },
  message: { type: String, default: '' },
  duration: { type: Number, default: 4000 }
})

defineEmits(['close'])

const typeClasses = computed(() =>
  props.type === 'success'
    ? 'bg-[#0d1117]/90 border-emerald-500/20'
    : 'bg-[#0d1117]/90 border-red-500/20'
)

const iconBgClass = computed(() =>
  props.type === 'success'
    ? 'bg-emerald-500/10'
    : 'bg-red-500/10'
)
</script>

<style scoped>
.toast-enter-active {
  animation: toastIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.toast-leave-active {
  animation: toastOut 0.3s cubic-bezier(0.7, 0, 0.84, 0) forwards;
}

@keyframes toastIn {
  from {
    opacity: 0;
    transform: translateX(100%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes toastOut {
  from {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateX(100%) scale(0.95);
  }
}

.toast-progress {
  animation: toastProgress linear forwards;
}

@keyframes toastProgress {
  from { width: 100%; }
  to { width: 0%; }
}
</style>
