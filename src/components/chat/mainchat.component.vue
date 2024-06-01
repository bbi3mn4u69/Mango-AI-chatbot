<template>
  <div
    class="d-flex flex-column vh-100 w-75 mx-auto"
    @keypress.enter="sendMessage"
  >
    <!-- Display user inputs -->
    <div ref="messageDisplay" class="mt-3 user-input-display flex-grow-1 overflow-auto">
      <div
        v-for="(chat, index) in chatStore.chats"
        :key="index"
        class="user-message d-flex flex-row gap-4 justify-content-between"
      >
        <div class="chat-image rounded-circle overflow-hidden border d-flex justify-content-center align-items-center">
          <img
            :src="chat.image"
            alt="portrait"
            class="chat-img"
          />
        </div>
        <div class="container" v-html="chat.message"></div>
      </div>
      <div v-if="isLoading === true" class="user-message d-flex flex-row gap-4">
        <div class="chat-image rounded-circle overflow-hidden d-flex justify-content-center align-items-center border">
          <img
            src="/logo/logo.png"
            alt="portrait"
            class="chat-img"
          />
        </div>
        <div class="loader mx-2"></div>
      </div>
    </div>

    <!-- ai chat and response box -->
    <div class="flex-grow-1">
      <WelcomeChatComponent v-if="chatStore.chats.length === 0" />
    </div>
    <!-- user input -->
    <div class="input-container">
      <div class=" position-relative">
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
  isLoading.value = true;
  const currentInput = userInput.value; // Store current input in a temporary variable

  // Clear the input field immediately for a better user experience
  userInput.value = "";

  if (currentInput.trim() !== "") {
    chatStore.addChat({
      whomChat: "user",
      image: userImage.getUserInfo.image,
      message: currentInput,
    });

    nextTick(() => {
      if (messageDisplay.value) {
        messageDisplay.value.scrollTop = messageDisplay.value.scrollHeight;
      }
    });

    const response = await run(currentInput);

    if (response) {
      isLoading.value = false;
      let responseArray = response.split("**");
      let newResponse = "";
      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse +=
            "<div class='fw-semibold'>" + responseArray[i] + "</div>";
        }
      }
      let joinbres = newResponse.split("*").join("");
      let joinnextline = joinbres.replace(/\n/g, "<br>");
      let joinlink = joinnextline.replace(/##/g, "");
      let finalResponse = joinlink.replace(
        /\[(.*?)\]\((.*?)\)/g,
        "<a href='$2'>$1</a>"
      );

      chatStore.addChat({
        whomChat: "ai",
        image: "/logo/logo.png",
        message: finalResponse,
      });

      if (finalResponse !== "") {
        nextTick(() => {
          if (messageDisplay.value) {
            messageDisplay.value.scrollTo({
              top: messageDisplay.value.scrollHeight,
              behavior: "smooth",
            });
          }
        });
      }
    }
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
  margin-bottom: 25px;
}

.user-input-display {
  flex-grow: 1;
  overflow-y: auto;
}

/* Chat image styling */
.chat-image {
  height: 45px;
  width: 45px;
}

.chat-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Media queries for tablet and iPhone sizes */
@media (max-width: 768px) {
  .chat-image {
    height: 35px; /* Adjust for tablets */
    width: 40px; /* Adjust for tablets */
  }
}

@media (max-width: 576px) {
  .chat-image {
    height: 30px; /* Adjust for iPhones */
    width: 35px; /* Adjust for iPhones */
  }
}

.loader {
  width: 30px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(circle closest-side, #000 90%, #0000);
  background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
  background-size: calc(100% / 3) 50%;
  animation: l3 1s infinite linear;
}

@keyframes l3 {
  20% {
    background-position: 0% 0%, 50% 50%, 100% 50%;
  }
  40% {
    background-position: 0% 100%, 50% 0%, 100% 50%;
  }
  60% {
    background-position: 0% 50%, 50% 100%, 100% 0%;
  }
  80% {
    background-position: 0% 50%, 50% 50%, 100% 100%;
  }
}
</style>
