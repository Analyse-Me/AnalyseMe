<template>
  <Axis
    v-for="(value, index) in results.results"
    :key="index"
    :axis="index"
    :value="value"
  />
  <Ideology />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Axis from './Axis.vue'
import Ideology from './Ideology.vue'
import { Result, _8Values } from '@/data/types/quizzes'

export default defineComponent({
  components: {
    Axis,
    Ideology,
  },
  computed: {
    results(): Result<_8Values> {
      return this.$store.getters.getResults
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
