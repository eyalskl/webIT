<template>
  <section>
    <GmapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>

  </section>
</template>

<script>
export default {
  name:'google-map',
  data() {
    return {
      markers: [
        { position: { lat: 32.085300, lng: 34.781769 } },
      ],
      center: { lat: 32.085300, lng: 34.781769 }
    };
  },
  methods: {
      setTelAviv() {
          this.center = { lat: 32.085300, lng: 34.781769 }
      },
  }
};
</script>

<style>
  .vue-map-container {
    width: 100%;
    height: 100%;
  }


</style>