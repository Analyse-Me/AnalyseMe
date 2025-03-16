<template>sadad</template>

<script lang="ts">
import { Result, _Soulgraphy_PFA } from '@/data/types/quizzes'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  computed: {
    results(): Result<_Soulgraphy_PFA> {
      return this.$store.getters.getResults
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
