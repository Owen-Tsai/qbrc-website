import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import App from './App.vue'

import '@arco-design/web-vue/dist/arco.css'
import '@/styles/tailwindcss.scss'

import router from './lib/router'

const app = createApp(App)
app.use(router)
app.use(ArcoVue)
app.component('SSwiper', Swiper)
app.component('SSlide', SwiperSlide)
app.mount('#app')
