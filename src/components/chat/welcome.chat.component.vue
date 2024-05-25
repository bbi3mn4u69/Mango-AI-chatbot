<template>
       <div class="d-flex flex-row justify-content-center align-items-center">
        <div
          class="d-flex flex-column justify-content-center align-items-start py-5"
        >
          <div class="mt-5 mb-4 text-start sub-text">
            <div
              class="d-flex flex-column text-center justify-content-center align-items-center"
            >
              <span class="fw-bold gradient-text">
                Hi, {{ userInfor.getUserInfo.name }}.
              </span>
              What can I help you with today?
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
    import { useUserInforStore } from "@/stores/userInfor";
    const userInfor = useUserInforStore();
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(90deg, #ffcc00, #ff6699);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem; /* Adjust the font size as needed */
  font-weight: bold; /* Adjust the font weight as needed */
}
.sub-text {
  color: #a3a3a3;
  font-size: 2.3rem;
  font-weight: bold;
}
</style>
