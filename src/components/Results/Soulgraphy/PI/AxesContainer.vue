<template>
  <div
    class="collumn"
    :key="collumn"
    v-for="collumn in [
      [res[0], res[1]],
      [res[2], res[3]],
    ]"
  >
    <section :key="section" v-for="section in collumn">
      <div
        class="title"
        v-html="
          $t('results.political_ideas.sections.' + section[0][0].split('_')[0])
        "
      />
      <Axis
        :key="axis"
        v-for="axis in section"
        :axis="axis[0]"
        :value="axis[1]"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Axis from './Axis.vue'

export default defineComponent({
  components: {
    Axis,
  },
  props: ['res'],
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.collumn {
  width: 530px;
  max-width: 95vw;
}
section {
  text-align: center;
  max-width: 100%;
  padding: 5px;
}
.title {
  font-size: 27px;
  font-weight: 500;
  text-transform: uppercase;
}
</style>
