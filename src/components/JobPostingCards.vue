<template>
  <div class="text-center d-flex justify-content-center">
    <b-card-group>
      <b-card :title="jobPosting.companyName" style="max-width: 20rem;">
        <b-card-text
          ><span class="font-weight-bold">Start Date:</span>
          {{ jobPosting.startDate }}
          <span class="font-weight-bold">End Date:</span>
          {{ jobPosting.endDate }}
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "JobPostingsCards",
  props: ["jobPosting", "index", "selected"]
};
</script>
