<style lang="scss">
</style>

<template>
<Layout>
  <div class="container">
    <h1>Articles</h1>
    <p>A collection of my adventures through the worlds of art and technology. Expect a glimpse into my decision making, cool things I've learned, and ideas as they relate to design and the web.</p>
  </div>
  <div class="container mt-2-fluid">
    <postItem v-for="edge in $page.posts.edges"
      :key="edge.node.id"
      :title="edge.node.title"
      :path="edge.node.path"
      :thumbnail="edge.node.thumbnail"
      :date="edge.node.date"
      :description="edge.node.description"
      :tags="edge.node.tags"
    />
  </div>
</Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D MMMM YYYY")
        description
        thumbnail
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import postItem from '~/components/PostItem.vue'
export default {
  metaInfo: {
    title: 'Thoughts'
  },
  components: {
    postItem
  }
}
</script>
