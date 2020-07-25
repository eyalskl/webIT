<template>
  <el-select v-if="type === 'fontFamily'" @change="setFilter" v-model="value" clearable :placeholder="placeholder" :style="{fontFamily: value}">
    <el-option v-for="(option, idx) in options" :key="idx" :label="option" :value="option" :style="{fontFamily: option}"></el-option>
  </el-select>
  <el-select v-else @change="setFilter" v-model="value" clearable :placeholder="placeholder" style="font-family: Advent Pro">
    <el-option v-for="(option, idx) in options" :key="idx" :label="option" :value="option" style="font-family: Advent Pro"></el-option>
  </el-select>
</template>

<script>
export default {
  props: ['placeholder', 'data' ,'type'],
  data() {
    return {
      options: this.data,
      value: ''
    }
  },
  methods: {
    setFilter() {
      this.value = this.value
      this.$emit('input', this.value);
    }
  }
}
</script>