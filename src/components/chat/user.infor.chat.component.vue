<template>
  <div class="dropdown border-none">
    <button
      class="btn dropdown-toggle d-flex flex-row align-items-center gap-2 border-none"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <div
        style="height: 40px; width: 40px; object-fit: cover"
        class="rounded-circle overflow-hidden d-flex justify-content-center align-items-center"
      >
        <img
          :src="userInfor.getUserInfo.image"
          alt="portrait"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>
    </button>

    <ul class="dropdown-menu rounded-4 border-none">
      <li class="mx-3 my-1 fw-semibold">Sign in as</li>
      <li class="mx-3 my-1 text-capitalize fw-semibold">
        {{ userInfor.getUserInfo.name }}
      </li>
      <li class="mx-3 mb-3 text-lowercase text-primary">
        {{ userInfor.getUserInfo.email }}
      </li>
      <li>
        <button
          @click="Logout"
          class="dropdown-item btn text-light"
          href="#"
          style="background-color: #f87171"
        >
          Sign Out
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { decodeCredential } from "vue3-google-login";
import { useUserInforStore } from "@/stores/userInfor";
import { googleLogout } from "vue3-google-login";
import { useRouter } from "vue-router";
const userInfor = useUserInforStore();
const router = useRouter();

// Logout user
const Logout = () => {
  console.log("logout success");
  userInfor.resetUserInfo();
  router.push("/landing");
  googleLogout();
};
</script>

<style lang="scss" scoped></style>
