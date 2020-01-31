<style lang="scss">

.post_title {
  padding: 0 0 calc(var(--space));
  text-align: center;
}

.post {
  img {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-bottom: var(--space);
    display: block;
    max-width: none;
  }

  h2:first-child {
    margin-top: 0;
  }
}
</style>

<template>
  <Layout>
    <article class="content-box post">

      <header class="post_title">
        <h1 class="post_title_text"> {{ $page.post.title }} </h1>
        <PostMeta :post="$page.post" />
      </header>

      <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />

      <div class="post_content" v-html="$page.post.content" />

      <footer class="post_footer">
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
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image
  }
}
</page-query>
