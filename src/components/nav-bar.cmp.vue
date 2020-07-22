<template>
  <nav class="nav-bar flex space-between align-center">
    <div class="logo flex" @click="$router.push('/')">
      <h2>web<span>IT</span></h2>
    </div>
    <div class="main-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/templates">Templates</router-link>
      <router-link to="/about">About</router-link>
      <router-link class="publish" :to="'/' + siteId">Publish</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  data() {
    return {
      siteId: '',
    }
  },
  created() {
    this.siteId = this.$route.params.id;
  },
}
</script>

<style>

</style>