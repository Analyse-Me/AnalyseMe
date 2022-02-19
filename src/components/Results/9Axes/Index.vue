<template>
  <Axis
    v-for="(value, index) in results.results"
    :key="index"
    :axis="index"
    :value="value"
  />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import Axis from './Axis.vue'
import { Result, _9Axes } from '@/data/types/quizzes'

@Options({
  components: {
    Axis,
  },
})
export default class Index extends Vue {
  @Prop({ type: Object as () => Result<_9Axes>, required: true })
  readonly results!: Result<_9Axes>
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
