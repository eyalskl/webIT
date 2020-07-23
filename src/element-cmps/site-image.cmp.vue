<template>
    <img class="site-image" :src="cmp.content" :style="cmp.style" @click.stop="openEditor" @dragstart.prevent/>
</template>

<script>
import { eventBus, EDIT_ELEMENT, UPDATE_SITE, OPEN_EDITOR } from "@/services/event-bus.service.js";

export default {
    name:"site-image",
    props:['cmp'],
    methods: {
        openEditor() {
            eventBus.$emit(EDIT_ELEMENT, this.cmp);
            eventBus.$emit(OPEN_EDITOR, this.cmp.type);
        }
    },
    created() {
        eventBus.$on(UPDATE_SITE, () => this.$forceUpdate());
    },
}
</script>
