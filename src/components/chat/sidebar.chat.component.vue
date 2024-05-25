<template>
  <div class="bg-warning vh-100 ">
    <div class="container">
      <div
        class="d-flex flex-column gap-2 justify-content-center align-items-center"
      >
        <div>
          <LogoChat />
        </div>
        <div>
          <HistoryCard />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import HistoryCard from "./historycard.chat.component.vue";
import LogoChat from "./logo.chat.component.vue";
import UserInfor from "./user.infor.chat.component.vue";
</script>
