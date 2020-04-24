<style lang="scss">
#top-header {
  position: absolute;
  z-index: 1000;
  width: 100%;
}
.has-sidebar {
  display: grid;
  grid-template-areas: "content" "sidebar";
  grid-gap: calc(var(--space) * 3);
}
.sidebar {
  grid-area: sidebar;
}
@media (orientation: landscape) {
  .has-sidebar {
    grid-template-columns: 300px 1fr;
    grid-template-areas: "sidebar content"
  }
}
</style>


<template>
<div id="app">

  <header id="top-header">
    <NavigationBar/>
  </header>

  <div class="main-column py-2-fluid" v-bind:class="{ 'has-sidebar': sidebar, 'container-wide': sidebar }">
    <template v-if="sidebar">
      <div class="sidebar"><slot name="sidebar"/></div>
      <main class="main" style="min-width: 0;"><slot/></main>
    </template>
    <main class="main" v-else><slot/></main>
  </div>

  <footer class="bg-gray-200 py-2">
    <div class="container-wide">
      <FooterInfo/>
    </div>
  </footer>

</div>
</template>


<script>
import FooterInfo from '~/components/Footer.vue'
import NavigationBar from '~/components/NavigationBar.vue'

export default {
  components: {
    FooterInfo,
    NavigationBar
  },
  props: {
    sidebar: {
      type: Boolean,
      default: false
    }
  }
}
</script>
