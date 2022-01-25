<template>
  <main>
    <Navbar />
    <div class="maincontainer">
      <router-view />
    </div>
    <Footer />
  </main>
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
main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .maincontainer {
    flex-grow: 1;
  }
}
</style>
