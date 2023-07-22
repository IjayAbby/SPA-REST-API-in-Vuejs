import { createApp } from 'vue'
import App from './App.vue'
import VueLazyload from 'vue3-lazyload'
import './assets/tailwind.css'

const app = createApp(App)
app.use(VueLazyload)
app.mount('#app')
