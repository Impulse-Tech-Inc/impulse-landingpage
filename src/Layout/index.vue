<template>
  <main class="app-wrapper bg-[#030305]">
    <Header :class="window.width > 1024 ? switchHeaderClass() : ''" />
    <!-- end header -->

    <Sidebar
      v-if="
        this.$store.themeSettingsStore.menuLayout === 'vertical' &&
        this.$store.themeSettingsStore.sidebarHidden === false &&
        window.width > 1024
      "
    />
    <!-- main sidebar end -->
    <Transition name="mobilemenu">
      <mobile-sidebar
        v-if="window.width <= 1024 && this.$store.themeSettingsStore.mobielSidebar"
      />
    </Transition>
    <Transition name="overlay-fade">
      <div
        v-if="window.width <= 1023 && this.$store.themeSettingsStore.mobielSidebar"
        class="overlay bg-slate-900 bg-opacity-70 backdrop-filter backdrop-blur-[3px] backdrop-brightness-10 fixed inset-0 z-[999]"
        @click="this.$store.themeSettingsStore.mobielSidebar = false"
      ></div>
    </Transition>
 
    <div
      class="content-wrapper transition-all duration-150"
      :class="window.width > 1023 ? switchHeaderClass() : ''"
    >
      <div
        class="page-content"
        :class="this.$route.meta.appheight ? 'h-full' : 'page-min-height'"
      >
        <div
          :class="` transition-all duration-150 ${
            this.$store.themeSettingsStore.cWidth === 'boxed'
              ? 'container mx-auto'
              : 'container-fluid'
          }`"
        >


       
          <router-view v-slot="{ Component, route }">
            <transition name="page-transition" mode="out-in" appear @before-enter="onBeforeEnter">
              <component :is="Component" :key="route.path"></component>
            </transition>
          </router-view>
          
        </div>


      </div>
  
    </div>
    <!-- end page content -->

    <!-- Cookie Banner -->
    <Transition name="cookie-toast">
      <div v-if="showBanner" class="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[9999]">
        <div class="bg-[#0d1117]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-lg bg-[#7F39E9]/10 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-[#a446f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 class="text-sm font-bold text-white">{{ $t('cookieBanner.title') }}</h3>
            </div>
            <p class="text-xs text-white/40 leading-relaxed">
              {{ $t('cookieBanner.description') }}
              <router-link to="/impulse-privacy" class="text-[#a446f4] hover:text-white transition-colors ml-0.5">
                {{ $t('cookieBanner.privacyPolicy') }}
              </router-link>
            </p>
            <div class="flex items-center gap-2 pt-1">
              <button @click="cancelBannerClicked" class="flex-1 px-4 py-2.5 text-[10px] font-black uppercase tracking-widest text-white/50 border border-white/10 rounded-xl hover:bg-white/5 hover:text-white transition-all">
                {{ $t('cookieBanner.reject') }}
              </button>
              <button @click="okBannerClicked" class="flex-1 px-4 py-2.5 text-[10px] font-black uppercase tracking-widest text-white bg-[#7F39E9] rounded-xl hover:bg-[#6d2fd0] transition-all">
                {{ $t('cookieBanner.accept') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <Footer 
    />
  </main>
</template>
<script>
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/";
import window from "@/mixins/window";
import MobileSidebar from "@/components/Sidebar/MobileSidebar.vue"; 
import useCookies from '@/composables/useCookies'
import { inject } from "vue";
export default {
  mixins: [window],
  components: {
    Header,
    Footer,
    Sidebar,
    Breadcrumbs, 
    MobileSidebar,
  },
  computed: {
    isDark() {
      const storeDark = this.$store?.themeSettingsStore?.isDark
      if (typeof storeDark === 'boolean') {
        return storeDark
      }
      return document.body.classList.contains('dark')
    },
    bannerClasses() {
      return this.isDark
        ? 'bg-[#1e2227] text-white border border-white/10'
        : 'bg-white/95 text-slate-800 border border-slate-200 shadow-xl backdrop-blur-sm'
    }
  },
  methods: {
    onBeforeEnter() {
      globalThis.window.scrollTo(0, 0);
    },
    switchHeaderClass() {
      if (
        this.$store.themeSettingsStore.menuLayout === "horizontal" ||
        this.$store.themeSettingsStore.sidebarHidden
      ) {
        return "ltr:ml-0 rtl:mr-0";
      } else if (this.$store.themeSettingsStore.sidebarCollasp) {
        return "ltr:ml-[72px] rtl:mr-[72px]";
      } else {
        return "ltr:ml-[248px] rtl:mr-[248px]";
      }
    },
  
  },
  setup() {
    const gtag = inject('gtag');
    const { showBanner, okClicked,cancelClicked } = useCookies(gtag);
    const okBannerClicked = () => okClicked();
    const cancelBannerClicked = () => cancelClicked();
  
   

    return {
      showBanner,
      okBannerClicked,
      cancelBannerClicked
    };
  }
};
</script>
<style lang="scss">
.page-transition-enter-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.page-transition-leave-active {
  transition: all 0.2s ease-in;
}
.page-transition-enter-from {
  opacity: 0;
  transform: translateY(12px) scale(0.99);
  filter: blur(4px);
}
.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.99);
}
.page-transition-enter-to,
.page-transition-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}
@keyframes slideLeftTransition {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
.mobilemenu-enter-active {
  animation: slideLeftTransition 0.24s;
}

.mobilemenu-leave-active {
  animation: slideLeftTransition 0.24s reverse;
}

// .page-content {
//   @apply md:pt-6 md:pb-1 pt-[15px] pb-24;
// }
.page-min-height {
  min-height: calc(var(--vh, 1vh) * 100 - 132px);
}
.banner {
  padding: 20px;
  text-align: center;
  border-radius: 1rem;
  transition: all 0.2s ease-in-out;
}

/* Cookie Toast Animation */
.cookie-toast-enter-active {
  animation: cookieIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.cookie-toast-leave-active {
  animation: cookieOut 0.3s cubic-bezier(0.7, 0, 0.84, 0) forwards;
}

@keyframes cookieIn {
  from { opacity: 0; transform: translateY(100%) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes cookieOut {
  from { opacity: 1; transform: translateY(0) scale(1); }
  to { opacity: 0; transform: translateY(100%) scale(0.95); }
}
</style>
