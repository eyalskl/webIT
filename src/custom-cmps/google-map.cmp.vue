<template>
  <section>
    <GmapMap
      :center="centerDisplay"
      :zoom="zoom"
      map-type-id="terrain"
    >
      <GmapMarker
        :position="centerDisplay"
        :clickable="true"
        :draggable="true"
        @click="center = centerDisplay"
      />
    </GmapMap>

  </section>
</template>

<script>
export default {
  name: 'google-map',
  props: ['content'],
  computed: {
      centerDisplay() {
        return ({ lat: this.content.center.lat, lng: this.content.center.lng })
      },
      zoom() {
        return this.content.zoom;
      }
  },
}

</script>

<style>
  .vue-map-container {
    width: 100%;
    height: 100%;
  }
  @media(max-width: 720px){
    .vue-map-container{
      height: 250px;
    }
  }
</style>