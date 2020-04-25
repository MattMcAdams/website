<style lang="scss">
.post-item {
  transition: transform 0.2s;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
}
.post-item_link {
  opacity: 0.0;
  overflow: hidden;
  text-indent: -9999px;
  z-index: 0;
}
</style>

<template>
  <article class="post-item bg-gray-200 rounded pa-1 mb-1">

    <!-- <div class="post-item_thumbnail mt-1" v-if="this.thumbnail" hidden>
      <g-link :to="this.path">
        <img :alt="this.title" style="width: 100%;" :src="this.thumbnail"/>
      </g-link>
    </div> -->

    <div class="post-item_header">
        <h1 class="txt-medium mb-0">{{this.title}}</h1>
      <p class="txt-small txt-gray">Posted on: {{this.date}}</p>
    </div>

    <div class="post-item_description">
      <p class="txt-small">{{this.description}}</p>
    </div>

    <div class="post-item_footer z-20">
      <Tags :tags="this.tags"/>
    </div>

    <g-link
      class="pos-cover post-item_link"
      :to="this.path"
      v-html="this.title"
      :aria-label="this.title"
    ></g-link>

  </article>
</template>

<script>
import Tags from '~/components/Tags.vue'
export default {
  props: {
    title: String,
    path: String,
    thumbnail: String,
    date: String,
    description: String,
    tags: Array
  },
  components: {
    Tags
  }
}
</script>
