<style lang="scss">
.project-card {
  display: block;
  transition: transform 0.2s;
  position: relative;

  &__image {
    min-width: 100%;
  }

  &:hover {
    transform: scale(1.05);
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }

  &__content img {
    border-radius: var(--radius);
  }
}
</style>

<template>
  <div class="project-card" :class="{'project-card--has-poster' : project.poster}">

    <!-- <div class="project-card__header">
      <g-image alt="Cover image" v-if="project.cover_image" class="project-card__image" :src="project.cover_image" />
    </div> -->

    <div class="project-card__content">
      <g-image alt="Cover image" v-if="project.cover_image" class="project-card__image" :src="project.cover_image" />
      <!-- <h2 class="project-card__title" v-html="project.title" /> -->

      <g-link class="project-card__link" :to="project.path">Link</g-link>
    </div>

  </div>
</template>

<script>

export default {
  props: ['project'],
}
</script>
