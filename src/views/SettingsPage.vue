<template>
  <div class="container">
    <h1 class="text-center">Update Your User Details and Skills:</h1>
    <b-form @submit.prevent="onSubmit(userDetails)" class="text-left">
      <b-form-group class="width" label="Your Name:" label-for="input-1">
        <b-form-input
          id="userName"
          v-model="userDetails.userName"
          type="text"
          placeholder="Enter Name"
        />
      </b-form-group>
      <b-form-group class="width" label="Your Age:" label-for="input-2">
        <b-form-input
          id="userAge"
          v-model="userDetails.userAge"
          placeholder="Enter Age"
        />
      </b-form-group>

      <UploadImage />

      <b-form-group label="Skills (minimum 3):">
        <b-form-checkbox-group
          id="checkbox-group-1"
          class="d-flex"
          v-for="(skill) in skills"
          :key="skill.name"
          v-model="selected"
        >
          <b-form-checkbox :value="skill.name">
            {{ skill.name }}
          </b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button :disabled="$v.$invalid" type="submit" variant="primary"
        >Submit</b-button
      >
    </b-form>
  </div>
</template>

<script>
import Vue from "vue";
import UploadImage from "../components/UploadImage.vue";
import {
  minLength,
  required,
  numeric,
} from "vuelidate/lib/validators";

export default {
  name: "SettingsPage",
  components: {
    UploadImage,
  },
  data() {
    return {
      userDetails: {
        userName: "",
        userAge: null
      },
      selected: [],
      skills: [
        { name: "Python", level: null },
        { name: "JavaScript", level: null },
        { name: "C++", level: null },
        { name: "Swift", level: null },
        { name: "HTML", level: null },
        { name: "Ruby", level: null },
        { name: "C*", level: null },
        { name: "Java", level: null },
        { name: "PHP", level: null },
        { name: "GoLang", level: null }
      ]
    };
  },
  methods: {
    onSubmit(userDetails) {
      const selectedSkills = this.skills.filter(skill => skill.level > 1);
      this.$store.commit("UPDATE_USER_DATA", { userDetails });
      this.$store.commit("UPDATE_USER_SKILLS", selectedSkills);
    }
  },
  validations: {
    selected: {
      minLen: minLength(3),
      required
    },
    userDetails: {
      userName: {
        required
      },
      userAge: {
        required,
        numeric
      }
    }
  }
};
</script>

<style>
.width {
  width: 500px;
}
</style>
