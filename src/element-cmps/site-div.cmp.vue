<template>
  <div v-if="editMode" class="site-div" :class="cmp.class" :style="cmp.style" @click.stop="openEditor">
    <component v-for="(cmp, idx) in cmp.cmps" :is="cmp.type" :cmp="cmp" :key="idx"></component>
  </div>

  
  <div v-else class="site-div" :style="cmp.style" :class="cmp.class">
    <component v-for="(cmp, idx) in cmp.cmps" :is="cmp.type" :cmp="cmp" :key="idx"> </component>
  </div>
</template>

<script>
import siteText from '@/element-cmps/site-text.cmp.vue';
import siteImage from '@/element-cmps/site-image.cmp.vue';
import siteButton from '@/element-cmps/site-button.cmp.vue';
import siteMap from '@/element-cmps/site-map.cmp.vue'
import siteForm from '@/element-cmps/site-form.cmp.vue';
import siteList from '@/element-cmps/site-list.cmp.vue';
import siteVideo from '@/element-cmps/site-video.cmp.vue';
import { eventBus, EDIT_ELEMENT, UPDATE_SITE, OPEN_EDITOR } from "@/services/event-bus.service.js";
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag, generateItems } from "@/assets/drag-test.js";

export default {
  name: 'site-div',
  props: ['cmp'],
  data() {
    return {
      showControls: false
    };
  },
  created() {
      eventBus.$on(UPDATE_SITE, () => {
        this.$forceUpdate();
      })
  },
  computed: {
    editMode() {
      return this.$store.getters.editMode;
    }
  },
  methods: {
    openEditor() {
      eventBus.$emit(EDIT_ELEMENT, this.cmp);
      eventBus.$emit(OPEN_EDITOR, this.cmp.type);
    },
  },
  components: {
    siteText,
    siteImage,
    siteButton,
    siteList,
    siteForm,
    siteMap,
    siteVideo,
    Container,
    Draggable
  }
};
</script>
