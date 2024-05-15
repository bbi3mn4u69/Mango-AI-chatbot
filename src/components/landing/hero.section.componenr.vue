<template>


  <div class="vw-100 vh-100 d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="w-75 mx-auto">
        <div class="d-flex flex-row justify-content-center align-items-center">
          <div
            class="d-flex flex-column justify-content-center align-items-start py-5"
          >
            <div class="mt-5 mb-4 text-start fs-3 fw-bold">
              <div>
                Welcome to your
                <span class="fw-bold text-warning">
                  next-level chat experience
                </span>
              </div>
              <div>
                where every conversation brings you closer to
                <span class="fw-bold text-warning">
                  clarity and connection!
                </span>
              </div>
            </div>
            <div class="mt-3">
              <div class="my-1">
                <div class="text-start fw-light fs-5 blockquote-footer">
                  Let get the latest chat bot AI application
                </div>
              </div>
            </div>

            <button class="btn btn-warning" @click="goToChatPage">
              Get Started
            </button>
          </div>
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <img src="/AI/1.png" alt="AI" class="w-75" />
          </div>
        </div>
      </div>

      <div
        class="d-flex flex-column justify-content-center align-items-center py-4"
      >
        <!-- next section -->
        <div class="fw-bold fs-4 text-uppercase mb-4">trusted by teams at</div>
        <!-- fill this by logo of trusted by team ticker  -->
        <div class="ticker-container">
          <div class="mt-4">
            <div class="ticker">
              <img
                v-for="logo in logos"
                :key="logo.id"
                :src="logo.url"
                alt="Logo"
                class="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "hero-section",
  setup() {
    const router = useRouter();
    const goToChatPage = () => {
      router.push("/chat");
    };
    return {
      goToChatPage,
    };
  },
  data() {
    const originalLogos = [
      { id: 1, url: "/picture/logo-1.png" },
      { id: 2, url: "/picture/logo-2.png" },
      { id: 3, url: "/picture/logo-3.png" },
      { id: 4, url: "/picture/logo-4.png" },
      { id: 5, url: "/picture/logo-5.png" },
      { id: 6, url: "/picture/logo-6.png" },
      { id: 7, url: "/picture/logo-7.png" },
      { id: 8, url: "/picture/logo-8.png" },
      { id: 9, url: "/picture/logo-9.png" },
    ];
    // Duplicate the logos for a seamless loop
    return {
      logos: [
        ...originalLogos,
        ...originalLogos.map((logo) => ({ ...logo, id: logo.id + 100 })),
      ],
    };
  },
};
</script>

<style scoped>


.ticker-container {
  width: 75%;
  overflow: hidden;
  position: relative;
  height: auto; /* Adjust based on your logo height */
  overflow-x: hidden;
}

.ticker {
  display: flex;
  width: calc(100%); /* Enough width to hold all logos twice */
  animation: ticker 20s linear infinite;
}

.logo {
  width: 100px; /* Adjust based on your logo size */
  height: auto;
  margin-right: 100px; /* Space between logos */
}

@keyframes ticker {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
