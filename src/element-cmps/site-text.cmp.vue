<template>
  <span
  class="site-text"
    :style="cmp.style"
    :contenteditable="editMode"
    v-text="cmp.content"
    @blur="onEdit"
    @click.stop="openEditor"
    @dragover.prevent
    @drag.prevent
    @dragstart.prevent
  >
  </span>
</template>

<script>
import { eventBus, EDIT_ELEMENT, UPDATE_SITE, OPEN_EDITOR } from "@/services/event-bus.service.js";

export default {
  name: 'site-text',
  props: ['cmp'],
  data() {
    return {
      content: ''
    };
  },
  computed: {
    editMode() {
      return this.$store.getters.editMode;
    }
  },
  created() {
    this.content = this.cmp.content;
    eventBus.$on(UPDATE_SITE, () => this.$forceUpdate());
  },
  methods: {
    onEdit(ev) {
      var txt = ev.target.innerText;
      this.content = txt;
      this.cmp.content = txt
    },
    openEditor() {
        eventBus.$emit(EDIT_ELEMENT, this.cmp);
        eventBus.$emit(OPEN_EDITOR, this.cmp.type);
    }
  }
};
</script>

