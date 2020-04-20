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
  <div class="sidebar-left content-box-wide" style="padding-top: var(--space-fluid); padding-bottom: var(--space-fluid);">

    <aside class="grid-portrait">
      <div style="padding-bottom: var(--space-fluid-half);">
        <h1 class="txt-h2" style="margin: 0;">Matthew<br>McAdams</h1>
        <p>// Portfolio</p>
      </div>
      <div>
        <h2 class="txt-h4" style="margin-top: 0;">Quick Info</h2>
        <p>Bachelor of Fine Arts<br>6 Years of Experience<br>3 Awards / Exhibitions</p>
      </div>
      <div>
        <h2 class="txt-h4" style="margin-top: 0;">Contact</h2>
        <p>mattmcadams@outlook.com<br><a href="/cdn/McAdams-CV-Jan-2020.pdf" target="_blank" rel="noopener">Curriculum Vitae</a></p>
      </div>
    </aside>

    <div style="min-width: 0;">
      <h1 style="text-align: center">
        # {{ $page.tag.title }}
      </h1>
      <p style="text-align: center"><a href="/portfolio">Clear Filters</a></p>
      <section style="margin-top: var(--space-fluid-half);">
        <div class="grid">
          <PortfolioCard v-for="edge in $page.tag.belongsTo.edges" v-if="edge.node.published" :key="edge.node.id" :project="edge.node"/>
        </div>
      </section>
    </div>
  </div>
</layout>
</template>

<page-query>
query ProjectTag ($id: ID!) {
  tag: projectTag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Project {
            title
            published
            path
            date (format: "D. MMMM YYYY")
            description
            content
            thumbnail
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PortfolioCard from '~/components/PortfolioCard.vue'
export default {
  components: {
    PortfolioCard
  },
  metaInfo: {
    title: 'Portfolio Tags'
  }
}
</script>
