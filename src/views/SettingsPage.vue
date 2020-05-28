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
        userAge: null,
      }
    };
  },
  methods: {
    onSubmit(userDetails) {

      this.$store.commit("UPDATE_USER_DATA", { userDetails });
    },
  },
  validations: {
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
