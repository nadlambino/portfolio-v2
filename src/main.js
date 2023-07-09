import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon } from "oh-vue-icons"

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.component("v-icon", OhVueIcon)

app.mount('#app')
