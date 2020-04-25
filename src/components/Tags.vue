<style lang="scss">
.tags {
  display: flex;
}
.tags {
  flex-wrap: wrap;
  margin-left: calc(var(--space) / -2);
  margin-right: calc(var(--space) / -2);
}
.ui-tag {
  color: var(--color-gray-900);
  background-color: var(--color-gray-400);
  text-decoration: none;
  padding: 0.2em 0.5em;
  margin: calc(var(--space) / 2);
  &:hover {
    color: white;
    background-color: var(--color-blue-500);
    /*box-shadow: 0 0 0 2px var(--color-blue-500);*/
  }
}
</style>

<template>
  <div class="tags">
    <g-link class="ui-tag txt-small rounded-small"
      v-for="tag in this.tags" :key="tag.id" :to="tag.path">
      <span>#</span>{{ tag.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    tags: Array
  }
}
</script>
