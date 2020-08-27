<template>
  <div>
    {{ crumbs }} // printing raw json
    <br><br>
    <div class="container">
       <b-breadcrumb :items="crumbs"/>
    </div>
  </div>
  <!-- <p>
    //: <a href="/">Home</a>
    <a v-for="crumb in crumbs" :key="crumb.id" v-html="' / '+ crumb.text" :href="crumb.to"></a>
  </p> -->

</template>

<script>
export default {
  computed: {
    crumbs: function() {
      let pathArray = this.$route.path.split("/")
      pathArray.shift()
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          path: path,
          to: breadcrumbArray[idx - 1]
            ? "/" + breadcrumbArray[idx - 1].path + "/" + path
            : "/" + path,
          text: this.$route.matched[idx].meta.breadCrumb || path,
        });
        return breadcrumbArray;
      }, [])
      return breadcrumbs;
    }
  }
};
</script>
