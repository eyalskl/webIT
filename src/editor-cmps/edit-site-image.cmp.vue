<template>
  <div class="edit-site-image">
    <h3> Image Editor </h3>
    <section class="edit-image flex column">
      <label class="img-upload flex column" v-if="!isUploading">
        <img :src="cmp.content">
        <p> 
          <i class="fas fa-upload"> </i> Upload Your Own 
        </p>
        <input type="file" @change="onUploadImg" />
      </label>
      <img v-else class="uploading" src="https://i.pinimg.com/originals/3d/1b/73/3d1b739fb2546948f207d2be7ae1b105.gif" alt="Uploading Image..."/>
      <div class="border-edit flex column align-center">
          <label> Round Edges </label>
          <el-slider @input="setBorderRadius" v-model="borderRadius" :max="200"> </el-slider>
      </div>
      <section class="search-section">
        <div class="search-img">
          <div class="input-container">
            <input type="text" @keydown.enter="searchImgs" v-model="keyword"> 
            <button @click.stop="searchImgs"> <i class="fas fa-search"></i> </button>
          </div>
          <div v-if="imgs" class="images-display">
            <div v-for="(img, idx) in imgs" :key="idx" >
              <img :src="img.urls.thumb" @click="setImgSrc(idx)">
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import { uploadImg } from '@/services/img-upload.service.js'
import { searchImgService } from '@/services/search-img.service.js'
import { eventBus, UPDATE_SITE } from "@/services/event-bus.service.js";

export default {
  name: 'edit-site-image',
  props: ['cmp'],
  data() {
    return {
      isUploading: false,
      borderRadius: 0,
      keyword: 'nature',
      imgs: null,
    };
  },
  methods: {
    async onUploadImg(ev) {
      this.isUploading = true;
      let res = uploadImg(ev);
      let img = await res;
      this.cmp.content = img.url;
      this.isUploading = false;
    },
    setBorderRadius(radius) {
      this.borderRadius = radius;
      this.cmp.style.borderRadius = radius + 'px';
      eventBus.$emit(UPDATE_SITE);
    },
    async searchImgs() {
      if (!this.keyword) return
      const imgs = await searchImgService.getImages(this.keyword)
      this.imgs = imgs.results
    },
    setImgSrc(idx) {
      this.cmp.content = this.imgs[idx].urls.small;
      eventBus.$emit(UPDATE_SITE);
    }
  },
  async created() {
      this.borderRadius = (this.cmp.style.borderRadius) ? parseInt(this.cmp.style.borderRadius) : 0;
      if (this.imgs) return
      const imgs = await searchImgService.getImages(this.keyword)
      this.imgs = imgs.results
  },
  watch: {
    cmp: {
      deep: true,
      handler(newVal , oldVal) {
        this.borderRadius = (newVal.style.borderRadius) ? parseInt(newVal.style.borderRadius) : 0;
      }
    }
  }
};
</script>