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

    <footer>
      <p>Copyright © {{ new Date().getFullYear() }} Matthew McAdams </p>
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
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  components: {
    ToggleTheme
  }
}
</script>
