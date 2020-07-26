<template>
  <container v-if="siteToEdit" class="site-container" :class="minimized"> 
    <container class="site-workspace flex column" @drop="onDrop" :class="minimized" drag-class="section-drag" :get-child-payload="getCmp" :drop-placeholder="placeHolderOptions" :non-drag-area-selector="nonDrags" auto-scroll-enabled  group-name="1" lock-axis="y" id="my-node">
      
      <component v-for="(cmp, idx) in siteToEdit.cmps" :is="cmp.type" :cmp="cmp" :key="idx">
      </component>
      <section class="drop-preview-empty" v-if="!siteToEdit.cmps.length"> </section>
    </container>
  </container>
  <img v-else class="loader" src="../assets/loadingAnimation.svg"/>
</template>

<script>
import siteSection from '@/element-cmps/site-section.cmp.vue';
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag, generateItems } from "@/assets/drag-test.js";
import { eventBus, MINIMIZE_DASHBOARD, UPDATE_SITE, ADD_SAMPLE } from '@/services/event-bus.service.js';
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
