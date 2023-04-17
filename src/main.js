import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import store from './store'
import Vuex from 'vuex'

axios.defaults.withCredentials = true

createApp(App)
  .use(store)
  .use(router)
  .use(store)
  .use(Vuex)
  .component('Loading', Loading)
  .use(VueAxios, axios)
  .mount('#app')

router.beforeEach((to, from, next) => {
  console.log('to', to, 'from', from, 'next', next)
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    console.log(process.env.VUE_APP_APIPATH, process.env.VUE_APP_CUSTOMPATH)
    axios.post(api).then((response) => {
      console.log(response.data)
      if (response.data.success) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})
