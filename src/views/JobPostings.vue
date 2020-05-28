<template>
  <div class="container">
    <div v-if="!displayClients">
      Fill in your settings to get client requests!
    </div>
    <div v-else>

    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "JobPostings",
  computed: {
    ...mapState(["displayClients"])
  },
  methods: {
  }
};
</script>

<style scoped></style>
