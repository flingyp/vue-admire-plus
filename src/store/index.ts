import { App } from 'vue'
import { createPinia } from 'pinia'

const initStore = (app: App<Element>) => {
  app.use(createPinia())
}

export { initStore }
