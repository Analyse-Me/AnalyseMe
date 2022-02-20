<template>
  <article>
    <AxesContainer :results="results" />
    <Analysis :results="results" />
  </article>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Result, _Soulgraphy_PI } from '@/data/types/quizzes'
import AxesContainer from './AxesContainer.vue'
import Analysis from './Analysis/Analysis.vue'

@Options({
  components: {
    AxesContainer,
    Analysis,
  },
})
export default class Index extends Vue {
  @Prop({ type: Object as () => Result<_Soulgraphy_PI>, required: true })
  readonly results!: Result<_Soulgraphy_PI>
}
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
