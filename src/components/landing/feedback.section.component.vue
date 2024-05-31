<template>
  <div class="w-75 mx-auto">
    <div
      class="d-flex flex-column justify-content-center gap-5 align-items-center py-4"
    >
      <div class="text-center fw-bold fs-2 my-2">Loved by developers</div>
      <div
        class="d-flex flex-row w-100 justify-content-between align-items-center"
      >
        <DeveloperFeedback
          v-for="item in paginatedFeedbacks"
          :key="item.name"
          :feedback="item.feedback"
          :name="item.name"
          :rating="item.rating"
          :email="item.email"
        />
      </div>
      <nav aria-label="Page navigation" class="d-flex justify-content-center">
        <ul class="pagination">
          <li
            class="page-item"
            v-for="n in maxPage"
            :key="'page-' + n"
            :class="{ active: currentPage === n }"
          >
            <a
              class="page-link text-black"
              @click="handlePageClick(event, n)"
              >{{ n }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import DeveloperFeedback from "@/components/landing/developerfeedback.vue";
import { supabase } from "@/lib/supabaseClient";

const feedbacks = ref([]);
const currentPage = ref(1);
const itemsPerPage = ref(3);

// Fetch data from Supabase on component mount
const fetchData = async () => {
  const { data, error } = await supabase.from("FeebackTable").select();
  if (error) {
    console.error("Error fetching feedback:", error);
  } else {
    feedbacks.value = data.map((item) => ({
      name: item.userName,
      feedback: item.userFeedback,
      rating: item.rating,
      email: item.userEmail,
    }));
  }
};

defineExpose({
  fetchData,
});

onMounted(fetchData);

const paginatedFeedbacks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return feedbacks.value.slice(start, end);
});

const maxPage = computed(() => {
  return Math.ceil(feedbacks.value.length / itemsPerPage.value);
});
const handlePageClick = (event, pageNumber) => {
  currentPage.value = pageNumber;
};
</script>
