<template>
  <container
    class="editor-container flex column animate__animated animate__fadeIn"
  >
    <nav-bar />
    <div class="editor flex">
      <element-dashboard
        :samples="samples"
        @getSamplesToShow="getSamplesToShow"
        @shouldAcceptDrop="false"
      />
      <site-workspace
        v-if="siteToEdit"
        :siteToEdit="siteToEdit"
        @shouldAcceptDrop="true"
      />
    </div>
  </container>
</template>

<script>
import navBar from '@/components/nav-bar.cmp.vue';
import siteWorkspace from '../components/site-workspace.cmp.vue';
import elementDashboard from '@/components/element-dashboard.cmp.vue';
import { templateService } from '@/services/template-service.js';
import { utilService } from '@/services/util.service.js';
import { Container, Draggable } from 'vue-smooth-dnd';
import { applyDrag, generateItems } from '@/assets/drag-test.js';
import {
  eventBus,
  ADD_SAMPLE,
  EDIT_ELEMENT,
  CLONE_ELEMENT,
  REMOVE_ELEMENT,
  MOVE_ELEMENT,
} from '@/services/event-bus.service.js';
const _ = require('lodash');

export default {
  name: 'site-editor',
  data() {
    return {
      samples: {},
      siteToEdit: null,
      siteToEdit: {
        name: 'Grilled Cheese Factory',
        previewImg:
          'https://i.ibb.co/f0SnZ3T/screenshot-localhost-8080-2020-07-25-16-53-49.png',
        createdBy: {
          username: 'system',
          _id: 'admin',
        },
        cmps: [
          {
              type: 'site-section',
              class: 'color-line',
              style: {
                background: '#a7dbd8',
              },
              cmps: [],
            },
          {
              type: 'site-section',
              class: 'color-line-tall',
              style: {
                background: '#a7dbd8',
                margin: '0 auto',
              },
              cmps: [{
                type:'site-text',
                content:'Make me yours',
                style:{
                  width: '500px',
                  fontFamily:'',
                  fontSize:'',
                  color:''
                }
              }],
            },
          
        ],
      },
    };
  },
  created() {
    this.$store.commit({ type: 'setEditMode', editMode: true });
    this.loadSite();
    this.samples = templateService.getSamplesOf('section');
    eventBus.$on(ADD_SAMPLE, (sample) => this.addSample(sample));
    eventBus.$on(CLONE_ELEMENT, (element) => this.clone(element));
    eventBus.$on(REMOVE_ELEMENT, (elementId) => {
      this.remove(elementId);
    });
    eventBus.$on(MOVE_ELEMENT, (elementId, direction) => {
      this.moveElement(elementId, direction);
    });
  },
  methods: {
    async loadSite() {
      const templateId = this.$route.params.id;
      const site = await this.$store.dispatch({
        type: 'loadSite',
        id: templateId,
      });
      this.siteToEdit = site;
    },
    getSamplesToShow(listName) {
      this.samples = templateService.getSamplesOf(listName);
    },
    addSample(sample) {
      this.siteToEdit.cmps.unshift(sample);
      this.$store.commit({ type: 'setSite', site: this.siteToEdit });
    },
    getElementSamples(element) {
      this.samples = templateService.getSamplesOf(element);
    },
    moveElement(elementId, direction) {
      let cmps = this.siteToEdit.cmps;
      let idx = cmps.findIndex((cmp) => cmp.id === elementId);
      if (idx === -1) return;
      if (direction === 'down' && idx + 1 < cmps.length) {
        let cmp = cmps[idx];
        cmps.splice(idx, 1, cmps[idx + 1]);
        cmps.splice(idx + 1, 1, cmp);
      } else if (direction === 'up' && idx !== 0) {
        let cmp = cmps[idx];
        cmps.splice(idx, 1, cmps[idx - 1]);
        cmps.splice(idx - 1, 1, cmp);
      }
      this.$store.commit({ type: 'setSite', site: this.siteToEdit });
    },
    clone(element) {
      let idx = this.siteToEdit.cmps.findIndex((cmp) => cmp.id === element.id);
      if (idx === -1) return;
      let clone = _.cloneDeep(element);
      clone.id = utilService.makeId();
      clone = templateService.addIds(clone);
      this.siteToEdit.cmps.splice(idx, 0, clone);
      this.$store.commit({ type: 'setSite', site: this.siteToEdit });
    },
    remove(elementId) {
      let idx = this.siteToEdit.cmps.findIndex((cmp) => cmp.id === elementId);
      if (idx === -1) return;
      this.siteToEdit.cmps.splice(idx, 1);
      this.$store.commit({ type: 'setSite', site: this.siteToEdit });
    },
  },
  watch: {
    '$route.params.id'() {
      this.loadSite();
    },
  },
  components: {
    siteWorkspace,
    elementDashboard,
    Container,
    Draggable,
    navBar,
  },
  destroyed() {
    this.$store.commit({ type: 'setSite', site: null });
  },
};
</script>
