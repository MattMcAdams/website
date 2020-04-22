<style>
#top-header {
  position: absolute;
  z-index: 1000;
  width: 100%;
}
</style>


<template>
  <div id="app">

    <header id="top-header">
      <TopNav/>
    </header>

    <main class="main">
      <slot/>
    </main>

    <footer class="bg-gray-200" style="padding: calc(var(--space) * 2) 0;">
      <div class="content-box-wide">
        <FooterInfo/>
      </div>
    </footer>

  </div>
</template>


<script>
import FooterInfo from '~/components/FooterInfo.vue'
import TopNav from '~/components/TopNav.vue'

export default {
  components: {
    FooterInfo,
    TopNav
  }
}
</script>
