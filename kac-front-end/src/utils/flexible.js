import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from '../constants'

/**
 * 判断当前是否为移动设备，判断依据屏幕宽度是否小于一个指定宽度（1280）
 */
export const isMobileTerminal = computed(() => {
  return document.documentElement.clientWidth < PC_DEVICE_WIDTH
})