<template>
  <section class="element-picker">
    <span> 
      <button class="element-name btn btn-4" v-for="(name , idx) in elementNames" @click="showList(name)" :key="idx">
      {{ name }}
    </button>
    </span>
  </section>
</template>

<script>
export default {
  name: 'element-picker',
  data() {
    return {
      elementNames: ['header','cards', 'map', 'video','gallery','divider','text','contact form','footer']
    };
  },
  methods: {
    showList(listName){
      this.$emit('showList',listName)
    }
  }
}
</script>