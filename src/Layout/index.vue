<template>
  <main class="app-wrapper">
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


       
          <router-view v-slot="{ Component }">
            <transition name="router-animation" mode="out-in" appear>
              <component :is="Component"></component>
            </transition>
          </router-view>
          
        </div>


      </div>
  
    </div>
    <!-- end page content -->

    <!-- Cookie Banner - COMENTADO TEMPORALMENTE
    <Transition name="cookie-slide">
      <div v-if="showBanner" class="cookie-banner-wrapper">
        <div class="cookie-overlay" @click="cancelBannerClicked"></div>
        <div class="cookie-banner-content">
          <div class="max-w-4xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center gap-3">
            <h3 class="text-base font-semibold text-gray-800">{{ $t('cookieBanner.title') }}</h3>
            <p class="text-gray-600 text-xs leading-relaxed max-w-2xl">
              {{ $t('cookieBanner.description') }}
              <router-link to="/impulse-privacy" class="text-blue-600 hover:text-blue-700 hover:underline ml-1">
                {{ $t('cookieBanner.privacyPolicy') }}
              </router-link>
            </p>
            <div class="flex items-center gap-3">
              <button @click="cancelBannerClicked" class="px-5 py-2 text-xs font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-all">
                {{ $t('cookieBanner.reject') }}
              </button>
              <button @click="okBannerClicked" class="px-5 py-2 text-xs font-medium text-white bg-[#2563eb] rounded-lg hover:bg-[#1d4ed8] transition-all">
                {{ $t('cookieBanner.accept') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    -->

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
.router-animation-enter-active {
  animation: coming 0.2s;
  animation-delay: 0.1s;
  opacity: 0;
}
.router-animation-leave-active {
  animation: going 0.2s;
}

@keyframes going {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }
  to {
    transform: translate3d(0, 4%, 0) scale(0.93);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translate3d(0, 4%, 0) scale(0.93);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
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

/* Cookie Banner Styles */
.cookie-banner-wrapper {
  position: fixed;
  inset: 0;
  z-index: 9999;
}

.cookie-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  cursor: pointer;
}

.cookie-banner-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: white;
  box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.15);
}

/* Cookie Banner Animations */
.cookie-slide-enter-active,
.cookie-slide-leave-active {
  transition: all 0.3s ease;
}

.cookie-slide-enter-active .cookie-overlay,
.cookie-slide-leave-active .cookie-overlay {
  transition: opacity 0.3s ease;
}

.cookie-slide-enter-active .cookie-banner-content,
.cookie-slide-leave-active .cookie-banner-content {
  transition: transform 0.3s ease;
}

.cookie-slide-enter-from .cookie-overlay,
.cookie-slide-leave-to .cookie-overlay {
  opacity: 0;
}

.cookie-slide-enter-from .cookie-banner-content,
.cookie-slide-leave-to .cookie-banner-content {
  transform: translateY(100%);
}
</style>
