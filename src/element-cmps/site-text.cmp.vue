<template>
  <span
    class="site-text"
    :style="cmp.style"
    :contenteditable="editMode"
    v-html="cmp.content"
    @blur="onEdit"
    @click.stop="openEditor"
    @dragover.prevent
  >
  </span>
</template>

<script>
import { eventBus, EDIT_ELEMENT, UPDATE_SITE, OPEN_EDITOR } from "@/services/event-bus.service.js";

export default {
  name: 'site-text',
  props: ['cmp'],
  computed: {
    editMode() {
      return this.$store.getters.editMode;
    }
  },
  created() {
    eventBus.$on(UPDATE_SITE, () => this.$forceUpdate());
  },
  methods: {
    onEdit(ev) {
      this.cmp.content = ev.target.innerText
    }, 
    openEditor() {
        eventBus.$emit(EDIT_ELEMENT, this.cmp);
        eventBus.$emit(OPEN_EDITOR, this.cmp.type);
    }
  }
};
</script>

