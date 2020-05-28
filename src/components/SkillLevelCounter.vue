<template id="counter">
  <div class="col-3">
    Level: <strong>{{ skill.level }}</strong>
    <button class="btn btn-sm" @click.prevent="decrement">-</button>
    <button class="btn btn-sm" @click.prevent="increment">+</button>
    <button class="btn btn-sm" @click.prevent="reset">Reset</button>
  </div>
</template>
<script>
export default {
  name: "SkillLevelCounter",
  props: ["skill"],
  data() {
    return {
      initialLevel: this.skill.level
    };
  },
  computed: {
    level() {
      return this.skill.level;
    }
  },
  methods: {
    increment() {
      if (this.level != 10) {
        this.$emit("update", this.level + 1);
      }
    },
    decrement() {
      if (!(this.level === null) && !(this.level === 1)) {
        this.$emit("update", this.level - 1);
      }
    },
    reset() {
      this.$emit("update", this.initialLevel);
    }
  }
};
</script>
