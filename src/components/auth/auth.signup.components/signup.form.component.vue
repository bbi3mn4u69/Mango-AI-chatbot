<template>
  <div class="container">
    <div class="d-flex flex-column w-full gap-3">
      <!-- form component -->
      <div class="fs-2 fw-semibold text-center">Sign up to your account</div>
      <div class="w-full">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control border-none"
            id="floatingInput"
            placeholder="Alex Example"
          />
          <label for="floatingInput">Your Name</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control border-none"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>

        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
      </div>
      <!-- button -->
      <div class="d-flex justify-content-center w-full align-items-center">
        <button class="col-12 btn btn-warning text-light fw-bold">
          Sign Up
        </button>
      </div>
      <div>
        Already have a account?
        <a @click="goToSignInPage" class="text-reset" style="cursor: pointer">
          <span class="text-warning fw-semibold">Sign in here</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {useRouter} from "vue-router";
export default {
    name: "signup-form",
    setup() {
        const router = useRouter();
        const goToSignInPage = () => {
            router.push("/login");
        };
        return {
            goToSignInPage
        }
    }
};
</script>

<style lang="scss" scoped></style>
