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
    <h2 class="mt-0 txt-h3">Open Source</h2>
    <GitCalendar/>
    <div class="grid mb-1">
      <GitCard
        :title="'mattmcadams.com'"
        :path="'https://github.com/MattMcAdams/website'"
        :description="'My personal website, blog, and portfolio'"
        :languages="[
          {'name':'HTML', 'percent':'34%', 'width':'100%'},
          {'name':'Vue', 'percent':'17%', 'width':'66%'},
          {'name':'SCSS', 'percent':'49%', 'width':'49%'}
        ]"
      />
      <GitCard
        :title="'Stratus SCSS'"
        :path="'https://github.com/MattMcAdams/stratus'"
        :description="'Sass toolset for typography, color, and more'"
        :languages="[
          {'name':'JavaScript', 'percent': '8%', 'width': '100%'},
          {'name':'SCSS', 'percent':'92%', 'width':'92%'}
        ]"
      />
    </div>
    <!-- <div class="grid">
      <GitCard
        :title="'UABIT Linear'"
        :path="'https://github.com/UAB-IT/linear'"
        :description="'JavaScript and CSS from the uab.edu/it sites'"
        :languages="[
          {'name':'JavaScript', 'percent':'11%', 'width':'100%'},
          {'name':'SCSS', 'percent':'89%', 'width':'89%'}
        ]"
      />
      <GitCard
        :title="'UABIT Projects'"
        :path="'https://github.com/UAB-IT/Projects'"
        :description="'Miscellaneous code mini projects'"
        :languages="[
          {'name':'JavaScript', 'percent':'28%', 'width':'100%'},
          {'name':'CSS', 'percent':'16%', 'width':'72%'},
          {'name':'HTML', 'percent':'56%', 'width':'56%'}
        ]"
      />
    </div> -->
  </section>
  <section class="mt-1-fluid">
    <h2 class="txt-h3">Art &amp; Design</h2><br>
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
        date (format: "D MMMM YYYY")
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

import GitCard from '~/components/GitCard.vue'
import ImageCard from '~/components/ImageCard.vue'
import GitCalendar from '~/components/GitCalendar.vue'

export default {
  metaInfo: {
    title: 'Portfolio'
  },
  components: {
    ImageCard,
    GitCalendar,
    GitCard
  }
}
</script>
