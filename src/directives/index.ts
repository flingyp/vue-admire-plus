import { App } from 'vue'

import VBtnPermission from './VBtnPermission'

export const initDirective = (app: App) => {
  // 权限级别按钮指令
  VBtnPermission(app)
}
