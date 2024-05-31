<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center py-4"
  >
    <!-- next section -->
    <div class="text-center fs-2 my-2 fw-bold ">Ready to get started?</div>
    <div class="fw-light fs-5 w-75 text-center my-2">
      Integrate into your existing project, start from scratch, or just take
      things for a spin.
    </div>
    <!-- button -->
    <button class="btn btn-warning" @click="PushGetStarted">Get Started</button>

    <!-- end of landing page -->
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const PushGetStarted = () => {
  router.push('/chat');
}

</script>
