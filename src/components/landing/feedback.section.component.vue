<template>
  <div class="w-75 mx-auto">
    <div class="d-flex flex-column justify-content-center gap-5 align-items-center py-4 ">
      <div class="text-center fw-bold fs-2 my-2">Loved by developers</div>
      <div class="d-flex flex-row w-100 justify-content-between align-items-center">
        <DeveloperFeedback
          v-for="item in paginatedFeedbacks"
          :key="item.name"
          :feedback="item.feedback"
          :name="item.name"
          :position="item.position"
          :company="item.company"
          :image="item.image"
        />
      </div>
      <nav aria-label="Page navigation" class="d-flex justify-content-center ">
        <ul class="pagination ">
          <li class="page-item " v-for="n in maxPage" :key="'page-' + n" :class="{ active: currentPage === n } ">
            <a class="page-link text-black" @click="handlePageClick(event, n)">{{ n }}</a>
          </li>
        </ul>
      </nav>
    </div>   
  </div>
</template>

<script>
import DeveloperFeedback from "@/components/landing/developerfeedback.vue";

export default {
  name: "feedback-section",
  components: {
    DeveloperFeedback
  },
  data() {
    return {
      feedbacks: [
    { 
        feedback: "The AI chatbot has significantly streamlined our customer service process. Its ability to quickly understand and respond to customer queries has improved our response times and customer satisfaction scores.",
        name: "James Peterson",
        position: "Senior Project Manager",
        company: "Tech Innovations",
        image: "/portrait/portrait1.jpg"
    },
    { 
        feedback: "I've been impressed by the chatbot's versatility and adaptability to different scenarios. It’s an essential tool in our digital marketing arsenal, especially in engaging with users in real-time.",
        name: "Maria Gonzalez",
        position: "Digital Marketing Director",
        company: "Creative Solutions",
        image: "/portrait/2.jpg"
    },
    { 
        feedback: "While the chatbot’s performance is commendable in handling routine inquiries, it sometimes struggles with more complex questions. Looking forward to further enhancements in its learning algorithms.",
        name: "Liam Smith",
        position: "IT Coordinator",
        company: "Global Tech Industries",
        image: "/portrait/3.jpg"
    },
    { 
        feedback: "This AI chatbot has transformed our online customer interaction. Its seamless integration and intuitive responses have led to a more dynamic and satisfying customer journey on our website.",
        name: "Sophie Clark",
        position: "Customer Experience Manager",
        company: "Retail Empire",
        image: "/portrait/4.avif"
    },
    { 
        feedback: "The chatbot’s ability to integrate with our existing software systems without significant changes was a major win. However, it needs better customization options to truly reflect our brand’s voice.",
        name: "Ethan Zhang",
        position: "Product Manager",
        company: "Software Solutions",
        image: "/portrait/5.jpg"
    },
    { 
        feedback: "The AI chatbot is a game-changer for us in the healthcare tech sector. It not only assists patients with general inquiries but also guides them through our complex website, improving overall accessibility.",
        name: "Isabella Rossi",
        position: "Chief Innovation Officer",
        company: "HealthPlus Tech",
        image: "/portrait/6.jpg"
    }
],
      currentPage: 1,
      itemsPerPage: 3
    };
  },
  computed: {
    paginatedFeedbacks() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.feedbacks.slice(start, end);
    },
    maxPage() {
      return Math.ceil(this.feedbacks.length / this.itemsPerPage);
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.maxPage) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    handlePageClick(event, pageNumber) {
      this.currentPage = pageNumber;
    }
  }
};
</script>