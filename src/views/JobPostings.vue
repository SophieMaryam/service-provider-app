<template>
  <div class="container">
    <div v-if="!displayClients">
      Fill in your settings to get client requests!
    </div>
    <div v-else>
      <JobPostingCards
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
import { mapState } from "vuex";
export default {
  name: "JobPostings",
  components: {
    JobPostingCards
  },
  computed: {
    ...mapState(["displayClients"])
  },
  methods: {
    onSubmit() {
      console.log("test")
    }
  }
};
</script>

<style scoped></style>
