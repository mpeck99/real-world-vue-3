
import { createApp} from 'vue'
import { createPinia } from 'pinia'
import 'nprogress/nprogress.css'
import GStore from './store'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide('GStore', GStore)
app.mount('#app')
