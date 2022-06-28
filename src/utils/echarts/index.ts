import * as echarts from 'echarts/core'

// 系列类型的定义后缀都为 SeriesOption
import {
  BarChart,
  BarSeriesOption,
  LineChart,
  LineSeriesOption,
  PieChart,
  PieSeriesOption,
  PictorialBarChart,
  PictorialBarSeriesOption,
  ScatterChart,
  ScatterSeriesOption
} from 'echarts/charts'

// 组件类型的定义后缀都为 ComponentOption
import {
  TitleComponent,
  TitleComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  DatasetComponent, // 数据集组件
  DatasetComponentOption,
  LegendComponent,
  LegendComponentOption,
  TransformComponent // 内置数据转换器组件 (filter, sort)
} from 'echarts/components'

import { LabelLayout, UniversalTransition } from 'echarts/features'

// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | LegendComponentOption
  | ToolboxComponentOption
  | LineSeriesOption
  | PieSeriesOption
  | PictorialBarSeriesOption
  | ScatterSeriesOption
>

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LineChart,
  PieChart,
  PictorialBarChart,
  ScatterChart
])

export { ECOption, echarts as echartInstance }
