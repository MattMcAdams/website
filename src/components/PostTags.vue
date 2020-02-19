<style lang="scss">
@import "@/assets/tokens";

.tags {
  display: flex;
  margin-top: space(0.5);
}

.ui-tag {
  color: currentColor;
  background-color: color('gray', '300');

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
