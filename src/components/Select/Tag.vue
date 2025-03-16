<template>
  <!-- <div>{{ tag }}</div> -->
  <div class="tag" :style="{ backgroundColor: tag.Color }">
    <ic :icon="tag.Icon" />
    <div class="name" v-html="$t(`select.tags.${tag.Name}`)"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { QuizTag } from '@/data/types/quizzes'

export default defineComponent({
  props: {
    tag: { type: Object as () => QuizTag, required: true },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.tag {
  display: flex;
  align-items: center;
  margin-right: 15px;
  padding: 7px;
  border-radius: 5px;
  background-color: gray;
  color: #e3e3e3;
  transition: all 0.3s;
  svg {
    margin-right: 5px;
  }
  &:hover {
    filter: brightness(1.2);
  }
}
</style>
