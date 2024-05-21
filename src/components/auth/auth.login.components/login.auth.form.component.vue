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
import { ref } from 'vue';
import { useRouter } from "vue-router";
import { supabase } from '@/lib/supabaseClient';

const router = useRouter();
let email = ref('');
let password = ref('');

const Login = async () => {
  const {data, error} = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  if(error) {
    console.log(error)
  }
  if(data) {
    console.log(data)
  }

}
const getCurrentUser = async () => {
  const user  = await supabase.auth.getSession()
  console.log(user)
}

const goToSignUpPage = () => {
  router.push("/signup");
};

</script>

<script>
export default {
  name: "form-login",
};
</script>
