<template>
  <div class="main-app">
    <div class="screen" @click.stop="toggleMenu"></div>
    <login-page />
    <router-view />
  </div>
</template>

<script>
import loginPage from '@/components/login-page.cmp'

export default {
  name: 'main-app',
  methods: {
    toggleMenu() {
      document.body.classList.toggle("menu-open");
    }
  },
  components: {
    loginPage
  }
};
</script>
