<template>
  <div class="container">
    <div v-if="!displayClients">
      Fill in your settings to get client requests!
    </div>
    <div v-else>
      <JobPostingCards
        class="mb-4"
        v-for="(jobPosting, index) in jobPostings"
        :key="index"
        :jobPosting="jobPosting"
        :index="index"
      />
      <b-button
        class="mb-4 colour"
        variant="primary"
        @click.prevent="onSubmit()"
        >Submit Request</b-button
      >
    </div>
  </div>
</template>
<script>
import JobPostingCards from "../components/JobPostingCards.vue";
import { getAllJobPostings } from "../firebase";
import { mapState } from "vuex";
export default {
  name: "JobPostings",
  components: {
    JobPostingCards
  },
  data() {
    return {
      jobPostings: []
    };
  },
  mounted() {
    this.getJobPostings();
  },
  computed: {
    ...mapState(["displayClients"])
  },
  methods: {
    async getJobPostings() {
      this.jobPostings = await getAllJobPostings();
    }
  }
};
</script>
