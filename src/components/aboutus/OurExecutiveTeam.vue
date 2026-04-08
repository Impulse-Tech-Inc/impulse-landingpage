<template>
    <div>
        <section class="relative pt-24 md:pt-32 md:mb-16">
            <div class="mx-5 md:mx-10 xl:mx-20">
                <span class="text-white text-2xl md:text-4xl font-bold flex justify-center">{{
                    $t('aboutUsExecutiveTeamTitle')
                }}</span>
                <div class="grid xl:grid-cols-2 mt-10 pb-8 md:pb-0 md:mt-16 gap-5">
                    <article
                        class="bg-white/5 border border-white/10 shadow-none hover:shadow-[0_20px_50px_rgba(127,57,233,0.15)] hover:border-white/20 transition-shadow duration-300 rounded-xl overflow-hidden"
                        v-for="(team, i) in teams" :key="i">
                        <div class="flex flex-col md:flex-row">
                            <img :src="team.img" alt="" class="w-full md:w-56 lg:w-64 h-48 md:h-64 rounded-t-xl md:rounded-l-xl md:rounded-tr-none object-cover flex-shrink-0" />
                            <div class="flex flex-col justify-start gap-1.5 items-center md:items-start px-4 py-3">
                                <div class="flex items-center gap-1">
                                    <span class="text-base md:text-lg font-bold text-white">{{ team.name }}</span>
                                    <a :href="team.linkedin" target="_blank" class="cursor-pointer">
                                        <Icon icon="skill-icons:linkedin" class="text-base" />
                                    </a>


                                </div>
                                <span class="text-xs md:text-sm text-[#a446f4] font-bold">{{ team.position }}</span>
                                <p class="text-xs md:text-sm max-w-3xl leading-relaxed text-white/60">{{ team.description }}</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import Brian from "@/assets/images/svgs/brian.jpg"
import Rob from "@/assets/images/svgs/rob.jpg"
import Tim from "@/assets/images/svgs/Tim.jpg"
import { useI18n } from 'vue-i18n'
import Icon from "@/components/Icon"
import { computed } from "vue"
const { t } = useI18n()

const teams = computed(() => [{
    name: 'Brian Molina',
    position: t('aboutUsExecutiveTeamFounderCEOTitle'),
    description: t('aboutUsExecutiveTeamFounderCEODescription'),
    img: Brian,
    linkedin: `https://www.linkedin.com/in/brian-molina-b91a46152/`
}, {
    name: 'Rob McNabb',
    position: t('aboutUsExecutiveTeamCOFounderTitle'),
    description: t('aboutUsExecutiveTeamCOFounderDescription'),
    img: Rob,
    linkedin: `https://www.linkedin.com/in/robmcnabb/`
}, {
    name: 'Tim Bergmann',
    position: t('aboutUsExecutiveTeamCOFounderOnlyTitle'),
    description: t('aboutUsExecutiveTeamTimDescription'),
    img: Tim,
    linkedin: `https://www.linkedin.com/in/tim-bergmann-9a528b12b/`

}])

</script>
