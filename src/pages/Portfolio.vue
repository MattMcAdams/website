<style lang="scss">
@media (orientation: landscape) {
  .sidebar-left {
    display: grid;
    grid-template-columns: 350px 1fr;
  }
}
</style>

<template>
<layout>
  <link
   rel="stylesheet"
   href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
/>
  <div class="sidebar-left content-box-wide" style="padding-top: var(--space-fluid); padding-bottom: var(--space-fluid);">
    <aside class="grid-portrait">
      <div style="padding-bottom: var(--space-fluid-half);">
      <h1 class="txt-h2" style="margin: 0;">Matthew<br>McAdams</h1>
      <p>// Portfolio</p>
      </div>
      <div>
      <h2 class="txt-h4" style="margin-top: 0;">Quick Info</h2>
      <p>Bachelor of Fine Arts<br>6 Years of Experience<br>2 Awards / Exhibitions</p>
      </div>
      <div>
      <h2 class="txt-h4" style="margin-top: 0;">Contact</h2>
      <p>mattmcadams@outlook.com<br><a href="/images/McAdams-CV-Jan-2020.pdf" target="_blank" rel="noopener">Curriculum Vitae</a></p>
      </div>
    </aside>
    <div style="min-width: 0;">
      <section>
        <GitCalendar/>
      </section>
      <section style="margin-top: var(--space-fluid-half);">
        <div class="grid">
          <ProjectCard v-for="edge in $page.projects.edges" :key="edge.node.id" :project="edge.node"/>
        </div>
      </section>
    </div>
  </div>
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
  }
}
</page-query>

<script>
import ProjectCard from '~/components/PortfolioCard.vue'
import GitCalendar from '~/components/GitCalendar.vue'

export default {
  metaInfo: {
    title: 'Portfolio'
  },
  components: {
    ProjectCard,
    GitCalendar
  }
}
</script>
