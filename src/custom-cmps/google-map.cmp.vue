<template>
  <section>
    <GmapMap
      :center="center"
      :zoom="zoom"
      map-type-id="terrain"
    >
      <GmapMarker
        :position="center"
        :clickable="true"
        :draggable="true"
        @click="center = center"
      />
    </GmapMap>

  </section>
</template>

<script>
export default {
  name: 'google-map',
  props: ['content'],
  computed: {
      center() {
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
</style>