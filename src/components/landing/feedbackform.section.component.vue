<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center py-4"
  >
    <div class="container">
      <div class="w-50 mx-auto">
        <!-- next section -->
        <div class="d-flex flex-column gap-2 justify-content-center pb-4 my-2">
          <div class="text-center fs-2 fw-bold">
            Give Us Abit About Your Thought
          </div>
          <div class="text-center fw-light fs-5">
            How is your think of the app?
          </div>
        </div>
        <form class="w-full">
          <div class="d-flex justify-content-center my-4">
            <div class="d-flex justify-content-between w-75">
              <label
                @click="rating = 1"
                class="text-center"
                style="cursor: pointer"
              >
                <input
                  type="radio"
                  name="rating"
                  value="1"
                  class="d-none"
                  v-model="rating"
                />
                <div
                  :class="{
                    'fs-2 px-3 py-2 border rounded-circle': true,
                    'highlight border-warning': rating === 1,
                  }"
                >
                  😢
                </div>
                <div :class="{ 'mt-2': true, 'highlight-text': rating === 1 }">
                  Terrible
                </div>
              </label>
              <label
                @click="rate(2)"
                class="text-center"
                style="cursor: pointer"
              >
                <input
                  type="radio"
                  name="rating"
                  value="2"
                  class="d-none"
                  v-model="rating"
                />
                <div
                  :class="{
                    'fs-2 px-3 py-2 border rounded-circle': true,
                    'highlight border-warning': rating === 2,
                  }"
                >
                  🙁
                </div>
                <div :class="{ 'mt-2': true, 'highlight-text': rating === 2 }">
                  Bad
                </div>
              </label>
              <label
                @click="rate(3)"
                class="text-center"
                style="cursor: pointer"
              >
                <input
                  type="radio"
                  name="rating"
                  value="3"
                  class="d-none"
                  v-model="rating"
                />
                <div
                  :class="{
                    'fs-2 px-3 py-2 border rounded-circle': true,
                    'highlight border-warning': rating === 3,
                  }"
                >
                  🙂
                </div>
                <div :class="{ 'mt-2': true, 'highlight-text': rating === 3 }">
                  Okay
                </div>
              </label>
              <label
                @click="rate(4)"
                class="text-center"
                style="cursor: pointer"
              >
                <input
                  type="radio"
                  name="rating"
                  value="4"
                  class="d-none"
                  v-model="rating"
                />
                <div
                  :class="{
                    'fs-2 px-3 py-2 border rounded-circle': true,
                    'highlight border-warning': rating === 4,
                  }"
                >
                  😄
                </div>
                <div :class="{ 'mt-2': true, 'highlight-text': rating === 4 }">
                  Good
                </div>
              </label>
              <label
                @click="rate(5)"
                class="text-center"
                style="cursor: pointer"
              >
                <input
                  type="radio"
                  name="rating"
                  value="5"
                  class="d-none"
                  v-model="rating"
                />
                <div
                  :class="{
                    'fs-2 px-3 py-2 border rounded-circle': true,
                    'highlight border-warning': rating === 5,
                  }"
                >
                  🥰
                </div>
                <div :class="{ 'mt-2': true, 'highlight-text': rating === 5 }">
                  Amazing
                </div>
              </label>
            </div>
          </div>
          <div class="text-center fw-light fs-5 align-items-start">
            What are the main reasons for your rating?
          </div>
          <div class="d-flex justify-content-center flex-column">
            <div class="d-flex justify-content-center flex-column gap-2">
              <input
                placeholder="Enter your email"
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
              />
              <input
                placeholder="Enter your name"
                type="text"
                class="form-control"
                aria-describedby="name"
              />
              <textarea
                placeholder="Your Feedback"
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="text"
              />
            </div>

            <button type="submit" class="btn btn-warning mt-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let rating = ref(null);
const rate = (number) => {
  rating.value = number;
  console.log(rating.value);
};
</script>

<style scoped>
.highlight {
  border-color: #ff9900; /* Example color */
  background-color: #fff2e0; /* Example background color */
}
.highlight-text {
  color: #ff9900;
}
</style>
