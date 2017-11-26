// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar, { AddressbarColor } from 'quasar'
import router from './router'
import VueScrollReveal from 'vue-scroll-reveal'
import VueScrollTo from 'vue-scrollto'
import Vuelidate from 'vuelidate'

AddressbarColor.set('#31ccec')

Vue.config.productionTip = false
Vue.use(VueScrollTo)
Vue.use(Vuelidate)
Vue.use(VueScrollReveal)
Vue.use(Quasar) // Install Quasar Framework

if (__THEME === 'mat') {
  // require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

/* eslint-disable no-new */
new Vue({
  el: '#q-app',
  router,
  render: h => h(require('./App').default)
})
