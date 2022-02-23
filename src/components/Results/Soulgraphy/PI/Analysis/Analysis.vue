<template>
  <section>
    {{ results }}
    <Compass />
    <div>
      <Ideology />
      <Thinkers />
    </div>
    <Party />
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import Compass from './Compass.vue'
import Ideology from './Ideology.vue'
import Thinkers from './Thinkers.vue'
import Party from './Party.vue'

import { Result, _Soulgraphy_PI } from '@/data/types/quizzes'

@Options({
  components: {
    Compass,
    Ideology,
    Thinkers,
    Party,
  },
})
export default class Analysis extends Vue {
  get results(): Result<_Soulgraphy_PI> {
    return this.$store.getters.getResults
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

section {
  background-color: red;
}
</style>
