<template>
  <button 
    class="site-button"
    :style="cmp.style"
    @click.stop="openEditor"
    @dragover.prevent
    >
      <span
        v-if="editMode"
        class="site-text"
        :contenteditable="editMode"
        v-text="cmp.content.text"
        @blur="onEdit"
        @dragover.prevent
      >
      </span>
    <a v-else :href="cmp.content.href" target="_blank">
      <span class="site-text" v-text="cmp.content.text" @dragover.prevent> </span>
    </a>
  </button>
</template>

<script>
import { eventBus, EDIT_ELEMENT, OPEN_EDITOR, UPDATE_SITE } from '@/services/event-bus.service.js';

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
    eventBus.$on(UPDATE_SITE, () => this.$forceUpdate());
    if (this.cmp.content.href) if (!this.cmp.content.href.startsWith('h')) this.cmp.content.href = 'http://' + this.cmp.content.href;
  }
}
</script>
