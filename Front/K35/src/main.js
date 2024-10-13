import './assets/main.css'
import './assets/chatBox.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import signalRConfigs from '../signalRConfigs'
const app = createApp(App)

const pinia = createPinia()

app.use(pinia);

signalRConfigs.startConnection()
app.mount('#app')
