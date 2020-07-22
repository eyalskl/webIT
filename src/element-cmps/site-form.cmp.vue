<template>
  <form :style="cmp.style" @submit.prevent>
      <label v-for="(item,idx) in content" :key="idx" contenteditable="true" @click.prevent>{{item.tag}}
      <input :type="item.type" :style="item.style"/>
      </label>
      <label for="txt-area">Add Something
      <textarea  id="txt-area" cols="24" rows="7"></textarea>
      <button :style="cmp.btnStyle">Submit</button>
      </label>
  </form>
</template>

<script>


export default {
  name: 'site-text',
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

