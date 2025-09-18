import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App)

app.use(store)   // ✅ Vue 3 way of registering Vuex
app.mount('#app')
