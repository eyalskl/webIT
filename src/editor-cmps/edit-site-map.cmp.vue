<template>
  <div class="edit-site-map">
      <h3> Map Editor </h3>
      <section class="edit-map flex column">
          <div class="location-input">
            <input type="text" placeholder="Set a Location on the Map..." @keydown.enter="getLocation" v-model="address"/>
            <button @click="getLocation"> 
                <i class="fas fa-search"> </i> 
            </button>
          </div>
          <p> Set Zoom: </p>
          <div class="zoom-input">
            <button @click="cmp.content.zoom--"> 
                <i class="fas fa-minus"> </i> 
            </button>
            <input disabled type="text" @keydown.enter="getLocation" v-model="cmp.content.zoom"/>
            <button @click="cmp.content.zoom++"> 
                <i class="fas fa-plus"> </i> 
            </button>
          </div>
      </section>
  </div>
</template>

<script>
import { eventBus, UPDATE_SITE } from "@/services/event-bus.service.js";
import { geoService } from '@/services/geo-service';

export default {
    name: 'edit-site-map',
    props: ['cmp'],
    data() {
        return {
            address: '',
            zoom: 15
        }
    },
    methods: {
        setCenter() {
            eventBus.$emit(UPDATE_SITE);
        },
        async getLocation() {
            if (!this.address) return 
            const res = await geoService.getGeo(this.address);
            this.cmp.content.center = res.results[0].geometry.location;
            eventBus.$emit(UPDATE_SITE);
        }
    }
}
</script>

<style>

</style>