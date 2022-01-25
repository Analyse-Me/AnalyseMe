<template>
  <header>
    <div v-for="tag in tags" :key="tag" @click="$emit('filtered', tag.Name)">
      <ic :icon="tag.Icon" />
      <div class="name" v-html="$t(`select.tags.${tag.Name}`)"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
// import { Prop } from 'vue-property-decorator'
import { tags } from '@/data/quizzes'

@Options({})
export default class Null extends Vue {
  tags = tags
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
header {
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  width: 1000px;
  border-radius: 10px;
  overflow: hidden;
  font-size: 17px;
  color: #e3e3e3;
  > div {
    display: flex;
    justify-content: center;
    padding: 12px;
    flex-grow: 1;
    background-color: $dark;
    transition: all 0.3s;
    svg {
      margin-right: 10px;
    }
    &:hover {
      cursor: pointer;
      filter: brightness(1.3);
    }
  }
}
</style>
