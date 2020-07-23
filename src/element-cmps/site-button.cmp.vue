<template>
  <button
    :style="cmp.style"
    :contenteditable="editMode"
    v-text="content.text"
    :href="content.href"
    @blur="onEdit"
    @click.stop="openEditor"
    @dragover.prevent
    class="site-button"
  ></button>
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
  data() {
    return {
      content: { text: ' ', href: '' }
    };
  },
  computed: {
    editMode() {
      return this.$store.getters.editMode;
    }
  },
  methods: {
    onEdit(ev) {
      var txt = ev.target.innerText;
      this.content.text = txt;
      this.cmp.content.text = txt
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
