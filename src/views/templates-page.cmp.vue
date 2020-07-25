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
          <button> Create new site </button>
        </div>
      </div>
      <img v-if="isLoading" src="https://i.pinimg.com/originals/58/4b/60/584b607f5c2ff075429dc0e7b8d142ef.gif" />
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
