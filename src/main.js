import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import Vuex from 'vuex'
import router from './router'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.use(Vuex)
Vue.config.productionTip = false
window.location.hash = 'Index'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
