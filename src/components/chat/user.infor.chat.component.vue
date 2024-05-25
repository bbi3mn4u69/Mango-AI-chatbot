<template>
  <div class="dropdown">
    <button
      class="btn dropdown-toggle d-flex flex-row align-items-center gap-2"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <div
        style="height: 40px; width: 40px; object-fit: cover"
        class="rounded-circle overflow-hidden d-flex justify-content-center align-items-center"
      >
        <img
          src="/portrait/2.jpg"
          alt="portrait"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>
    </button>
    <ul class="dropdown-menu">
      <li class="mx-3 my-1">user Name</li>
      <li class="mx-3 my-1">user Email</li>
      <li><button class="dropdown-item btn" href="#"> Sign Out </button></li>
      <li><button class="dropdown-item" href="#"> Clear history </button></li>
    </ul>
  </div>
</template>

<script></script>

<style lang="scss" scoped></style>
