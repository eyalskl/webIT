
<template>
  <div class="samples-list">
    <component v-if="samples" :is="`sample-${type}`" :samples="samples" />
  </div>
</template>

<script>
import sampleSection from '@/samples-cmps/sample-section.cmp.vue'
import sampleButton from '@/samples-cmps/sample-button.cmp.vue'

export default {
  name: 'samples-list',
  props:['samples', 'type'],
  data() {
    return {

    };
  },
  methods: {

  },
  components:{
    sampleSection,
    sampleButton
  }
};
</script>

<style>
</style>