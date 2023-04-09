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

createApp(App).use(store)
  .use(router)
  .component('Loading', Loading)
  .use(VueAxios, axios)
  .mount('#app')