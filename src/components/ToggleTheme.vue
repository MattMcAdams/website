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
    <span class="icon-sun" v-if="darkTheme"></span>
    <span class="icon-moon" v-else></span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false
    }
  },
  methods: {
    toggleTheme() {
      // Toggle the boolean
      this.darkTheme = !this.darkTheme
      // This is using a script that is added in index.html
      // Uses inline if statement. If darkTheme return 'dark', else return 'light'
      window.__setPreferredTheme(
        this.darkTheme ? 'dark' : 'light'
      )
    }
  },
  mounted() {
    if (window.__theme == 'dark') this.darkTheme = true
  }
}
</script>
