import { useDark, useToggle } from '@vueuse/core'
import { UseSysStore } from '@/store/modules/SysStore'

/**
 * 切换系统主题模式钩子函数
 * @returns {IsDark, ToggleThemeMode}
 * judgeIsDarkMode：判断当前系统主题模式是否为暗黑模式
 * toggleThemeMode：切换系统主题模式
 */
const useThemeMode = () => {
  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  // 判断当前系统主题模式是否为暗黑模式
  const judgeIsDarkMode = () => {
    return useDark().value
  }

  // 切换系统主题模式
  const toggleThemeMode = () => {
    const SysStore = UseSysStore()
    const ModeBoolean = !judgeIsDarkMode()
    SysStore.setThemeMode(ModeBoolean ? 'dark' : 'light')
    toggleDark(ModeBoolean)
  }
  return { judgeIsDarkMode, toggleThemeMode }
}

export { useThemeMode }
