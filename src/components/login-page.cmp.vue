<template>
  <section v-if="showLogin" class="modal-wrapper animate_animated" @click.capture="closeLogin">
      <div class="content-wrapper flex column justify-center">
          <button class="exit-btn" @click="closeLogin"> <i class="fas fa-times"></i> </button>
          <h2> <i class="fas" :class="iconClass"></i> {{ isLogin ? 'Login' : 'Sign up' }} </h2>
          <label v-if="!isLogin"> <span :class="{floating3: float3}"> Full Name </span> <input @focus="float3 = true" type="text" v-model="userCreds.fullname"> </label>
          <label> <span :class="{floating: float}"> Email </span> <input @focus="float = true" type="email" v-model="userCreds.email"> </label>
          <label> <span :class="{floating2: float2}"> Password </span> <input @focus="float2 = true" type="password" v-model="userCreds.password"> </label>
          <button class="login-btn" @click="signInUp"> {{ isLogin ? 'Login' : 'Sign up' }} </button>
          <p v-if="isLogin" @click="toggleLogin"> Don't have an account? <span> Sign Up! </span> </p>
          <p v-else @click="toggleLogin"> Already have an account? <span> Sign in! </span> </p>
      </div>
  </section>
</template>

<script>
import { userService } from '@/services/user.service.js';

export default {
    name: 'login-page',
    data() {
        return {
            float: false,
            float2: false,
            float3: false,
            isLogin: true,
            userCreds: null,
        }
    },
    computed: {
        showLogin() {
            return this.$store.getters.showLogin
        },
        iconClass() {
            return (this.isLogin) ? 'fa-user' : 'fa-user-plus'
        }
    },
    methods: {
        toggleLogin() {
            this.isLogin = !this.isLogin
            this.float = this.float2 = this.float3 = false;
            this.userCreds = userService.getEmptyUser(); 
        },
        closeLogin() {
            this.$store.commit({type: 'setShowLogin', showLogin: false})
        },
        async signInUp() {
            var type;
            if (this.isLogin) {
                delete this.userCreds.fullName
                type = 'login'
            } else type = 'signup'
            const user = await this.$store.dispatch({type , userCred: this.userCreds})
            if (user)  this.$store.commit({type: 'setShowLogin', showLogin: false})
        }
    },
    created() {
        this.userCreds = userService.getEmptyUser(); 
    }
}
</script>