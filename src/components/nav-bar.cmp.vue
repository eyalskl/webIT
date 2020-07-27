<template>
  <nav class="nav-bar flex space-between align-center">
    <div class="logo flex" @click.stop="$router.push('/').catch(() => {})">
      <h2>web<span>IT</span></h2>
    </div>
    <div class="main-nav flex align-center">
      <router-link to="/">Home</router-link>
      <router-link to="/templates">Templates</router-link>
      <button class="publish" @click="saveSite">Save</button>
      <button class="publish" @click="openPublish">Publish</button>
      <div class="user-section">
        <button @click="openLogin">
          {{ this.loggedInUser ? 'Logout' : 'Login' }}
        </button>
        <avatar
          title="Open profile"
          v-if="loggedInUser"
          :size="35"
          :username="loggedInUser.fullname"
          @click.native="$router.push('/user').catch(() => {})"
        >
        </avatar>
      </div>
    </div>
    <button class="btn-menu" @click="toggleMenu">☰</button>
  </nav>
</template>

<script>
import Avatar from 'vue-avatar';
import domtoimage from 'dom-to-image';
import { eventBus, SHOW_MSG } from "@/services/event-bus.service.js";

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
    },
  },
  methods: {
    async saveSite() {
      const savedSite = await this.$store.dispatch({type: 'saveSite'});
      if (savedSite) eventBus.$emit(SHOW_MSG, { txt: `Site saved successfully!` ,type: 'success'})
    },
    openLogin() {
      if (!this.loggedInUser)
        this.$store.commit({ type: 'setShowLogin', showLogin: true });
      else {
        this.$store.dispatch({ type: 'logout' });
      }
    },
    openPublish() {
      this.$store.commit({ type: 'setShowPublish', showPublish: true });
    },
    toggleMenu() {
      document.body.classList.toggle('menu-open');
    },
  },
  created() {
    this.siteId = this.$route.params.id;
  },
  components: {
    Avatar,
  },
};
</script>

<style>
</style>