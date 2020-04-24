<style lang="scss">
.toggle-theme {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: var(--color-gray-600) !important;

  &:focus, &:hover {
    outline: none;
    color: var(--color-gray-800) !important;
  }
}
</style>

<template>
  <button role="button" aria-label="Toggle dark/light" @click.prevent="toggleTheme" class="toggle-theme" style="font-size: inherit; padding: 0; padding-right: calc(var(--space) * 2)">
    <span class="icon-sun" v-if="this.$store.state.darkTheme"></span>
    <span class="icon-moon" v-else></span>
  </button>
</template>

<script>
export default {
  methods: {
    toggleTheme() {
      // Toggle the boolean
      this.$store.commit('toggleTheme')
      console.log("Dark Theme", this.$store.state.darkTheme)
      // This is using a script that is added in index.html
      // Uses inline if statement. If darkTheme return 'dark', else return 'light'
      window.__setPreferredTheme(
        this.$store.state.darkTheme ? 'dark' : 'light'
      )
    }
  },
  mounted() {
    if (window.__theme == 'dark') this.$store.commit('setDarkTheme', true)
    console.log("Dark Theme", this.$store.state.darkTheme)
  }
}
</script>
