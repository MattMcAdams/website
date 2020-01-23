<template>
  <layout :show-logo="false">
    <Parallax/>

    <section id="about">
      <div class="grid content-box-wide" style="margin-bottom: var(--space)">
        <div>
          <h2>About Me</h2>
          <p>I'm a front-end developer with a background in graphic design. In the spring of 2020, I got my bachelor of fine arts from the University of Alabama at Birmingham while researching UX design, code semantics, and design systems. My award winning work is bold, precise, and modern, focusing on the division of space and the use of strong color. When I'm not pecking at code or pushing pixels, I enjoy exploring fantasy worlds through books and video games.</p>
          <p><a class="button" href="#">curriculum vitae</a></p>
        </div>
        <div>
          <img src="https://www.mattmcadams.com/wp-content/uploads/2019/10/IMG_20170525_172245-1024x768.jpg">
        </div>
      </div>
    </section>

    <section style="background-color: var(--alt-bg-color);" id="portfolio">
      <div class="content-box-wide">
        <h2 style="text-align: center; margin-bottom: var(--space)">Portfolio & Projects</h2>
        <div class="grid" style="margin-bottom: var(--space)">
          <ProjectCard v-for="edge in $page.projects.edges" :key="edge.node.id" :project="edge.node"/>
        </div>
      </div>
    </section>

    <section class="content-box-wide" id="blog">
      <h2 style="text-align: center; margin-bottom: var(--space)">Thoughts & Adventures</h2>
      <div class="posts">
        <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
      </div>
    </section>

  </layout>
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
