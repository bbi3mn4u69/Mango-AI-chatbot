<template>
  <div>
    <div class="row g-0 text-center">
      <div class="col-6 col-md-2">
        <SideBar />
      </div>
      <div class="col-sm-8 col-md-10 position-relative">

        <MainChat />
        <div class="position-absolute top-0 end-0 m-3 h-auto">
          <UserInfor />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "../components/chat/sidebar.chat.component.vue";
import MainChat from "../components/chat/mainchat.component.vue";
import UserInfor from "../components/chat/user.infor.chat.component.vue";
</script>
