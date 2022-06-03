import SvgIcon from './svg-icon/index.vue'
import Popup from './popup/index.vue'

export default {
  install(app) {
    app.component('SvgIcon', SvgIcon)
    app.component('Popup', Popup)
  }
}
