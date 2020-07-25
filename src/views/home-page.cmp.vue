<template>
  <div class="home-page">
    <nav-bar />
      <div class="hero">
        <div class="text-container flex column justify-center align-center">
          <h1 class="tc-header">Create a Website You’re Proud Of, Simply.</h1>
          <button @click.stop="$router.push('/templates')" class="start-btn text-box btn btn-white btn-animate" >
             Build your website
          </button>
        </div>
      </div>
  </div>
</template>

<script>
import navBar from '@/components/nav-bar.cmp.vue';

export default {
  name: 'home-page',
  components: {
    navBar
  }
}


</script>
