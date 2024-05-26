<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center vh-100"
  >
    
    <div
      class="d-flex justify-content-center align-items-center flex-row container "
    >
      <LoginImage />
      <LoginForm />
    </div>
    <Credit/>
  </div>
  
</template>

<script setup>
import LoginForm from "./auth.login.components/login.auth.form.component.vue";
import LoginImage from "./auth.login.components/login.auth.image.component.vue";
import Credit from "@/components/shared/credit.shared.component.vue"

</script>
