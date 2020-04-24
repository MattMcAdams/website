<style>
.colors {
  display: flex;
  margin-bottom: var(--space);
}

.color-swatch {
  height: 50px;
  width: 50px;
  flex-grow: 1;
}
</style>

<template>
  <div class="colors mb-1">
    <div class="color-swatch"
      v-for="color in this.colors"
      :key="color.id"
      v-bind:style="{backgroundColor: color}">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    colors: Array
  }
}
</script>
