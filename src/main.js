// Import main css
import '~/assets/style/_index.scss'
import '~/assets/icomoon/style.css'

import Vuex from 'vuex'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient, appOptions }) {

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add google fonts
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Lato%7CRoboto+Slab&display=swap'
  })

  // Add Analytics
  head.script.push({
    src: 'https://plausible.io/js/plausible.js',
    async: true,
    defer: true,
    'data-domain': 'mattmcadams.com'
  })

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
