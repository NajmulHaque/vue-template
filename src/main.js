import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import jQuery from 'jquery'
import "../public/styles/sass/main.scss"

window.$ = window.jQuery = jQuery

import 'popper.js'
import './assets/app.scss'

const app = createApp(App).use(store);
app.use(router, store).mount('#app')
