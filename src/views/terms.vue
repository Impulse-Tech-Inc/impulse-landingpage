<template>
  <div class="bg-[#0a0a12] min-h-screen">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#1a1a2e_0%,#0a0a12_70%)]" />
      <div class="absolute inset-0 opacity-[0.04]">
        <div class="absolute top-20 left-10 w-72 h-72 bg-[#7F39E9] rounded-full blur-[120px]"></div>
        <div class="absolute bottom-10 right-10 w-96 h-96 bg-[#a446f4] rounded-full blur-[120px]"></div>
      </div>
      <div class="relative max-w-6xl mx-auto px-6 pt-36 pb-20 text-center">
        <div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <svg class="w-4 h-4 text-[#a446f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span class="text-white/60 text-sm font-medium">{{ $t('termsPage.badge') }}</span>
        </div>
        <h1 class="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
          {{ $t('termsPage.title') }}
        </h1>
        <p class="text-white/40 text-lg max-w-2xl mx-auto mb-8 font-light">
          {{ $t('termsPage.subtitle') }}
        </p>
        <div class="flex items-center justify-center gap-6 text-sm text-white/30">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{{ $t('termsPage.lastUpdated') }}</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ $t('termsPage.readTime') }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="lg:grid lg:grid-cols-4 lg:gap-12">
        <!-- Sidebar Navigation (Desktop) -->
        <aside class="hidden lg:block">
          <div class="sticky top-28">
            <nav class="bg-white/5 rounded-2xl border border-white/10 p-6">
              <h3 class="text-[10px] font-black text-[#a446f4] uppercase tracking-[0.3em] mb-4">
                {{ $t('termsPage.contents') }}
              </h3>
              <ul class="space-y-1">
                <li v-for="(section, index) in sections" :key="index">
                  <a
                    :href="`#section-${index + 1}`"
                    class="flex items-center gap-3 text-sm text-white/40 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition-all"
                  >
                    <span class="w-6 h-6 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs flex items-center justify-center font-bold">
                      {{ index + 1 }}
                    </span>
                    <span class="line-clamp-1">{{ section.title }}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        <!-- Content -->
        <div class="lg:col-span-3">
          <!-- Introduction Card -->
          <div class="bg-white/5 rounded-[2rem] border border-white/10 p-8 mb-8">
            <div class="flex items-start gap-4 mb-6">
              <div class="w-12 h-12 bg-[#7F39E9] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 class="text-xl font-bold text-white mb-2">{{ $t('termsPage.introTitle') }}</h2>
                <p class="text-white/50 leading-relaxed font-light">
                  {{ $t('termsPage.introText') }}
                </p>
              </div>
            </div>
            <div class="bg-[#7F39E9]/10 rounded-xl p-4 border-l-4 border-[#7F39E9]">
              <p class="text-sm text-white/60">
                {{ $t('termsPage.introNote') }}
              </p>
            </div>
          </div>

          <!-- Sections -->
          <div class="space-y-6">
            <div
              v-for="(section, index) in sections"
              :key="index"
              :id="`section-${index + 1}`"
              class="bg-white/5 rounded-[2rem] border border-white/10 p-8 scroll-mt-28"
            >
              <div class="flex items-start gap-4 mb-6">
                <div class="w-10 h-10 bg-[#7F39E9] rounded-xl flex items-center justify-center flex-shrink-0 text-white text-sm font-black">
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <h2 class="text-xl font-bold text-white mb-4">{{ section.title }}</h2>

                  <div v-for="(content, cIndex) in section.content" :key="cIndex" class="mb-4 last:mb-0">
                    <div v-if="content.type === 'qa'" class="space-y-3">
                      <div v-for="(qa, qaIndex) in content.items" :key="qaIndex" class="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                        <p class="font-bold text-white mb-2">{{ qa.question }}</p>
                        <p class="text-white/50 leading-relaxed font-light">{{ qa.answer }}</p>
                      </div>
                    </div>

                    <p v-if="content.type === 'text'" class="text-white/50 leading-relaxed font-light">
                      {{ content.value }}
                    </p>

                    <div v-if="content.type === 'highlight'" class="bg-[#7F39E9]/5 rounded-xl p-5 border border-[#7F39E9]/20">
                      <h4 class="font-bold text-white mb-2 flex items-center gap-2 text-sm">
                        <svg class="w-5 h-5 text-[#a446f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        {{ content.title }}
                      </h4>
                      <p class="text-sm text-white/40">{{ content.value }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Links to related pages -->
          <div class="mt-8 flex flex-col sm:flex-row gap-4">
            <router-link
              to="/impulse-privacy"
              class="flex-1 bg-white/5 rounded-xl border border-white/10 p-6 hover:border-[#7F39E9]/50 hover:bg-white/[0.07] transition-all group"
            >
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-[10px] text-[#a446f4] font-black uppercase tracking-[0.3em] mb-1">{{ $t('termsPage.alsoRead') }}</p>
                  <h4 class="font-bold text-white group-hover:text-[#a446f4] transition-colors">
                    {{ $t('termsPage.privacyPolicy') }}
                  </h4>
                </div>
                <svg class="w-5 h-5 text-white/20 group-hover:text-[#a446f4] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const sections = computed(() => [
  {
    title: t('termsPage.sections.acceptance.title'),
    content: [
      {
        type: 'qa',
        items: [
          { question: t('termsPage.sections.acceptance.q1'), answer: t('termsPage.sections.acceptance.a1') },
          { question: t('termsPage.sections.acceptance.q2'), answer: t('termsPage.sections.acceptance.a2') },
          { question: t('termsPage.sections.acceptance.q3'), answer: t('termsPage.sections.acceptance.a3') },
          { question: t('termsPage.sections.acceptance.q4'), answer: t('termsPage.sections.acceptance.a4') },
        ]
      },
      { type: 'highlight', title: t('termsPage.sections.acceptance.highlightTitle'), value: t('termsPage.sections.acceptance.highlightText') }
    ]
  },
  {
    title: t('termsPage.sections.fees.title'),
    content: [
      {
        type: 'qa',
        items: [
          { question: t('termsPage.sections.fees.q1'), answer: t('termsPage.sections.fees.a1') },
        ]
      }
    ]
  },
  {
    title: t('termsPage.sections.requirements.title'),
    content: [
      {
        type: 'qa',
        items: [
          { question: t('termsPage.sections.requirements.q1'), answer: t('termsPage.sections.requirements.a1') },
        ]
      }
    ]
  },
  {
    title: t('termsPage.sections.indemnification.title'),
    content: [
      {
        type: 'qa',
        items: [
          { question: t('termsPage.sections.indemnification.q1'), answer: t('termsPage.sections.indemnification.a1') },
        ]
      }
    ]
  },
  {
    title: t('termsPage.sections.liability.title'),
    content: [
      { type: 'text', value: t('termsPage.sections.liability.text') }
    ]
  },
  {
    title: t('termsPage.sections.general.title'),
    content: [
      {
        type: 'qa',
        items: [
          { question: t('termsPage.sections.general.q1'), answer: t('termsPage.sections.general.a1') },
          { question: t('termsPage.sections.general.q2'), answer: t('termsPage.sections.general.a2') },
          { question: t('termsPage.sections.general.q3'), answer: t('termsPage.sections.general.a3') },
        ]
      }
    ]
  }
])
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
