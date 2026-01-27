<template>
    <div>
        <section class="relative mt-24 md:mt-32 md:mb-16">
            <div class="mx-5 md:mx-10 xl:mx-20 animate-fade-up animate-delay-300">
                <span class="text-[#3D0075] text-2xl md:text-4xl font-bold flex justify-center">{{
                    $t('aboutUsExecutiveTeamTitle')
                }}</span>
                <div class="grid xl:grid-cols-2 mt-10 pb-8 md:pb-0 md:mt-16 gap-5">
                    <article
                        class="bg-[#F6F6F6] shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden md:h-[240px]"
                        v-for="(team, i) in teams" :key="i">
                        <div class="flex flex-col md:flex-row h-full">
                            <img :src="team.img" alt="" class="w-full md:w-56 lg:w-64 h-48 md:h-full rounded-t-xl md:rounded-l-xl md:rounded-tr-none object-cover flex-shrink-0" />
                            <div class="flex flex-col justify-start gap-1.5 items-center md:items-start px-4 py-3">
                                <div class="flex items-center gap-1">
                                    <span class="text-base md:text-lg font-bold text-black-500">{{ team.name }}</span>
                                    <a :href="team.linkedin" target="_blank" class="cursor-pointer">
                                        <Icon icon="skill-icons:linkedin" class="text-base" />
                                    </a>


                                </div>
                                <span class="text-xs md:text-sm text-[#0079D8] font-bold">{{ team.position }}</span>
                                <p class="text-xs md:text-sm max-w-3xl leading-relaxed">{{ team.description }}</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <img src="@/assets/images/rectangle.svg" class="hidden md:block absolute top-0 left-0 -z-10" alt="">
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
