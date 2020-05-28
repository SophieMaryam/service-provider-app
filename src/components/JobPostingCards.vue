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
        <b-form-checkbox
          :id="'toggle-' + index"
          v-model="jobPosting.selected"
          @change="onChange(jobPosting)"
          :name="'checkbox-1' + index"
        >
          Select Request
        </b-form-checkbox>
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
      isDuplicateName: null
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
    },
    onChange(jobPosting) {
      this.checkDuplicateCompanyName(jobPosting);

      if (!jobPosting.selected && !this.isDuplicateName) {
        this.selected.push({
          jobPosting: jobPosting.companyName,
          startDate: jobPosting.startDate
        });
      } else if (jobPosting.selected) {
        this.removeSelectedRequest(jobPosting);
      } else {
        throw new Error("Error occuring");
      }
    },
    checkDuplicateCompanyName(jobPosting) {
      return (this.duplicateName = this.selected.filter(
        clientReq => clientReq.jobPosting == jobPosting.companyName
      ));
    },
    removeSelectedRequest(jobPosting) {
      this.selected.splice(
        this.selected.findIndex(
          clientReq => clientReq.jobPosting === jobPosting.companyName
        ),
        1
      );
    }
  }
};
</script>
