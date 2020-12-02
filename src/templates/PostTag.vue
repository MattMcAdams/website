<template>
<layout>
<div class="container">
    <h1># {{ $page.tag.title }}</h1>
    <p><a href="/thoughts">Clear Filters</a></p>
  </div>
  <div class="container mt-2-fluid">
    <postItem v-for="edge in $page.tag.belongsTo.edges"
      v-if="edge.node.published"
      :key="edge.node.id"
      :title="edge.node.title"
      :path="edge.node.path"
      :date="edge.node.date"
      :description="edge.node.description"
      :tags="edge.node.tags"
    />
  </div>
</layout>
</template>

<page-query>
query PostTag ($id: ID!) {
  tag: postTag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            published
            path
            date (format: "D MMMM YYYY")
            description
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import postItem from '~/components/PostItem.vue'
export default {
  components: {
    postItem
  },
  metaInfo () {
    return {
      title: this.$page.tag.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: "Posts tagged with " + this.$page.tag.title
        }
      ]
    }
  }
}
</script>
