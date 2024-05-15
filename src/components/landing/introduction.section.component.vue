<template>
  <div class="vw-100 h-auto mb-5 pb-4">
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
                class="d-flex flex-row justify-content-between align-items-center"
              >
                <div class="fw-light fs-5 text-start my-2 card rounded">
                  <ul class="list-unstyled card-body">
                    <li>
                      Build your
                      <span class="fw-semibold text-warning">community</span>
                    </li>
                    <li>
                      Strengthen your
                      <span class="fw-semibold text-warning">interactions</span>
                    </li>
                    <li>
                      Expand as your
                      <span class="fw-semibold text-warning">needs</span>
                    </li>
                    <li>
                      Discover a
                      <span class="fw-semibold text-warning"
                        >smarter way to connect</span
                      >
                    </li>
                    <li>
                      Only with
                      <span class="fw-semibold text-warning"
                        >our chat solution</span
                      >
                    </li>
                  </ul>
                </div>
                <ArrowIcon />
                <img
                  src="/picture/appinterface.png"
                  alt="chat-app"
                  class="w-50 rounded"
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
