<style lang="scss">
.toggle-theme {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  &:focus, &:hover {
    outline: none;
  }
}
</style>

<template>
  <button role="button" aria-label="Toggle dark/light" @click.prevent="toggleTheme" class="toggle-theme" style="font-size: inherit; padding: 0;">
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
      // This is using a script that is added in index.html
      // Uses inline if statement. If darkTheme return 'dark', else return 'light'
      window.__setPreferredTheme(
        this.$store.state.darkTheme ? 'dark' : 'light'
      )
    }
  },
  mounted() {
    if (window.__theme == 'dark') this.$store.commit('setDarkTheme', true)
  }
}
</script>
