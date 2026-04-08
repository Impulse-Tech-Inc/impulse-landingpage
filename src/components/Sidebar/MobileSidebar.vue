<template>
  <div
    class="mobile-sidebar bg-[#0e0e18] border-l border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
  >
    <div class="logo-segment flex justify-between items-center px-4 py-6">
      <router-link :to="{ name: 'home' }">
        <img
          src="@/assets/images/logo/impulse.svg"
          alt=""
        />
      </router-link>
      <span
        class="cursor-pointer text-white text-2xl"
        @click="toggleMsidebar"
        ><Icon icon="heroicons:x-mark"
      /></span>
    </div>

    <div class="sidebar-menu px-4 h-[calc(100%-100px)]" data-simplebar>
      <Navmenu :items="menuItems" />
  
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
import { menuItems } from "../../constant/data";
import Navmenu from "./Navmenu";
import { useThemeSettingsStore } from "@/store/themeSettings";
const themeSettingsStore = useThemeSettingsStore();

export default defineComponent({
  components: {
    Icon,
    Navmenu,
  },
  data() {
    return {
      menuItems,
      openClass: "w-[248px]",
      closeClass: "w-[72px] close_sidebar",
    };
  },
  methods: {
    toggleMsidebar() {
      themeSettingsStore.toggleMsidebar()
    },
  },
});
</script>
<style lang="scss" scoped>
.mobile-sidebar {
  @apply fixed ltr:right-0 rtl:left-0 top-0   h-full   z-[9999]  w-[280px];
}
</style>
