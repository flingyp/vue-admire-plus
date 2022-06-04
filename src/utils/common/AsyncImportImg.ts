/**
 * 动态导入 assets/img 的图片（Vite独特的方式）
 * @param name
 * @returns
 */
const getImageUrl = (name: string) => {
  return new URL(`../../assets/img/${name}`, import.meta.url).href
}

export { getImageUrl }
