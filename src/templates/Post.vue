<style lang="scss">
.post_header .tags {
  justify-content: center;;
}
</style>

<template>
<Layout>
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
    description
    content
    cover_image
    tags {
      id
      title
      path
    }
  }
}
</page-query>
