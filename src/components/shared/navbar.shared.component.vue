<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap"
    rel="stylesheet"
  />
  <div class="w-75 mx-auto">
    <nav class="navbar navbar-expand-lg bg-transparent">
      <div class="container-fluid">
      <div class="d-flex justify-content-between align-items-center w-100">
        <div>
            <img src="/logo/logo.png" style="width: 73px;" alt="logo">
            <a class="navbar-brand fs-1 custom-font text-warning" href="#">mangoAI</a>    
        </div>
        <div class="d-flex flex-row gap-5 fw-semibold fs-5">
            <a class="nav-link " href="#">Introduction</a>
            <a class="nav-link" href="#">Feedback</a>
            <a class="nav-link" href="#">About</a>
        </div>
        <div>
            <button type="button" class="btn btn-outline-warning">
                <a class="nav-link fw-semibold  fs-6" href="#">Let's chat</a>
            </button>
            
        </div>
      </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
};
</script>

<style scoped>
.custom-font {
  font-family: "Reenie Beanie", cursive;
  font-weight: 900;
  font-style: normal;
}
</style>
