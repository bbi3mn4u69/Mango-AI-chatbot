<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap"
    rel="stylesheet"
  />

  <button
    @click="goToChatPage"
    class="d-flex flex-row justify-content-center align-items-center bg-transparent border-0 responsive-button"
  >
    <img src="/logo/logo.png" class="logo" alt="logo" />
    <div>
      <div class="navbar-brand custom-font text-white logo-text">mangoAI</div>
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

.responsive-button {
  padding: 0;
}

.logo {
  width: 73px;
}

.logo-text {
  font-size: 2rem; /* Adjust as needed for desktop */
}

@media (max-width: 768px) {
  .logo {
    width: 50px; /* Adjust as needed for tablets */
  }

  .logo-text {
    font-size: 1.5rem; /* Adjust as needed for tablets */
  }
}

@media (max-width: 576px) {
  .logo {
    width: 40px; /* Adjust as needed for mobile devices */
  }

  .logo-text {
    font-size: 1.2rem; /* Adjust as needed for mobile devices */
  }
}
</style>
