import { defineStore } from 'pinia';

export const useChatStore = defineStore('chatStore', {
  state: () => ({
    chats: []
  }),
  actions: {
    addChat({whomChat, image, message}) {
      this.chats.push({whomChat, image, message});
    },
    getChats() {
      return this.chats;
    }
  },
});