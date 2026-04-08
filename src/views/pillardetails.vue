<template>
  <div>
    <PillarDetail :pillarId="id" @back="goBack" @navigate="goToPillar" />
  </div>
</template>

<script>
import PillarDetail from "@/components/PillarDetail.vue"

export default {
  components: { PillarDetail },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'home', query: { pillar: this.id } })
    },
    goToPillar(pillarId) {
      this.$router.push({ name: 'pillardetails', params: { id: pillarId } })
    }
  }
}
</script>
