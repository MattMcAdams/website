<template>
<layout>
  <div class="grid-landscape container-wide">
    <div class="mb-1-fluid">
      <img :src="this.$store.state.darkTheme ? '/images/assets/404-dark.svg':'/images/assets/404.svg'" alt="" style="max-width: 500px; margin: auto; width: 100%;">
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
    function notFoundMessage(id) {
      let url = window.location.href
      let errorMessage =  document.createTextNode("Error: 404\nFile not found at:\n"+url)
      let code = document.createElement("code")
      code.appendChild(errorMessage)
      let pre = document.createElement("pre")
      pre.appendChild(code)
      let container = document.getElementById(id)
      container.appendChild(pre)
    }

    notFoundMessage("404")
    plausible("404",{ props: { path: document.location.pathname } })
  }
}
</script>
