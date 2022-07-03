import { App } from 'vue'

import { UseSysStore } from '@/store/modules/SysStore'

export default (app: App) => {
  app.directive('btn-permission', {
    created(el: HTMLElement, binding) {
      const SysStore = UseSysStore()
      const NeedPermission: string[] = binding.value
      const SystemPermission = SysStore.SysUserInfo.permissions || []
      const HavePermission = SystemPermission.some(permission => NeedPermission.includes(permission))
      if (!HavePermission) {
        el.style.display = 'none'
      }
    }
  })
}
