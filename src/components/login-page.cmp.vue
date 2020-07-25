<template>
  <section class="model-wrapper">
      <div class="content-wrapper">

      </div>
  </section>
</template>

<script>
export default {
    name: 'login-page',
    data() {
        return {
            
        }
    },
    computed: {
        showLogin() {
            return this.$store.getter.showLogin
        }
    },
}
</script>

<style>

</style>