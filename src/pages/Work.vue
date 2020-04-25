<template>
<layout :sidebar="true">
  <template v-slot:sidebar>
    <aside class="grid-portrait">
      <div class="pb-1-fluid">
        <h1 class="txt-h2 ma-0">Matthew<br>McAdams</h1>
        <p>// Portfolio</p>
      </div>
      <div>
        <h2 class="txt-h4 mt-0">Quick Info</h2>
        <p>Bachelor of Fine Arts<br>6 Years of Experience<br>3 Awards / Exhibitions</p>
      </div>
      <div>
        <h2 class="txt-h4 mt-0">Contact</h2>
        <p>mattmcadams@outlook.com<br><a href="/cdn/McAdams-CV-Jan-2020.pdf" target="_blank" rel="noopener">Curriculum Vitae</a></p>
      </div>
    </aside>
  </template>

  <section>
    <GitCalendar/>
  </section>
  <section class="mt-1-fluid">
    <div class="grid">
      <ImageCard v-for="edge in $page.projects.edges"
      :key="edge.node.id"
      :title="edge.node.title"
      :path="edge.node.path"
      :thumbnail="edge.node.thumbnail"
      :alt="edge.node.title"
      />
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
        thumbnail
        path
      }
    }
  }
}
</page-query>

<script>
import ImageCard from '~/components/ImageCard.vue'
import GitCalendar from '~/components/GitCalendar.vue'

export default {
  metaInfo: {
    title: 'Portfolio'
  },
  components: {
    ImageCard,
    GitCalendar
  }
}
</script>
