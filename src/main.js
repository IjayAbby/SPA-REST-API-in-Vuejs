createApp(App).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import VueLazyload from 'vue3-lazyload'

createApp(App)
  .use(router)
  .use(store)
  .use(VueLazyload)
  .mount('#app')
