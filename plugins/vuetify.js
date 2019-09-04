import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: {
        primary: '#fff',
        secondary: '#9FD7EC',
        accent: '#8c9eff',
        error: '#b71c1c',
        corpColor1: '#5DB4DE',
        corpColor2: '#E2F1F7',
        corpChips: '#AAAAAA'
      }
    }
  }
})
