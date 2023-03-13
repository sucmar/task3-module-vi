import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router'
import App from './App.vue'


createApp(App).use(router).use(VueAxios, axios).mount('#app')

import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/js/bootstrap.min"
