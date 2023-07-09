import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon } from "oh-vue-icons"
import Particles from "vue3-particles";
import { MotionPlugin } from '@vueuse/motion'


import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(Particles)
app.use(MotionPlugin)

app.component("v-icon", OhVueIcon)

app.mount('#app')
