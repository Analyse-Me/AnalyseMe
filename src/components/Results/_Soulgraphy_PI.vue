<template>
  <div></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Result, _Soulgraphy_PI } from '@/data/types/quizzes'

@Options({})
export default class Null extends Vue {
  @Prop({ type: Object as () => Result<_Soulgraphy_PI>, required: true })
  readonly results!: Result<_Soulgraphy_PI>
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
