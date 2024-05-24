<template>
  <div class="d-flex flex-column gap-3 h-100 w-75 mx-auto">
    <!-- ai chat and response box -->
    <div class="flex-grow-1">
      <WelcomeChatComponent />
    </div>
    <!-- user input -->
    <div class="input-container">
      <div class="mb-2 position-relative">
        <input
          type="email"
          class="form-control py-3 px-2 border-warning"
          id="floatingInput"
          placeholder="ask any question here...."
        />
        <div class="pl-2">
          <button
            class="position-absolute top-50 end-0 translate-middle-y bg-transparent border-0"
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SendIcon from "../icon/send.icon.vue";
import WelcomeChatComponent from "./welcome.chat.component.vue";




</script>
<script>
export default {
  name: "main-chat",
};
</script>
<style scoped>
.input-container {
  margin-bottom: 20px;
}

.form-control::placeholder {
  color: text-white-50; /* Ensures placeholder text is black */
}

.form-control:focus {
  outline: none;
  box-shadow: none;
}
</style>
