<template>
  <div>
    <div class="row g-0 tex-center">
      <div class="col-6 col-md-2">
        <SideBar />
      </div>
      <div class="col-sm-8 col-md-10">
        <MainChat />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/chat/sidebar.chat.component.vue";
import MainChat from "../components/chat/mainchat.component.vue";
export default {
  name: "chat-page",
  components: {
    SideBar,
    MainChat,
  },
};
</script>
