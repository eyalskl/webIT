<template>
  <section class="element-picker flex wrap">
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
      elementNames: ['header','navbar','gallery','cards', 'divider','contact form','map','video','footer']
    };
  },
  methods: {
    showList(listName){
      this.$emit('showList',listName)
    }
  }
}
</script>