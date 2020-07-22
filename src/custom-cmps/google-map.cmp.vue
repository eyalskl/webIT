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
        { position: { lat: 48.856613, lng: 2.352222 } },
        { position: { lat: 52.520008, lng: 13.404954 } }
      ],
      center: { lat: 32.085300, lng: 34.781769 }
    };
  },
  methods: {
      setParis() {
          this.center = { lat: 48.856613, lng: 2.352222 }
      },
      setBerlin() {
          this.center = { lat: 52.520008, lng: 13.404954 }
      },
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