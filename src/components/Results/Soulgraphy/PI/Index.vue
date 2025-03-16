<template>
  <article>
    <AxesContainer v-if="res[0]" :res="res" />
    <Analysis />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Result, _Soulgraphy_PI } from '@/data/types/quizzes'
import AxesContainer from './AxesContainer.vue'
import Analysis from './Analysis/Analysis.vue'

export default defineComponent({
  components: {
    AxesContainer,
    Analysis,
  },
  data() {
    return {
      res: [] as (string | number)[][][],
    }
  },
  computed: {
    results(): Result<_Soulgraphy_PI> {
      return this.$store.getters.getResults
    },
  },

  mounted() {
    const results = this.$store.getters.getResults as Result<_Soulgraphy_PI>
    this.res = [
      Object.keys(results.results).slice(0, 3),
      Object.keys(results.results).slice(3, 7),
      Object.keys(results.results).slice(7, 11),
      Object.keys(results.results).slice(11, 14),
    ].map((s) => s.map((v) => [v, results.results[v]]))
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
article {
  max-width: 95vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 10px;
  margin-top: 30px;
}
</style>
