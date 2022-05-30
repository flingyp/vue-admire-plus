import { App } from 'vue'
import { createPinia } from 'pinia'

const initStore = (app: App) => {
  app.use(createPinia())
}

export { initStore }
