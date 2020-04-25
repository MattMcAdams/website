<template>
<layout>
  <div class="grid-landscape container-wide">
    <div class="mb-1-fluid">
      <img src="/images/assets/404-dark.png?nf_resize=fit&w=500" alt="" v-if="this.$store.state.darkTheme" style="max-width: 500px; margin: auto; width: 100%;">
      <img src="/images/assets/404.png?nf_resize=fit&w=500" alt="" style="max-width: 500px; margin: auto; width: 100%;" v-else>
    </div>
    <div style="align-self: center;">
      <h1>Page not found</h1>
      <p>Looks like the page or resource you were looking for wasn’t found at this location. This can happen if there was a mistake in the URL, if the content has moved, or if the content no longer exists.</p>
      <p>If you believe this to be a mistake, please contact me or submit a bug report on <a href="https://github.com/MattMcAdams/website/issues" target="_blank" rel="noopener">GitHub</a>.</p>
      <div id="404"></div>
      <p><a href="/" class="button">Return Home</a></p>
    </div>
  </div>
</layout>
</template>

<script>
export default {
  mounted() {
    let url = window.location.href
    let errorMessage =  document.createTextNode("Error: 404\nFile not found at:\n"+url)
    let code = document.createElement("code")
    code.appendChild(errorMessage)
    let pre = document.createElement("pre")
    pre.appendChild(code)
    let container = document.getElementById("404")
    container.appendChild(pre)
  }
}
</script>
