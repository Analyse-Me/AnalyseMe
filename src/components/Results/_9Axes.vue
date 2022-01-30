<template>
  <div></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Result, _9Axes } from '@/data/types/quizzes'

@Options({})
export default class Null extends Vue {
  @Prop({ type: Object as () => Result<_9Axes>, required: true })
  readonly results!: Result<_9Axes>
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
