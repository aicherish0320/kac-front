import { watch } from 'vue'
import store from '../store'
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '@/constants/index.js'

/**
 * 监听系统主题变更
 */

let matchMedia

const watchSystemThemeChange = () => {
  if (matchMedia) return
  matchMedia = window.matchMedia('(prefers-color-schema: dark)')
  matchMedia.onchange = () => {
    changeTheme(THEME_SYSTEM)
  }
}

const changeTheme = (theme) => {
  let themeClassName = ''

  switch (theme) {
    case THEME_LIGHT:
      themeClassName = 'light'
      break
    case THEME_DARK:
      themeClassName = 'dark'
      break
    case THEME_SYSTEM:
      watchSystemThemeChange()
      themeClassName = matchMedia.matches ? 'dark' : 'light'
      break
    default:
      break
  }

  document.querySelector('html').className = themeClassName
}

export default () => {
  watch(
    () => store.getters.themeType,
    (val) => {
      changeTheme(val)
    },
    {
      immediate: true
    }
  )
}
