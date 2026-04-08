<template>
  <footer class="border-t border-white/5 py-16 md:py-20 px-6 bg-[#0a0a12]">
    <div class="max-w-7xl mx-auto">
      <!-- Main Grid -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12">
        <!-- Brand Column -->
        <div class="md:col-span-2 text-center md:text-left">
          <div class="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <img :src="impulseLogo" alt="impulse logo" class="w-32" />
          </div>
          <p class="text-white/40 max-w-sm leading-relaxed mb-6 font-medium text-sm mx-auto md:mx-0">
            {{ $t('footerDesc') }}
          </p>
          <div class="flex gap-3 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/company/impulseltd/"
              target="_blank"
              class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <img :src="linkedinIcon" alt="LinkedIn" class="w-4 h-4 linkedin-white" />
            </a>
          </div>
        </div>

        <!-- 3 Link Columns - responsive grid -->
        <div class="grid grid-cols-3 gap-6 md:contents">
          <!-- Platform -->
          <div>
            <h4 class="font-black text-white mb-4 md:mb-6 uppercase tracking-widest text-[10px] md:text-xs">{{ $t('footerPlatform') }}</h4>
            <ul class="space-y-3 md:space-y-4 text-white/50 text-xs md:text-sm font-medium">
              <li>
                <a href="javascript:void(0)" class="hover:text-white transition-colors" @click="handlePillarLink('network')">
                  Telemetrics
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="hover:text-white transition-colors" @click="handlePillarLink('crm')">
                  Agentic CRM
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="hover:text-white transition-colors" @click="handlePillarLink('support')">
                  Support AI
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="hover:text-white transition-colors" @click="handlePillarLink('billing')">
                  Billing
                </a>
              </li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <h4 class="font-black text-white mb-4 md:mb-6 uppercase tracking-widest text-[10px] md:text-xs">{{ $t('footerCompany') }}</h4>
            <ul class="space-y-3 md:space-y-4 text-white/50 text-xs md:text-sm font-medium">
              <li>
                <router-link to="/aboutus" class="hover:text-white transition-colors">{{ $t('footerAbout') }}</router-link>
              </li>
              <li>
                <router-link to="/contactus" class="hover:text-white transition-colors">{{ $t('footerContact') }}</router-link>
              </li>
              <li>
                <a href="https://impulse.ky/blog/" target="_blank" class="hover:text-white transition-colors">{{ $t('footerBlog') }}</a>
              </li>
              <li>
                <router-link to="/pillar/advisory" class="hover:text-white transition-colors">{{ $t('footerAdvisory') }}</router-link>
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h4 class="font-black text-white mb-4 md:mb-6 uppercase tracking-widest text-[10px] md:text-xs">{{ $t('footerLegal') }}</h4>
            <ul class="space-y-3 md:space-y-4 text-white/50 text-xs md:text-sm font-medium">
              <li>
                <router-link to="/impulse-privacy" class="hover:text-white transition-colors">{{ $t('footerPrivacy') }}</router-link>
              </li>
              <li>
                <router-link to="/impulse-terms" class="hover:text-white transition-colors">{{ $t('footerTerms') }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-16 md:mt-20 pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-white/30 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
        <span class="text-center">© {{ currentYear }} Impulse Intelligence OS. All Rights Reserved.</span>
        <div class="flex gap-4 md:gap-8 flex-wrap justify-center">
          <span>Infrastructure First</span>
          <span>Privacy by Design</span>
          <span>Global Operations</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import impulseLogo from '@/assets/images/logo/impulse.svg'
import linkedinIcon from '@/assets/images/social-linkedin.svg'

export default {
  name: 'Footer',
  data() {
    return {
      impulseLogo,
      linkedinIcon
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  },
  methods: {
    handlePillarLink(pillarId) {
      this.$router.push({ name: 'pillardetails', params: { id: pillarId } })
    }
  }
};
</script>

<style scoped>
.linkedin-white {
  filter: brightness(0) invert(1);
}
</style>
