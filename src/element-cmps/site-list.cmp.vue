<template>
        <ul class="clean-list" :style="cmp.style">
            <li v-for="(cmp, idx) in cmp.cmps" :key="idx">
        <component :is="cmp.type" :cmp="cmp" ></component>
        </li>
        </ul>
</template>

<script>

import siteText from '@/element-cmps/site-text.cmp.vue';
import siteImage from '@/element-cmps/site-image.cmp.vue';
import siteButton from '@/element-cmps/site-button.cmp.vue';
import siteMap from '@/element-cmps/site-map.cmp.vue'


export default {
    name:"site-list",
    props:['cmp'],
    components:{
        siteText,
        siteImage,
        siteButton,
        siteMap


    }
}
</script>
