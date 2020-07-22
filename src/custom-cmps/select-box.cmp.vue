<template>
  <el-select @change="setFilter" v-model="value" clearable :placeholder="placeholder" :style="{fontFamily: value}">
    <el-option v-for="(option, idx) in options" :key="idx" :label="option" :value="option" :style="{fontFamily: option}"></el-option>
  </el-select>
</template>

<script>
export default {
  props: ['placeholder', 'data'],
  data() {
    return {
      options: this.data,
      value: ''
    };
  },
  methods: {
    setFilter() {
      this.value = this.value
      this.$emit('input', this.value);
    }
  }
};
</script>

<style lang="scss">
  .el-input__inner {
    font-family: inherit;
  }
</style>