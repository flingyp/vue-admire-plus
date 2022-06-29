import chroma from 'chroma-js'

/**
 *
 * @param firstColor ：第一个色值
 * @param secondColor ：第二个色值
 * @param percentage ： 混合的比例
 */
export const CreateMixColor = (firstColor: string, secondColor: string, percentage: number, level: number = 1) => {
  const MixColor = chroma.mix(firstColor, secondColor, 1.3 - percentage / 10)
  return MixColor.darken(level).brighten(level).hex()
}
