<template>
  <div class="container">
    <div class="d-flex flex-column w-full gap-3">
      <!-- form component -->
      <div class="fs-2 fw-semibold text-center">Sign up to your account</div>
      <div class="w-full">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control border-none input-field"
            id="floatingInput"
            placeholder="Alex Example"
            v-model="username"
          />
          <label for="floatingInput">Your Name</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control border-none input-field"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="email"
          />
          <label for="floatingInput">Email address</label>
        </div>

        <div class="form-floating">
          <input
            type="password"
            class="form-control input-field"
            id="floatingPassword"
            placeholder="Password"
            v-model="password"
          />
          <label for="floatingPassword">Password</label>
        </div>
      </div>
      <!-- button -->
      <div class="d-flex justify-content-center w-full align-items-center">
        <button @click="SignUp" class="col-12 btn btn-warning text-light fw-bold">
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

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { supabase } from '@/lib/supabaseClient';

const router = useRouter();
let username = ref("");
let email = ref("");
let password = ref("");

const SignUp = async () => {
  console.log(username.value, email.value, password.value);
  const {data, error} = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        username: username.value,
      }
    }
  })
  if(data) {
    console.log(data)
  }if(error) {
    console.log(error)
  }
};

const goToSignInPage = () => {
  router.push("/login");
};

</script>

<script>
export default {
  name: "signup-form",
};
</script>

<style lang="scss" scoped>
.input-field:focus {
  outline: none;
  box-shadow: none;
  border: 1px solid #000000;
}
// commit 

</style>


