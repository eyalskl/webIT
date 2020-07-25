<template>
  <div class="edit-site-section">
    <h3> Section Editor </h3>
    <section class="edit-section flex column">
      <div v-if="cmp.type  === 'site-div'" class="border-edit flex column align-center">
            <label> Round Edges </label>
            <el-slider @input="setBorderRadius" v-model="borderRadius" :max="200"></el-slider>
      </div>
      <p class="first-p"> Set a Background Color </p>
      <color-picker @input="setBgc"/>
      <div class="edit-image">
        <p>  </p>
        <label class="img-upload flex column" v-if="!isUploading">
          <div ref="bgcPreview" class="img-preview" :style="{backgroundColor: this.cmp.style.backgroundColor, background: cmp.style.background}"></div>
          <p>
            Or upload an image <i class="fas fa-upload"></i>
          </p>
          <input type="file" @change="onUploadImg" />
        </label>
        <img
          class="uploading"
          v-else
          src="https://i.pinimg.com/originals/3d/1b/73/3d1b739fb2546948f207d2be7ae1b105.gif"
          alt="Uploading Image..."
        />
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
import colorPicker from '@/custom-cmps/color-picker.cmp';
import { uploadImg } from '@/services/img-upload.service.js';
import { eventBus, UPDATE_SITE } from '@/services/event-bus.service.js';
import { searchImgService } from '@/services/search-img.service.js'

export default {
  name: 'edit-site-section',
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
    setBgc(bgc) {
      this.cmp.style.background = bgc;
      this.$refs.bgcPreview.style.background = bgc;
      eventBus.$emit(UPDATE_SITE);
    },
    async onUploadImg(ev) {
      this.isUploading = true;
      let res = uploadImg(ev);
      let img = await res;
      this.cmp.style.background = `url(${img.url}) no-repeat center center scroll`;
      this.isUploading = false;
      eventBus.$emit(UPDATE_SITE);
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
      const imgUrl = this.imgs[idx].urls.full;
      this.cmp.style.background = `url(${imgUrl}) no-repeat center center / cover scroll`;
      // this.cmp.style.backgroundSize = 'cover'
      eventBus.$emit(UPDATE_SITE);
    }
  },
  async created() {
      this.bgc = this.cmp.style.backgroundColor
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
    },
  },
  components: {
    colorPicker
  }
};
</script>