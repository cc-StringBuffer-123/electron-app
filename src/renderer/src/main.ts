// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import 'element-plus/dist/index.css'
import './assets/css/bootstrap.min.css'

import './assets/design/css/ztn-style.css'
import './assets/design/css/ztn-style-list.css'

const app = createApp(App)

app.use(ElementPlus).use(router).mount('#app')
