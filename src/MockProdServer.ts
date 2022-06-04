import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

import UserModule from '../mock/User'

export function setupProdMockServer() {
  createProdMockServer([...UserModule])
}
