<style lang="scss">
.git-card {
  transition: transform 0.2s;
  overflow: hidden;
  background-color: var(--color-gray-100);

  &:hover {
    transform: scale(1.05);
  }

  &__link {
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}


.lang-bar {
  height: 0.5em;
  width: 100%;
}
.lang-bar .pos-absolute {
  top: 0;
  bottom: 0;
  border-right: 5px solid var(--color-gray-100);
}
.lang-bar .pos-absolute:first-child {
  border-right: none;
}
.lang-bar_CSS { background-color: #5687b3; }
.lang-bar_SCSS { background-color: #5687b3; }
.lang-bar_Vue { background-color: #3f556f; }
.lang-bar_JavaScript { background-color: #ecc94b; }
.lang-bar_HTML { background-color: #f56565; }
.lang-bar_PHP { background-color: #9F7AEA; }
</style>

<template>
<div class="git-card pa-1 rounded bdr-hairline pos-relative bdr-gray-500">
  <h3 class="mt-0 txt-normal font-body txt-bold" v-html="this.title"></h3>
  <p class="txt-small" v-html="this.description"></p>

  <p class="txt-xsmall txt-gray-600">Languages:
    <span v-for="language in this.languages.slice().reverse()" :key="language.id">{{language.name + " " + language.percent + " "}}</span>
  </p>
  <div class="lang-bar bg-gray-300 rounded-small pos-relative" style="overflow: hidden;">
    <div v-for="language in this.languages" :key="language.id"
      v-bind:style="{width: language.width}"
      v-bind:class="'pos-absolute lang-bar_' + language.name"
    ></div>

  </div>

  <a class="pos-cover git-card__link" :href="this.path" target="_blank" rel="noopener nofollow" v-html="this.title"></a>
</div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    path: String,
    languages: Array
  }
}
</script>
