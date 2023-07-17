import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style.css'
import VueLazyload from 'vue3-lazyload'

createApp(App)
  .use(router)
  .use(store)
  .use(VueLazyload)
  .mount('#app')