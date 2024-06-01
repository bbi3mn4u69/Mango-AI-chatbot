<template>
  <div class="vw-100 h-auto mb-5 pb-4" id="introduction">
    <div class="container">
      <div class="w-75 mx-auto">
        <div
          class="d-flex flex-column justify-content-between align-items-center gap-5"
        >
          <!--  -->
          <div
            class="d-flex flex-column justify-content-center align-items-center gap-3"
          >
            <div class="text-center fs-2 my-2 fw-bold">
              Elevate your communication
            </div>
            <!--  -->
            <div class="fw-light fs-5 text-center my-2">
              Effortlessly with our chat application! We deliver an
              <span class="fw-semibold text-warning">
                exceptional experience</span
              >
              for your team to interact and engage through our
              <span class="fw-semibold text-warning">robust platform</span>.
              From real-time messaging and scalable architectures to seamless
              integration with your existing systems, everything is
              <span class="fw-semibold text-warning">designed </span>
              to
              <span class="fw-semibold text-warning"
                >enhance your connectivity</span
              >.
            </div>
            <!--  -->
          </div>
          <div
            class="w-100 d-flex flex-column justify-content-center align-items-center gap-3"
          >
            <div class="text-center fs-2 my-2 mt-4 fw-semibold">
              Ask and get Answer
            </div>
            <!--  -->
            <div class="mt-4 w-100">
              <div
                class="d-flex flex-row justify-content-center align-items-center"
              >
                <img
                  src="/picture/ask.png"
                  alt="chat-app"
                  class="w-75 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from "../icon/arrow.icon.vue";

export default {
  name: "introduction-section",
  components: {
     ArrowIcon
  }
};
</script>
