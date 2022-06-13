/**
 * h() 渲染Iconify组件函数
 */

import { h } from 'vue'

import { Icon } from '@iconify/vue'

export function render(
  props: {
    name: string
    width?: string | number
    height?: string | number
    color?: string
    isInline?: boolean
  } = { name: '', height: 50, width: 50, isInline: true }
) {
  return h(Icon, {
    icon: props.name,
    width: props.width,
    height: props.height,
    color: props.color,
    inline: props.isInline
  })
}
