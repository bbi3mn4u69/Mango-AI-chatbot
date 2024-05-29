<template>
  <div class="dropdown border-none">
    <button
      class="btn d-flex flex-row align-items-center gap-2 border-0"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      style="cursor: pointer"
    >
      <div
        style="height: 30px; width: 30px; object-fit: cover"
        class="rounded-circle overflow-hidden d-flex justify-content-center align-items-center"
      >
        <img
          :src="userInfor.getUserInfo.image"
          alt="portrait"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>
    </button>

    <div
      class="dropdown-menu rounded-4 border-0 shadow-sm"
      style="background: #fffbeb"
    >
      <div
        class="d-flex flex-column justify-content-center align-items-center gap-2 my-2 mx-2"
      >
        <!-- email -->
        <div class="mx-3 my-1 text-black fw-light">
          {{ userInfor.getUserInfo.email }}
        </div>
        <!-- image -->
        <div
          style="height: 50px; width: 50px; object-fit: cover"
          class="rounded-circle overflow-hidden d-flex justify-content-center align-items-center"
        >
          <img
            :src="userInfor.getUserInfo.image"
            alt="portrait"
            style="width: 100%; height: 100%; object-fit: cover"
          />
        </div>
        <!-- name -->
        <div class="mx-3 my-1 text-capitalize fw-light fs-5">
          Hello, {{ userInfor.getUserInfo.name }}!
        </div>
        <!-- sign out btn  -->
        <button
          @click="Logout"
          class="btn btn-danger text-light rounded-4 px-4 fw-semibold"
          href="#"
          style="background-color: #f87171"
        >
          Sign Out
        </button>
      </div>

      <li></li>
    </div>
  </div>
</template>

<script setup>
import { useUserInforStore } from "@/stores/userInfor";
import { googleLogout } from "vue3-google-login";
import { useRouter } from "vue-router";
import { useChatStore } from "@/stores/chat";
import { supabase } from "@/lib/supabaseClient";

const userInfor = useUserInforStore();
const chatStore = useChatStore();
const router = useRouter();

// Logout user
const Logout = async () => {
  console.log("logout success");
  userInfor.resetUserInfo();
  chatStore.resetChats();
  router.push("/");
  googleLogout();
  await supabase.auth.signOut();

};

</script>

<style lang="scss" scoped></style>
