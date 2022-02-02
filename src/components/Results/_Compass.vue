<template>
  <div
    class="compass"
    :style="{
      backgroundImage: `url(${require('@/assets/results/compass/compass.png')})`,
    }"
  >
    <img
      class="xy"
      :style="{
        left: `${0.795 * results.results.econ}%`,
        bottom: `${0.935 * results.results.govt}%`,
      }"
      :src="require('@/assets/results/compass/xy.png')"
    />
    <img
      class="z"
      :style="{ top: `${0.955 * results.results.scty}%` }"
      :src="require('@/assets/results/compass/z.png')"
    />
  </div>

  <div class="scores">
    <span v-for="(score, index) in scores" :key="index">
      <span>
        <span v-html="$t(`results.compass.scores.${index}`)" />
        <span class="axis" v-html="`(${index.toUpperCase()}):`" />
      </span>
      <div v-html="results.results[score] + '%'" />
    </span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Result, _Compass } from '@/data/types/quizzes'

@Options({})
export default class Compass extends Vue {
  @Prop({ type: Object as () => Result<_Compass>, required: true })
  readonly results!: Result<_Compass>
  scores = {
    ox: 'econ',
    oy: 'govt',
    oz: 'scty',
  }
  mounted() {
    console.log(this.results.results)
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.compass {
  margin: 15px 0;
  width: 445px;
  height: 378px;
  background-size: cover;
  @media (max-width: 800px) {
    transform: scale(0.7);
  }
  .xy {
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .z {
    width: 55px;
    height: 12px;
    position: absolute;
    top: 0;
    right: -5px;
  }
}

.scores {
  width: 320px;
  margin: 10px auto;
  font-size: 20px;
  border-radius: 10px;
  border: 2px solid $black;
  padding: 16px;
  @media (max-width: 900px) {
    font-size: 17px;
  }
  > span {
    display: flex;
    justify-content: space-between;
    .axis {
      margin-left: 5px;
    }
  }
  div {
    margin: 0 10px;
  }
}
</style>
