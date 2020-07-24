<template>
  <button 
    class="site-button"
    :style="cmp.style"
    :href="cmp.content.href"
    @click.stop="openEditor"
    @dragover.prevent
    >
  <span
    class="site-text"
    :contenteditable="editMode"
    v-text="cmp.content.text"
    @blur="onEdit"
    @dragover.prevent
  >
  </span>
  </button>
</template>

<script>
import {
  eventBus,
  EDIT_ELEMENT,
  OPEN_EDITOR,
  UPDATE_SITE
} from '@/services/event-bus.service.js';

export default {
  name: 'site-button',
  props: ['cmp'],
  computed: {
    editMode() {
      return this.$store.getters.editMode;
    }
  },
  methods: {
    onEdit(ev) {
      this.cmp.content.text = ev.target.innerText;
      eventBus.$emit(UPDATE_SITE);
    },
    openEditor() {
      eventBus.$emit(EDIT_ELEMENT, this.cmp);
      eventBus.$emit(OPEN_EDITOR, this.cmp.type);
    }
  },
  created() {
    this.content = this.cmp.content;
    eventBus.$on(UPDATE_SITE, () => this.$forceUpdate());
  }
}

</script>
