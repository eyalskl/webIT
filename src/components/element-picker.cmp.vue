<template>
  <section class="element-picker flex wrap justify-center">
    <button class="element-name" v-for="(name , idx) in elementNames" @click="showList(name)" :key="idx">
      {{ name }}
    </button>
  </section>

</template>

<script>
export default {
  name: 'element-picker',
  data() {
    return {
      elementNames: ['header','navbar','gallery', 'cards', 'contact form','map','video','footer']
    };
  },
  computed: {},
  methods: {
    showList(listName){
      this.$emit('showList',listName)
    }
  }
};
</script>

<style>
</style>