<template>
  <div>
    <div
      class="title"
      v-html="$t('results.political_ideas.sections.thinkers')"
    />
    <div class="thinkers">
      <div v-for="thinker in 3" :key="thinker" v-html="`thinker #${thinker}`" />
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.title {
  font-size: 27px;
  font-weight: 500;
  text-transform: uppercase;
}
.thinkers {
  > div {
    font-size: 18px;
    margin-top: 3px;
  }
}
</style>
