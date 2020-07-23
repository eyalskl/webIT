<template>
  <form class="site-form" :style="cmp.style" @submit.prevent>
      <label class="input-container" v-for="(item,idx) in content" :key="idx" contenteditable="true" @click.prevent>{{item.tag}}
      <input :type="item.type" :style="item.style"/>
      </label>
  </form>
</template>

<script>


export default {
  name: 'site-form',
  props: ['cmp'],
  data() {
    return {
      content: ''
    };
  },
  created() {
    this.content = this.cmp.content;
  },
  methods: {
    onEdit(ev) {
      var txt = ev.target.innerText;
      this.content = txt;
    },
    endEdit() {
      this.$store.dispatch({ type: 'saveSite', content: this.content });
      this.$el.blur();
    },
  }
};
</script>

