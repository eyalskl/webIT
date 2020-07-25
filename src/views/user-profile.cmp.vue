<template>
  <section v-if="loggedInUser" class="user-profile">
      <nav-bar />
      <h1> Hey, {{ loggedInUser.fullname }} </h1>
  </section>
</template>

<script>
import navBar from '@/components/nav-bar.cmp.vue';

export default {
    name: 'user-profile',
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedInUser    
        }
    },
    components: {
        navBar
    },
    created() {
        if (!this.loggedInUser) this.$router.push('/');
    },
    watch: {
        'loggedInUser'(newVal, oldVal) {
            if (!newVal) this.$router.push('/')
        }
    },
}
</script>

<style>

</style>