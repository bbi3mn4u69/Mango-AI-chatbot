<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center py-4"
    id="feedback"
  >
    <div class="container">
      <div class="w-50 mx-auto">
        <!-- next section -->
        <div class="d-flex flex-column gap-2 justify-content-center pb-4 my-2">
          <div class="text-center fs-2 fw-bold text-mobile text-tablet">
            Give Us Abit About Your Thought
          </div>
          <div class="text-center fw-light fs-5">
            How is your think of the app?
          </div>
        </div>
        <form @submit.prevent="submitFeedback" class="w-full">
          <div class="d-flex justify-content-center my-4 wrap-all">
            <div
              class="d-flex tablet-justify-content-center justify-content-between w-75 align-items-center"
            >
              <label
                @click="rating = 1"
                class="text-center rating-label"
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
                    'fs-2 px-3 py-2 border rounded-circle rating-icon': true,
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
                class="text-center rating-label"
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
                    'fs-2 px-3 py-2 border rounded-circle rating-icon': true,
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
                class="text-center rating-label"
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
                    'fs-2 px-3 py-2 border rounded-circle rating-icon': true,
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
                class="text-center rating-label"
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
                    'fs-2 px-3 py-2 border rounded-circle rating-icon': true,
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
                class="text-center rating-label"
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
                    'fs-2 px-3 py-2 border rounded-circle rating-icon': true,
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
                class="form-control input-field"
                aria-describedby="emailHelp"
                required
                v-model="userEmail"
              />
              <input
                placeholder="Enter your name"
                type="text"
                class="form-control input-field"
                aria-describedby="name"
                required
                v-model="userName"
              />
              <textarea
                placeholder="Your Feedback"
                type="text"
                class="form-control input-field"
                id="exampleInputEmail1"
                aria-describedby="text"
                required
                v-model="userFeedback"
              />
            </div>

            <button
              @click="submitFeedback"
              class="btn btn-warning mt-2"
              :disabled="loading"
            >
              <template v-if="loading">
                <div class="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </template>
              <template v-else-if="tick">
                <check-icon />
              </template>
              <template v-else> Submit </template>
            </button>
            <div class="text-center fw-light fs-6 mt-2">
              Thanks, I can make the app better base on your feedback 🤗.
            </div>
            <div
              v-if="errorMessage"
              class="text-center text-danger fw-light fs-6 mt-2"
            >
              {{ errorMessage }}
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "@/lib/supabaseClient";
import CheckIcon from "@/components/icon/check.icon.vue";
import FeedbackSection from "@/components/landing/feedback.section.component.vue";
const emit = defineEmits(["feedback-submitted"]);
let rating = ref(null);
let userEmail = ref(null);
let userName = ref(null);
let userFeedback = ref(null);
let errorMessage = ref("");
let loading = ref(false);
let tick = ref(false);

const rate = (number) => {
  rating.value = number;
};

const submitFeedback = async (e) => {
  loading.value = true;
  e.preventDefault();
  if (
    rating.value !== null &&
    userEmail.value !== null &&
    userName.value !== null &&
    userFeedback.value !== null
  ) {
    const { error, status } = await supabase.from("FeebackTable").upsert({
      rating: rating.value,
      userEmail: userEmail.value,
      userName: userName.value,
      userFeedback: userFeedback.value,
    });
    if (error) {
      console.log(error);
      errorMessage.value = "Failed to submit feedback, please try again";
    }
    if (status === 201) {
      emit("feedback-submitted");
      tick.value = true;
      setTimeout(() => {
        tick.value = false;
      }, 2000);
      loading.value = false;
      rating.value = null;
      userEmail.value = null;
      userName.value = null;
      userFeedback.value = null;
    }
  } else {
    loading.value = false;
    errorMessage.value = "Please provide your rating";
  }
};
</script>

<style lang="scss" scoped>
.input-field:focus {
  outline: none;
  box-shadow: none;
  border: 1px solid #000000;
}

.highlight {
  border-color: #ff9900; /* Example color */
  background-color: #fff2e0; /* Example background color */
}
.highlight-text {
  color: #ff9900;
}
/* spinner */
.lds-ring {
  /* change color here */
  color: #ffffff;
}
.lds-ring,
.lds-ring div {
  box-sizing: border-box;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 50px;
  height: 30px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  margin: 3px;
  border: 4px solid currentColor;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (min-width: 769px) {
  /* Adjustments for tablets and below */
  .rating-label {
    transform: scale(
      0.85
    ); /* Scale down the labels slightly less to avoid right deviation */
  }
  .rating-icon {
    font-size: 1.6rem; /* Smaller icons */
  }
  .justify-content-between.tablet-justify-content-center {
    justify-content: center; /* Centering items on tablet */
  }
  .align-items-center {
    align-items: center;
  }
}
@media (max-width: 425px) {
  /* Adjustments for mobile */
  .rating-label {
    transform: scale(0.8); /* Scale down the labels even more */
  }
  .rating-icon {
    font-size: 1.4rem; /* Even smaller icons */
  }
  .d-flex.wrap-all {
    /* Ensure labels stay in one row */
    flex-wrap: nowrap;
    overflow-x: auto;
  }
}
</style>
