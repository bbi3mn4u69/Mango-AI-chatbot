<template>
  <div
    class="d-flex flex-column gap-3 h-100 w-75 mx-auto"
    @keypress.enter="sendMessage"
  >
    <!-- Display user inputs -->
    <div ref="messageDisplay"  class="mt-3 user-input-display">
      <div v-for="(chat, index) in chatStore.chats" :key="index" class="user-message d-flex flex-row gap-4">
      <div
        style="height: 45px; width: 45px; object-fit: cover"
        class="rounded-circle overflow-hidden d-flex justify-content-center align-items-center"
      >
        <img
          :src="chat.image"
          alt="portrait"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>

       {{ chat.message }}
    </div>
    <div v-if="isLoading === true" class="user-message d-flex flex-row gap-4">
      <div
        style="height: 45px; width: 45px; object-fit: cover"
        class="rounded-circle overflow-hidden d-flex justify-content-center align-items-center border"
      >
        <img
          src="/logo/logo.png"
          alt="portrait"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </div>
      <div class="loader"></div>
    </div>
    </div>
    
    <!-- ai chat and response box -->
    <div class="flex-grow-1">
      <WelcomeChatComponent v-if="chatStore.chats.length === 0" />
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
          autocomplete="off"
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
import run from "@/lib/AIService";
import { useChatStore } from "@/stores/chat";

const userInput = ref("");
const userImage = useUserInforStore();
const messageDisplay = ref(null);
const chatStore = useChatStore();
let isLoading = ref(false);
const sendMessage = async () => {
  isLoading = true
  if(userInput.value ){
    chatStore.addChat({whomChat: "user", image: userImage.getUserInfo.image, message: userInput.value});
    const response = await run(userInput.value)
     if(response){
      isLoading = false
      chatStore.addChat({whomChat: "ai", image: "/logo/logo.png", message: response});
     }
  }
  if (userInput.value.trim() !== "") {
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

.loader {
  width: 30px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(circle closest-side,#000 90%,#0000);
  background: 
    var(--_g) 0%   50%,
    var(--_g) 50%  50%,
    var(--_g) 100% 50%;
  background-size: calc(100%/3) 50%;
  animation: l3 1s infinite linear;
}

@keyframes l3 {
    20%{background-position:0%   0%, 50%  50%,100%  50%}
    40%{background-position:0% 100%, 50%   0%,100%  50%}
    60%{background-position:0%  50%, 50% 100%,100%   0%}
    80%{background-position:0%  50%, 50%  50%,100% 100%}
}

</style>


