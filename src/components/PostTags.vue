<style lang="scss">
.tags {
  display: flex;
  margin-top: var(--space);
}

.ui-tag {
  color: var(--color-gray-900);
  background-color: var(--color-gray-300);
  font-size: var(--fluid--1);
  text-decoration: none;
  padding: 0.2em 0.5em;
  border-radius: var(--radius);

  & + & {
    margin-left: calc(var(--space) / 2);
  }
}
</style>

<template>
  <div class="tags">
   	<g-link class="ui-tag" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
   		<span>#</span> {{ tag.title }}
   	</g-link>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>
