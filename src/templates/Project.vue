<template>
<Layout :sidebar="true">
  <template v-slot:sidebar>
    <div class="rounded-large px-1 py-1 bg-gray-200 pos-sticky" style="top: 100px;">
      <p class="mb-1-fluid">
        <strong>{{ $page.post.title }}</strong>
        <br><small>Posted {{ $page.post.date }}.</small>
      </p>
      <div class="mb-1">
        <Tags v-if="$page.post.tags" :tags="$page.post.tags"/>
      </div>
      <Swatches v-if="$page.post.colors" :colors="$page.post.colors"/>
      <p v-if="$page.post.cta" class="mt-1-fluid">
        <a :href="$page.post.cta.link" target="_blank" rel="noopener" class="button button--full">
          {{ $page.post.cta.text }}
        </a>
      </p>
    </div>
  </template>

  <header class="mb-1-fluid txt-center">
    <h1> {{ $page.post.title }} </h1>
  </header>

  <div v-html="$page.post.content" />

</Layout>
</template>

<script>
import Tags from '~/components/Tags.vue'
import Swatches from '~/components/Swatches.vue'

export default {
  components: {
    Tags,
    Swatches
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
query Project ($id: ID!) {
  post: project (id: $id) {
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
    colors
    tools
    cta {link, text}
  }
}
</page-query>
