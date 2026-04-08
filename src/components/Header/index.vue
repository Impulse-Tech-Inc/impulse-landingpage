<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-[999] transition-all duration-500',
      isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
    ]"
  >
    <nav
      :class="[
        'transition-all duration-500 px-8',
        !isScrolled
          ? 'h-20 bg-transparent'
          : isDarkPage
            ? 'h-16 bg-black/50 backdrop-blur-xl'
            : 'h-16 bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]'
      ]"
    >
      <div class="max-w-[1200px] h-full mx-auto flex items-center justify-between">
        <!-- Logo -->
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center gap-2 group"
        >
          <img
            :src="logoSrc"
            alt="impulse logo"
            class="w-auto h-8 transition-transform group-hover:scale-105"
          />
        </router-link>

        <!-- Nav Links (desktop) -->
        <div class="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          <router-link
            v-for="item in navLinks"
            :key="item.id"
            :to="item.to"
            class="relative text-sm font-semibold tracking-wide transition-colors group/link"
            :class="useWhiteStyle ? 'text-white hover:text-white' : 'text-slate-700 hover:text-slate-900'"
          >
            <span class="flex items-center gap-1.5">
              <Icon :icon="item.icon" class="text-base" />
              {{ $t(item.label) }}
            </span>
            <span
              class="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover/link:w-full"
              :class="useWhiteStyle ? 'bg-white' : 'bg-slate-900'"
            />
          </router-link>
          <a
            href="https://impulse.ky/blog/"
            target="_blank"
            class="relative text-sm font-semibold tracking-wide transition-colors group/link"
            :class="useWhiteStyle ? 'text-white hover:text-white' : 'text-slate-700 hover:text-slate-900'"
          >
            <span class="flex items-center gap-1.5">
              <Icon icon="fluent-mdl2:blog" class="text-base" />
              {{ $t('menu-4') }}
            </span>
            <span
              class="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover/link:w-full"
              :class="useWhiteStyle ? 'bg-white' : 'bg-slate-900'"
            />
          </a>
        </div>

        <!-- Actions (desktop) -->
        <div class="hidden lg:flex items-center gap-6">
          <LanguageVue :isTransparent="useWhiteStyle" />
          <button
            class="px-7 py-2.5 text-white text-sm font-bold rounded-full hover:opacity-90 transition-all shadow-lg"
            :style="useWhiteStyle
              ? 'border: 2px solid white; color: white; background: transparent;'
              : 'background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%);'"
            @click="$router.push({ name: 'contactus' })"
          >
            {{ $t('indexContactUs') }}
          </button>
        </div>

        <!-- Mobile: Language + Hamburger -->
        <div class="flex items-center gap-3 lg:hidden">
          <LanguageVue :isTransparent="useWhiteStyle" />
          <button
            class="text-2xl transition-colors"
            :class="useWhiteStyle ? 'text-white' : 'text-slate-900'"
            @click="toggleMobileSidebar"
          >
            <Icon icon="material-symbols:menu-rounded" />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Icon from "../Icon";
import LanguageVue from "./Navtools/Language.vue";
import impulseLogoWhite from '@/assets/images/logo/impulse.svg'
import impulseLogoColor from '@/assets/images/logo/logo.svg'
import { useThemeSettingsStore } from "@/store/themeSettings";

export default {
  components: {
    Icon,
    LanguageVue,
  },
  data() {
    return {
      isScrolled: false,
      isPastHero: false,
      lastScrollPosition: 0,
      isHeaderVisible: true,
      navLinks: [
        { id: 'home', label: 'menu-1', to: '/', icon: 'heroicons-outline:home' },
        { id: 'about', label: 'menu-2', to: '/aboutus', icon: 'heroicons-outline:user-group' },
      ],
    };
  },
  computed: {
    isHomePage() {
      return this.$route.name === 'home' || this.$route.path === '/';
    },
    isDarkPage() {
      const darkPages = ['home', 'aboutus', 'pillardetails', 'contactus'];
      return darkPages.includes(this.$route.name);
    },
    shouldBeTransparent() {
      return this.isHomePage && !this.isScrolled;
    },
    isInHero() {
      return this.isHomePage && !this.isPastHero;
    },
    useWhiteStyle() {
      return this.shouldBeTransparent || this.isInHero || this.isDarkPage;
    },
    logoSrc() {
      return this.useWhiteStyle ? impulseLogoWhite : impulseLogoColor;
    },
  },
  mounted() {
    globalThis.window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    globalThis.window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollPosition = globalThis.window.scrollY;
      const heroHeight = globalThis.window.innerHeight;
      this.isScrolled = currentScrollPosition > 50;
      this.isPastHero = currentScrollPosition > heroHeight - 80;

      if (currentScrollPosition < 50) {
        this.isHeaderVisible = true;
      } else if (currentScrollPosition < this.lastScrollPosition) {
        this.isHeaderVisible = true;
      } else if (currentScrollPosition > this.lastScrollPosition) {
        this.isHeaderVisible = false;
      }

      this.lastScrollPosition = currentScrollPosition;
    },
    toggleMobileSidebar() {
      const themeSettingsStore = useThemeSettingsStore();
      themeSettingsStore.toggleMsidebar();
    },
  },
};
</script>

<style scoped>
header {
  transition: transform 0.3s ease-in-out;
}
</style>
