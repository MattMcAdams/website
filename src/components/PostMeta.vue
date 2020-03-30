<style lang="scss">
.post-meta {
  font-size: 0.8em;
  opacity: 0.8;
}
</style>

<template>
<div class="post-meta">
  Posted {{ post.date }}.
  <div v-if="post.timeToRead">
    <strong>{{ post.timeToRead }} min read.</strong>
  </div>
</div>
</template>

<script>
export default {
  props: ['post']
}
</script>
