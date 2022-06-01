/**
 * 设置值
 * @param key
 * @param value
 */
export function setLocalKey(key: string, value: any): void {
  if (typeof value === 'string') {
    localStorage.setItem(key, value)
  } else {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

/**
 * 获取值
 * @param key
 * @returns
 */
export function getLocalKey(key: string): string | undefined {
  const keyValue = localStorage.getItem(key)
  if (!keyValue) return undefined
  return keyValue
}

/**
 * 移除值
 * @param key
 */
export function removeLocalKey(key: string): void {
  localStorage.removeItem(key)
}

/**
 * 清空本地缓存
 */
export function clearLocalKey(): void {
  localStorage.clear()
}
