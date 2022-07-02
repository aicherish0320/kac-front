import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mLibs from './libs'
import { useRem } from './utils/flexible'
import './styles/index.scss'
// 注册 svg-icons
import 'virtual:svg-icons-register'
// theme
import useTheme from './utils/theme'

useRem()
useTheme()

createApp(App).use(mLibs).use(router).use(store).mount('#app')
