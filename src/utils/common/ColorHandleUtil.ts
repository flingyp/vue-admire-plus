import chroma from 'chroma-js'

/**
 *
 * @param firstColor ：第一个色值
 * @param secondColor ：第二个色值
 * @param percentage ： 混合的比例
 */
export const CreateMixColor = (firstColor: string, secondColor: string, percentage: number) => {
  const MixColor = chroma.mix(firstColor, secondColor, 1.3 - percentage / 10)
  return MixColor.hex()
}

/**
 * 色值变暗
 * @param color
 * @returns
 */
export const TransformToDarken = (color: string, level: number = 1) => {
  return chroma(color).darken(level).hex()
}
