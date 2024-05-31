<template>
  <div class="vw-100 h-auto">
    <Navbar />
    <HeroSection />
    <IntroductionSection />
    <FeedbackSection ref="feedbackSection"/>
    <FormSection  @feedback-submitted="fetchFeedbacks"/>
    <LastCallSection />
    <Footer/>
    <Credit/>
  </div>
</template>

<script setup>
import FeedbackSection from "@/components/landing/feedback.section.component.vue";
import HeroSection from "@/components/landing/hero.section.componenr.vue";
import IntroductionSection from "@/components/landing/introduction.section.component.vue";
import FormSection from "@/components/landing/feedbackform.section.component.vue";
import LastCallSection from "@/components/landing/lastcall.section.component.vue";
import Navbar from "@/components/shared/navbar.shared.component.vue";
import Footer from "@/components/shared/footer.shared.component.vue"
import Credit from "@/components/shared/credit.shared.component.vue"
import { ref } from 'vue';
const feedbackSection = ref(null);

const fetchFeedbacks = () => {
  if (feedbackSection.value) {
    feedbackSection.value.fetchData();
  }
};
</script>
