<style lang="scss">
.navbar-wrapper {
  // border-bottom: 2px solid var(--color-gray-100);
  background-color: var(--color-gray-200);
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
}

.navbar_item {
  display: block;
  padding: calc(var(--space) / 2);
  color: var(--color-gray-800);
  font-size: var(--fluid-0);
  text-decoration: none;
  align-self: center;
  font-family: monospace;
  text-transform: lowercase;
}

.navbar_brand {
  display: flex;
  justify-content: space-between;
}

.navbar_end {
  display: flex;
  margin: var(--space) 0;
}

a.navbar_item:hover,
button.navbar_item:hover {
  color: var(--color-blue-500);
}

.navbar_logo {
  font-family: monospace;
  font-size: var(--fluid-1);
}

.navbar_brand { margin-left: calc(var(--space) / -2); }
.navbar_menu { margin-right: calc(var(--space) / -2); }

.navbar_menu { display: none; }
.navbar_menu.is-active { display: block; }

@media (min-width: 500px) {
  .navbar_menu, .navbar_start, .navbar{ display: flex; }
  .navbar-burger { display: none; }
  .navbar_brand { padding-right: var(--space); }
  .navbar .navbar_menu {
    display: flex;
    flex-grow: 1;
    // flex-start to align all to the left
    // space-between to have a split layout
    // flex-end to align all to the right
    justify-content: flex-end;
  }
  .navbar_end { margin: 0; }
  .navbar-burger { display: none; }
}
</style>


<template>
<div class="navbar-wrapper">
<nav class="navbar container-wide" role="navigation" aria-label="primary navigation">
  <div class="navbar_brand">
    <g-link class="navbar_item navbar_logo" to="/">mattmcadams</g-link>
    <a role="button" class="navbar-burger icon-unfold navbar_item" aria-label="menu" aria-expanded="false" @click="toggleMenu"></a>
  </div>

  <div class="navbar_menu" v-bind:class="{ 'is-active': isActive }">
    <div class="navbar_start">
      <!--<g-link to="/" class="navbar_item">Home</g-link>-->
      <g-link to="/work" class="navbar_item">Work</g-link>
      <g-link to="/thoughts" class="navbar_item">Thoughts</g-link>
    </div>
    <div class="navbar_end">
      <g-link to="https://github.com/MattMcAdams/website" class="icon-github navbar_item" style="text-decoration: none;" target="_blank" rel="noopener" aria-label="Github"></g-link>
      <div class="navbar_item"><ToggleTheme class="navbar_item"/></div>
    </div>
  </div>
</nav>
</div>
</template>


<script>
import ToggleTheme from '~/components/ToggleTheme.vue'
export default {
  data() {
    return {
      isActive: false
    }
  },
  components: {
    ToggleTheme
  },
  methods: {
    toggleMenu: function() {
      this.isActive = !this.isActive
    }
  }
}
</script>
