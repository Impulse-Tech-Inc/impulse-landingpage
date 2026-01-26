<template>
  <footer class="relative overflow-hidden bg-[#9333EA]">
    <!-- Forma azul curva - solo visible en desktop -->
    <img
      :src="bgFooter"
      alt=""
      class="hidden md:block absolute left-0 top-0 bottom-0 h-full w-auto max-w-[40%] object-contain object-left"
    />

    <!-- Layout móvil -->
    <div class="md:hidden px-6 py-8">
      <!-- Logo y Copyright -->
      <div class="flex flex-col items-center space-y-3 mb-8">
        <img :src="impulseLogo" alt="impulse logo" class="w-28" />
        <p class="text-white/90 text-xs text-center">
          Copyright © 2025 Impulse. All rights reserved.
        </p>
        <a
          href="https://www.linkedin.com/company/impulseltd/"
          target="_blank"
          class="linkedin-btn w-7 h-7 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 bg-white"
          aria-label="LinkedIn"
        >
          <img :src="linkedinIcon" alt="LinkedIn" class="w-3.5 h-3.5" />
        </a>
      </div>

      <!-- Enlaces en grid -->
      <div class="grid grid-cols-3 gap-4 text-center">
        <!-- Legal -->
        <div class="flex flex-col space-y-2">
          <h4 class="text-white font-semibold text-sm">Legal</h4>
          <a href="/impulse-privacy" target="_blank" class="text-white/80 hover:text-white text-xs transition-colors">
            Privacy Policy
          </a>
          <a href="/impulse-terms" target="_blank" class="text-white/80 hover:text-white text-xs transition-colors">
            Terms
          </a>
        </div>

        <!-- Resources -->
        <div class="flex flex-col space-y-2">
          <h4 class="text-white font-semibold text-sm">Resources</h4>
          <a href="https://impulse.ky/blog/" target="_blank" class="text-white/80 hover:text-white text-xs transition-colors">
            Blog
          </a>
          <a href="https://impulse.ky/blog/" target="_blank" class="text-white/80 hover:text-white text-xs transition-colors">
            Podcast
          </a>
        </div>

        <!-- About Company -->
        <div class="flex flex-col space-y-2">
          <h4 class="text-white font-semibold text-sm">About</h4>
          <a href="/aboutus" class="text-white/80 hover:text-white text-xs transition-colors">
            About Us
          </a>
          <a href="/contactus" class="text-white/80 hover:text-white text-xs transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </div>

    <!-- Layout desktop -->
    <div class="hidden md:block min-h-[200px]">
      <!-- Logo, Copyright y LinkedIn - posicionado sobre el área azul -->
      <div class="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col items-start space-y-3 max-w-[280px]">
        <img :src="impulseLogo" alt="impulse logo" class="w-32" />
        <p class="text-white/90 text-xs">
          Copyright © 2025 Impulse. All rights reserved.
        </p>
        <a
          href="https://www.linkedin.com/company/impulseltd/"
          target="_blank"
          class="linkedin-btn w-7 h-7 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 bg-white"
          aria-label="LinkedIn"
        >
          <img :src="linkedinIcon" alt="LinkedIn" class="w-3.5 h-3.5" />
        </a>
      </div>

      <!-- Contenido derecho -->
      <div class="relative z-10 px-12 lg:px-20 py-8 ml-auto">
        <div class="flex flex-wrap gap-x-12 lg:gap-x-16 gap-y-6 justify-end items-start">
          <!-- Legal -->
          <div class="flex flex-col space-y-3">
            <h4 class="text-white font-semibold text-base">Legal</h4>
            <a href="/impulse-privacy" target="_blank" class="text-white/80 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/impulse-terms" target="_blank" class="text-white/80 hover:text-white text-sm transition-colors">
              Terms
            </a>
          </div>

          <!-- Resources -->
          <div class="flex flex-col space-y-3">
            <h4 class="text-white font-semibold text-base">Resources</h4>
            <a href="https://impulse.ky/blog/" target="_blank" class="text-white/80 hover:text-white text-sm transition-colors">
              Blog
            </a>
            <a href="https://impulse.ky/blog/" target="_blank" class="text-white/80 hover:text-white text-sm transition-colors">
              Podcast
            </a>
          </div>

          <!-- About Company -->
          <div class="flex flex-col space-y-3">
            <h4 class="text-white font-semibold text-base">About Company</h4>
            <a href="/aboutus" class="text-white/80 hover:text-white text-sm transition-colors">
              About Us
            </a>
            <a href="/contactus" class="text-white/80 hover:text-white text-sm transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import bgFooter from '@/assets/images/bgfooter.svg'
import impulseLogo from '@/assets/images/logo/impulse.svg'
import linkedinIcon from '@/assets/images/social-linkedin.svg'

export default {
  name: 'Footer',
  data() {
    return {
      bgFooter,
      impulseLogo,
      linkedinIcon
    }
  }
};
</script>

<style scoped>
/* Cambiar el icono de LinkedIn de blanco a azul LinkedIn */
.linkedin-btn img {
  filter: brightness(0) saturate(100%) invert(25%) sepia(90%) saturate(1500%) hue-rotate(190deg) brightness(95%) contrast(95%);
}
</style>
