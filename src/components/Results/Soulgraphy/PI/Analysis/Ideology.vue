<template>
  <div>
    <div
      class="title"
      v-html="$t('results.political_ideas.sections.ideology')"
    />
    <div class="ideology">In progress</div>
    <div class="description">In progress</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
// import { Prop } from 'vue-property-decorator'

@Options({})
export default class Null extends Vue {}
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
