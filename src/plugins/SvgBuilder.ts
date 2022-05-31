import { Plugin } from 'vite'
import { readFileSync, readdirSync, PathLike } from 'fs'

let idPerfix = ''
const svgTitle = /<svg([^>+].*?)>/
const clearHeightWidth = /(width|height)="([^>+].*?)"/g

const hasViewBox = /(viewBox="[^>+].*?")/g

const clearReturn = /(\r)|(\n)/g

function findSvgFile(dir: PathLike): string[] {
  const svgRes = []
  const dirents = readdirSync(dir, { withFileTypes: true })
  // eslint-disable-next-line no-restricted-syntax
  for (const dirent of dirents) {
    if (dirent.isDirectory()) {
      svgRes.push(...findSvgFile(`${dir + dirent.name}/`))
    } else {
      const svg = readFileSync(dir + dirent.name)
        .toString()
        .replace(clearReturn, '')
        // eslint-disable-next-line no-loop-func
        .replace(svgTitle, (_$1, $2) => {
          let width = 0
          let height = 0
          let content = $2.replace(clearHeightWidth, (_s1: any, s2: string, s3: number) => {
            if (s2 === 'width') {
              width = s3
            } else if (s2 === 'height') {
              height = s3
            }
            return ''
          })
          if (!hasViewBox.test($2)) {
            content += `viewBox="0 0 ${width} ${height}"`
          }
          return `<symbol id="${idPerfix}-${dirent.name.replace('.svg', '')}" ${content}>`
        })
        .replace('</svg>', '</symbol>')
      svgRes.push(svg)
    }
  }
  return svgRes
}

export default (path: string, perfix = 'icon'): Plugin | undefined => {
  if (path === '') return undefined

  idPerfix = perfix
  const res = findSvgFile(path)

  return {
    name: 'svg-transform',
    transformIndexHtml(html): string {
      return html.replace(
        '<body>',
        `
          <body>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">
              ${res.join('')}
            </svg>
        `
      )
    }
  }
}
