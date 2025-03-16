<template>
  <Axis
    v-for="(value, index) in results.results"
    :key="index"
    :axis="index"
    :value="value"
  />
</template>

<script lang="ts">
import Axis from './Axis.vue'
import { Result, _9Axes } from '@/data/types/quizzes'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Axis,
  },
  computed: {
    results(): Result<_9Axes> {
      return this.$store.getters.getResults
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
