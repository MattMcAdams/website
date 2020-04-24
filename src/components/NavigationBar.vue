<style lang="scss">
.top-navigation li {
  display: inline-block;
  padding: var(--space);
}
.top-navigation {
  text-align: right;
}
@media (orientation: portrait) {
  .top-navigation {
    text-align: center;
    font-size: var(--fluid--1);
  }
  .top-navigation li {
    padding: calc(var(--space) / 2);
  }
}
.top-navigation a {
  color: var(--color-gray-600) !important;
  &:hover, &:focus {
    color: var(--color-gray-800) !important;
  }
}
</style>


<template>
<nav>
  <ul class="top-navigation">
    <li><g-link to="/">Home</g-link></li>
    <li><g-link to="/portfolio">Work</g-link></li>
    <!-- <li><a href="/thoughts">Thoughts</a></li> -->
    <li><g-link to="https://github.com/MattMcAdams/website" class="icon-github" style="text-decoration: none;" target="_blank" rel="noopener" aria-label="Github"></g-link></li>
    <li><ToggleTheme /></li>
  </ul>
</nav>
</template>


<script>
import ToggleTheme from '~/components/ToggleTheme.vue'
export default {
  components: {
    ToggleTheme
  }
}
</script>
