<template>
  <div
    class="d-flex flex-column gap-3 h-100 w-75 mx-auto"
    @keypress.enter="sendMessage"
  >
    <!-- Display user inputs -->
    <div ref="messageDisplay"  class="mt-3 user-input-display">
      <div v-for="(message, index) in messages" :key="index" class="user-message d-flex flex-row gap-4">
      <div
        style="height: 30px; width: 30px; object-fit: cover"
        class="rounded-circle overflow-hidden d-flex justify-content-center align-items-center"
      >
        <img
          :src="userImage.getUserInfo.image"
          alt="portrait"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>

       {{ message }}
    </div>
    </div>
    
    <!-- ai chat and response box -->
    <div class="flex-grow-1">
      <WelcomeChatComponent v-if="messages.length === 0" />
    </div>
    <!-- user input -->
    <div class="input-container">
      <div class="mb-2 position-relative">
        <input
          v-model="userInput"
          type="text"
          class="form-control py-3 px-2 border-warning"
          id="floatingInput"
          placeholder="ask any question here...."
        />
        <div class="pl-2">
          <button
            @click="sendMessage"
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
import { ref, nextTick } from "vue";
import SendIcon from "../icon/send.icon.vue";
import WelcomeChatComponent from "./welcome.chat.component.vue";
import { useUserInforStore } from "@/stores/userInfor";

const userInput = ref("");
const messages = ref([]);
const userImage = useUserInforStore();
const messageDisplay = ref(null);
const sendMessage = () => {
  if (userInput.value.trim() !== "") {
    messages.value.push(userInput.value);
    userInput.value = "";
    nextTick(() => {
      if (messageDisplay.value) {
        messageDisplay.value.scrollTop = messageDisplay.value.scrollHeight;
      }
    });
  }
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

.user-message {
  text-align: start;
  margin: 3px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.user-input-display {
  max-height: 600px; 
  overflow-y: scroll;
}
</style>
