<template>
  <div class="scores">
    <span v-for="(score, index) in scores" :key="index">
      <span>
        <span v-html="$t(`results.compass.scores.${index}`)" />
        <span class="axis" v-html="`(${index.toUpperCase()}):`" />
      </span>
      <div v-html="results.results[score] + '%'" />
    </span>
  </div>
</template>

<script lang="ts">
import { Result, _Compass } from '@/data/types/quizzes'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      scores: {
        ox: 'econ',
        oy: 'govt',
        oz: 'scty',
      },
    }
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
.scores {
  width: 320px;
  margin: 10px auto;
  font-size: 20px;
  border-radius: 10px;
  border: 2px solid $black;
  padding: 16px;
  @media (max-width: 900px) {
    font-size: 17px;
  }
  > span {
    display: flex;
    justify-content: space-between;
    .axis {
      margin-left: 5px;
    }
  }
  div {
    margin: 0 10px;
  }
}
</style>
