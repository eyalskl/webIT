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
        <div v-for="template in templatesToShow" :key="template._id" @click="editTemplate(template._id)">
          <img :src="template.previewImg" />
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
    this.templatesToShow = templates.filter(template => !template.createdBy)
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
