<template>
  <google-map class="g-map"/>
</template>

<script>
import googleMap from '@/custom-cmps/google-map.cmp.vue'
export default {
    name:'site-map',
    props:[''],
    components:{
        googleMap
    }
}
</script>

<style>
.g-map{
    width: 100%;
    height: 100%;
}
</style>