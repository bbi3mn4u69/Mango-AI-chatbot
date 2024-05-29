<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap"
    rel="stylesheet"
  />

  <button
    @click="goToChatPage"
    class="d-flex flex-row justify-content-center align-items-center bg-transparent border-0"
  >
    <img src="/logo/logo.png" style="width: 73px" alt="logo" />
    <div>
      <div class="navbar-brand fs-1 custom-font text-white">mangoAI</div>
    </div>
  </button>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goToChatPage = () => {
  router.push("/");
};
</script>

<style scoped>
.custom-font {
  font-family: "Reenie Beanie", cursive;
  font-weight: 900;
  font-style: normal;
}
</style>
