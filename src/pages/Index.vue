<template>
  <layout :show-logo="false">
    <Parallax/>

    <section id="about" class="my-4">
      <div class="landscape:grid grid-cols-2 gap-4 container-wide">
        <div>
          <h2 class="text-3xl mb-2">Nice to meet you</h2>
          <p class="text-md mb-1 leading-normal">I’m a front end developer with a background in graphic design currently living in the Birmingham area. Let’s make something cool together.</p>
          <p class="mb-1 txt-sm leading-relaxed">In the spring of 2020, I got my bachelor of fine arts from the University of Alabama at Birmingham while researching UX design, code semantics, and design systems. My award winning work is bold, precise, and modern, focusing on the division of space and the use of strong color. When I’m not pecking at code or pushing pixels, I enjoy exploring fantasy worlds through books and video games.</p>
          <p><a class="py-05 px-1 inline-block bg-primary text-white rounded" href="https://assets.mattmcadams.com/McAdams-CV-Jan-2020.pdf">Curriculum Vitae</a></p>
        </div>
        <div>
          <img src="https://assets.mattmcadams.com/portrait.jpg" class="rounded-lg">
        </div>
      </div>
    </section>

    <section class="bg-gray-200 py-4">
      <div class="max-w-wide mx-auto">
        <h2 class="text-center mb-2 text-4xl">Portfolio & Projects</h2>
        <div class="grid grid-cols-4 gap-1" style="margin-bottom: var(--space);">
          <ProjectCard v-for="edge in $page.projects.edges" :key="edge.node.id" :project="edge.node"/>
        </div>
      </div>
    </section>

    <section class="content-box-wide" id="blog">
      <h2 style="text-align: center; margin-bottom: var(--space);">Thoughts & Adventures</h2>
      <div class="posts">
        <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
      </div>
    </section>

  </layout>
</template>

<script>
import Parallax from '~/components/Parallax.vue'
import ProjectCard from '~/components/ProjectCard.vue'
import PostCard from '~/components/PostCard.vue'
export default {
  components: {
    Parallax,
    PostCard,
    ProjectCard
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

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
  },
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image
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
