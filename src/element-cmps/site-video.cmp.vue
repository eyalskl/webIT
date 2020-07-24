<template>   
  <div class="site-video" :class="cmp.style" @mouseover="displayControls" @mouseout="hideControls" >
    <button class="video-btn" v-if="editMode" v-show="showControls" @click.stop="openEditor" >
      <i class="fas fa-link"></i>
    </button>
    <iframe width="100%" height="100%" :src="formattedUrl" frameborder="0"  allowfullscreen></iframe>
  </div>	  
</template>

<script>
import { eventBus, EDIT_ELEMENT, OPEN_EDITOR } from "@/services/event-bus.service.js";

export default {
  name: 'site-video',
  props: ['cmp'],
	data() {
		return {
			content:'',
			showControls:false
		};
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
	computed:{
        formattedUrl(){
            return this.cmp.content.replace('watch?v=' , 'embed/')
		},
		    editMode() {
      		return this.$store.getters.editMode
    }
	}
};
</script>
