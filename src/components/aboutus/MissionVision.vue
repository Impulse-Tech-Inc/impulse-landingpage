<template>
    <div class="py-20">
        <div class="max-w-6xl mx-auto px-6">
            <h2 class="text-white text-3xl md:text-5xl font-black tracking-tighter text-center mb-12">
                {{ t('whatDrivesUs') }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="(item, i) in items" :key="i"
                    class="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col">
                    <span class="text-[#a446f4] text-[10px] font-black uppercase tracking-[0.4em]">{{ item.title }}</span>
                    <h3 class="text-2xl font-black text-white tracking-tight mt-3">{{ item.subtitle }}</h3>
                    <p class="text-base text-white/60 font-light leading-relaxed mt-4">{{ item.subtitledes }}</p>
                    <img :src="item.img" alt="" class="h-40 object-contain opacity-80 mx-auto mt-6" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import mission from "@/assets/images/mission.svg"
import vision from "@/assets/images/vision.svg"
import { computed } from 'vue'
const items = computed(() => [
    {
        title: t('mission'),
        subtitle: t('missionTitle'),
        subtitledes: t('missionDescription'),
        img: mission
    },
    {
        title: t('vision'),
        subtitle: t('visionTitle'),
        subtitledes: t('visionDescription'),
        img: vision
    },
])
</script>
