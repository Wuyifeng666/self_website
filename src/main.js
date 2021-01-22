import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import store from '@/store'
import router from '@/router'
import 'vant/lib/index.css'

Vue.use(Vant)

window.location.hash = 'Index'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
