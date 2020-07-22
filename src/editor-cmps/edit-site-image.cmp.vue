<template>
  <div class="edit-site-image">
    <h3> Image Editor </h3>
    <label class="img-upload flex column" v-if="!isUploading">
    <img :src="cmp.content">
     <p> <i class="fas fa-upload"></i> Upload Your Own </p>
    <input type="file" @change="onUploadImg" />
    </label>
    <img
      class="uploading"
      v-else
      src="https://i.pinimg.com/originals/3d/1b/73/3d1b739fb2546948f207d2be7ae1b105.gif"
      alt="Uploading Image..."
    />
  </div>
</template>

<script>
import { uploadImg } from '@/services/img-upload.service.js'

export default {
  name: 'edit-site-image',
  props: ['cmp'],
  data() {
    return {
      isUploading: false
    };
  },
  methods: {
    async onUploadImg(ev) {
      this.isUploading = true;
      let res = uploadImg(ev);
      let img = await res;
      console.log(img.url);
      this.cmp.content = img.url;
      this.isUploading = false;
      console.log(this.cmp);
    }
  }
};
</script>