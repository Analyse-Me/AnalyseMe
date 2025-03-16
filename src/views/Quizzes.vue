<template>
  <Filter @filtered-search="searchQuiz" @filtered-tags="filterTags" />
  <div v-if="quizzes.length > 0">
    <Thumbnail v-for="quiz in quizzes" :key="quiz" :quiz="quiz" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Thumbnail from '@/components/Select/Thumbnail.vue'
import Filter from '@/components/Select/Filter.vue'
import { quizzes } from '@/data/quizzes'
import { QuizTag } from '@/data/types/quizzes'

export default defineComponent({
  components: {
    Thumbnail,
    Filter,
  },
  data() {
    return {
      allQuizzes: quizzes,
      quizzes: quizzes,
      activeTag: '',
      activeSearch: '',
    }
  },

  methods: {
    filterTags(filtertag: string) {
      this.activeTag = filtertag
      this.filterQuizzes()
    },

    searchQuiz(text: string) {
      this.activeSearch = text
      this.filterQuizzes()
    },

    filterQuizzes() {
      this.quizzes = quizzes.filter(
        (quiz) =>
          quiz.Title.toLowerCase().includes(this.activeSearch.toLowerCase()) &&
          (this.activeTag
            ? quiz.Tags.some((tag: QuizTag) => tag.Name == this.activeTag)
            : 1 == 1)
      )
    },
  },

  mounted() {
    document.title = `${this.$t('nav.links.quizzes')} | AnalyseMe`
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
div {
  background-color: #56667223;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  width: 1200px;
  max-width: 95vw;
  padding: 10px;
  border-radius: 10px;
}
</style>
