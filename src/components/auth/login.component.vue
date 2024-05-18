<template>
   <div class="d-flex flex-column justify-content-center align-items-center vh-100">
    <div class="fs-1">
        Sign in to your account
    </div>
    <div class="d-flex justify-content-center align-items-center flex-row container">
      <LoginImage />
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from "./auth.components/login.auth.form.component.vue";
import LoginImage from "./auth.components/login.auth.image.component.vue";
export default {
  name: "Login",
  components: {
    LoginForm,
    LoginImage,
  },
};
</script>
