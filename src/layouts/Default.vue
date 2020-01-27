<template>
  <div id="app">

    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>

      <nav class="header__right">
        <!--<a href="/blog/" style="padding-bottom: 0.3em">Blog</a>-->
        <ToggleTheme />
      </nav>
    </header>

    <main class="main">
      <slot/>
    </main>

    <footer class="footer">
      <p class="footer__copyright">Copyright © {{ new Date().getFullYear() }} Matthew McAdams </p>
      <p style="margin-bottom: 0;">
        <a href="https://twitter.com/mattmakesart" target="_blank">Twitter</a> &#183;
        <a href="https://www.instagram.com/mattmcadams/" target="_blank">Instagram</a> &#183;
        <a href="https://www.linkedin.com/in/mcadamsmatthew/" target="_blank">LinkedIn</a> &#183;
        <a href="https://dribbble.com/mattmcadams" target="_blank">Dribbble</a> &#183;
        <a href="https://www.behance.net/mattmcadams" target="_blank">Behance</a> &#183;
        <a href="https://github.com/MattMcAdams/" target="_blank">GitHub</a> &#183;
        <a href="https://ko-fi.com/F2F77H9M" target="_blank">KoFi</a>
      </p>
    </footer>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (orientation: landscape) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
}

.footer {
  background-color: var(--alt-bg-color);
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;
}
</style>
