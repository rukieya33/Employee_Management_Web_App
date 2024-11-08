import './assets/main.css'

import { createApp } from 'vue'
import  router  from './router';
import App from './App.vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
createApp(App).use(router).mount('#app')
