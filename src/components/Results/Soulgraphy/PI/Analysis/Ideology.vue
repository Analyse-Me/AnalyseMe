<template>
  <div>
    <div
      class="title"
      v-html="$t('results.political_ideas.sections.ideology')"
    />
    <div class="ideology">In progress</div>
    <div class="description">{{ ideologies }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import axios from '@/utilities/axios'
import { Ideology, Result, _Soulgraphy_PI } from '@/data/types/quizzes'
// import { Prop } from 'vue-property-decorator'

@Options({})
export default class Null extends Vue {
  get results(): Result<_Soulgraphy_PI> {
    return this.$store.getters.getResults
  }
  ideologies: Ideology<_Soulgraphy_PI>[] = []

  async mounted() {
    const res = await axios.get<Ideology<_Soulgraphy_PI>[]>(
      `/ideologies/${this.results.quizID}`
    )
    this.ideologies = res.data
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.title {
  font-size: 27px;
  font-weight: 500;
  text-transform: uppercase;
}
.ideology {
  margin: 10px;
  padding-top: 5px;
  font-size: 23px;
  font-weight: 500;
  text-transform: uppercase;
}

.description {
  margin: 10px auto;
  font-size: 15.5px;
  width: 380px;
  max-width: 80vw;
  min-height: 110px;
  background-color: $light;
  border-radius: 10px;
  padding: 10px;
}
</style>
