<template>
  <!-- <div>{{ tag }}</div> -->
  <div class="tag" :style="{ backgroundColor: tag.Color }">
    <ic :icon="tag.Icon" />
    <div class="name" v-html="tag.Name"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { QuizTag } from '@/data/types/select'

@Options({})
export default class Null extends Vue {
  @Prop({ type: Object as () => QuizTag, required: true })
  readonly tag!: QuizTag
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.tag {
  display: flex;
  align-items: center;
  margin-right: 15px;
  padding: 7px;
  border-radius: 5px;
  background-color: red;
  color: #e3e3e3;
  svg {
    margin-right: 5px;
  }
}
</style>
