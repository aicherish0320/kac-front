import { watch } from 'vue'
import store from '../store'
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '@/constants/index.js'

export default () => {
  watch(
    () => store.getters.themeType,
    (val) => {
      let themeClassName = ''

      switch (val) {
        case THEME_LIGHT:
          themeClassName = 'light'
          break
        case THEME_DARK:
          themeClassName = 'dark'
          break
        default:
          break
      }

      document.querySelector('html').className = themeClassName
    },
    {
      immediate: true
    }
  )
}
