<template>
  <section class="templates-page">
    <nav-bar />
    <div class="templates-preview">
      <h2>Our Templates</h2>
      <img
        v-if="isLoading"
        src="https://i.pinimg.com/originals/58/4b/60/584b607f5c2ff075429dc0e7b8d142ef.gif"
        alt="Loading..."
      />
      <section v-else class="template-list">
        <div v-for="template in templates" :key="template._id" @click="editTemplate(template._id)">
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
    return {};
  },
  computed: {
    templates() {
      return this.$store.getters.templates;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    }
  },
  created() {
    this.$store.dispatch({ type: 'loadTemplates' });
    this.$store.commit({ type: 'setSite', site: {} });
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
