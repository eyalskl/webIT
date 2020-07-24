<template>
  <container class="site-container" :class="minimized"> 
    <container class="site-workspace flex column" :get-child-payload="getCmp" :drop-placeholder="placeHolderOptions" :non-drag-area-selector="nonDrags" drag-class="section-drag" auto-scroll-enabled  @drop="onDrop" group-name="1" lock-axis="y" :class="minimized">
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
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag, generateItems } from "@/assets/drag-test.js";
import { eventBus, MINIMIZE_DASHBOARD, UPDATE_SITE, ADD_SAMPLE } from '@/services/event-bus.service.js';
const _ = require("lodash")

export default {
  name: 'site-workspace',
  props:{ 
    'siteToEdit': {
      type: Object,
      required: true
    } 
  },
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
    },
    nonDrags() {
      return '.site-text, .site-button, .site-map'
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
}
</script>
