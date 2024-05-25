<template>
  <div>
    <div class="card bg-transparent border-3 border-warning" style=" width: 20rem; height: 21rem;">
      <!-- the feedback -->
      <div class="card-body">
      <div class="d-flex flex-column justify-content-between h-100">
        <div class="card-subtitle my-3 text-black">
          {{ feedback }}
        </div>
        <div class="d-flex align-items-center flex-row gap-3 my-3 ">
          <div
            style="height: 50px; width: 65px; object-fit: cover;"
            class="rounded-circle overflow-hidden d-flex justify-content-center align-items-center"
          >
            <img
              :src="image"
              alt="portrait"
              style="width: 100%; height: 100%; object-fit: cover;"
            />
          </div>
          <div class="d-flex flex-column justify-content-start">
            <div class="fw-bold text-warning">{{ name }}</div>
            <div>
              {{ position }} <span class="fw-bold"> {{ company }}</span>
            </div>
          </div>
        </div>
      </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "developer-feedback",
  props: ["feedback", "image", "name", "position", "company"], // Define props here
};
</script>