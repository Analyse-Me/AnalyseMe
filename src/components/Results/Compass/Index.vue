<template>
  <Compass />
  <Scores />
</template>

<script lang="ts">
import Compass from './Compass.vue'
import Scores from './Scores.vue'
import { Result, _Compass } from '@/data/types/quizzes'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Compass,
    Scores,
  },
  computed: {
    results(): Result<_Compass> {
      return this.$store.getters.getResults
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
