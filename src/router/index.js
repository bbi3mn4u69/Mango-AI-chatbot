import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue';
import Landing from "../views/Landing.vue";
import Chat from "../views/chat.vue";
import Login from "../views/Login.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // User Authorisezation Path
    {path: '/login', name: "loginpage", component: Login},
    
    {path: '/', name: "helloword", component: HelloWorld},
    // Public Path
    {path: '/landing', name: "landingpage", component: Landing},
    // Protected Path
    {path: '/chat', name: "chatpage", component: Chat}

]
})

export default router
