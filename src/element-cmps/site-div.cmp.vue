<template>

  <div v-if="editMode" class="site-div"  :style="cmp.style" @mouseover="displayControls" @mouseout="hideControls" @click.stop="openEditor"  >
    <component v-for="(cmp, idx) in cmp.cmps" :is="cmp.type" :cmp="cmp" :key="idx"></component>
    <element-controls v-show="showControls" />
  </div>
  
  <div v-else class="site-div" :style="cmp.style" :class="cmp.class">
    <component v-for="(cmp, idx) in cmp.cmps" :is="cmp.type" :cmp="cmp" :key="idx"> </component>
    <element-controls v-show="showControls" />
  </div>

</template>

<script>
import siteText from '@/element-cmps/site-text.cmp.vue';
import siteImage from '@/element-cmps/site-image.cmp.vue';
import siteButton from '@/element-cmps/site-button.cmp.vue';
import siteMap from '@/element-cmps/site-map.cmp.vue'
import siteForm from '@/element-cmps/site-form.cmp.vue';
import siteList from '@/element-cmps/site-list.cmp.vue';
import elementControls from '@/components/element-controls.cmp.vue';
import { eventBus, EDIT_ELEMENT, FORCE_UPDATE, OPEN_EDITOR } from "@/services/event-bus.service.js";

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
      eventBus.$on(FORCE_UPDATE, () => {
        this.$forceUpdate();
      })
  },
  computed: {
    editMode() {
      return this.$store.getters.editMode;
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
      eventBus.$emit(EDIT_ELEMENT, this.cmp);
      eventBus.$emit(OPEN_EDITOR, this.cmp.type);
    },
    // onDrop(dropResult){
    //   this.cmp.cmps = applyDrag(this.cmp.cmps,dropResult)
    // },
    // getCmp(index){
    //   return this.cmp.cmps[index]
    // },

  },
  components: {
    siteText,
    siteImage,
    siteButton,
    siteList,
    siteForm,
    siteMap,
    elementControls,
    Container,
    Draggable
  }
};
</script>
