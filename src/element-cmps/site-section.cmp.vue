<template>
    <draggable v-if="editMode">
      <section class="site-section" :class="cmp.class" :style="cmp.style" @mouseover="displayControls" @mouseout="hideControls" @click.stop="openEditor">
        
        <element-controls v-show="showControls" :element="cmp"/>
        <component v-for="(cmp, idx) in cmp.cmps" :is="cmp.type" :cmp="cmp" :key="idx"/>

      </section>
    </draggable>
    
    <section v-else class="site-section" :style="cmp.style" :class="cmp.class">
      <component v-for="(cmp, idx) in cmp.cmps" :is="cmp.type" :cmp="cmp" :key="idx"> </component>
    </section>
</template>

<script>
import siteDiv from '@/element-cmps/site-div.cmp.vue';
import siteText from '@/element-cmps/site-text.cmp.vue';
import siteImage from '@/element-cmps/site-image.cmp.vue';
import siteButton from '@/element-cmps/site-button.cmp.vue';
import siteMap from '@/element-cmps/site-map.cmp.vue'
import siteList from '@/element-cmps/site-list.cmp.vue';
import siteVideo from '@/element-cmps/site-video.cmp.vue';
import elementControls from '@/components/element-controls.cmp.vue';
import { eventBus, EDIT_ELEMENT, UPDATE_SITE, OPEN_EDITOR } from '@/services/event-bus.service.js';
import { Container, Draggable } from 'vue-smooth-dnd';
import { applyDrag, generateItems } from '@/assets/drag-test.js';

export default {
  name: 'site-section',
  props: ['cmp'],
  data() {
    return {
      showControls: false,
          placeHolderSection: {
          className: 'drop-preview-section',
          animationDuration: '50',
          showOnTop: true
      },
    }
  },
  computed:{
    getOrientation(){
       return (this.cmp.style.flexDirection === 'column' ? 'vertical' : 'horizontal') 
    },
    editMode() {
      return this.$store.getters.editMode
    }
  },
  methods: {
    displayControls() {
      this.showControls = true;
    },
    hideControls() {
      this.showControls = false;
    },
    openEditor() {
      eventBus.$emit(OPEN_EDITOR, this.cmp.type);
      eventBus.$emit(EDIT_ELEMENT, this.cmp);
    },
  },
  created() {
    eventBus.$on(UPDATE_SITE, () => { this.$forceUpdate() })
  },
  components: {
    siteDiv,
    siteText,
    siteImage,
    siteButton,
    siteMap,
    siteVideo,
    elementControls,
    Draggable
  },
}
</script>
