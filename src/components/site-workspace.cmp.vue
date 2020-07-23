<template>
  <container class="site-container" :class="minimized"> 
    <container :get-child-payload="getCmp" :drop-placeholder="placeHolderOptions" non-drag-area-selector=".site-text , .site-button"  drag-class="section-drag" auto-scroll-enabled  @drop="onDrop" group-name="1" lock-axis="y" class="site-workspace flex column" :class="minimized">
      <component
        v-for="(cmp, idx) in siteToEdit.cmps"
        :is="cmp.type"
        :cmp="cmp"
        :key="idx"
      >
      </component>
    </container>
  </container>
</template>

<script>
import siteSection from '@/element-cmps/site-section.cmp.vue';
import { eventBus, MINIMIZE_DASHBOARD, UPDATE_SITE, ADD_SAMPLE } from '@/services/event-bus.service.js';
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag, generateItems } from "@/assets/drag-test.js";
const _ = require("lodash")

export default {
  name: 'site-workspace',
  props:['siteToEdit'],
  data() {
    return {
      minimize: false,
        placeHolderOptions: {
          className: 'drop-preview',
          animationDuration: '50',
          showOnTop: true
      }
    }
  },
  computed: {
    minimized() {
      if (this.minimize) return 'minimized';
    }
  },

  methods:{
    onDrop(dropResult){
      this.siteToEdit.cmps = applyDrag(this.siteToEdit.cmps,dropResult)
      this.$store.commit({ type:'setSite', site: this.siteToEdit })
    },
    getCmp(index){
      return this.siteToEdit.cmps[index]
    },

  },
  components: {
    siteSection,
    Container,
    Draggable
  },
  created() {
    eventBus.$on(MINIMIZE_DASHBOARD, isMinimized => {
      this.minimize = isMinimized
      })
    eventBus.$on(UPDATE_SITE, () => {
      this.$forceUpdate();
        this.$store.commit({type:'setSite', site: this.siteToEdit})
      })
  },
};
</script>
