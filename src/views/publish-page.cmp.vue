<template>
  <section v-if="siteToEdit" class="publish-page">
    <component v-for="(cmp, idx) in siteToEdit.cmps" :is="cmp.type" :cmp="cmp" :key="idx"> </component>
  </section>
</template>

<script>
import siteWorkspace from '@/components/site-workspace.cmp';
import siteSection from '@/element-cmps/site-section.cmp.vue';

export default {
  name: 'publish-page',
  computed: {
    siteToEdit() {
      return this.$store.getters.site;
    }
  },
  methods: {
    async loadSite() {
      const site = await this.$store.dispatch({
        type: 'loadSite',
        id: this.$route.params.id
      });
    }
  },
  async created() {
    await this.$store.commit({type: 'setEditMode', editMode: false});
    this.loadSite();
    // setInterval(() => {
    //   document.querySelectorAll('.site-div').forEach(div => div.classList.remove('smooth-dnd-draggable-wrapper'));
    //   console.clear();
    // }, 10);
  },
  watch: {
    '$route.params.id'() {
      this.loadSite();
    }
  },
  mounted() {
    // document.querySelectorAll('.site-div').forEach(div => div.classList.remove('smooth-dnd-draggable-wrapper'));
  },
  components: {
    siteWorkspace,
    siteSection
  },
};
</script>

<style>
</style>