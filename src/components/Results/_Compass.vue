<template>
  <div>compass</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Result, _Compass } from '@/data/types/quizzes'

@Options({})
export default class Compass extends Vue {
  @Prop({ type: Object as () => Result<_Compass>, required: true })
  readonly results!: Result<_Compass>
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
