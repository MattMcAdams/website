<style lang="scss">
.post-title {
  padding: 0 0 calc(var(--space));
  text-align: center;
}

.post {
  &__header {
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    img { width: 100%; }
    &:empty { display: none; }
  }
  &__content {
    h2:first-child {
      margin-top: 0;
    }
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}
</style>

<template>
  <Layout>
    <article class="content-box">

      <header class="post-title">
        <h1 class="post-title__text"> {{ $page.post.title }} </h1>
        <PostMeta :post="$page.post" />
      </header>

      <div class="post__content" v-html="$page.post.content" />

      <footer class="post__footer">
        <PostTags :post="$page.post" />
      </footer>

    </article>
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Project ($id: ID!) {
  post: project (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    description
    content
    cover_image
  }
}
</page-query>
