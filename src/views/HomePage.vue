<template>
  <div class="centered">
    <b-card title="User Data" class="width col-md-12">
      <b-card-text class="text-left">
        <p>Go to Settings to add your details in!</p>
        <h5 class="user-name">
          <span class="font-weight-bold">Name:</span> {{ userName }}
        </h5>
        <h5><span class="font-weight-bold">Age:</span> {{ userAge }}</h5>
        <div>
          <h5 class="font-weight-bold">Skills:</h5>
          <div>
            <ul v-show="skills.length > 0">
              <li v-for="(skill, index) in skills" :key="index">
                Skill: {{ skill.name }} | Level: {{ skill.level }}
              </li>
            </ul>
          </div>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomePage",
  computed: {
    ...mapState(["userName", "userAge", "skills"])
  }
};
</script>

<style>
.centered {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.user-name {
  text-transform: capitalize;
}
</style>
