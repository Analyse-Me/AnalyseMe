<template>
  <Compass :results="results" />
  <Scores :results="results" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import Compass from './Compass.vue'
import Scores from './Scores.vue'
import { Result, _Compass } from '@/data/types/quizzes'

@Options({
  components: {
    Compass,
    Scores,
  },
})
export default class Index extends Vue {
  @Prop({ type: Object as () => Result<_Compass>, required: true })
  readonly results!: Result<_Compass>
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
