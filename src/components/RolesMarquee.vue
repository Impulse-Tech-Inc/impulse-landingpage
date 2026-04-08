<template>
  <section class="relative bg-[#030305] py-20 overflow-hidden">
    <!-- Premium Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a2e_0%,#030305_100%)]" />
      <div class="absolute top-[-20%] left-1/2 -translate-x-1/2 w-full max-w-[1400px] aspect-square">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,57,233,0.05)_0%,transparent_70%)]" />
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="absolute inset-[15%] border border-white/[0.02] rounded-full" style="animation: rmSpin 90s linear infinite" />
          <div class="absolute inset-[30%] border border-white/[0.03] rounded-full border-dashed" style="animation: rmSpin 50s linear infinite reverse" />
        </div>
      </div>
    </div>
    <div class="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center px-6 opacity-0" ref="headerRef">
      <h2 class="text-3xl font-extrabold text-white md:text-[42px] md:leading-tight">
        {{ $t('everyoneWinsTitle') }}
      </h2>
      <p class="mt-5 max-w-2xl text-base font-medium text-white/60 md:text-lg">
        {{ $t('everyoneWinsDesc') }}
      </p>
    </div>

    <div class="relative z-10 mt-16 overflow-hidden opacity-0" ref="marqueeRef">
      <div class="group relative py-4">
        <div class="marquee-track flex w-max gap-8 px-6 group-hover:[animation-play-state:paused]">
          <div
            v-for="card in cards"
            :key="card.id"
            :class="[
              'relative w-[360px] shrink-0 rounded-[32px] p-8 transition-all duration-300',
              'hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(127,57,233,0.15)]',
              card.bgColor
            ]"
          >
            <div :class="['mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-semibold', card.badgeColor]">
              {{ card.badge }}
            </div>
            <h3 :class="['text-xl font-bold mb-3', card.textColor]">
              {{ card.title }}
            </h3>
            <p :class="['text-sm leading-relaxed', card.descriptionColor]">
              {{ card.description }}
            </p>
          </div>

          <div
            v-for="card in cards"
            :key="`${card.id}-duplicate`"
            :class="[
              'relative w-[360px] shrink-0 rounded-[32px] p-8 transition-all duration-300',
              'hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(127,57,233,0.15)]',
              card.bgColor
            ]"
          >
            <div :class="['mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-semibold', card.badgeColor]">
              {{ card.badge }}
            </div>
            <h3 :class="['text-xl font-bold mb-3', card.textColor]">
              {{ card.title }}
            </h3>
            <p :class="['text-sm leading-relaxed', card.descriptionColor]">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import useIntersectionObserver from '@/composables/useIntersectionObserver'

const headerRef = ref(null)
const marqueeRef = ref(null)

const { observe: observeFadeUp } = useIntersectionObserver('animate-fade-up')
const { observe: observeFadeIn } = useIntersectionObserver('animate-fade-in')

onMounted(() => {
  if (headerRef.value) {
    observeFadeUp(headerRef.value)
  }
  if (marqueeRef.value) {
    // Añadir un pequeño delay para que aparezca después del header
    marqueeRef.value.classList.add('animate-delay-200')
    observeFadeIn(marqueeRef.value)
  }
})

const cards = [
  {
    id: 'revenue',
    badge: 'RL',
    title: 'Revenue Leadership',
    description:
      "Lead with confidence, forecast with precision, and unlock your team's full potential - with complete visibility across the business.",
    link: '#',
    bgColor: 'bg-[#15202b]',
    textColor: 'text-white',
    badgeColor: 'bg-[#4A90B8] text-white',
    descriptionColor: 'text-white/60',
    linkColor: 'text-[#4A90B8]',
    linkHoverColor: 'hover:text-white'
  },
  {
    id: 'support',
    badge: 'CS',
    title: 'Customer Support',
    description:
      'Deliver standout customer experiences, reduce churn, and drive expansion with AI that keeps your teams in sync.',
    link: '#',
    bgColor: 'bg-[#2a1520]',
    textColor: 'text-white',
    badgeColor: 'bg-[#E07A7A] text-white',
    descriptionColor: 'text-white/60',
    linkColor: 'text-[#E07A7A]',
    linkHoverColor: 'hover:text-white'
  },
  {
    id: 'sales',
    badge: 'SM',
    title: 'Sales & Marketing',
    description:
      'Drive scalable performance, improve pipeline conversion, and lead change that sticks with Impulse as your system of truth.',
    link: '#',
    bgColor: 'bg-[#1e1525]',
    textColor: 'text-white',
    badgeColor: 'bg-[#8B6DB8] text-white',
    descriptionColor: 'text-white/60',
    linkColor: 'text-[#8B6DB8]',
    linkHoverColor: 'hover:text-white'
  },
  {
    id: 'network',
    badge: 'NO',
    title: 'Network Operations',
    description:
      'Proactively monitor networks, detect issues instantly, and ensure uptime - connecting performance to business outcomes.',
    link: '#',
    bgColor: 'bg-[#0f2018]',
    textColor: 'text-white',
    badgeColor: 'bg-[#5BA86D] text-white',
    descriptionColor: 'text-white/60',
    linkColor: 'text-[#5BA86D]',
    linkHoverColor: 'hover:text-white'
  },
  {
    id: 'finance',
    badge: 'FB',
    title: 'Finance & Billing',
    description:
      'Eliminate revenue leakage, ensure billing accuracy, and track collections - automatically connecting finance to growth.',
    link: '#',
    bgColor: 'bg-[#1a1a2e]',
    textColor: 'text-white',
    badgeColor: 'bg-[#E0A960] text-white',
    descriptionColor: 'text-white/60',
    linkColor: 'text-[#E0A960]',
    linkHoverColor: 'hover:text-white'
  }
]
</script>

<style scoped>
@keyframes rmSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes marquee-slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee-track {
  animation: marquee-slide 28s linear infinite;
}
</style>
