<template>
  <section class="relative bg-[#030305] py-20 overflow-hidden">
    <!-- Premium Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,#1a1a2e_0%,#030305_100%)]" />
      <div class="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-full max-w-[1400px] aspect-square">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,57,233,0.05)_0%,transparent_70%)]" />
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="absolute inset-[20%] border border-white/[0.02] rounded-full" style="animation: bpSpin 70s linear infinite" />
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-1/2 opacity-[0.02]" style="background-image: linear-gradient(to right, #7F39E9 1px, transparent 1px), linear-gradient(to bottom, #7F39E9 1px, transparent 1px); background-size: 120px 120px; transform: perspective(1000px) rotateX(75deg) scale(2.5); mask-image: linear-gradient(to top, black, transparent); -webkit-mask-image: linear-gradient(to top, black, transparent)" />
    </div>
    <div class="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
      <!-- Header -->
      <div class="text-center mb-16 opacity-0" ref="headerRef">
        <p class="text-sm uppercase tracking-[0.35em] text-[#a446f4] mb-4">
          {{ $t('blogSection.eyebrow') || 'BLOG' }}
        </p>
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">
          {{ $t('blogSection.title') || 'Latest Insights & Updates' }}
        </h2>
        <p class="text-base md:text-lg text-white/60 max-w-3xl mx-auto">
          {{ $t('blogSection.description') || 'Stay up to date with the latest trends, insights, and success stories from the telecom industry.' }}
        </p>
      </div>

      <!-- Loading State - Skeletons -->
      <div v-if="loading" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="n in 3"
          :key="n"
          class="bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex flex-col animate-pulse"
        >
          <!-- Image Skeleton -->
          <div class="aspect-[16/9] bg-gradient-to-br from-white/5 to-white/10"></div>

          <!-- Content Skeleton -->
          <div class="p-6 flex flex-col flex-grow">
            <!-- Category Skeleton -->
            <div class="flex gap-2 mb-3">
              <div class="h-6 w-20 bg-white/5 rounded-full"></div>
              <div class="h-6 w-16 bg-white/5 rounded-full"></div>
            </div>

            <!-- Title Skeleton -->
            <div class="h-6 bg-white/10 rounded w-full mb-2"></div>
            <div class="h-6 bg-white/10 rounded w-3/4 mb-3"></div>

            <!-- Excerpt Skeleton -->
            <div class="space-y-2 mb-4">
              <div class="h-4 bg-white/5 rounded w-full"></div>
              <div class="h-4 bg-white/5 rounded w-full"></div>
              <div class="h-4 bg-white/5 rounded w-2/3"></div>
            </div>

            <!-- Footer Skeleton -->
            <div class="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-white/10"></div>
                <div class="space-y-2">
                  <div class="h-3 w-24 bg-white/10 rounded"></div>
                  <div class="h-3 w-16 bg-white/5 rounded"></div>
                </div>
              </div>
              <div class="w-5 h-5 bg-white/10 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-20">
        <p class="text-red-600 text-lg">{{ error }}</p>
      </div>

      <!-- Blog Posts Grid -->
      <div v-else class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(post, index) in posts"
          :key="post.id"
          :ref="el => { if (el) postRefs[index] = el }"
          class="group cursor-pointer bg-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(127,57,233,0.2)] hover:-translate-y-1 opacity-0 flex flex-col"
          @click="openPost(post.link)"
        >
          <!-- Featured Image -->
          <div class="relative overflow-hidden aspect-[16/9] bg-gradient-to-br from-white/5 to-white/10">
            <img
              v-if="post.featuredImage"
              :src="post.featuredImage"
              :alt="post.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <svg class="w-20 h-20 text-[#6E4098]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 flex flex-col flex-grow">
            <!-- Categories -->
            <div v-if="post.categories.length" class="flex flex-wrap gap-2 mb-3">
              <span
                v-for="category in post.categories.slice(0, 2)"
                :key="category"
                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#7F39E9]/20 text-[#a446f4]"
              >
                {{ category }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#a446f4] transition-colors">
              {{ post.title }}
            </h3>

            <!-- Excerpt -->
            <p class="text-sm text-white/50 mb-4 line-clamp-3">
              {{ stripHtml(post.excerpt) }}
            </p>

            <!-- Footer - Siempre al fondo -->
            <div class="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
              <div class="flex items-center gap-3">
                <img
                  v-if="post.author.avatar"
                  :src="post.author.avatar"
                  :alt="post.author.name"
                  class="w-12 h-12 rounded-full object-contain p-1"
                />
                <div class="text-xs">
                  <p class="font-semibold text-white">{{ post.author.name }}</p>
                  <p class="text-white/40">{{ formatDate(post.date) }}</p>
                </div>
              </div>

              <svg class="w-5 h-5 text-[#a446f4] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </article>
      </div>

      <!-- View All Button -->
      <div v-if="posts.length > 0" class="text-center mt-12">
        <a
          href="https://impulse.ky/blog"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-[0_15px_40px_rgba(110,64,152,0.35)] hover:-translate-y-0.5"
          style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%);"
        >
          {{ $t('blogSection.viewAll') || 'View All Posts' }}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import useWordPressApi from '@/composables/useWordPressApi'
import useIntersectionObserver from '@/composables/useIntersectionObserver'

const { posts, loading, error, fetchPosts, formatDate, stripHtml } = useWordPressApi()

const headerRef = ref(null)
const postRefs = ref([])

const { observe: observeFadeUp } = useIntersectionObserver('animate-fade-up')
const { observe: observeSoftEntrance } = useIntersectionObserver('animate-soft-entrance')

const openPost = (link) => {
  window.open(link, '_blank', 'noopener,noreferrer')
}

onMounted(async () => {
  // Obtener los últimos 3 posts
  await fetchPosts(3)

  // Animar header
  if (headerRef.value) {
    observeFadeUp(headerRef.value)
  }

  // Animar posts con efecto cascada
  postRefs.value.forEach((post, index) => {
    if (post) {
      const delays = [150, 250, 350]
      const delayClass = `animate-delay-${delays[index] || 400}`
      post.classList.add(delayClass)
      observeSoftEntrance(post)
    }
  })
})
</script>

<style scoped>
@keyframes bpSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
