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
      <section class="overview">
        <section class="responsive">
          <img src="../assets/imgs/iphone.png"/>
          <h3>
            Build Responsive Webpages
          </h3>
        </section>
        
        <section class="easy-to-use">
          <h3>
            Simple and Easy to Use
          </h3>
          <img src="../assets/imgs/easyUse.png"/>
        </section>

        <section class="beautiful">
        </section>

      </section>
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
