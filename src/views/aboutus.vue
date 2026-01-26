<template>
  <div>
    <div class="observe-section opacity-0 translate-y-10 transition-all duration-700">
      <OurExecutiveTeam />
    </div>
    <div class="observe-section opacity-0 translate-y-10 transition-all duration-700">
      <ImpulseSolution />
    </div>
    <div class="observe-section opacity-0 translate-y-10 transition-all duration-700">
      <MissionVision />
    </div>
  </div>
</template>

<script>
import OurExecutiveTeam from "@/components/aboutus/OurExecutiveTeam.vue"
import ImpulseSolution from "@/components/aboutus/ImpulseSolution.vue"
import MissionVision from "@/components/aboutus/MissionVision.vue"
import { useI18n } from 'vue-i18n'
import { onMounted, onUnmounted } from 'vue'

export default {
  components: {
    OurExecutiveTeam,
    ImpulseSolution,
    MissionVision
  },
  setup() {
    const { t } = useI18n()
    let observer = null

    onMounted(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove('opacity-0', 'translate-y-10')
              entry.target.classList.add('opacity-100', 'translate-y-0')
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      )

      document.querySelectorAll('.observe-section').forEach((section) => {
        observer.observe(section)
      })
    })

    onUnmounted(() => {
      if (observer) {
        observer.disconnect()
      }
    })

    return {
      t
    }
  },
}
</script>

<style scoped>
.observe-section {
  will-change: opacity, transform;
}
</style>
