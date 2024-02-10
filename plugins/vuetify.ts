// plugins/vuetify.js
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const myAllBlackTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: 'transparent',
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {

    }
  })

  nuxtApp.vueApp.use(vuetify)
})