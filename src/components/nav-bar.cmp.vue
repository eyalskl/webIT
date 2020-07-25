<template>
  <nav class="nav-bar flex space-between align-center">
    <div class="logo flex" @click.stop="$router.push('/').catch(()=>{})">
      <h2>web<span>IT</span></h2>
    </div>
    <div class="main-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/templates">Templates</router-link>
      <div class="user-section">
        <button @click="openLogin"> {{ (this.loggedInUser) ? 'Logout' : 'Login' }} </button>
        <avatar v-if="loggedInUser" :size="35" :username="loggedInUser.fullname" @click.native="$router.push('/user').catch(()=>{})"> </avatar>
      </div>
      <button class="publish" @click="saveSite">Save</button>
      <router-link class="publish" :to="'/' + siteId">Publish</router-link>
    </div>
  </nav>
</template>

<script>
import Avatar from 'vue-avatar'

export default {
  name: 'nav-bar',
  data() {
    return {
      siteId: '',
    };
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    }
  },
  methods: {
    saveSite() {
      this.$store.dispatch({type: 'saveSite'});
    },
    openLogin() {
      if (!this.loggedInUser) this.$store.commit({type: 'setShowLogin', showLogin: true});
      else {
        this.$store.dispatch({type: 'logout'})
      }
    }
    },
  created() {
    this.siteId = this.$route.params.id;
  },
  components: {
    Avatar
  }
};
</script>

<style>
</style>