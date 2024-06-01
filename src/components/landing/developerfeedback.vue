<template>
  <div class="mx-2">
    <div
      class="card bg-transparent border-3 border-warning"
      style="width: 20rem; height: 21rem"
    >
      <!-- the feedback -->
      <div class="card-body">
        <div class="d-flex flex-column justify-content-between h-100">
          <div class="card-subtitle my-3 text-black">
            {{ feedback }}
          </div>
          <div class="d-flex align-items-center flex-row gap-3 my-3">
            <div
              class="rounded-circle overflow-hidden d-flex justify-content-center align-items-center"
            >
              <div v-if="rating === 1" class="fs-2 px-3 py-2 border rounded-circle highlight">
                😢
              </div>
              <div v-else-if="rating === 2" class="fs-2 px-3 py-2 border border-warning rounded-circle highlight">
                🙁
              </div>
              <div v-else-if="rating === 3" class="fs-2 px-3 py-2 border border-warning rounded-circle highlight">
                🙂
              </div>
              <div v-else-if="rating === 4" class="fs-2 px-3 py-2 border border-warning rounded-circle highlight">
                😄
              </div>
              <div v-else-if="rating === 5" class="fs-2 px-3 py-2 border border-warning rounded-circle highlight">
                🥰
              </div>
            </div>
            <div class="d-flex flex-column justify-content-start">
              <div class="fw-bold text-warning">{{ name }}</div>
              <div>{{ email }} <span class="fw-bold"></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue';

const props = defineProps({
  feedback: String,
  name: String,
  rating: Number,
  email: String
});

</script>

<style>

.highlight {
  border-color: #ff9900; /* Example color */
  background-color: #fff2e0; /* Example background color */
}
</style>
