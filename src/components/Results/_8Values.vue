<template>
  <div></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Result, _8Values } from '@/data/types/quizzes'

@Options({})
export default class EightValues extends Vue {
  @Prop({ type: Object as () => Result<_8Values>, required: true })
  readonly results!: Result<_8Values>
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
