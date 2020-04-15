<style lang="scss">

aside {
  margin: 0 0 var(--space-fluid-half);
}

@media (min-width: 1000px) {
  article {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-gap: var(--space-fluid-half);
  }
  aside {
    margin: 0;
  }
}

.tags, .colors {
  display: flex;
  margin-bottom: var(--space);
}
.tags {
  flex-wrap: wrap;
  margin-left: calc(var(--space) / -2);
  margin-right: calc(var(--space) / -2);
}
.ui-tag {
  color: var(--color-gray-900);
  background-color: var(--color-gray-400);
  font-size: var(--fluid--1);
  text-decoration: none;
  padding: 0.2em 0.5em;
  border-radius: var(--radius);
  margin: calc(var(--space) / 2);
}
.color-swatch {
  height: 50px;
  width: 50px;
  flex-grow: 1;
}
</style>

<template>
<Layout>
  <article class="content-box-wide" style="padding-top: var(--space-fluid); padding-bottom: var(--space-fluid);">

    <aside>
      <div class="rounded-large px-1 py-1 bg-gray-200" style="position: sticky; top: 100px;">

        <p style="margin-bottom: var(--space-fluid-half)"><strong>{{ $page.post.title }}</strong>
        <br><small>Posted {{ $page.post.date }}.</small></p>

          <div class="tags">
            <g-link class="ui-tag" v-for="tag in $page.post.tags" :key="tag.id" :to="tag.path">
              <span>#</span>{{ tag }}
            </g-link>
          </div>

          <div class="colors" v-if="$page.post.colors">
            <div class="color-swatch" v-for="color in $page.post.colors" :key="color.id" v-bind:style="{backgroundColor: color}"></div>
          </div>

        <p v-if="$page.post.cta"  style="margin-top: var(--space-fluid-half)"><a :href="$page.post.cta.link" target="_blank" rel="noopener" class="button" style="display: block; text-align: center;">{{ $page.post.cta.text }}</a></p>

      </div>
    </aside>

    <div>
      <header class="post__header" style="text-align: center; margin-bottom: var(--space-fluid-half)">
        <h1> {{ $page.post.title }} </h1>
      </header>

      <div class="post__content" v-html="$page.post.content" />
    </div>

  </article>
</Layout>
</template>

<script>
export default {
  components: {
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
    tags
    colors
    tools
    cta {link, text}
  }
}
</page-query>
