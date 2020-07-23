<template>
  <section class="element-edit-container">
    <h2 v-show="!elementPicked"> Please pick an element on the workspace to enter edit mode.</h2>
    <div class="element-edit" v-show="elementPicked">
      <component v-if="cmpToEdit.type" :is="'edit-' + cmpToEdit.type" :cmp="cmpToEdit"> </component>
    </div>
  </section>
</template>

<script>
import editSiteText from '@/editor-cmps/edit-site-text.cmp';
import editSiteMap from '@/editor-cmps/edit-site-map.cmp';
import editSiteButton from '@/editor-cmps/edit-site-text.cmp';
import editSiteImage from '@/editor-cmps/edit-site-image.cmp';
import editSiteSection from '@/editor-cmps/edit-site-section.cmp';
import editSiteDiv from '@/editor-cmps/edit-site-section.cmp';
import { eventBus, EDIT_ELEMENT } from "@/services/event-bus.service.js";

export default {
  name: 'element-edit',
  props: ['isType'],
  data() {
    return {
      elementPicked: false,
      cmpToEdit: {
        type: this.isType,
        style: {
          cmpName: '',
          fontSize: 20,
          lineHeight: 1,
          letterSpacing: 0,
          color: '#765fe5'
        }
      },
    }
  },
  created() {
    this.cmpToEdit.type = this.isType
    eventBus.$on(EDIT_ELEMENT, cmp => {
      this.elementPicked = true;
      this.cmpToEdit = cmp;
      })
  },
  components: {
    editSiteText,
    editSiteButton,
    editSiteSection,
    editSiteImage,
    editSiteMap,
    editSiteDiv
  },
  destroyed() {
    this.elementPicked = false;
  }
};
</script>