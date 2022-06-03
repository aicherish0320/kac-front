import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import mLibs from './libs'
import { useRem } from './utils/flexible'
import './styles/index.scss'

useRem()

createApp(App).use(mLibs).use(router).mount('#app')
