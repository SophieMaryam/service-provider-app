<template>
  <div class="container">
    <h1 class="text-center">Update Your User Details and Skills:</h1>
    <b-form @submit.prevent="onSubmit(userDetails)" class="text-left">
      <b-form-group class="width">
        <img
          v-if="image === null"
          src="../assets/default-image.png"
          alt="Default Image"
          class="mt-4 mb-3"
          height="150"
        />
        <img v-else :src="imageUrl" height="150" alt="Profle Image" />
        <p>Upload image:</p>
        <b-form-file
          accept="image/*"
          @change="onFilePicked"
        ></b-form-file>
      </b-form-group>
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

      <!-- <b-button class="primary" @click="onPickFile"> Upload Image </b-button> -->
      <!-- <input
        type="file"
        style="display: none"
        ref="fileInput"
        accept="image"
        @change="onFilePicked"
      /> -->

      <b-form-group label="Skills (minimum 3):">
        <b-form-checkbox-group
          id="checkbox-group-1"
          class="d-flex"
          v-for="(skill, index) in skills"
          :key="skill.name"
          v-model="selected"
        >
          <b-form-checkbox :value="skill.name">
            {{ skill.name }}
          </b-form-checkbox>
          <SkillLevelCounter
            v-if="selected.includes(skill.name)"
            :skill="skill"
            track-by="index"
            @update="updateLevelCount(index, $event)"
          />
        </b-form-checkbox-group>
      </b-form-group>
      <b-button 
        class="mb-5"
        :disabled="$v.$invalid" 
        type="submit" 
        variant="primary" 
        >Submit</b-button
      >
    </b-form>
  </div>
</template>

<script>
import Vue from "vue";
import SkillLevelCounter from "../components/SkillLevelCounter.vue";
import { minLength, required, numeric } from "vuelidate/lib/validators";
import { uploadImage } from "../firebase";

export default {
  name: "SettingsPage",
  components: {
    SkillLevelCounter
  },
  data() {
    return {
      imageUrl: "",
      image: null,
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
    async onSubmit(userDetails) {
      const selectedSkills = this.skills.filter(skill => skill.level >= 1);
      if (this.checkSkillLevel()) {
        return alert("Please add level to your skills!")
      } else {
        this.$store.commit("UPDATE_USER_DATA", { userDetails });
        this.$store.commit("UPDATE_USER_SKILLS", selectedSkills);
        await uploadImage(this.image);
        this.$router.push({ name: "JobPostings" });
      }
    
    },
    checkSkillLevel(){
      return this.skills.find(skill => {
        if(this.selected.includes(skill.name) && skill.level === null) {
          return true;
        }
      })

    },
    updateLevelCount(index, level) {
      Vue.set(this.skills[index], "level", level);
    },
    // onPickFile() {
    // ref="fileInput"
    //   this.$refs.fileInput.click();
    // },
    onFilePicked(event) {
      const files = event.target.files;
      let fileName = files[0].name;
      if (fileName.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file!");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
  },
  validations() {
    return {
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
      },
      image: {
        uniqueImg: val => {
          return new Promise(resolve => {
            resolve(val.level !== null);
          });
        }
      },
      // skills: {
      //   $each: {
      //     level: {
      //       uniqueNum: num => {
      //         return new Promise(resolve => {
      //           if(num > 0) {
      //             resolve(true);
      //           }
      //         });
      //       }
      //     }
      //   }
      // }
    };
  }
};
</script>

<style>
.width {
  width: 500px;
}
</style>
