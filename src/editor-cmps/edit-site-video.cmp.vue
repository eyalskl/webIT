<template>
  <div class="edit-site-video">
    <h3 class="flex align-center justify-center"> Video Editor 
        <i class="fab fa-youtube" style="color:red"></i>
         </h3>
    <section class="edit-video">
            <p>
        Please Enter a Youtube Link... 
        </p>
        <label>
        <input @keydown.enter="changeUrl" v-model="url" type="text">
        <button @click.stop="changeUrl"><i class="fas fa-search"></i></button>
        </label>
         <iframe width="100%" height="100%" :src="formattedUrl" frameborder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>  
  </div>
</template>

<script>

export default {
  name: 'edit-site-video',
  props: ['cmp'],
  data() {
    return {
        url: this.cmp.content || ''
    };
  },
  computed:{
              formattedUrl(){
            return this.cmp.content.replace('watch?v=' , 'embed/')
		},
  },
  methods: {
    changeUrl(){
        this.cmp.content = this.url
    }
    },
    created(){
        this.url = this.cmp.content
    }
  }

</script>