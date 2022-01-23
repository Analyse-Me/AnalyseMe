<template>
  <section>
    <div
      class="img"
      :style="{
        backgroundImage: `url(${require('@/assets/select/' + title + '.png')})`,
      }"
    >
      <div class="imgtitle">{{ title }}</div>
    </div>
    {{ title }}
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Thumbnail extends Vue {
  title = '8Values'
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.img {
  width: 320px;
  height: 180px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  transition: all 0.3s;
  overflow: hidden;
  border: 4px solid $main;
  .imgtitle {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e3e3e3;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 25px;
    font-weight: 500;
    width: 100%;
    height: 100%;
    background-color: #566672d0;
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover {
    background-size: 110%;
    border: none;
    .imgtitle {
      opacity: 1;
      backdrop-filter: blur(2px);
    }
  }
}
</style>
