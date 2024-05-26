<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center vh-100 vw-100"
  >
    <div
      class="d-flex flex-column justify-content-center align-items-center container"
    >
      <div class="w-75 container-sm">
        <SignUpImg />
        <SignUpForm />
      </div>
    </div>
    <Credit />
  </div>
</template>

<script setup>
import SignUpForm from "./auth.signup.components/signup.form.component.vue";
import SignUpImg from "./auth.signup.components/signup.img.component.vue";
import Credit from "@/components/shared/credit.shared.component.vue";
</script>

<style lang="scss" scoped></style>
