<template>
  <form @submit.prevent="SignUp" class="container">
    <div class="d-flex flex-column w-full gap-3">
      <!-- form component -->
      <div class="fs-2 fw-semibold text-center">Sign up to your account</div>
      <div class="w-full">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control border-none input-field"
            id="floatingName"
            placeholder="Alex Example"
            v-model="username"
            required
          />
          <label for="floatingName">Your Name</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control border-none input-field"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="email"
            required
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
            required
          />
          <label for="floatingPassword">Password</label>
        </div>
      </div>
      <!-- button -->
      <div class="d-flex justify-content-center w-full align-items-center">
        <button
          @click="SignUp"
          type="submit"
          class="col-12 btn btn-warning text-light fw-bold"
          :disabled="loading"
        >
          <template v-if="loading">
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </template>
          <template v-else> Sign Up </template>
        </button>
      </div>
      <div>
        Already have a account?
        <a @click="goToSignInPage" class="text-reset" style="cursor: pointer">
          <span class="text-warning fw-semibold">Sign in here </span>
        </a>
      </div>
    </div>
  </form>

  <!-- spinner -->
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { supabase } from "@/lib/supabaseClient";

const router = useRouter();
let username = ref("");
let email = ref("");
let password = ref("");
let loading = ref(false);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex pattern

const SignUp = async (e) => {
  e.preventDefault();
  if (!emailRegex.test(email.value)) {
    alert("Please enter a valid email address.");
    return;
  }
  loading.value = true;
  if (username.value && email.value && password.value) {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          username: username.value,
        },
      },
    });
    if (data) {
      loading.value = false;
      router.push("/login");
      console.log(data);
    }
    if (error) {
      alert(`Signup failed: ${error.message}`);
      loading.value = false;
      console.log(error);
    }
  } else {
    alert("Please fill all the fields");
    loading.value = false;
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

// spinner
.lds-ring {
  /* change color here */
  color: #ffffff;
}
.lds-ring,
.lds-ring div {
  box-sizing: border-box;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 50px;
  height: 30px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  margin: 3px;
  border: 4px solid currentColor;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
