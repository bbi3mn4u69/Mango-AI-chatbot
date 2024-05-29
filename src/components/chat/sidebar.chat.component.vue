<template>
  <div class="vh-100 gradient-background">
    <div class="container">
      <div
        class="d-flex flex-column gap-2 justify-content-center align-items-center"
      >
        <div>
          <LogoChat />
        </div>

        <button
          @click="newChat"
          class="d-flex flex-row gap-1 align-items-center border-0 rounded-3 px-3 py-2"
          style="background: #fffbeb"
        >
          <PlusIcon />
          <span>New Chat</span>
        </button>

        <div class="d-flex flex-column gap-1 align-items-start ">
          <div>Recent:</div>
          <div>
            <HistoryCard />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import HistoryCard from "./historycard.chat.component.vue";
import LogoChat from "./logo.chat.component.vue";
import { useChatStore } from "@/stores/chat";
import PlusIcon from "../icon/plus.icon.vue";

const chatStore = useChatStore()
const newChat = () => {
  chatStore.resetChats()
}

</script>

<style scoped>
.gradient-background {
  background: linear-gradient(80deg, #fcd34d, #df4dfc80);
}
</style>
