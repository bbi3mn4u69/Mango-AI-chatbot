

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin, {
    clientId: clientId
})
app.mount('#app')
