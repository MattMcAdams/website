<style>
.ui-tag {
  color: var(--body-color);
  background-color: var(--dark-bg-color);

  font-size: var(--ms-small);
  text-decoration: none;
  padding: 0.2em 0.5em;
  border-radius: calc(var(--radius) / 2);

  & + & {
    margin-left: space(0.5);
  }
}
</style>

<template>
  <div class="mt-1" style="display: flex;">
   	<g-link class="ui-tag radius-small text-small bg-dark py-025 px-05 mx-025" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
   		<span>#</span> {{ tag.title }}
   	</g-link>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>
