<template>
  <Navbar />
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from '@/components/Shared/Navbar/Navbar.vue'

@Options({
  components: {
    Navbar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
