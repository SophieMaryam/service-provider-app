<template>
  <div>
    <picture-input
      class="display"
      ref="pictureInput"
      @change="onChanged"
      @remove="onRemoved"
      :width="150"
      :removable="true"
      removeButtonClass="ui"
      :height="150"
      accept="image/jpeg, image/png, image/gif"
      buttonClass="ui"
    ></picture-input>
  </div>
</template>
<script>
import PictureInput from "vue-picture-input";

export default {
  name: "UploadImage",
  components: {
    PictureInput
  },
  data() {
    return {
      image: ""
    };
  },
  methods: {
    onChanged() {
      if (!this.$refs.pictureInput.file) {
        throw new Error("Old browser. No support for Filereader API");
      }
      return this.image = this.$refs.pictureInput.file;
    },
    onRemoved() {
      this.image = "";
    },
    attemptUpload(image) {
      if (!image) {
        throw new Error("FileReader API not supported");
      }
      return this.image = image;
    }
  }
};
</script>

<style scoped>
.display {
  display: inline-flex;
}
</style>
