<template>
  <form @submit.prevent="Login" class="container">
    <div class="d-flex flex-column w-full gap-3 ">
      <!-- form component -->
      <div class="fs-2 fw-semibold text-center">Sign in to your account</div>
      <div
        class="fw-light text-center container"
        style="font-size: 15px; color: #808080"
      >
        If you already signup and can not signin using password, please check
        your registered email and confirm signup
      </div>
      <div class="w-full">
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control input-field"
            id="floatingInput"
            placeholder="name@example.com"
            aria-describedby="emailHelp"
            required
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
            aria-describedby="passwordHelp"
            required
            v-model="password"
          />
          <label for="floatingPassword">Password</label>
        </div>
      </div>
      <!-- button -->
      <div class="d-flex justify-content-center w-full align-items-center">
        <button
          @click="Login"
          class="col-12 btn btn-warning text-light fw-bold"
        >
          Login
        </button>
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

      <div class="d-flex justify-content-center w-full align-items-center">
        <GoogleLogin :callback="callback" />
      </div>

      <div>
        Dont have a account?
        <a @click="goToSignUpPage" class="text-reset" style="cursor: pointer">
          <span class="text-warning fw-semibold">Sign up here</span>
        </a>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/lib/supabaseClient";
import { useUserInforStore } from "@/stores/userInfor";
import { decodeCredential } from "vue3-google-login";
// email and password for credential login
// function for credential login
let email = ref("");
let password = ref("");

const Login = async (e) => {
  e.preventDefault();
  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if email or password fields are empty
  if (!email.value || !password.value) {
    alert("Please fill in both email and password.");
    return; // Stop the function if fields are empty
  }

  // Check if email is in the correct format
  if (!emailRegex.test(email.value)) {
    alert("Please enter a valid email address.");
    return; // Stop the function if email is not valid
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) {
    alert("Failed to login. Please check your credentials.");
    return;
  }

  if (data) {
    console.log("Login successful:", data);
    getCurrentUser();
  }
};

// callback for google Oauth
const userInfor = useUserInforStore();
const callback = async (res) => {
  const userData = decodeCredential(res.credential);
  userInfor.setUserInfo(userData.name, userData.email, userData.picture);
  if (userData.email_verified !== null) {
    const { error } = await supabase.from("AuthenticationCustom").upsert([
      {
        authType: "Oauth",
        userEmail: userData.email,
        AccessToken: userData.sub,
      },
    ]);
    // error code 23505
    console.log(error);
    router.push("/chat");
  }
};

// get current user from supabase
const getCurrentUser = async () => {
  const user = await supabase.auth.getSession();
  console.log(user.data.session.access_token);
  // authRole
  userInfor.setUserInfo(
    user.data.session.user.user_metadata.username,
    user.data.session.user.email,
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    "passwordBase"
  );
  const { error } = await supabase.from("AuthenticationCustom").upsert([
    {
      authType: "passwordBase",
      userEmail: user.data.session.user.email,
      AccessToken: user.data.session.access_token,
    },
  ]);
  console.log(error);
  if (user) {
    router.push("/chat");
  }
};

// router to push to Signup page
const router = useRouter();
const goToSignUpPage = () => {
  router.push("/signup");
};
</script>

<style>
.input-field:focus {
  outline: none;
  box-shadow: none;
  border: 1px solid #000000;
}
</style>
