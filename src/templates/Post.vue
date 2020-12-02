<style lang="scss">
.post_header .tags {
  justify-content: center;;
}
</style>

<template>
<Layout>
  <!-- Conditional sidebar  :sidebar="$page.post.series ? true : false" -->
  <div class="container post">
    <header class="mb-1-fluid txt-center post_header">
      <h1> {{ $page.post.title }} </h1>
      <p>Posted {{$page.post.date}}</p>
      <Tags :tags="$page.post.tags"/>
    </header>

    <div v-html="$page.post.content" class="post_content"/>
  </div>
</Layout>
</template>

<script>
import Tags from '~/components/Tags.vue'

export default {
  components: {
    Tags
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.post.description
        },
        {
          key: 'thumbnail',
          name: 'og:image',
          content: this.$page.post.cover_image
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
    series {
      id
      title
    }
    path
    date (format: "D MMMM YYYY")
    description
    content
    tags {
      id
      title
      path
    }
  }
}
</page-query>
