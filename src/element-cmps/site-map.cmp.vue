<template>
  <google-map class="site-map" :content="cmp.content" @click.native="openEditor" />
</template>

<script>
import googleMap from '@/custom-cmps/google-map.cmp.vue';
import { eventBus, EDIT_ELEMENT, UPDATE_SITE, OPEN_EDITOR } from '@/services/event-bus.service.js';

export default {
  name: 'site-map',
  props: ['cmp'],
  methods: {
    openEditor(ev) {
      ev.stopPropagation();
      eventBus.$emit(EDIT_ELEMENT, this.cmp);
      eventBus.$emit(OPEN_EDITOR, this.cmp.type);
    },
  },
  components: {
    googleMap,
  },
};
</script>