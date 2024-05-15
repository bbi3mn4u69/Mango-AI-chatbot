import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue';
import Landing from "../views/Landing.vue";
import Chat from "../views/chat.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: "helloword", component: HelloWorld},
    {path: '/landing', name: "landingpage", component: Landing},
    {path: '/chat', name: "chatpage", component: Chat}

]
})

export default router
