<style lang="scss">
.image-card {
  transition: transform 0.2s;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  &__link {
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>

<template>
  <div class="rounded image-card pos-relative" v-if="this.thumbnail">
    <img
      :alt="this.alt"
      style="width: 100%;"
      :src="this.thumbnail"
    />
    <g-link
      class="pos-cover image-card__link"
      :to="this.path"
      v-html="this.title"
      :aria-label="this.title"
    ></g-link>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    path: String,
    thumbnail: String,
    alt: String
  }
}
</script>
