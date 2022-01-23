<template>
  <div>
    <Thumbnail />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Thumbnail from '@/components/Select/Thumbnail.vue'

@Options({
  components: {
    Thumbnail,
  },
})
export default class Quizzes extends Vue {}
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
