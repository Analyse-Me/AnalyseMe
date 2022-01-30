<template>
  <div class="container" v-if="results && QuizData.ID">
    <header v-html="QuizData.Title" />
    <Compass :results="results" v-if="QuizData.ID == 'political_compass'" />
    <EightValues :results="results" v-if="QuizData.ID == '8values'" />
    <NineAxes :results="results" v-if="QuizData.ID == '9axes'" />
    <SoulgraphyPI :results="results" v-if="QuizData.ID == 'political_ideas'" />
    <SoulgraphyEFA
      :results="results"
      v-if="QuizData.ID == 'economic_freedom_analysis'"
    />
    <SoulgraphyPFA
      :results="results"
      v-if="QuizData.ID == 'personal_freedom_analysis'"
    />
    <MyPolitics :results="results" v-if="QuizData.ID == 'mypolitics'" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import axios from '@/utilities/axios'
import { quizzes } from '@/data/quizzes'
import { QuizThumb, Result, QuizEffects } from '@/data/types/quizzes'
import _Compass from '@/components/Results/_Compass.vue'
import _8Values from '@/components/Results/_8Values.vue'
import _9Axes from '@/components/Results/_9Axes.vue'
import _Soulgraphy_PI from '@/components/Results/_Soulgraphy_PI.vue'
import _Soulgraphy_EFA from '@/components/Results/_Soulgraphy_EFA.vue'
import _Soulgraphy_PFA from '@/components/Results/_Soulgraphy_PFA.vue'
import _MyPolitics from '@/components/Results/_MyPolitics.vue'

@Options({
  components: {
    Compass: _Compass,
    EightValues: _8Values,
    NineAxes: _9Axes,
    SoulgraphyPI: _Soulgraphy_PI,
    SoulgraphyEFA: _Soulgraphy_EFA,
    SoulgraphyPFA: _Soulgraphy_PFA,
    MyPolitics: _MyPolitics,
  },
})
export default class Results extends Vue {
  results = {} as Result<QuizEffects>
  QuizData = {} as QuizThumb

  mounted() {
    axios
      .get<Result<QuizEffects>>(`results/${this.$route.params.id}`)
      .then((res) => {
        if (res.data) {
          for (const p in res.data.results) {
            res.data.results[p] /= 10
          }

          this.results = res.data
          this.QuizData = quizzes.find((quiz) => quiz.ID == res.data.quizID)!
          document.title = `${this.QuizData.Title} | AnalyseMe`
        } else {
          this.$notify({
            type: 'error',
            title: this.$t('notifications.types.error'),
            text: this.$t('notifications.content.no_quiz'),
          })
          this.$router.push('/quizzes')
        }
      })
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-grow: 1;
}
header {
  font-size: 23px;
  font-weight: 500;
}
</style>
