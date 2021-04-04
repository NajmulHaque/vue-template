import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import 'bootstrap'
import jQuery from 'jquery'
import "../public/styles/sass/main.scss"

window.$ = window.jQuery = jQuery

import 'popper.js'
import './assets/app.scss'

createApp(App).use(router).mount('#app')
