<template>
    <div>
        <section class="relative pt-28 md:pt-36 pb-12">
            <div class="max-w-6xl mx-auto px-6">
                <!-- Header -->
                <div v-reveal class="text-center space-y-4 mb-14">
                    <div class="text-[10px] font-black uppercase tracking-[0.4em] text-[#a446f4]">Leadership</div>
                    <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter">
                        {{ $t('aboutUsExecutiveTeamTitle') }}
                    </h2>
                    <p class="text-lg text-white/40 font-light max-w-xl mx-auto">The minds behind Impulse</p>
                </div>

                <!-- Team Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <article
                        v-for="(team, i) in teams" :key="i"
                        v-reveal
                        :style="{ animationDelay: `${0.15 + i * 0.15}s` }"
                        class="group bg-white/[0.03] border border-white/10 rounded-[2rem] overflow-hidden hover:border-white/20 hover:shadow-[0_20px_60px_rgba(127,57,233,0.12)] transition-all duration-500"
                    >
                        <div class="relative overflow-hidden">
                            <img :src="team.img" alt="" class="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" :style="{ objectPosition: team.imgPos || 'center 20%' }" />
                            <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent opacity-60" />
                        </div>
                        <div class="flex flex-col gap-2 items-center text-center px-6 py-6 relative z-10">
                            <div class="flex items-center gap-2">
                                <span class="text-lg font-black text-white tracking-tight">{{ team.name }}</span>
                                <a :href="team.linkedin" target="_blank" class="text-white/30 hover:text-[#a446f4] transition-colors">
                                    <Icon icon="skill-icons:linkedin" class="text-base" />
                                </a>
                            </div>
                            <span class="text-[10px] font-black uppercase tracking-[0.3em] text-[#a446f4]">{{ team.position }}</span>
                            <p class="text-sm leading-relaxed text-white/50 font-light mt-1">{{ team.description }}</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import Brian from "@/assets/images/svgs/brian.jpeg"
import Rob from "@/assets/images/svgs/rob.jpg"
import Tim from "@/assets/images/svgs/Tim.jpg"
import { useI18n } from 'vue-i18n'
import Icon from "@/components/Icon"
import { computed } from "vue"
import reveal from "@/directives/reveal"

const vReveal = reveal

const { t } = useI18n()

const teams = computed(() => [{
    name: 'Brian Molina',
    position: t('aboutUsExecutiveTeamFounderCEOTitle'),
    description: t('aboutUsExecutiveTeamFounderCEODescription'),
    img: Brian,
    imgPos: 'center 15%',
    linkedin: `https://www.linkedin.com/in/brian-molina-b91a46152/`
}, {
    name: 'Rob McNabb',
    position: t('aboutUsExecutiveTeamCOFounderTitle'),
    description: t('aboutUsExecutiveTeamCOFounderDescription'),
    img: Rob,
    imgPos: 'center 25%',
    linkedin: `https://www.linkedin.com/in/robmcnabb/`
}, {
    name: 'Tim Bergmann',
    position: t('aboutUsExecutiveTeamCOFounderOnlyTitle'),
    description: t('aboutUsExecutiveTeamTimDescription'),
    img: Tim,
    imgPos: 'center 20%',
    linkedin: `https://www.linkedin.com/in/tim-bergmann-9a528b12b/`
}])

</script>

<style scoped>
.animate-fade-up {
  animation: fadeUp 0.8s ease-out both;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
