<template>
  <picture>
    <template v-for="format in this.formats">
      <source
        :key="format.id"
        sizes="100vw"
        v-bind:srcset="srcs(format)"
        v-bind:type="'image/'+format">
    </template>
    <img :src="defaultSrc">
  </picture>
</template>

<script>
export default {
  props: {
    file: String,
    sizes: {
      type: Array,
      default: () => [320, 640, 980, 1280]
    },
    path: {
      type: String,
      default: '/'
    },
    formats: {
      type: Array,
      default: () => ['webp', 'jpg']
    }
  },
  methods: {
    srcs: function (format) {
      let sources = ''
      for (let i=0; i < this.sizes.length; i++) {
        let source = this.path+this.sizes[i]+'/'+this.file+'.'+format+' '+this.sizes[i]+'w'
        sources = sources+source+', '
      }
      return sources
    }
  },
  computed: {
    defaultSrc: function () {
      let largestSize = this.sizes[this.sizes.length - 1]
      let fallbackFormat = this.formats[this.formats.length - 1]
      return this.path+largestSize+'/'+this.file+'.'+fallbackFormat
    }
  }
}
</script>
