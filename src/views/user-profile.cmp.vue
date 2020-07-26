<template>
  <section v-if="loggedInUser" class="user-profile templates-page">
      <nav-bar />
      <h1> Welcome back, {{ loggedInUser.fullname }} </h1>
      <div class="templates-preview">
      <div class="templates-header flex space-between align-center">
        <div class="left-side flex column">
          <h2> My Sites </h2>
          <p> You can edit your created sites or make a new one. </p>
        </div>
        <div class="right-side">
          <button @click="editTemplate('5f1b0b822e78d49fde61fe1e')"> Create new site </button>
        </div>
      </div>
      <img class="loader" v-if="isLoading" src="../assets/loadingAnimation.svg" />
      <section v-else class="template-list">
        <div class="template-preview" v-for="template in templatesToShow" :key="template._id" @click="editTemplate(template._id)">
          <h3> {{ template.name }} </h3>
          <img :src="template.previewImg" />
          <div class="template-cover">
            <button title="Preview Site" @click.stop="$router.push('/' + template._id)"> <i class="far fa-eye"></i> </button>
            <button title="Edit Site"> <i class="fas fa-pen"></i> </button>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import navBar from '@/components/nav-bar.cmp.vue';

export default {
    name: 'user-profile',
    data() {
        return {
          templatesToShow: null
        };
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedInUser    
        },
        isLoading() {
            return this.$store.getters.isLoading;
        }
    },
    methods: {
        editTemplate(id) {
          this.$router.push(`/editor/${id}`);
        }
    },
    async created() {
        if (!this.loggedInUser) this.$router.push('/');
        const templates = await this.$store.dispatch({ type: 'loadTemplates' });
        this.templatesToShow = templates.filter(template => template.createdBy && template.createdBy.email === this.loggedInUser.email)
    },
    watch: {
        'loggedInUser'(newVal, oldVal) {
            if (!newVal) this.$router.push('/')
        }
    },
    components: {
        navBar
    },
}
</script>