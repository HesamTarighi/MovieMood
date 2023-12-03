import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/router.config.js'
import App from './App.vue'

// import configs
import '../axios.config.js'

import './assets/css/tailwind.css'
import './assets/css/fonts.css'
import './assets/css/swiper.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
