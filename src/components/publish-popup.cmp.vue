<template>
  <section v-if="showPublish" class="publish-popup" @click.capture="closePublish">
      <div class="content-wrapper flex column justify-center align-center">
            <h3> 
             Your Website Link :
            </h3>
            <div class="publish-input-container flex">
                <input type="text" v-model="siteUrl"/>
                <button class="publish-btn" @click="copyToClip"> 
                    <img src="https://img.icons8.com/cotton/64/000000/copy--v1.png"/>
                </button>
            </div>
            <div class="publish-controls flex space-around">
                <button>
                    <i class="fab fa-whatsapp-square"></i>
                </button>
                <button>
                    <i class="fab fa-facebook-square"></i>
                </button>
                <button class="exit-btn" @click="closePublish"> <i class="fas fa-times"></i> </button>
            </div>
      </div>
  </section>
</template>

<script>

export default {
    name: 'publish-popup',
    data() {
        return {
            siteUrl:""
        }
    },
    computed: {
        showPublish() {
            return this.$store.getters.showPublish
        },
     
    },
    methods: {
        closePublish(ev) {
            if (ev.target.nodeName === 'SECTION' || ev.target.classList.contains('fa-times') || ev.target.classList.contains('exit-btn')) this.$store.commit({type: 'setShowPublish', showPublish: false})
        },
        copyToClip(){
            console.log('hello')
        }
    },
    created() {
        this.siteUrl = window.location.origin + '/#/' + this.$route.params.id
    }
}
</script>