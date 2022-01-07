<template>
  <nav>
    <div class="logo">
      <div class="icon" />
      <div class="analyse">Analyse</div>
      <div class="me">Me</div>
    </div>
    <div class="links">
      <router-link to="/">{{ $t('nav.links.quizzes') }}</router-link>
      <a class="github" href="https://github.com/Shin-Stats">
        <ic :icon="['fab', 'github']" />
      </a>
      <Locale :options="langs" />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { langs } from '@/data/locales'
import Locale from './Locale.vue'

export default defineComponent({
  components: {
    Locale,
  },
  data() {
    return {
      langs,
    }
  },
})
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
.links {
  display: flex;
  align-items: center;
  a {
    font-size: 21px;
    font-weight: 500;
    transition: all 0.5s;
    &:hover {
      color: $main;
    }
  }
  .github {
    font-size: 27px;
    margin: 0 10px;
  }
}
</style>
