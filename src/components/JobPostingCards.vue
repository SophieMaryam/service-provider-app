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
        <b-card-text
          >Skills: {{ name }} | Level: {{ clientLevelRequired }}
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "JobPostingsCards",
  props: ["jobPosting", "index", "selected"],
  data() {
    return {
      name: "",
      levels: [],
      clientLevelRequired: "",
    };
  },
  computed: {
    ...mapState(["skills"])
  },
  mounted() {
    this.setSelectedSkills();
  },
  methods: {
    setSelectedSkills() {
      const selectedSkills = this.skills;
      const selectAtRandom =
        selectedSkills[Math.floor(Math.random() * selectedSkills.length)];
      this.name = selectAtRandom.name;
      this.setLevel(selectAtRandom.level);
    },
    setLevel(level) {
      this.levels.push(level, level - 1);
      const selectAtRandom = this.levels[
        Math.floor(Math.random() * this.levels.length)
      ];
      return (this.clientLevelRequired = selectAtRandom);
    }
  }
};
</script>
