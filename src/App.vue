<template>
  <div class="main-app">
    <login-page />
    <router-view />
  </div>
</template>

<script>
import loginPage from '@/components/login-page.cmp'

export default {
  name: 'main-app',
  components: {
    loginPage
  }
};
</script>
