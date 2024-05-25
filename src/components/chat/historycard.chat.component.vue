<template>
  <div class="w-full bg-white px-2 py-2 rounded-3">
    <div class="d-flex flex-col gap-1 justify-between align-items-center">
      <div>
        <ChatBubble />
      </div>
      <div class="w-auto">
        <div
          style="
            width: 150px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          consequuntur consectetur laboriosam sed veritatis qui pariatur
          recusandae ab delectus assumenda! Ipsum earum quia animi deleniti
          tenetur id nostrum beatae eius.
        </div>
      </div>

      <!-- Default dropend button -->
      <div class="btn-group dropend">
        <button
          type="button"
          class="px-0 border-0 bg-transparent"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <Enllipsis />
        </button>
        <ul class="dropdown-menu">
          <!-- Dropdown menu links -->
          <li class="dropdown-item">
            <button
              class="btn btn-outline-danger d-flex flex-row justify-content-center align-items-center gap-1"
            >
              <Trash />
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import ChatBubble from "../icon/chat-bubble.icon.vue";
import Enllipsis from "../icon/enllipsis.icon.vue";
import Trash from "../icon/trash.icon.vue";
</script>
