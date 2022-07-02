import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

import UserModule from '../mock/User'
import TableModule from '../mock/Table'

export function setupProdMockServer() {
  createProdMockServer([...UserModule, ...TableModule])
}
