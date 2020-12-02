// Import main css
import '~/assets/style/_index.scss'
import '~/assets/icomoon/style.css'

import Vuex from 'vuex'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient, appOptions }) {

  // Add Gogle Fonts
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossorigin: true
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Lato%7CRoboto+Slab&display=swap'
  })

  // Default social media preview tags
  head.meta.push({
    key: 'thumbnail',
    name: 'og:image',
    content: 'https://www.mattmcadams.com/images/assets/screenshot.png'
  })
  head.meta.push({
    name: 'twitter:card',
    content: 'summary_large_image'
  })

  // Default description
  head.meta.push({
    key: "description",
    name: "description",
    content: "Matt McAdams is a web designer and developer working in Alabama.",
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add global state management for dark mode
  Vue.use(Vuex)
  appOptions.store = new Vuex.Store({
    state: {
      darkTheme: false
    },
    mutations: {
      toggleTheme (state) {
        state.darkTheme = !state.darkTheme
      },
      setDarkTheme (state, bool) {
        state.darkTheme = bool
      }
    }
  })
}
