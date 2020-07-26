<template>
    <section class="name-popup modal-wrapper">
      <div class="content-wrapper flex column justify-center animate__animated animate__zoomIn">
            <h2> Hey, Welcome to webIT! <br /> We are exciting to meet you! </h2>
            <span> Let's start building your awasome new Website. <br />
             What is your site's name? </span>
            <label> 
              <span :class="{floating: float}"> Your site name goes here... </span> 
              <input @focus="float = true" type="email" v-model="siteName"> 
            </label>
          <button class="login-btn" @click="setSiteName"> Start! </button>
      </div>
  </section>
</template>

<script>
export default {
    name: 'name-popup',
    data() {
        return {
            siteName: '',
            float: false
        }
    },
    methods: {
        setSiteName() {
            if (!this.siteName) return
            this.$emit('set-name', this.siteName)            
            this.closePopup();
        },
        closePopup() {
            this.$emit('close-popup');
        }
    },
    destroyed() {
        this.float = false
    },
}
</script>