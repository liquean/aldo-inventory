<template>
  <div class="select-container">
    <select @change="onChange" v-model="model">
      <option disabled selected value>-- Select an option --</option>
      <option v-for="(item, index) in array" :key="index" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectInput",
  props: {
    array: {
      type: Set,
      default: () => {
        return [];
      },
    },
    val: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      model: "",
    };
  },
  watch: {
    val(val) {
      this.model = val;
    },
  },
  methods: {
    onChange(evt) {
      debugger;
      this.$emit("selected", evt.target.value);
    },
  },
};
</script>
<style>
select {
  min-width: 300px;
  cursor: pointer;
  padding: 8px 32px;
  margin: 8px;
}
</style>
