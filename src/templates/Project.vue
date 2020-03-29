<style lang="scss">
.post__content {
  img {
    width: calc(100% + (var(--space) * 4));
    margin-left: calc(var(--space) * -2);
    max-width: none;
  }
}
</style>

<template>
<Layout>
  <article class="content-box" style="padding-top: var(--space-fluid); padding-bottom: var(--space-fluid);">

    <header class="post__header" style="text-align: center; margin-bottom: var(--space-fluid-half)">
      <h1> {{ $page.post.title }} </h1>
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
