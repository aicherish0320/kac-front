import SvgIcon from './svg-icon/index.vue'
import Popup from './popup/index.vue'
import { defineAsyncComponent } from 'vue'
import { underline2UpperCase } from '@/utils/underline2UpperCase'

export default {
  install(app) {
    // 1. 获取当前路径下所有文件夹中的 index.vue
    const components = import.meta.glob('./*/index.vue')
    // 2. 遍历获取到的组件模块
    for (const [fullPath, fn] of Object.entries(components)) {
      const componentName = fullPath.replace('./', '').split('/')[0]
      // 3. 利用 app.component 进行注册
      app.component(
        underline2UpperCase(componentName),
        defineAsyncComponent(fn)
      )
    }
  }
}
