<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from '@/components/Shared/Navbar/Navbar.vue'
import Footer from '@/components/Shared/Footer/Footer.vue'

@Options({
  components: {
    Navbar,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
