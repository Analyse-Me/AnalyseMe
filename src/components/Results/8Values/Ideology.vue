<template>
  <div v-if="ideology">
    <div
      class="title"
      v-html="$t('results.political_ideas.sections.ideology')"
    />
    <div class="ideology" v-html="$t(`ideologies.${ideology.toLowerCase()}`)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '@/config/axios'
import { Ideology, Result, _8Values } from '@/data/types/quizzes'

export default defineComponent({
  data() {
    return {
      ideologies: [] as Ideology<_8Values>[],
      ideology: '',
    }
  },

  computed: {
    results(): Result<_8Values> {
      return this.$store.getters.getResults
    },
  },
  async mounted() {
    const res = await axios.get<Ideology<_8Values>[]>(
      `/ideologies/${this.results.quizID}`
    )

    let Ideology: Ideology<_8Values>
    let ideologyDist = Infinity

    for (let ideology of res.data) {
      let dist = 0

      for (let prop in ideology.stats) {
        if (ideology.stats[prop] == -1) continue
        dist += Math.abs(ideology.stats[prop] - this.results.results[prop]) ** 2
      }

      if (dist < ideologyDist) {
        Ideology = ideology
        ideologyDist = dist
      }
    }

    this.ideology = Ideology!.name
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.title {
  font-size: 27px;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 10px;
}
.ideology {
  margin: 10px;
  padding-top: 5px;
  font-size: 23px;
  font-weight: 500;
  text-transform: uppercase;
}
</style>
