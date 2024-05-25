

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import piniaPluginPersist from 'pinia-plugin-persist';


const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
const app = createApp(App)
const pinia = createPinia();
pinia.use(piniaPluginPersist);

app.use(router)
app.use(pinia)
app.use(vue3GoogleLogin, {
    clientId: clientId
})

app.mount('#app')
