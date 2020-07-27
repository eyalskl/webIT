<template>
  <section class="templates-page">
    <nav-bar />
    <div class="templates-preview">
      <div class="templates-header flex space-between align-center">
        <div class="left-side flex column">
          <h2> Our Sites </h2>
          <p> Select a site to edit or preview it's content. </p>
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
  name: 'templates-page',
  data() {
    return {
      templatesToShow: null
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    }
  },
  async created() {
    const templates = await this.$store.dispatch({ type: 'loadTemplates' });
    this.templatesToShow = templates.filter(template => template._id !== '5f1b0b822e78d49fde61fe1e' && !template.createdBy)
    this.$store.commit({ type: 'setSite', site: null });
  },
  methods: {
    editTemplate(id) {
      this.$router.push(`/editor/${id}`);
    }
  },
  components: {
    navBar
  }
};
</script>
