<template>
  <Layout>

    <!-- List posts -->
    <div class="content-box-wide">
      <h1>Portfolio</h1>
      <div class="grid">
        <ProjectCard v-for="edge in $page.projects.edges" :key="edge.node.id" :project="edge.node"/>
      </div>
    </div>

  </Layout>
</template>

<page-query>
query {
  projects: allProject(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        description
        cover_image
        path
      }
    }
  }
}
</page-query>

<script>
import ProjectCard from '~/components/ProjectCard.vue'

export default {
  components: {
    ProjectCard
  },
  metaInfo: {
    title: 'Portfolio'
  }
}
</script>
