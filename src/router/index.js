import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Landing from "../views/Landing.vue";
import Chat from "../views/chat.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import { supabase } from "@/lib/supabaseClient";
import { useUserInforStore } from "@/stores/userInfor";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // User Authorisezation Path
    { path: "/login", name: "loginpage", component: Login },
    { path: "/signup", name: "signuppage", component: SignUp },
    { path: "/", name: "helloword", component: HelloWorld },
    // Public Path
    { path: "/landing", name: "landingpage", component: Landing },
    // Protected Path
    {
      path: "/chat",
      name: "chatpage",
      component: Chat,
      meta: { requiresAuth: true },
    },
  ],
});

// get user
const GetUser = async (next) => {
  const userInforStore = useUserInforStore()
  
  const { data: localUser } = await supabase
    .from("AuthenticationCustom")
    .select("userEmail")
    .eq("userEmail", userInforStore.user.email)
    console.log(userInforStore.user.email)
    console.log(localUser)
  if (localUser.length === 0) {
    next("/login");
    console.log("running /login")
  }else {
    next()
    console.log("running here")
  }
};
//auth requirement
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    GetUser(next)
  } else {
    next();
  }
});

export default router;
