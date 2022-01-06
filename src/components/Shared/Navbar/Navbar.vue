<template>
  <nav>
    <div class="logo">
      <div class="icon" />
      <div class="analyse">Analyse</div>
      <div class="me">Me</div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
nav {
  width: 1600px;
  max-width: 95vw;
  background: $light;
  margin: 10px auto;
  padding: 10px;
  border-radius: 7px;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  .icon {
    height: 40px;
    width: 40px;
    background-image: url('../../../assets/logo/logo.png');
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position-x: center;
  }
  .me {
    color: $main;
  }
}
</style>
