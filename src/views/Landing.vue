<template>
  <div class="vw-100 h-auto">
    <Navbar />
    <HeroSection />
    <IntroductionSection />
    <FeedbackSection />
    <FormSection />
    <LastCallSection />
    <Footer/>
  </div>
</template>

<script>
import FeedbackSection from "@/components/landing/feedback.section.component.vue";
import HeroSection from "@/components/landing/hero.section.componenr.vue";
import IntroductionSection from "@/components/landing/introduction.section.component.vue";
import FormSection from "@/components/landing/form.section.component.vue";
import LastCallSection from "@/components/landing/lastcall.section.component.vue";
import Navbar from "@/components/shared/navbar.shared.component.vue";
import Footer from "@/components/shared/footer.shared.component.vue"
export default {
  name: "LandingPage",
  components: {
    FeedbackSection,
    HeroSection,
    IntroductionSection,
    FormSection,
    LastCallSection,
    Navbar,
    Footer
  },
};
</script>
