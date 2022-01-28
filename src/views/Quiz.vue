<template>
  <div class="container" v-if="questions && questions.length > 5">
    <section class="title" v-html="QuizData.Title" />
    <section class="question_number">
      {{ $t('quiz.common.question') }}
      {{ currentQuestion + 1 }}
      {{ $t('quiz.common.of') }}
      {{ questions.length }}
    </section>
    <section class="question" v-html="questions[currentQuestion].question" />

    <button
      v-for="(button, index) in buttons"
      v-html="$t(`quiz.buttons.${button}`)"
      :key="index"
      :class="button"
      @click="nextQuestion(2 - index)"
    />
    <button
      class="prev"
      @click="prevQuestion()"
      v-html="$t('quiz.buttons.prev')"
    />
  </div>
  <!-- {{ anwsers }} -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import axios from '@/utilities/axios'
import { quizzes } from '@/data/quizzes'
import { QuizThumb } from '@/data/types/select'
import { Question, QuizEffects } from '@/data/types/questions'

@Options({})
export default class QuizView extends Vue {
  buttons = [
    'strongly_agree',
    'agree',
    'idontknow',
    'disagree',
    'strongly_disagree',
  ]
  QuizData = {} as QuizThumb

  currentQuestion = 0
  questions = [] as Question<QuizEffects>[]
  anwsers = [] as QuizEffects[]

  async mounted() {
    this.QuizData = quizzes.find((quiz) => quiz.ID == this.$route.params.id)!
    const res = await axios.get(`questions/${this.$route.params.id}`)
    if (res.data && res.data.length > 0) {
      this.questions = res.data
    } else {
      this.$notify({
        type: 'error',
        title: this.$t('notifications.types.error'),
        text: this.$t('notifications.content.no_quiz'),
      })
      this.$router.push('/quizzes')
    }
  }

  nextQuestion(strength: number) {
    const effect = { ...this.questions[this.currentQuestion].effect }
    for (const i in effect) {
      effect[i] *= strength
    }

    this.anwsers.push(effect)
    if (this.currentQuestion == this.questions.length - 1) this.submit()
    else this.currentQuestion++
  }

  prevQuestion() {
    if (this.currentQuestion != 0) {
      this.currentQuestion--
      this.anwsers.pop()
    }
  }

  submit() {
    const results = this.anwsers.reduce((a, b) => {
      for (let p in a) {
        if (b[p]) a[p] += b[p]
      }
      return a
    })

    this.$router.push(`/results/${this.$route.params.id}`)
    console.log(results)
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin: 30px 0 10px 0;
}

.question_number {
  font-size: 18px;
}

.question {
  padding: 12px;
  margin: 20px auto;
  background-color: $light;
  width: 900px;
  max-width: 90%;
  font-size: 19px;
  border-radius: 10px;
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

button {
  display: block;
  margin: 4px auto;
  padding: 12px;
  width: 600px;
  max-width: 80%;
  font-size: 18px;
  border-radius: 10px;
  &.strongly_agree {
    background-color: #64a8b7;
  }
  &.agree {
    background-color: #8ec0cc;
  }
  &.idontknow,
  &.prev {
    background-color: #c1c8cc;
  }
  &.disagree {
    background-color: #d1a78c;
  }
  &.strongly_disagree {
    background-color: #d38855;
  }
}
</style>
