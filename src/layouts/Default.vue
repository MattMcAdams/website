<style>
  footer a::after {
    display: none;
  }
  footer small,
  footer small a {
    color: var(--color-gray-600) !important;
  }
</style>
<template>
  <div id="app">

    <header>
      <nav>
        <ToggleTheme />
      </nav>
    </header>

    <main class="main">
      <slot/>
    </main>

    <footer class="bg-gray-200" style="padding: calc(var(--space) * 2) 0;">
      <div class="content-box-wide grid-landscape">
        <div></div>
        <div>
          <p style="margin-bottom: 0;">Also find me on:</p>
          <p style="margin-bottom: 0;" class="txt-gray-500"><small>
            <a href="https://twitter.com/mattmakesart" target="_blank">Twitter</a> &#183;
            <a href="https://www.instagram.com/mattmcadams/" target="_blank">Instagram</a> &#183;
            <a href="https://www.linkedin.com/in/mcadamsmatthew/" target="_blank">LinkedIn</a> &#183;
            <a href="https://dribbble.com/mattmcadams" target="_blank">Dribbble</a> &#183;
            <a href="https://www.behance.net/mattmcadams" target="_blank">Behance</a> &#183;
            <a href="https://github.com/MattMcAdams/" target="_blank">GitHub</a> &#183;
            <a href="https://ko-fi.com/F2F77H9M" target="_blank">KoFi</a>
          </small></p>
          <p><small>Copyright © {{ new Date().getFullYear() }} Matthew McAdams</small></p>
        </div>
      </div>
    </footer>

  </div>
</template>


<script>
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  components: {
    ToggleTheme
  }
}
</script>
