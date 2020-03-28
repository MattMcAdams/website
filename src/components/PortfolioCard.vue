<style lang="scss">
.card {
  display: block;
  transition: transform 0.2s;
  position: relative;
  border-radius: var(--radius);
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

.p-cover {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>

<template>
  <div class="card">
    <g-image
      :alt="project.title"
      v-if="project.cover_image"
      style="width: 100%;"
      :src="project.cover_image"
    />
    <g-link
      class="card__link p-cover"
      :to="project.path"
      v-html="project.title"
    ></g-link>
  </div>
</template>

<script>
export default {
  props: ['project']
}
</script>
