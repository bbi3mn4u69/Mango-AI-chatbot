<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap"
    rel="stylesheet"
  />
  <div class="w-75 mx-auto">
    <nav class="navbar navbar-expand-lg bg-transparent d-none d-lg-flex">
      <div class="container-fluid">
        <div class="d-flex justify-content-between align-items-center w-100">
          <div>
            <img src="/logo/logo.png" style="width: 73px" alt="logo" />
            <a class="navbar-brand fs-1 custom-font text-warning" href="#"
              >mangoAI</a
            >
          </div>
          <div class="d-flex flex-row gap-5 fw-semibold fs-5">
            <button class="nav-link" @click="scrollIntoIntroduction">
              Introduction
            </button>
            <button class="nav-link" @click="scrollIntoFeedback">
              Feedback
            </button>
          </div>
          <div>
            <button
              type="button"
              class="btn btn-outline-warning"
              @click="PushLogin"
            >
              <a class="nav-link fw-semibold fs-6">Let's chat</a>
            </button>
          </div>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg bg-transparent d-lg-none">
      <div class="container-fluid">
        <div class="d-flex justify-content-between align-items-center w-100">
          <div @click="toggleSideNav" class="side-nav-toggler">
            <img src="/logo/logo.png" style="width: 73px" alt="logo" />
            <a class="navbar-brand fs-1 custom-font text-warning" href="#"
              >mangoAI</a
            >
          </div>
        </div>
      </div>
    </nav>
    <div
      :class="['side-navbar', { 'side-navbar-open': isSideNavOpen }]"
      @click="toggleSideNav"
    >
      <div class="side-navbar-content" @click.stop>
        <div class="sidebar-header">
          <img src="/logo/logo.png" style="width: 50px" alt="logo" />
          <a class="navbar-brand fs-1 custom-font text-warning" href="#"
            >mangoAI</a
          >
          <button class="close-btn" @click="toggleSideNav">&times;</button>
        </div>
        <div class="sidebar-links">
          <button class="nav-link" @click="scrollIntoIntroduction">
            Introduction
          </button>
          <button class="nav-link" @click="scrollIntoFeedback">
            Feedback
          </button>
          <button class="btn btn-outline-warning mt-3" @click="PushLogin">
            Let's chat
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isSideNavOpen = ref(false);

const toggleSideNav = () => {
  isSideNavOpen.value = !isSideNavOpen.value;
};

const PushLogin = () => {
  router.push("/chat");
  isSideNavOpen.value = false; // Close the side nav
};

const scrollIntoIntroduction = () => {
  const introSection = document.querySelector("#introduction");
  if (introSection) {
    introSection.scrollIntoView({ behavior: "smooth" });
  }
  isSideNavOpen.value = false; // Close the side nav
};

const scrollIntoFeedback = () => {
  const feedbackSection = document.querySelector("#feedback");
  if (feedbackSection) {
    feedbackSection.scrollIntoView({ behavior: "smooth" });
  }
  isSideNavOpen.value = false; // Close the side nav
};
</script>

<style scoped>
.custom-font {
  font-family: "Reenie Beanie", cursive;
  font-weight: 900;
  font-style: normal;
}

.side-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #1f1f2f;
  color: white;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
}

.side-navbar-open {
  transform: translateX(0);
}

.side-navbar-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;
  justify-content: space-between;
}

.sidebar-links .nav-link {
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px;
  color: white;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
}

.sidebar-links .nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.side-nav-toggler {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}
</style>
