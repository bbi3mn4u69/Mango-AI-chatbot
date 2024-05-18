<template>
  <div class="container">
    <div class="d-flex flex-column w-full gap-3">
      <!-- form component -->
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
      <div class="d-flex justify-content-center gap-4 w-full container">
        <button class="col-6 btn btn-warning w-full">Login</button>

        <button class="col-6 btn btn-primary w-full">Sign up</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "form-login",
};
</script>
