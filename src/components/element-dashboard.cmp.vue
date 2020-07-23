<template>
  <div class="element-dashboard flex column" :class="minimized">

    <div class="element-header flex justify-center">
      <button @click="pickerMode=true" :class="{selected: pickerMode === true}"> Add </button>
      <button @click="pickerMode=false" :class="{selected: pickerMode === false}"> Edit </button>
    </div>

    <div v-show="pickerMode">

      <div class="element-picker-container" v-if="!showSamples">
        <h4> Pick an Element</h4>
        <element-picker @showList="showList"/>
      </div>
      <div v-else>
        <button class="back-btn" @click="showSamples = false"><i class="fas fa-arrow-left"></i> </button>
        <samples-list :samples="samples" :type="currSampList"/>
      </div>

    </div>

    <element-edit v-show="!pickerMode" :isType="type" />

    <button
      :title="minimize ? 'Show Dashborad' : 'Hide Dashboard'"
      class="minimize"
      :class="minimized"
      @click="toggleMinimize"
    >
    <div></div>
    </button>

  </div>
</template>

<script>
import elementPicker from './element-picker.cmp.vue';
import samplesList from './samples-list.cmp.vue';
import elementEdit from './element-edit.cmp.vue';
import { eventBus, MINIMIZE_DASHBOARD, OPEN_EDITOR } from "@/services/event-bus.service.js";


export default {
  name: 'element-dahsboard',
  props:['samples'],
  data() {
    return {
      currSampList:'sections',
      pickerMode: true,
      showSamples: false,
      minimize: false,
      type: null
    };
  },
  computed: {
    minimized() {
      if (this.minimize) return 'minimized';
    },
    isShown() {
      if (this.listShown) return 'open';
    }
  },
  methods: {
    toggleMinimize() {
      this.minimize = !this.minimize;
      eventBus.$emit(MINIMIZE_DASHBOARD, this.minimize);
    },
    showList(listName) {
      this.$emit('getSamplesToShow', listName)
      this.currSampList = listName
      this.showSamples = true;
    },
  },
  created() {
    eventBus.$on(OPEN_EDITOR, (type) => {
      this.pickerMode = false;
      this.type = type;
      });
  },
  components: {
    samplesList,
    elementPicker,
    elementEdit
  }
};
</script>

<style>
</style>