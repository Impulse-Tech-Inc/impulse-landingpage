<template>
  <section class="relative bg-[#030305] py-20 overflow-hidden md:overflow-visible">
    <!-- Premium Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1a1a2e_0%,#030305_100%)]" />
      <div class="absolute top-[-30%] left-1/2 -translate-x-1/2 w-full max-w-[1200px] aspect-square">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(127,57,233,0.06)_0%,transparent_70%)]" />
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="absolute inset-[10%] border border-white/[0.02] rounded-full" style="animation: tsSpin 80s linear infinite" />
          <div class="absolute inset-[25%] border border-white/[0.03] rounded-full border-dashed" style="animation: tsSpin 60s linear infinite reverse" />
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-1/3 opacity-[0.02]" style="background-image: linear-gradient(to right, #7F39E9 1px, transparent 1px), linear-gradient(to bottom, #7F39E9 1px, transparent 1px); background-size: 120px 120px; transform: perspective(1000px) rotateX(75deg) scale(2.5); mask-image: linear-gradient(to top, black, transparent); -webkit-mask-image: linear-gradient(to top, black, transparent)" />
    </div>
    <div class="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-5 md:px-6">
      <!-- heading -->
      <div class="opacity-0" ref="headingRef">
        <h2 class="text-2xl md:text-3xl font-extrabold text-white md:text-[44px] md:leading-tight">
          {{ $t('provenResultsTitle') }}
        </h2>
        <p class="mt-4 max-w-3xl text-sm md:text-base text-white/60 md:text-lg">
          {{ $t('provenResultsDesc') }}
        </p>
      </div>

      <!-- MOBILE: Vertical timeline cards -->
      <div class="md:hidden space-y-4">
        <div
          v-for="(item, index) in timeline"
          :key="'m-'+item.id"
          :ref="el => { if (el) timelineItemRefs[index] = el }"
          class="opacity-0"
        >
          <button
            class="w-full text-left rounded-2xl transition-all duration-300 overflow-hidden"
            :class="activeCard === index ? 'bg-[#4c4167]' : 'bg-[#5b4e76]'"
            @click="activeCard = activeCard === index ? null : index"
          >
            <!-- Header -->
            <div class="flex items-center justify-between px-5 py-4">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white text-xs font-black">
                  {{ String(index + 1).padStart(2, '0') }}
                </div>
                <div>
                  <div class="text-sm font-bold text-white">{{ item.title }}</div>
                  <div class="text-[10px] text-white/40 font-medium">{{ item.duration }}</div>
                </div>
              </div>
              <svg
                class="w-4 h-4 text-white/40 transition-transform duration-300"
                :class="activeCard === index ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <!-- Expandable detail -->
            <Transition
              enter-active-class="ts-expand-enter"
              leave-active-class="ts-expand-leave"
              @before-enter="beforeExpand"
              @enter="doExpand"
              @after-enter="afterExpand"
              @before-leave="beforeCollapse"
              @leave="doCollapse"
              @after-leave="afterCollapse"
            >
              <div v-if="activeCard === index" class="overflow-hidden">
                <img :src="item.image" :alt="item.title" class="w-full h-36 object-cover" />
                <div class="px-5 py-4">
                  <p class="text-sm text-white/60 leading-relaxed">{{ item.detail }}</p>
                </div>
              </div>
            </Transition>
          </button>
        </div>
      </div>

      <!-- DESKTOP: Original hover timeline -->
      <div class="hidden md:block rounded-lg overflow-visible" aria-label="Delivery timeline">
        <!-- header row -->
        <div class="grid grid-cols-4 divide-x divide-white/10">
          <div
            v-for="(item, index) in timeline"
            :key="item.id"
            :ref="el => { if (el) timelineItemRefs[index + 4] = el }"
            class="group relative isolate flex flex-col px-6 py-10 transition-colors duration-200 bg-[#5b4e76] hover:bg-[#4c4167] text-white opacity-0"
          >
            <div class="text-sm font-semibold leading-snug">
              <span>{{ item.title }}</span>
            </div>

            <!-- POPUP / TOOLTIP AL HACER HOVER -->
            <div
              class="pointer-events-none absolute left-1/2 top-0 w-72 max-w-[90vw]
                     -translate-x-1/2 -translate-y-[calc(100%+28px)]
                     rounded-3xl bg-white text-left opacity-0 invisible
                     shadow-[0_20px_50px_rgba(92,58,173,0.25)]
                     transition duration-300 z-50
                     group-hover:-translate-y-[calc(100%+14px)]
                     group-hover:opacity-100 group-hover:visible"
            >
              <img :src="item.image" :alt="item.title" class="h-40 w-full rounded-t-3xl object-cover" />
              <div class="p-5 text-[#2f1a54]">
                <p class="text-sm leading-relaxed text-[#4f4669]">
                  {{ item.detail }}
                </p>
              </div>
              <span
                class="absolute left-1/2 -bottom-2 h-4 w-4 -translate-x-1/2 rotate-45 rounded-sm border border-[#d7caef] bg-white"
              ></span>
            </div>
          </div>
        </div>

        <!-- thin divider line -->
        <div class="h-[1px] bg-white/10"></div>

        <!-- durations row -->
        <div class="grid grid-cols-4 divide-x divide-white/10 bg-white/5">
          <div v-for="item in timeline" :key="item.id + '-duration'" class="p-5">
            <p class="text-sm text-white/50">{{ item.duration }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import useIntersectionObserver from '@/composables/useIntersectionObserver'

const headingRef = ref(null)
const timelineItemRefs = ref([])
const activeCard = ref(null)

// Observers
const { observe: observeFadeUp } = useIntersectionObserver('animate-fade-up')
const { observe: observeGentleRise } = useIntersectionObserver('animate-gentle-rise')

onMounted(() => {
  if (headingRef.value) {
    observeFadeUp(headingRef.value)
  }

  timelineItemRefs.value.forEach((item, index) => {
    if (item) {
      const delays = [150, 250, 350, 450, 150, 250, 350, 450]
      const delayClass = `animate-delay-${delays[index] || 500}`
      item.classList.add(delayClass)
      observeGentleRise(item)
    }
  })
})

// Expand/collapse transition helpers
const beforeExpand = (el) => { el.style.height = '0' }
const doExpand = (el) => { el.style.height = el.scrollHeight + 'px' }
const afterExpand = (el) => { el.style.height = null }
const beforeCollapse = (el) => { el.style.height = el.scrollHeight + 'px' }
const doCollapse = (el) => { el.style.height = '0' }
const afterCollapse = (el) => { el.style.height = null }

const timeline = [
  {
    id: 'briefing',
    title: 'Exec. Briefing',
    subtitle: 'Strategic Alignment',
    duration: '2–3 Hours',
    detail:
      'Meet with our executive team to align on business priorities, surface quick wins, and map the value you want to unlock with AI.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'assessment',
    title: 'Technology Assessment',
    subtitle: 'Capability Deep Dive',
    duration: '2–3 Days',
    detail:
      'Gain a rich view into the platform stack, architecture best practices, and the highest-impact use cases tailored to your data.',
    image:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'trial',
    title: 'Production Trial',
    subtitle: 'AI Sprint',
    duration: '8–12 Weeks',
    detail:
      'Prototype the solution with your real data, validate models alongside our experts, and define the playbook for go-live.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'deployment',
    title: 'AI Application Deployment in Production',
    subtitle: 'Deployment in Production',
    duration: '3–6 Months',
    detail:
      'Scale the proven use case, operationalize monitoring and feedback loops, and optimize impact across your organization.',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80'
  }
]
</script>

<style scoped>
@keyframes tsSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.ts-expand-enter,
.ts-expand-leave {
  overflow: hidden;
  transition: height 0.3s ease;
}

@media (hover: hover) and (pointer: fine) {
  .group:hover { /* estilos extra opcionales */ }
}
</style>
