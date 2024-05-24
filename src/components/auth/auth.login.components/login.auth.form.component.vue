<template>
  <div class="container">
    <div class="d-flex flex-column w-full gap-3">
      <!-- form component -->
      <div class="fs-2 fw-semibold text-center">Sign in to your account</div>
      <div class="w-full">
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
        <button class="col-12 btn btn-warning text-light fw-bold">Login</button>
      </div>
      <!-- or -->
      <div class="d-flex justify-content-center container">
        <div
          class="d-flex flex-row justify-content-center w-75 align-items-center gap-3"
        >
          <hr class="w-50" />
          <div style="color: #a3a3a3">OR</div>
          <hr class="w-50" />
        </div>
      </div>
      <!-- google -->

      <GoogleLogin>
        <div class="d-flex justify-content-center w-full align-items-center">
          <button
            style="color: #a3a3a3"
            class="p-2 d-flex flex-row justify-content-center gap-2 col-12 btn border align-items-center"
          >
            <img style="width: 23px" src="/logo/Google.png" alt="google" />
            <div>Sign In With Google</div>
          </button>
        </div>
      </GoogleLogin>

      <div>
        Dont have a account?
        <a @click="goToSignUpPage" class="text-reset" style="cursor: pointer">
          <span class="text-warning fw-semibold">Sign up here</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/lib/supabaseClient";

const router = useRouter();
let email = ref("");
let password = ref("");

const Login = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
  }
};
const getCurrentUser = async () => {
  const user = await supabase.auth.getSession();
  console.log(user);
};

const goToSignUpPage = () => {
  router.push("/signup");
};
</script>

<script>
export default {
  name: "form-login",
};
</script>
